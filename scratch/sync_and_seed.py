import shutil
import urllib.request
import json
import os

src = r"c:\Users\sahas\Downloads\LandingPage-master\LandingPage-master\wordpress\kateringking-cms"
dst = r"C:\Users\sahas\Studio\kateringking\wp-content\plugins\kateringking-cms"

print("1. Syncing plugin files to Studio...")
shutil.copytree(src, dst, dirs_exist_ok=True)
print("Plugin synced successfully.")

print("2. Calling /seed endpoint to populate database...")
try:
    req = urllib.request.Request("http://localhost:8881/wp-json/kateringking/v1/seed")
    with urllib.request.urlopen(req, timeout=15) as resp:
        print("Seed response code:", resp.status)
        data = json.loads(resp.read().decode())
        print("Seed result:", data)
except Exception as e:
    print("Seed trigger error:", e)

print("\n3. Testing REST API endpoints:")
endpoints = [
    "/hero",
    "/trust-stats",
    "/production-metrics",
    "/packages",
    "/gallery",
    "/event-reels",
    "/testimonials",
    "/faqs",
    "/services",
    "/custom-features",
    "/reel-highlights",
    "/form-options"
]

for ep in endpoints:
    url = f"http://localhost:8881/wp-json/kateringking/v1{ep}"
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode())
            count = len(data) if isinstance(data, list) else len(data.keys())
            print(f"  ✓ {ep:20} -> Status 200 (Returned {count} items/keys)")
    except Exception as e:
        print(f"  ✗ {ep:20} -> Error: {e}")
