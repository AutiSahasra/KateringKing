$ErrorActionPreference = "Stop"

$workspaceRoot = "c:\Users\sahas\Downloads\LandingPage-master\LandingPage-master"
$studioSitePath = "C:\Users\sahas\Studio\kateringking"
$pluginsDir = Join-Path $studioSitePath "wp-content\plugins"

Write-Host "1. Verifying Studio path: $studioSitePath"
if (-not (Test-Path $studioSitePath)) {
    Write-Error "Site path $studioSitePath not found!"
}

# 1. Copy KateringKing CMS plugin
$srcPlugin = Join-Path $workspaceRoot "wordpress\kateringking-cms"
$destPlugin = Join-Path $pluginsDir "kateringking-cms"
Write-Host "2. Copying KateringKing CMS plugin to $destPlugin..."
if (Test-Path $destPlugin) {
    Remove-Item -Recurse -Force $destPlugin
}
Copy-Item -Recurse -Force -Path $srcPlugin -Destination $destPlugin
Write-Host "KateringKing CMS plugin copied successfully."

# 2. Download and extract Advanced Custom Fields (ACF)
$acfDir = Join-Path $pluginsDir "advanced-custom-fields"
if (-not (Test-Path $acfDir)) {
    Write-Host "3. Downloading Advanced Custom Fields (ACF)..."
    $acfZip = Join-Path $pluginsDir "acf.zip"
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -Uri "https://downloads.wordpress.org/plugin/advanced-custom-fields.6.3.12.zip" -OutFile $acfZip
    Write-Host "Extracting ACF..."
    Expand-Archive -Path $acfZip -DestinationPath $pluginsDir -Force
    Remove-Item -Force $acfZip
    Write-Host "ACF installed successfully."
} else {
    Write-Host "3. ACF already present in $acfDir."
}

# 3. Check what plugins are installed
Write-Host "4. Current plugins installed in Studio:"
Get-ChildItem -Path $pluginsDir | Select-Object Name

# 4. Check wp-config.php or database type
$wpConfig = Join-Path $studioSitePath "wp-config.php"
if (Test-Path $wpConfig) {
    Write-Host "5. Found wp-config.php."
    Get-Content $wpConfig | Select-String -Pattern "DB_NAME|DB_USER|table_prefix|SQLITE" | Select-Object -First 10
}

# 5. Check Studio settings / port if available
$studioGlobal = "C:\Users\sahas\AppData\Roaming\Studio"
if (Test-Path $studioGlobal) {
    Get-ChildItem -Path $studioGlobal -Recurse -Filter "*.json" -ErrorAction SilentlyContinue | Select-Object FullName
}
