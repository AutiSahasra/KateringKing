import sqlite3

# PHP serialized array for:
# array(
#   0 => 'advanced-custom-fields/acf.php',
#   1 => 'kateringking-cms/kateringking-cms.php'
# )
# In PHP serialize format:
# a:2:{i:0;s:31:"advanced-custom-fields/acf.php";i:1;s:37:"kateringking-cms/kateringking-cms.php";}

plugins = [
    "advanced-custom-fields/acf.php",
    "kateringking-cms/kateringking-cms.php"
]

serialized = f'a:{len(plugins)}:{{'
for i, p in enumerate(plugins):
    serialized += f'i:{i};s:{len(p)}:"{p}";'
serialized += '}'

print("Serialized string to set:", serialized)

db_path = r'C:\Users\sahas\Studio\kateringking\wp-content\database\.ht.sqlite'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

cur.execute("SELECT option_value FROM wp_options WHERE option_name = 'active_plugins'")
row = cur.fetchone()
print("Previous active_plugins:", row)

cur.execute("UPDATE wp_options SET option_value = ? WHERE option_name = 'active_plugins'", (serialized,))
conn.commit()

cur.execute("SELECT option_value FROM wp_options WHERE option_name = 'active_plugins'")
row = cur.fetchone()
print("Updated active_plugins:", row)

conn.close()
print("Successfully activated plugins in database!")
