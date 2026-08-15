#requires -Version 5
<#
  One-command deploy of the committed code to the Oracle Cloud VM.

  The org disables GitHub deploy keys, so the server cannot `git pull`. This
  packages the committed HEAD, uploads it plus the local .env, then rebuilds
  and restarts the app on the VM (via scripts/deploy/deploy.sh).

  Usage (from the repo root, after committing your changes):
      ./scripts/deploy/push.ps1
#>
$ErrorActionPreference = 'Stop'

$Key = "$HOME\.ssh\ssh-key-2026-08-06.key"
$Vm  = 'opc@82.70.60.120'
$Tar = "$env:TEMP\optitech.tar.gz"

Write-Host '==> Packaging committed code (git archive HEAD)...'
git archive --format=tar.gz -o $Tar HEAD

Write-Host '==> Uploading code + .env to the VM...'
scp -i $Key $Tar '.\.env' "${Vm}:~/"

Write-Host '==> Extracting, rebuilding and restarting on the VM...'
$remote = @'
set -e
sudo mkdir -p /opt/optitech && sudo chown opc:opc /opt/optitech
tar -xzf ~/optitech.tar.gz -C /opt/optitech --overwrite
mv -f ~/.env /opt/optitech/.env
bash /opt/optitech/scripts/deploy/deploy.sh
'@
ssh -i $Key $Vm $remote

Write-Host '==> Done. Live at https://optitech-sverige.se'
