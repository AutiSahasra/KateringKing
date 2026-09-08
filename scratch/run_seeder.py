import shutil
import urllib.request
import json
import time

src = r"c:\Users\sahas\Downloads\LandingPage-master\LandingPage-master\scratch\seed-runner.php"
dst = r"C:\Users\sahas\Studio\kateringking\seed-runner.php"

shutil.copyfile(src, dst)
print("Copied seed-runner.php successfully.")

time.sleep(1)

print("Requesting seed-runner.php from WordPress Studio...")
req = urllib.request.Request("http://localhost:8881/seed-runner.php")
with urllib.request.urlopen(req, timeout=60) as resp:
    print("HTTP Status:", resp.status)
    content = resp.read().decode('utf-8')
    print("Response:", content)
