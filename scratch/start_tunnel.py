import subprocess
import re
import sys
import os
import time

cloudflared = r"c:\Users\sahas\Downloads\LandingPage-master\LandingPage-master\scratch\cloudflared.exe"
log_file = r"c:\Users\sahas\Downloads\LandingPage-master\LandingPage-master\scratch\tunnel.log"
url_file = r"c:\Users\sahas\Downloads\LandingPage-master\LandingPage-master\scratch\tunnel_url.txt"

print("Starting Cloudflare Tunnel to http://localhost:8881...", flush=True)

with open(log_file, "w") as out:
    proc = subprocess.Popen(
        [cloudflared, "tunnel", "--url", "http://localhost:8881"],
        stdout=out,
        stderr=subprocess.STDOUT,
        text=True
    )

# Wait and search for the trycloudflare.com URL
tunnel_url = None
for _ in range(30):
    time.sleep(1)
    if os.path.exists(log_file):
        with open(log_file, "r") as f:
            content = f.read()
            match = re.search(r"https://[a-zA-Z0-9-]+\.trycloudflare\.com", content)
            if match:
                tunnel_url = match.group(0)
                break

if tunnel_url:
    print(f"\n==========================================", flush=True)
    print(f"PUBLIC TUNNEL LIVE AT: {tunnel_url}", flush=True)
    print(f"REST API ENDPOINT: {tunnel_url}/wp-json/kateringking/v1", flush=True)
    print(f"==========================================\n", flush=True)
    with open(url_file, "w") as f:
        f.write(tunnel_url)
    
    # Keep running to hold tunnel open
    try:
        proc.wait()
    except KeyboardInterrupt:
        proc.terminate()
else:
    print("Failed to find tunnel URL in 30 seconds. Log output:", flush=True)
    if os.path.exists(log_file):
        with open(log_file, "r") as f:
            print(f.read())
    proc.terminate()
