#!/usr/bin/env bash
# Update OptiTech on the VM: pull latest, rebuild, restart. Run on the server.
set -euo pipefail

APP_DIR="/opt/optitech"
cd "${APP_DIR}"
git pull --ff-only
npm ci
npm run build
sudo systemctl restart optitech
echo "Deployed $(git rev-parse --short HEAD)"
