#!/usr/bin/env bash
# One-time OptiTech VM bootstrap for Oracle Linux 9 (x86). Idempotent.
#
# The org disables GitHub deploy keys, so code is NOT cloned here. Deliver the
# code from your PC with scripts/deploy/push.ps1 (git archive + scp), which
# uploads to /opt/optitech and runs scripts/deploy/deploy.sh to build + restart.
# This script only prepares the system: Node, firewall, systemd service, Caddy.
set -uo pipefail

APP_DIR="/opt/optitech"
DOMAIN="optitech-sverige.se"
NODE_MAJOR=22

echo "==> Node ${NODE_MAJOR}"
if ! command -v node >/dev/null 2>&1 || [ "$(node -v | cut -c2-3)" != "${NODE_MAJOR}" ]; then
  curl -fsSL "https://rpm.nodesource.com/setup_${NODE_MAJOR}.x" | sudo bash -
  sudo dnf install -y nodejs
fi
node -v

echo "==> Firewall (open 80/443)"
sudo firewall-cmd --permanent --add-service=http --add-service=https >/dev/null 2>&1 || true
sudo firewall-cmd --reload >/dev/null 2>&1 || true

echo "==> systemd service"
sudo mkdir -p "${APP_DIR}"
sudo chown "opc:opc" "${APP_DIR}"
sudo tee /etc/systemd/system/optitech.service >/dev/null <<EOF
[Unit]
Description=OptiTech Next.js
After=network.target

[Service]
Type=simple
User=opc
WorkingDirectory=${APP_DIR}
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/node ${APP_DIR}/node_modules/next/dist/bin/next start -p 3000
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable optitech

echo "==> Caddy (automatic HTTPS)"
if ! command -v caddy >/dev/null 2>&1; then
  sudo dnf install -y 'dnf-command(copr)'
  sudo dnf copr enable -y @caddy/caddy
  sudo dnf install -y caddy
fi
sudo setsebool -P httpd_can_network_connect 1 || true
sudo tee /etc/caddy/Caddyfile >/dev/null <<EOF
${DOMAIN}, www.${DOMAIN} {
    reverse_proxy 127.0.0.1:3000
}
EOF
sudo systemctl enable --now caddy
sudo systemctl restart caddy

echo
echo "System ready. Next:"
echo "  1) From your PC (repo root): ./scripts/deploy/push.ps1   # uploads code + builds + starts"
echo "  2) Open ports 80/443 in the OCI Security List or the instance NSG."
echo "  3) Point Cloudflare A @ and A www to this VM's public IP (grey cloud), SSL Full (strict)."
