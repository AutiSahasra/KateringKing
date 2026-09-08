import urllib.request
import os
import sys

dest = r"c:\Users\sahas\Downloads\LandingPage-master\LandingPage-master\scratch\cloudflared.exe"
url = "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe"

if not os.path.exists(dest) or os.path.getsize(dest) < 1000000:
    print("Downloading cloudflared.exe (~30MB)...")
    opener = urllib.request.build_opener()
    opener.addheaders = [('User-Agent', 'Mozilla/5.0')]
    urllib.request.install_opener(opener)
    urllib.request.urlretrieve(url, dest)

size = os.path.getsize(dest)
print(f"cloudflared.exe is ready! Size: {size / 1024 / 1024:.1f} MB")
