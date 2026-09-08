# 👑 KateringKing Headless CMS (WordPress Plugin)

Headless WordPress backend for the **KateringKing Luxury Catering** website. Enables the client/admin to manage all 14 content sections from the WordPress dashboard, while the React/Vite frontend fetches dynamic data via custom REST API endpoints with graceful offline fallback.

---

## 🌟 Key Features

- **11 Custom Post Types**: Packages, Dishes, Gallery Items, Event Reels, Testimonials, Trust Stats, Production Metrics, FAQs, Service Cards, Custom Features, Reel Highlights.
- **1 Custom Taxonomy**: `gallery_category` with terms (Weddings, Food, Setups, Corporate, Live Counters, Team, Behind the Scenes).
- **14 Custom REST Endpoints**: High-performance JSON responses under `/wp-json/kateringking/v1/` matching React's data shapes 100%.
- **Zero License Cost**: Built entirely for **ACF Free** (no ACF Pro required). Complex repeatable data like dishes are handled via parent-child Custom Post Types.
- **Automated WebP Optimization**: Automatically converts uploaded JPG/PNG images to modern WebP with responsive thumbnails.
- **One-Click Content Seeder**: Pre-populates all 60+ dishes, 5 packages, 16 gallery photos, reels, testimonials, and global site settings directly into WordPress.
- **Full CORS Support**: Pre-configured for local development (`localhost:5173`) and production domains.

---

## 🚀 Setup Guide with Local by Flywheel (Step-by-Step)

If you are new to WordPress, **Local by Flywheel** is the simplest and cleanest way to run WordPress on Windows:

### Step 1: Download & Install Local by Flywheel
1. Go to [https://localwp.com/](https://localwp.com/) and download the Windows installer.
2. Run the installer and finish setup.

### Step 2: Create Your Local WordPress Site
1. In Local, click **"+ Create a new site"**.
2. Name your site: `kateringking` (this sets the local domain to `http://kateringking.local`).
3. Choose **Preferred** environment (PHP 8.x, Nginx/Apache, MySQL).
4. Create your WordPress admin username and password (e.g., `admin` / `password123`).
5. Click **"Add Site"**. Local will provision your WordPress instance in under a minute!

### Step 3: Symlink or Copy the Plugin
You can link this plugin directly from your workspace into your Local WordPress installation:

**Option A (Symlink via Windows PowerShell as Administrator):**
```powershell
# In PowerShell (Run as Administrator):
New-Item -ItemType Junction -Path "C:\Users\<YourUser>\Local Sites\kateringking\app\public\wp-content\plugins\kateringking-cms" -Target "c:\Users\sahas\Downloads\LandingPage-master\LandingPage-master\wordpress\kateringking-cms"
```

**Option B (Copy folder):**
Copy the `wordpress/kateringking-cms` folder directly into:
`C:\Users\<YourUser>\Local Sites\kateringking\app\public\wp-content\plugins\`

### Step 4: Install ACF (Free)
1. Open your site in Local by Flywheel and click **"WP Admin"**.
2. Log into the WordPress dashboard.
3. Go to **Plugins → Add New**.
4. Search for **"Advanced Custom Fields"** (by WP Engine).
5. Click **Install Now**, then **Activate**.

### Step 5: Activate KateringKing CMS Plugin
1. Go to **Plugins → Installed Plugins**.
2. Find **KateringKing CMS** and click **Activate**.
3. You will now see **KK Settings** with gold crown icon and all 11 Custom Post Types in the WordPress sidebar!

### Step 6: One-Click Content Seeding
1. In the sidebar, click **KK Settings → Content Seeder**.
2. Click **"Seed All Website Content Now"**.
3. All packages, 60+ dishes, gallery items, reels, testimonials, FAQs, and site settings are populated instantly!

---

## 📡 Available REST API Endpoints

All endpoints use the prefix: `http://kateringking.local/wp-json/kateringking/v1`

| Endpoint | Method | Description |
|---|---|---|
| `/site-settings` | GET | Global brand name, phone, WhatsApp, email, address, social handles |
| `/hero` | GET | Hero headlines (normal & gold accent), subheadline, CTA text & link |
| `/trust-stats` | GET | Metric counters (500+ events, 25+ years, 99.8% rating) |
| `/production-metrics` | GET | Central facility, peak capacity, mobile logistics, food safety |
| `/packages` | GET | Packages with nested child dishes array |
| `/gallery` | GET | Categories array + full gallery items array |
| `/event-reels` | GET | Cinematic event reels with video URLs, thumbnails, recap notes |
| `/testimonials` | GET | Client quotes, star ratings, and avatars |
| `/about` | GET | Philosophy heading, description, 3 expertise points, 3 service cards |
| `/faqs` | GET | Frequently asked questions & answers |
| `/menus` | GET | Navigation menu items (Home, Packages, About, Gallery, Reviews, Contact) |
| `/custom-features` | GET | Bespoke tailoring features (Jain kitchens, live counters, etc.) |
| `/reel-highlights` | GET | Behind-the-scenes staging highlights |
| `/form-options` | GET | Dropdown choices for Event Types and Estimated Guest Count |

---

## 💻 Connecting React Frontend

1. Ensure your React `.env.local` contains:
   ```env
   VITE_WP_API_URL=http://kateringking.local/wp-json/kateringking/v1
   ```
2. Start the React dev server:
   ```bash
   npm run dev
   ```
3. The React app will automatically fetch from the WordPress API. If WordPress is ever offline or stopped in Local, the frontend gracefully falls back to `src/data/mockData.js` with zero downtime or console errors!

---

## 📁 Plugin File Architecture

```
wordpress/kateringking-cms/
├── kateringking-cms.php          # Main plugin file (singleton, CORS, asset loading)
├── includes/
│   ├── class-cpt-registrar.php   # 11 Custom Post Types + gallery_category taxonomy
│   ├── class-acf-fields.php      # ACF programmatic field group definitions
│   ├── class-options-page.php    # ACF Options pages for global settings
│   ├── class-rest-api.php        # 14 custom REST API endpoints
│   ├── class-image-optimizer.php # WebP auto-conversion & responsive image logic
│   └── class-seeder.php          # One-click mock data migration tool
├── assets/
│   └── admin.css                 # Custom gold & dark luxury dashboard styling
└── README.md                     # Documentation & setup guide
```
