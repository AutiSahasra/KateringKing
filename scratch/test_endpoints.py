import urllib.request
import json
import sys

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

print("=== VERIFYING CMS REST API RESPONSES ===", flush=True)
for ep in endpoints:
    url = f"http://localhost:8881/wp-json/kateringking/v1{ep}"
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=3) as resp:
            raw = resp.read().decode('utf-8')
            data = json.loads(raw)
            if isinstance(data, list):
                print(f"[OK] {ep:22} -> 200 OK | List with {len(data)} items", flush=True)
            elif isinstance(data, dict):
                print(f"[OK] {ep:22} -> 200 OK | Dict with {len(data.keys())} keys", flush=True)
            else:
                print(f"[OK] {ep:22} -> 200 OK | {type(data)}", flush=True)
    except Exception as e:
        print(f"[ERR] {ep:22} -> Error: {e}", flush=True)
