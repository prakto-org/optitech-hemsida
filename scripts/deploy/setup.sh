#!/usr/bin/env bash
# OptiTech VM bootstrap for Oracle Linux 9 (x86). Idempotent — safe to re-run.
# Usage: bash setup.sh   (run as user "opc" on the VM)
set -euo pipefail

REPO="git@github.com:prakto-org/optitech-hemsida.git"
APP_DIR="/opt/optitech"
DOMAIN="optitech-sverige.se"
NODE_MAJOR=22

echo "==> 1/8 Base packages + Node ${NODE_MAJOR}"
sudo dnf install -y git >/dev/null
if ! command -v node >/dev/null 2>&1 || [ "$(node -v | cut -c2-3)" != "${NODE_MAJOR}" ]; then
  curl -fsSL "https://rpm.nodesource.com/setup_${NODE_MAJOR}.x" | sudo bash -
  sudo dnf install -y nodejs
fi
node -v

echo "==> 2/8 Firewall (open 80/443)"
sudo firewall-cmd --permanent --add-service=http --add-service=https >/dev/null 2>&1 || true
sudo firewall-cmd --reload >/dev/null 2>&1 || true

echo "==> 3/8 GitHub deploy key"
[ -f ~/.ssh/id_ed25519 ] || ssh-keygen -t ed25519 -C "optitech-vm" -f ~/.ssh/id_ed25519 -N ""
AUTH="$(ssh -o StrictHostKeyChecking=accept-new -T git@github.com 2>&1 || true)"
if ! echo "$AUTH" | grep -q "successfully authenticated"; then
  echo
  echo "!!! Add this deploy key to GitHub, then re-run this script:"
  echo "    repo -> Settings -> Deploy keys -> Add deploy key (Read-only is enough)"
  echo "---------------------------------------------------------------"
  cat ~/.ssh/id_ed25519.pub
  echo "---------------------------------------------------------------"
  exit 1
fi

echo "==> 4/8 Clone / update repo"
if [ ! -d "${APP_DIR}/.git" ]; then
  sudo mkdir -p "${APP_DIR}"
  sudo chown "${USER}:${USER}" "${APP_DIR}"
  git clone "${REPO}" "${APP_DIR}"
fi
cd "${APP_DIR}"
git pull --ff-only

echo "==> 5/8 Check .env"
if [ ! -f "${APP_DIR}/.env" ]; then
  echo "!!! .env is missing. From your PC run:"
  echo "    scp -i \$HOME\\.ssh\\ssh-key-2026-08-06.key .env opc@$(curl -s ifconfig.me):${APP_DIR}/.env"
  echo "    ...then re-run this script."
  exit 1
fi
# Force correct production values (build-time inlined; keeps drafts hidden).
sed -i "s#^NEXT_PUBLIC_DEFAULT_SITE_URL=.*#NEXT_PUBLIC_DEFAULT_SITE_URL=https://${DOMAIN}#" .env
grep -q '^NEXT_PUBLIC_VERCEL_ENV=' .env \
  && sed -i 's#^NEXT_PUBLIC_VERCEL_ENV=.*#NEXT_PUBLIC_VERCEL_ENV=production#' .env \
  || echo 'NEXT_PUBLIC_VERCEL_ENV=production' >> .env
grep -q '^VERCEL_ENV=' .env \
  && sed -i 's#^VERCEL_ENV=.*#VERCEL_ENV=production#' .env \
  || echo 'VERCEL_ENV=production' >> .env

echo "==> 6/8 Install deps + build"
npm ci
npm run build

echo "==> 7/8 systemd service"
sudo tee /etc/systemd/system/optitech.service >/dev/null <<EOF
[Unit]
Description=OptiTech Next.js
After=network.target

[Service]
Type=simple
User=${USER}
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
sudo systemctl enable --now optitech
sudo systemctl restart optitech

echo "==> 8/8 Caddy (automatic HTTPS)"
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
echo "DONE."
curl -sS -o /dev/null -w "  local app: %{http_code}\n" "http://127.0.0.1:3000/" || true
echo "  Point Cloudflare A @ and A www to $(curl -s ifconfig.me) (grey cloud); Caddy then issues HTTPS."
