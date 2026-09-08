$studioSitePath = "C:\Users\sahas\Studio\kateringking"
$wpConfig = Join-Path $studioSitePath "wp-config.php"

Write-Host "=== WP-CONFIG DATABASE SETTINGS ==="
Get-Content $wpConfig | Select-String "DB_|table_prefix"

Write-Host "=== CHECKING SQLITE DB ==="
Get-ChildItem -Path "$studioSitePath\wp-content" -Recurse -Filter "*.sqlite*" -ErrorAction SilentlyContinue | Select-Object FullName

Write-Host "=== LISTENING LOCAL PORTS (Node/PHP/Studio) ==="
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -gt 1024 -and $_.LocalAddress -in @("127.0.0.1", "0.0.0.0", "::") } | Select-Object LocalAddress, LocalPort, OwningProcess | Sort-Object LocalPort | Select-Object -First 20

Write-Host "=== STUDIO CONFIG / APPDATA ==="
Get-ChildItem -Path "C:\Users\sahas\AppData\Roaming\Studio" -Recurse -Filter "*.json" -ErrorAction SilentlyContinue | ForEach-Object {
    Write-Host "File: $($_.FullName)"
    Get-Content $_.FullName -Raw | Select-String -Pattern "kateringking|port|url"
}
