Add-Type -AssemblyName System.IO.Compression | Out-Null
function Get-Comp([byte[]]$bytes, [string]$algo) {
  $ms = New-Object System.IO.MemoryStream
  if ($algo -eq 'gzip') {
    $s = New-Object System.IO.Compression.GZipStream($ms, [System.IO.Compression.CompressionLevel]::Optimal, $true)
  } else {
    $s = New-Object System.IO.Compression.BrotliStream($ms, [System.IO.Compression.CompressionLevel]::Optimal, $true)
  }
  $s.Write($bytes, 0, $bytes.Length); $s.Dispose()
  $len = $ms.Length; $ms.Dispose(); return $len
}
$m = Get-Content ".next/server/middleware-manifest.json" -Raw | ConvertFrom-Json
$fn = $m.functions.PSObject.Properties | Where-Object { $_.Name -like "*og*" }
foreach ($p in $fn) {
  "===== $($p.Name) ====="
  $files = @()
  if ($p.Value.files) { $files += $p.Value.files }
  if ($p.Value.wasm) { $files += ($p.Value.wasm | ForEach-Object { $_.filePath }) }
  if ($p.Value.assets) { $files += ($p.Value.assets | ForEach-Object { $_.filePath }) }
  $files = $files | Where-Object { $_ } | Select-Object -Unique
  $rows = @(); $rawT = 0; $gzT = 0; $brT = 0
  foreach ($rel in $files) {
    $full = Join-Path ".next" $rel
    if (-not (Test-Path -LiteralPath $full)) { $full = $rel }
    if (Test-Path -LiteralPath $full) {
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $gz = Get-Comp $bytes 'gzip'; $br = Get-Comp $bytes 'brotli'
      $rawT += $bytes.Length; $gzT += $gz; $brT += $br
      $rows += [pscustomobject]@{ KBraw = [math]::Round($bytes.Length/1KB,1); KBgz = [math]::Round($gz/1KB,1); File = (Split-Path $rel -Leaf) }
    } else {
      $rows += [pscustomobject]@{ KBraw = 0; KBgz = 0; File = "MISSING: $rel" }
    }
  }
  $rows | Sort-Object KBgz -Descending | Select-Object -First 12 | Format-Table -AutoSize | Out-String | Write-Host
  "TOTAL raw={0:N0} KB  gzip={1:N0} KB  brotli={2:N0} KB" -f ($rawT/1KB), ($gzT/1KB), ($brT/1KB)
  ""
}
