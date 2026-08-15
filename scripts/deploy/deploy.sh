#!/usr/bin/env bash
# Rebuild and restart OptiTech from the code currently in /opt/optitech.
# The org disables GitHub deploy keys, so code is delivered via
# scripts/deploy/push.ps1 (git archive + scp), NOT git pull. Run this on the VM
# after the code is in place (push.ps1 calls it automatically).
set -euo pipefail

APP_DIR="/opt/optitech"
DOMAIN="optitech-sverige.se"
cd "${APP_DIR}"

# Normalize + force production env values (build-time inlined; keeps drafts hidden).
sed -i 's/\r$//' .env
sed -i "s#^NEXT_PUBLIC_DEFAULT_SITE_URL=.*#NEXT_PUBLIC_DEFAULT_SITE_URL=https://${DOMAIN}#" .env
grep -q '^NEXT_PUBLIC_VERCEL_ENV=' .env \
  && sed -i 's#^NEXT_PUBLIC_VERCEL_ENV=.*#NEXT_PUBLIC_VERCEL_ENV=production#' .env \
  || echo 'NEXT_PUBLIC_VERCEL_ENV=production' >> .env
grep -q '^VERCEL_ENV=' .env \
  && sed -i 's#^VERCEL_ENV=.*#VERCEL_ENV=production#' .env \
  || echo 'VERCEL_ENV=production' >> .env

npm ci
npm run build
sudo systemctl restart optitech
echo "Deployed and restarted."
