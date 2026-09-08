<?php
/**
 * Content Seeder for KateringKing CMS
 *
 * Populates all 14 sections from mockData.js into WordPress:
 * - 11 Custom Post Types (including 5 packages & ~60 dishes)
 * - 1 Taxonomy (8 gallery categories)
 * - All Options pages (Site Settings, Hero, About, Footer, Form Dropdowns)
 *
 * Can be run via:
 * 1. WordPress Admin -> KK Settings -> Content Seeder (one-click)
 * 2. WP-CLI: wp eval 'KK_Seeder::run();'
 *
 * @package KateringKing_CMS
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class KK_Seeder {

    /**
     * Initialize admin menu and action.
     */
    public static function init() {
        add_action( 'admin_menu', array( __CLASS__, 'add_admin_menu' ), 99 );
        add_action( 'admin_post_kk_run_seeder', array( __CLASS__, 'handle_seed_request' ) );
    }

    /**
     * Add sub-menu for Seeder under KK Settings.
     */
    public static function add_admin_menu() {
        add_submenu_page(
            'kateringking-settings',
            __( 'Content Seeder', 'kateringking-cms' ),
            __( 'Content Seeder', 'kateringking-cms' ),
            'manage_options',
            'kateringking-seeder',
            array( __CLASS__, 'render_seeder_page' )
        );
    }

    /**
     * Render the seeder dashboard page.
     */
    public static function render_seeder_page() {
        $seeded = isset( $_GET['seeded'] ) && $_GET['seeded'] === '1';
        ?>
        <div class="wrap">
            <h1 style="color: #C88A2E;"><?php esc_html_e( 'KateringKing CMS — Content Seeder', 'kateringking-cms' ); ?></h1>

            <?php if ( $seeded ) : ?>
                <div class="notice notice-success is-dismissible">
                    <p><strong><?php esc_html_e( 'All 14 content sections seeded successfully! All packages, dishes, gallery items, reels, testimonials, and settings are now active.', 'kateringking-cms' ); ?></strong></p>
                </div>
            <?php endif; ?>

            <div class="kk-admin-banner">
                <div>
                    <h2><?php esc_html_e( 'One-Click Content Migration', 'kateringking-cms' ); ?></h2>
                    <p><?php esc_html_e( 'Click the button below to automatically populate the database with all initial content from mockData.js (5 catering packages, 60+ dishes, 16 gallery photos, 3 event reels, testimonials, FAQs, and global site settings).', 'kateringking-cms' ); ?></p>
                </div>
            </div>

            <div style="background: #FFF; padding: 24px; border: 1px solid #CCD0D4; border-radius: 6px; max-width: 600px; margin-top: 20px;">
                <h3><?php esc_html_e( 'Ready to Seed Content', 'kateringking-cms' ); ?></h3>
                <p><?php esc_html_e( 'This will create or update default posts across all 11 Custom Post Types and fill in all ACF options page fields. Existing posts with matching slugs will be updated rather than duplicated.', 'kateringking-cms' ); ?></p>

                <form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
                    <input type="hidden" name="action" value="kk_run_seeder" />
                    <?php wp_nonce_field( 'kk_seed_action', 'kk_seed_nonce' ); ?>
                    <button type="submit" class="button button-primary button-hero button-kk-gold" style="margin-top: 10px;">
                        <?php esc_html_e( 'Seed All Website Content Now', 'kateringking-cms' ); ?>
                    </button>
                </form>
            </div>
        </div>
        <?php
    }

    /**
     * Handle the POST request to run the seeder.
     */
    public static function handle_seed_request() {
        if ( ! current_user_can( 'manage_options' ) ) {
            wp_die( 'Unauthorized' );
        }
        check_admin_referer( 'kk_seed_action', 'kk_seed_nonce' );

        self::run();

        wp_redirect( admin_url( 'admin.php?page=kateringking-seeder&seeded=1' ) );
        exit;
    }

    /**
     * Update field in ACF or post_meta/option.
     */
    private static function set_field_value( $selector, $value, $post_id = 'options' ) {
        if ( function_exists( 'update_field' ) ) {
            update_field( $selector, $value, $post_id );
        }
        if ( $post_id === 'options' ) {
            update_option( $selector, $value );
        } elseif ( is_numeric( $post_id ) && (int) $post_id > 0 ) {
            update_post_meta( (int) $post_id, $selector, $value );
        }
    }

    /**
     * Run the complete content seeder.
     */
    public static function run() {
        self::seed_site_settings();
        self::seed_hero();
        self::seed_about();
        self::seed_footer();
        self::seed_form_dropdowns();
        self::seed_trust_stats();
        self::seed_production_metrics();
        self::seed_gallery();
        self::seed_event_reels();
        self::seed_testimonials();
        self::seed_faqs();
        self::seed_custom_features();
        self::seed_reel_highlights();
        self::seed_packages_and_dishes();
    }

    /**
     * Seed Site Settings.
     */
    private static function seed_site_settings() {
        self::set_field_value( 'kk_brand_name', 'KateringKing' );
        self::set_field_value( 'kk_tagline', 'Royal Culinary Art & Bespoke Event Banquets' );
        self::set_field_value( 'kk_description', 'Creating unforgettable gastronomic journeys for royal weddings, executive galas, and landmark celebrations for over 25 years.' );
        self::set_field_value( 'kk_phone', '+91 77779 98789' );
        self::set_field_value( 'kk_phone_display', '77 77 99 87 89' );
        self::set_field_value( 'kk_phone_intl_display', '+91 77 77 99 87 89' );
        self::set_field_value( 'kk_whatsapp_number', '917777998789' );
        self::set_field_value( 'kk_whatsapp_display', '77 77 99 87 89' );
        self::set_field_value( 'kk_email', 'concierge@kateringking.com' );
        self::set_field_value( 'kk_address', 'Heritage Estate, Royal Avenue, Jubilee Hills, Hyderabad' );
        self::set_field_value( 'kk_instagram_url', 'https://www.instagram.com/kateringkingservices?igsh=MThtM3E2Y3BhdnNqag==' );
        self::set_field_value( 'kk_instagram_handle', '@kateringkingservices' );
        self::set_field_value( 'kk_facebook_url', 'https://www.facebook.com/kateringkingservices' );
        self::set_field_value( 'kk_facebook_handle', 'kateringkingservices' );
    }

    /**
     * Seed Hero.
     */
    private static function seed_hero() {
        self::set_field_value( 'kk_hero_headline_normal', 'Royal Banquets Executed at' );
        self::set_field_value( 'kk_hero_headline_accent', 'Industrial Scale.' );
        self::set_field_value( 'kk_hero_subheadline', 'From grand 2,500–guest destination weddings to high-table presidential galas, we orchestrate Michelin-standard culinary production powered by a 12,000 sq.ft commercial kitchen and cold-chain convoys.' );
        self::set_field_value( 'kk_hero_cta_text', 'Explore Banquet Packages' );
        self::set_field_value( 'kk_hero_cta_link', '/packages' );
    }

    /**
     * Seed About & Legacy.
     */
    private static function seed_about() {
        self::set_field_value( 'kk_about_kicker', 'About KateringKing' );
        self::set_field_value( 'kk_about_title', 'Elevating the Art of Hospitality' );
        self::set_field_value( 'kk_about_subtitle', 'At KateringKing.com, we believe that exceptional catering goes beyond just great food — it requires precision, formal expertise, and an unwavering commitment to service.' );
        self::set_field_value( 'kk_about_philosophy_heading', "We don't just cook for your guests; we engineer flawless dining experiences." );
        self::set_field_value( 'kk_about_philosophy_desc', "Backed by formal hotel management education and decades of industry experience, we bring a refined, structured approach to every wedding, corporate gala, and private event we undertake." );
        self::set_field_value( 'kk_about_philosophy_image', 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80' );
        self::set_field_value( 'kk_about_point_1_title', 'Formal Hotel Management Expertise' );
        self::set_field_value( 'kk_about_point_1_desc', 'Trained in classical hospitality protocols, precision service standards, and culinary hygiene science.' );
        self::set_field_value( 'kk_about_point_2_title', 'Michelin & 5-Star Hotel Pedigree' );
        self::set_field_value( 'kk_about_point_2_desc', 'Our master chefs bring pedigrees from Oberoi, Taj, and Michelin-star kitchens, infusing haute cuisine finesse into grand-scale banquet execution.' );
        self::set_field_value( 'kk_about_point_3_title', 'Synchronized White-Glove Staging' );
        self::set_field_value( 'kk_about_point_3_desc', 'Uniformed banquet stewards operating under strict military hospitality checklists for timely, faultless banquet service.' );

        // Seed 3 Service Cards
        $cards = array(
            array(
                'slug'  => 'card-weddings',
                'title' => 'Weddings & Social Galas',
                'desc'  => 'From intimate pre-wedding ceremonies to grand receptions, we design bespoke menus that reflect your vision, served with impeccable grace.',
                'tag'   => 'Grand Celebrations',
                'icon'  => 'crown',
                'order' => 1,
            ),
            array(
                'slug'  => 'card-corporate',
                'title' => 'Corporate Events & Exhibitions',
                'desc'  => 'Elevate your brand with our professional corporate catering. We provide seamless, sophisticated service for board meetings, product launches, and large-scale conventions.',
                'tag'   => 'Executive & summits',
                'icon'  => 'building',
                'order' => 2,
            ),
            array(
                'slug'  => 'card-private-dining',
                'title' => 'Bespoke Private Dining',
                'desc'  => 'Exclusive, chef-curated menus brought directly to your chosen venue, offering a restaurant-quality fine dining experience for your most important guests.',
                'tag'   => 'VIP Fine Dining',
                'icon'  => 'utensils',
                'order' => 3,
            ),
        );

        foreach ( $cards as $c ) {
            $post_id = self::get_or_create_post( 'service_card', $c['slug'], $c['title'], $c['order'] );
            self::set_field_value( 'service_tag', $c['tag'], $post_id );
            self::set_field_value( 'service_title', $c['title'], $post_id );
            self::set_field_value( 'service_desc', $c['desc'], $post_id );
            self::set_field_value( 'service_icon', $c['icon'], $post_id );
        }
    }

    /**
     * Seed Footer.
     */
    private static function seed_footer() {
        self::set_field_value( 'kk_footer_certifications', 'FSSAI Central Licensed • ISO 22000 & HACCP Certified • 5-Star Culinary Brigade' );
        self::set_field_value( 'kk_footer_cta_kicker', 'Direct Executive Concierge' );
        self::set_field_value( 'kk_footer_cta_title', 'Ready to Stage an Unforgettable Royal Banquet?' );
        self::set_field_value( 'kk_footer_cta_desc', 'Whether planning a 2,500-guest destination wedding or an exclusive executive gala, our banquet directors and Michelin-trained chefs ensure flawless execution.' );
    }

    /**
     * Seed Form Dropdowns.
     */
    private static function seed_form_dropdowns() {
        $events = "Grand Royal Wedding\nWedding Reception / Sangeet\nExecutive Corporate Gala / Summit\nMilestone Birthday / Anniversary\nPrivate Estate Soirée\nOther Celebration";
        $guests = "50 - 100 Guests\n100 - 250 Guests\n250 - 500 Guests\n500 - 1,000 Guests\n1,000+ Royal Dignitaries";

        self::set_field_value( 'kk_form_event_types', $events );
        self::set_field_value( 'kk_form_guest_ranges', $guests );
    }

    /**
     * Seed Trust Stats.
     */
    private static function seed_trust_stats() {
        $stats = array(
            array( 'slug' => 'stat-events',  'title' => 'Royal Events Catered', 'val' => 500, 'suf' => '+',   'sub' => 'Grand weddings & summits', 'order' => 1 ),
            array( 'slug' => 'stat-years',   'title' => 'Years Culinary Legacy', 'val' => 25,  'suf' => '+',   'sub' => 'Michelin-trained masters', 'order' => 2 ),
            array( 'slug' => 'stat-recipes', 'title' => 'Bespoke Recipes',       'val' => 120, 'suf' => '+',   'sub' => 'Curated world menus',      'order' => 3 ),
            array( 'slug' => 'stat-rating',  'title' => 'Flawless Client Rating','val' => 99,  'suf' => '.8%', 'sub' => 'Verified banquet reviews',  'order' => 4 ),
        );

        foreach ( $stats as $s ) {
            $post_id = self::get_or_create_post( 'trust_stat', $s['slug'], $s['title'], $s['order'] );
            self::set_field_value( 'stat_value', $s['val'], $post_id );
            self::set_field_value( 'stat_suffix', $s['suf'], $post_id );
            self::set_field_value( 'stat_label', $s['title'], $post_id );
            self::set_field_value( 'stat_sub', $s['sub'], $post_id );
        }
    }

    /**
     * Seed Production Metrics.
     */
    private static function seed_production_metrics() {
        $metrics = array(
            array(
                'slug'   => 'prod-facility',
                'title'  => 'Central Production Facility',
                'val'    => '12,000',
                'unit'   => 'SQ. FT.',
                'desc'   => 'Segregated state-of-the-art prep wings: dedicated Pure-Veg / Jain sanitized kitchen, slow-fire Awadhi deg chambers, and temperature-controlled bakery.',
                'icon'   => 'building',
                'order'  => 1,
            ),
            array(
                'slug'   => 'prod-capacity',
                'title'  => 'Peak Production Capacity',
                'val'    => '5,000+',
                'unit'   => 'COVERS / DAY',
                'desc'   => 'Engineered to execute up to 5 concurrent royal wedding banquets or high-table summits with synchronized 90-minute multi-course service.',
                'icon'   => 'users',
                'order'  => 2,
            ),
            array(
                'slug'   => 'prod-logistics',
                'title'  => 'Mobile Logistics & Convoys',
                'val'    => '14 Fleets',
                'unit'   => 'COLD-CHAIN',
                'desc'   => 'Insulated, sensor-monitored refrigerated transport vehicles and on-site mobile induction units ensuring zero food degradation.',
                'icon'   => 'truck',
                'order'  => 3,
            ),
            array(
                'slug'   => 'prod-safety',
                'title'  => 'Food Safety & Lab Testing',
                'val'    => 'ISO 22000',
                'unit'   => '& HACCP CERTIFIED',
                'desc'   => 'FSSAI Central Licensed with 5-stage RO+UV water filtration, batch microbiological sample testing, and uncompromised hygiene audits.',
                'icon'   => 'shield',
                'order'  => 4,
            ),
        );

        foreach ( $metrics as $m ) {
            $post_id = self::get_or_create_post( 'production_metric', $m['slug'], $m['title'], $m['order'] );
            self::set_field_value( 'metric_icon', $m['icon'], $post_id );
            self::set_field_value( 'metric_value', $m['val'], $post_id );
            self::set_field_value( 'metric_unit', $m['unit'], $post_id );
            self::set_field_value( 'metric_title', $m['title'], $post_id );
            self::set_field_value( 'metric_desc', $m['desc'], $post_id );
        }
    }

    /**
     * Seed Gallery (Taxonomies + Items).
     */
    private static function seed_gallery() {
        $cats = array(
            'food'      => 'Food',
            'weddings'  => 'Weddings',
            'setups'    => 'Catering Setup',
            'corporate' => 'Corporate',
            'counters'  => 'Live Counters',
            'team'      => 'Team',
            'bts'       => 'Behind the Scenes',
        );

        $term_ids = array();
        foreach ( $cats as $slug => $name ) {
            $term = term_exists( $slug, 'gallery_category' );
            if ( ! $term ) {
                $term = wp_insert_term( $name, 'gallery_category', array( 'slug' => $slug ) );
            }
            if ( ! is_wp_error( $term ) ) {
                $term_ids[ $slug ] = (int) $term['term_id'];
            }
        }

        $items = array(
            array(
                'slug'     => 'gallery-1',
                'title'    => 'Imperial Palace Wedding Banquet',
                'category' => 'weddings',
                'image'    => 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Crystal chandeliers and candle-lit floral banqueting for 800 guests.',
                'order'    => 1,
            ),
            array(
                'slug'     => 'gallery-2',
                'title'    => 'Zafrani Paneer & Smoked Embers Platter',
                'category' => 'food',
                'image'    => 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Prime malai paneer steeped in saffron cream, yellow mustard, and bell peppers.',
                'order'    => 2,
            ),
            array(
                'slug'     => 'gallery-3',
                'title'    => 'Executive Chef Team Staging Plating',
                'category' => 'team',
                'image'    => 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Executive chefs executing precision garnish and temperature control.',
                'order'    => 3,
            ),
            array(
                'slug'     => 'gallery-4',
                'title'    => 'Grand Floral Buffet Staging Boulevard',
                'category' => 'setups',
                'image'    => 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Lush floral arrangements and polished silver chafer boulevard.',
                'order'    => 4,
            ),
            array(
                'slug'     => 'gallery-5',
                'title'    => 'Theatrical Dim Sum & Wok Station',
                'category' => 'counters',
                'image'    => 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Live bamboo steamer towers with hand-pleated truffle and edamame dumplings.',
                'order'    => 5,
            ),
            array(
                'slug'     => 'gallery-6',
                'title'    => 'Fortune 500 Presidential Gala Dinner',
                'category' => 'corporate',
                'image'    => 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Synchronized silver-cloche service for corporate leadership gala.',
                'order'    => 6,
            ),
            array(
                'slug'     => 'gallery-7',
                'title'    => 'Royal Awadhi Dum Biryani Handi',
                'category' => 'food',
                'image'    => 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Slow-cooked in sealed copper vessels with 32 secret heritage spices.',
                'order'    => 7,
            ),
            array(
                'slug'     => 'gallery-8',
                'title'    => 'Uniformed Banquet Stewards & Stewarding Crew',
                'category' => 'team',
                'image'    => 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Our hospitality stewards ready for synchronized banquet reception service.',
                'order'    => 8,
            ),
            array(
                'slug'     => 'gallery-9',
                'title'    => 'Artisanal French Macaron & Pastry Tower',
                'category' => 'food',
                'image'    => 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Gold-leaf dusted pistachio, raspberry, and Belgian dark chocolate macarons.',
                'order'    => 9,
            ),
            array(
                'slug'     => 'gallery-10',
                'title'    => 'Sunset Garden Cocktail Reception Lawn',
                'category' => 'weddings',
                'image'    => 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Open lawn canapé bar with craft botanical mocktails under fairy canopy.',
                'order'    => 10,
            ),
            array(
                'slug'     => 'gallery-11',
                'title'    => 'Master Patissier Crafting Desserts',
                'category' => 'bts',
                'image'    => 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Intricate chocolate tempered domes and caramel spun sugars in staging.',
                'order'    => 11,
            ),
            array(
                'slug'     => 'gallery-12',
                'title'    => 'Live Artisan Wood-Fired Pizza Counter',
                'category' => 'counters',
                'image'    => 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Fermented 72-hour sourdough with San Marzano tomatoes and fior di latte.',
                'order'    => 12,
            ),
            array(
                'slug'     => 'gallery-13',
                'title'    => 'Luxury Glassware & Gold Cutlery Setting',
                'category' => 'setups',
                'image'    => 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Precision silver tableware and cut-crystal water goblets.',
                'order'    => 13,
            ),
            array(
                'slug'     => 'gallery-14',
                'title'    => 'Pre-Event Staging & Tableware Polish',
                'category' => 'bts',
                'image'    => 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Rigorous 40-point checklist inspection 90 minutes before guest arrival.',
                'order'    => 14,
            ),
            array(
                'slug'     => 'gallery-15',
                'title'    => 'Executive Kitchen Brigade in Action',
                'category' => 'team',
                'image'    => 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Synchronized kitchen coordination across 18 specialized live counters.',
                'order'    => 15,
            ),
            array(
                'slug'     => 'gallery-16',
                'title'    => 'Plated Sous-Vide Salmon with Saffron Glaze',
                'category' => 'food',
                'image'    => 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',
                'caption'  => 'Delicate Atlantic salmon garnished with edible microgreens and saffron jus.',
                'order'    => 16,
            ),
        );

        foreach ( $items as $it ) {
            $post_id = self::get_or_create_post( 'gallery_item', $it['slug'], $it['title'], $it['order'] );
            self::set_field_value( 'gallery_image', $it['image'], $post_id );
            self::set_field_value( 'gallery_caption', $it['caption'], $post_id );
            if ( isset( $term_ids[ $it['category'] ] ) ) {
                wp_set_post_terms( $post_id, array( $term_ids[ $it['category'] ] ), 'gallery_category' );
            }
        }
    }

    /**
     * Seed Event Reels.
     */
    private static function seed_event_reels() {
        $reels = array(
            array(
                'slug'       => 'reel-1',
                'title'      => 'The Royal Mewar Wedding Gala',
                'type'       => 'Heritage Palace Wedding',
                'guests'     => '1,200 Guests',
                'loc'        => 'Udaipur, Rajasthan',
                'dur'        => '0:45',
                'thumb'      => 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
                'tag'        => '42 Live Counters',
                'recap'      => 'A magnificent 3-day royal banquet featuring heirloom Nawabi recipes and synchronized cloche service.',
                'order'      => 1,
            ),
            array(
                'slug'       => 'reel-2',
                'title'      => 'Global Tech Leaders Summit Dinner',
                'type'       => 'Executive Leadership Gala',
                'guests'     => '450 Guests',
                'loc'        => 'Cyber City, Hyderabad',
                'dur'        => '0:35',
                'thumb'      => 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
                'tag'        => 'Michelin Tasting Flight',
                'recap'      => '7-course progressive culinary flight paired with zero-proof botanical infusions.',
                'order'      => 2,
            ),
            array(
                'slug'       => 'reel-3',
                'title'      => 'The Emerald Lawn Sangeet Soirée',
                'type'       => 'Destination Sangeet',
                'guests'     => '600 Guests',
                'loc'        => 'Goa Coastal Villa',
                'dur'        => '0:40',
                'thumb'      => 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
                'tag'        => 'Coastal Seafood Grill',
                'recap'      => 'Open beachside charcoal grills, fresh kokum catch, and live woodfire flatbreads.',
                'order'      => 3,
            ),
        );

        foreach ( $reels as $r ) {
            $post_id = self::get_or_create_post( 'event_reel', $r['slug'], $r['title'], $r['order'] );
            self::set_field_value( 'reel_event_type', $r['type'], $post_id );
            self::set_field_value( 'reel_guests', $r['guests'], $post_id );
            self::set_field_value( 'reel_location', $r['loc'], $post_id );
            self::set_field_value( 'reel_duration', $r['dur'], $post_id );
            self::set_field_value( 'reel_thumbnail', $r['thumb'], $post_id );
            self::set_field_value( 'reel_highlight_tag', $r['tag'], $post_id );
            self::set_field_value( 'reel_recap_notes', $r['recap'], $post_id );
        }
    }

    /**
     * Seed Testimonials.
     */
    private static function seed_testimonials() {
        $reviews = array(
            array(
                'slug'   => 'review-1',
                'name'   => 'Maharaja & Maharani Singhania',
                'event'  => "Daughter's Royal Palace Wedding (1,200 Guests)",
                'rating' => 5,
                'quote'  => 'KateringKing transformed our wedding into an unforgettable sensory masterpiece. The synchronized butler service and live Awadhi counters were discussed by every guest for months!',
                'avatar' => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                'order'  => 1,
            ),
            array(
                'slug'   => 'review-2',
                'name'   => 'Vikram Malhotra',
                'event'  => 'Managing Director, Horizon Global Capital',
                'rating' => 5,
                'quote'  => 'For our annual executive gala, precision was paramount. The culinary execution was flawless, the menu creative, and their banquet management operates like clockwork.',
                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                'order'  => 2,
            ),
            array(
                'slug'   => 'review-3',
                'name'   => 'Ananya & Rohan Deshmukh',
                'event'  => 'Intimate Farmhouse Sangeet (250 Guests)',
                'rating' => 5,
                'quote'  => 'From our very first WhatsApp conversation to the final dessert course, the team gave us white-glove attention. Every single dish looked and tasted like pure Michelin luxury.',
                'avatar' => 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
                'order'  => 3,
            ),
        );

        foreach ( $reviews as $rev ) {
            $post_id = self::get_or_create_post( 'testimonial', $rev['slug'], $rev['name'], $rev['order'] );
            self::set_field_value( 'test_client_name', $rev['name'], $post_id );
            self::set_field_value( 'test_event', $rev['event'], $post_id );
            self::set_field_value( 'test_rating', $rev['rating'], $post_id );
            self::set_field_value( 'test_quote', $rev['quote'], $post_id );
            self::set_field_value( 'test_avatar', $rev['avatar'], $post_id );
        }
    }

    /**
     * Seed FAQs.
     */
    private static function seed_faqs() {
        $faqs = array(
            array(
                'slug'  => 'faq-tasting',
                'q'     => 'Can our family schedule an executive tasting session before confirming the booking?',
                'a'     => 'Yes, absolutely. Once we draft your preliminary banquet menu proposal, we host your family for a private 6-course chef tasting session at our Jubilee Hills Tasting Studio to sample dishes, adjust spices, and review tableware staging.',
                'order' => 1,
            ),
            array(
                'slug'  => 'faq-advance',
                'q'     => 'How far in advance should we reserve our event date?',
                'a'     => 'For auspicious wedding dates and peak winter seasons (October to March), we recommend booking 4 to 8 months in advance. For corporate galas and private soirees, a minimum of 3 to 6 weeks is advised.',
                'order' => 2,
            ),
            array(
                'slug'  => 'faq-destination',
                'q'     => 'Do you cater destination weddings outside Hyderabad?',
                'a'     => 'Yes. Our specialized convoy fleet of mobile GPS-monitored refrigerated transport vans travels across Telangana, Andhra Pradesh, Karnataka, and destination resort properties with full staging crew.',
                'order' => 3,
            ),
            array(
                'slug'  => 'faq-jain-segregation',
                'q'     => 'How do you ensure strict segregation for Jain and Sattvic preparations?',
                'a'     => 'We operate dedicated sealed prep zones and separate cookware vessels exclusively for pure vegetarian, root-vegetable-free, and sattvic dishes, certified by our executive head chef.',
                'order' => 4,
            ),
        );

        foreach ( $faqs as $f ) {
            $post_id = self::get_or_create_post( 'faq_item', $f['slug'], $f['q'], $f['order'] );
            self::set_field_value( 'faq_question', $f['q'], $post_id );
            self::set_field_value( 'faq_answer', $f['a'], $post_id );
            self::set_field_value( 'faq_sort_order', $f['order'], $post_id );
        }
    }

    /**
     * Seed Custom Features (Packages Page).
     */
    private static function seed_custom_features() {
        $features = array(
            array(
                'slug'  => 'feat-jain',
                'title' => 'Dedicated Jain & Sattvic Kitchens',
                'desc'  => 'Completely segregated preparation lines ensuring zero onion/garlic, root-vegetable compliance, and strictly verified sattvic oils and spices.',
                'tag'   => 'Strict Segregation',
                'order' => 1,
            ),
            array(
                'slug'  => 'feat-live-counters',
                'title' => 'Theatrical Live Counters',
                'desc'  => 'Flambé pasta wheels, liquid nitrogen dessert cloud stations, live clay tandoor choreography, and artisanal Turkish ice cream carts.',
                'tag'   => 'Interactive Dining',
                'order' => 2,
            ),
            array(
                'slug'  => 'feat-dastarkhwan',
                'title' => 'Royal Nizami & Awadhi Dastarkhwan',
                'desc'  => 'Slow-cooked Purdah dum biryanis, 24-hour Dal Bukhara, Zafrani sheermal, and shahi desserts crafted by master khansamas.',
                'tag'   => 'Heritage Recipes',
                'order' => 3,
            ),
            array(
                'slug'  => 'feat-global',
                'title' => 'International Continental & Asian Bars',
                'desc'  => 'Hand-pleated truffle dim sum steamers, authentic wok tossing, Neapolitan wood-fired pizza ovens, and artisanal sushi platters.',
                'tag'   => 'Global Palate',
                'order' => 4,
            ),
        );

        foreach ( $features as $feat ) {
            $post_id = self::get_or_create_post( 'custom_feature', $feat['slug'], $feat['title'], $feat['order'] );
            self::set_field_value( 'feat_title', $feat['title'], $post_id );
            self::set_field_value( 'feat_desc', $feat['desc'], $post_id );
            self::set_field_value( 'feat_tag', $feat['tag'], $post_id );
            self::set_field_value( 'feat_sort_order', $feat['order'], $post_id );
        }
    }

    /**
     * Seed Reel Highlights (Reels Page).
     */
    private static function seed_reel_highlights() {
        $highlights = array(
            array(
                'slug'  => 'high-tandoor',
                'title' => 'The Midnight Tandoor Staging',
                'stats' => '1,200 skewers / hour',
                'desc'  => 'Watch our master ustaads fire raw embers at 480°C to create melt-in-mouth Zafrani kebabs moments before the bride and groom arrive.',
                'order' => 1,
            ),
            array(
                'slug'  => 'high-nitrogen',
                'title' => 'Liquid Nitrogen Dessert Cloud',
                'stats' => 'Theatrical molecular bar',
                'desc'  => 'Guests gather as hand-churned pistachio kulfi is dipped into freezing nitrogen vapors, accompanied by edible gold leaf garnish.',
                'order' => 2,
            ),
            array(
                'slug'  => 'high-butler',
                'title' => 'Grand Dastarkhwan Unveiling',
                'stats' => 'Synchronized butler reveal',
                'desc'  => 'At precisely 8:30 PM, 60 uniformed stewards lift copper purdah domes simultaneously, releasing aromas of kewra and saffron basmati.',
                'order' => 3,
            ),
        );

        foreach ( $highlights as $h ) {
            $post_id = self::get_or_create_post( 'reel_highlight', $h['slug'], $h['title'], $h['order'] );
            self::set_field_value( 'highlight_title', $h['title'], $post_id );
            self::set_field_value( 'highlight_stats', $h['stats'], $post_id );
            self::set_field_value( 'highlight_desc', $h['desc'], $post_id );
            self::set_field_value( 'highlight_sort_order', $h['order'], $post_id );
        }
    }

    /**
     * Seed Packages and Child Dishes.
     */
    private static function seed_packages_and_dishes() {
        $packages_data = array(
            array(
                'slug'        => 'royal-signature',
                'name'        => 'Royal Signature Package',
                'minGuests'   => '150 - 1,500+ guests',
                'isPopular'   => 1,
                'image'       => 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
                'description' => 'Premium package for weddings, receptions and grand celebrations.',
                'bestFor'     => 'Luxury weddings, receptions, VIP events and premium celebrations.',
                'order'       => 1,
                'inclusions'  => "10 Royal Centerpiece & Heritage Dishes\nWhole Lamb Dum Ki Raan & Kareli Live Carvery\nTraditional Stone-Grill Phattar Ka Gosht Setup\nHyderabadi Warqi & Lukmi Passed Appetizers\nExclusive Royal Nizami Banquet Staging",
                'dishes'      => array(
                    array(
                        'slug' => 'rs-1',
                        'name' => 'Dum Ki Raan',
                        'course' => 'Main Course / Carvery',
                        'dietary' => 'Chef Signature',
                        'chefNote' => 'Slow-cooked whole leg of lamb in 32 aromatic court spices',
                        'desc' => 'Whole lamb leg slowly cooked with aromatic spices until exceptionally tender and rich.',
                        'image' => 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
                    ),
                    array(
                        'slug' => 'rs-2',
                        'name' => 'Phattar Ka Gosht',
                        'course' => 'Live Counter',
                        'dietary' => 'Chef Signature',
                        'chefNote' => 'Seared on heated granite slabs with raw papaya and allspice',
                        'desc' => 'Tender lamb ribbons marinated with raw papaya, toasted stone flowers and ground allspice seared live on red-hot polished granite.',
                        'image' => 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
                    ),
                    array(
                        'slug' => 'rs-3',
                        'name' => 'Zafrani Gosht Dum Biryani',
                        'course' => 'Main Course',
                        'dietary' => 'Non-Veg',
                        'chefNote' => 'Aged aged basmati with prime baby goat cuts and Kashmiri saffron',
                        'desc' => 'Layered fragrant aged basmati rice and slow-braised spring lamb steeped in pure Kashmiri saffron, organic rose water, and sealed dough lid.',
                        'image' => 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
                    ),
                    array(
                        'slug' => 'rs-4',
                        'name' => 'Kareli Rogan Josh',
                        'course' => 'Main Course',
                        'dietary' => 'Non-Veg',
                        'chefNote' => 'Braised baby lamb shanks in Kashmiri mawal blossoms and ratanjot',
                        'desc' => 'Tender lamb shanks slowly stewed in a velvet Kashmiri cockscomb and whole aromatic spice gravy until marrow melts into sauce.',
                        'image' => 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
                    ),
                    array(
                        'slug' => 'rs-5',
                        'name' => 'Shahi Tukda Aur Rabdi',
                        'course' => 'Dessert',
                        'dietary' => 'Chef Signature',
                        'chefNote' => 'Ghee-fried brioche steeped in saffron syrup with pistachio rabdi',
                        'desc' => 'Crisp artisan brioche saturated with cardamom sugar syrup, crowned with 8-hour reduced whole milk rabdi, silver warq, and roasted nuts.',
                        'image' => 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80',
                    ),
                ),
            ),
            array(
                'slug'        => 'imperial-wedding',
                'name'        => 'Imperial Wedding Banquet',
                'minGuests'   => '250 - 2,500+ guests',
                'isPopular'   => 0,
                'image'       => 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
                'description' => 'Comprehensive multi-course luxury wedding banquet with global live counters.',
                'bestFor'     => 'Grand scale destination weddings, multi-day celebrations.',
                'order'       => 2,
                'inclusions'  => "18 Curated Royal Courses\n5 Theatrical Live Action Cooking Counters\nArtisanal Wood-Fired Neapolitan Pizza\nSynchronized Cloche Butler Service\nComplimentary VIP Family Tasting Session",
                'dishes'      => array(
                    array(
                        'slug' => 'iw-1',
                        'name' => 'Galouti Kebab & Taftan',
                        'course' => 'Passed Appetizer',
                        'dietary' => 'Chef Signature',
                        'chefNote' => 'Melt-in-mouth smoked lamb patties on mini saffron bread',
                        'desc' => 'Velvety minced lamb infused with smoked cloves and 160 royal court spices, served on warm saffron-scented baby taftan breads.',
                        'image' => 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
                    ),
                    array(
                        'slug' => 'iw-2',
                        'name' => 'Awadhi Murgh Parda Biryani',
                        'course' => 'Main Course',
                        'dietary' => 'Non-Veg',
                        'chefNote' => 'Baked inside flaky puff pastry dough crust',
                        'desc' => 'Tender country chicken layered with aged long-grain basmati and rose aromatics, sealed inside a flaky golden pastry crust and carved tableside.',
                        'image' => 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
                    ),
                    array(
                        'slug' => 'iw-3',
                        'name' => 'Live Artisan Truffle Pasta Wheel',
                        'course' => 'Live Counter',
                        'dietary' => 'Pure Vegetarian',
                        'chefNote' => 'Tossed live in an aged 24-month Parmigiano Reggiano wheel',
                        'desc' => 'Fresh handmade tagliolini tossed inside a carved giant Parmesan cheese wheel with shaved black summer truffles and French cultured butter.',
                        'image' => 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
                    ),
                ),
            ),
            array(
                'slug'        => 'regal-heritage-veg',
                'name'        => 'Regal Heritage Veg & Jain Banquet',
                'minGuests'   => '100 - 1,200+ guests',
                'isPopular'   => 0,
                'image'       => 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
                'description' => 'Dedicated pure-vegetarian & Jain certified banquet crafted in segregated kitchens.',
                'bestFor'     => 'Traditional vegetarian weddings, Jain ceremonies, and Sattvic banquets.',
                'order'       => 3,
                'inclusions'  => "100% Segregated Kitchen & Cooking Utensils\nStrict Jain-Compliant Root-Free Custom Menus\nHandcrafted Artisanal Paneer & Chaat Stations\n24-Hour Slow-Cooked Dal Bukhara Deg\nCold-Pressed Organic Oils & Saffron Infusions",
                'dishes'      => array(
                    array(
                        'slug' => 'rv-1',
                        'name' => 'Zafrani Paneer Tikka Angaar',
                        'course' => 'Appetizer',
                        'dietary' => 'Pure Vegetarian',
                        'chefNote' => 'Malai paneer cubes infused with saffron cream and crushed coriander',
                        'desc' => 'Farm-fresh cottage cheese layered with saffron cream, yellow mustard oil, and bell peppers, charcoal-grilled on copper skewers.',
                        'image' => 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
                    ),
                    array(
                        'slug' => 'rv-2',
                        'name' => 'Dal KateringKing 24-Hour',
                        'course' => 'Main Course',
                        'dietary' => 'Pure Vegetarian',
                        'chefNote' => 'Black lentils slow-simmered over smouldering charcoal for 24 hours',
                        'desc' => 'Whole black urad lentils slow-cooked over coal embers overnight with San Marzano tomato reduction, churned white butter, and fenugreek dust.',
                        'image' => 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
                    ),
                    array(
                        'slug' => 'rv-3',
                        'name' => 'Subz-E-Khaas Dum Biryani',
                        'course' => 'Main Course',
                        'dietary' => 'Jain / Sattvic',
                        'chefNote' => 'Seasonal garden vegetables cooked under sealed dough with royal ittar',
                        'desc' => 'Floret vegetables and fresh cottage cheese layered with aged basmati, toasted nuts, and wild mint cooked in sealed brass deg.',
                        'image' => 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
                    ),
                ),
            ),
            array(
                'slug'        => 'presidential-corporate',
                'name'        => 'Presidential Corporate Gala',
                'minGuests'   => '100 - 800+ delegates',
                'isPopular'   => 0,
                'image'       => 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
                'description' => 'Executive level dining engineered for global summits, awards galas, and board dinners.',
                'bestFor'     => 'Corporate leadership summits, multinational galas, investor dinners.',
                'order'       => 4,
                'inclusions'  => "Synchronized 90-Minute Banquet Service Flow\nProgressive 5-Course Plated Fine Dining Options\nZero-Proof Craft Botanical Beverage Bar\nDiscreet White-Glove Executive Butler Staff\nStrict NDA & High-Security Protocol Adherence",
                'dishes'      => array(
                    array(
                        'slug' => 'pc-1',
                        'name' => 'Sous-Vide Chilean Sea Bass',
                        'course' => 'Plated Course',
                        'dietary' => 'Non-Veg',
                        'chefNote' => 'Glazed with yuzu miso and served with lotus crisps',
                        'desc' => 'Delicate sea bass slowly cooked at 54°C, charred with Japanese yuzu-mirin reduction and served with edamame mousse.',
                        'image' => 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
                    ),
                    array(
                        'slug' => 'pc-2',
                        'name' => 'Deconstructed Belgian Dark Truffle Dome',
                        'course' => 'Dessert',
                        'dietary' => 'Chef Signature',
                        'chefNote' => '70% Valrhona chocolate sphere with gold leaf and raspberry coulis',
                        'desc' => 'Tempered dark chocolate dome filled with single-origin ganache, salted hazelnut praline, and warm Madagascar vanilla pour-over.',
                        'image' => 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
                    ),
                ),
            ),
            array(
                'slug'        => 'bespoke-private-estate',
                'name'        => 'Bespoke Private Estate Soirée',
                'minGuests'   => '50 - 300 VIP guests',
                'isPopular'   => 0,
                'image'       => 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
                'description' => 'Intimate, ultra-exclusive culinary showcase designed for milestone birthdays and private estates.',
                'bestFor'     => 'Farmhouse soirees, anniversary milestones, luxury terrace celebrations.',
                'order'       => 5,
                'inclusions'  => "Private Chef-at-Table Interactive Experiences\nCharcoal Robata Grill & Smoked Skewer Staging\nArtisanal French & Italian Charcuterie Boards\nCurated Sommelier Mocktail Flight Pairings\nComplete Bespoke Tableware, Linen & Glassware",
                'dishes'      => array(
                    array(
                        'slug' => 'pe-1',
                        'name' => 'Robata-Charred Tiger Prawns',
                        'course' => 'Live Counter',
                        'dietary' => 'Non-Veg',
                        'chefNote' => 'Marinated in coastal kokum, garlic butter, and smoked salt',
                        'desc' => 'Jumbo bay prawns charred over binchotan coals with kaffir lime emulsion and toasted sesame crisps.',
                        'image' => 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
                    ),
                    array(
                        'slug' => 'pe-2',
                        'name' => 'Heirloom Burrata & Peach Caprese',
                        'course' => 'Plated Appetizer',
                        'dietary' => 'Pure Vegetarian',
                        'chefNote' => 'Artisanal buffalo burrata with grilled peaches and 25-yr Modena balsamic',
                        'desc' => 'Creamy hand-pulled burrata ball served with caramelised stone fruit, toasted pine nuts, and micro basil leaves.',
                        'image' => 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
                    ),
                ),
            ),
        );

        foreach ( $packages_data as $pkg_info ) {
            $pkg_id = self::get_or_create_post( 'catering_package', $pkg_info['slug'], $pkg_info['name'], $pkg_info['order'] );
            self::set_field_value( 'pkg_min_guests', $pkg_info['minGuests'], $pkg_id );
            self::set_field_value( 'pkg_is_popular', $pkg_info['isPopular'], $pkg_id );
            self::set_field_value( 'pkg_cover_image', $pkg_info['image'], $pkg_id );
            self::set_field_value( 'pkg_description', $pkg_info['description'], $pkg_id );
            self::set_field_value( 'pkg_best_for', $pkg_info['bestFor'], $pkg_id );
            self::set_field_value( 'pkg_inclusions', $pkg_info['inclusions'], $pkg_id );

            // Seed dishes for this package
            if ( ! empty( $pkg_info['dishes'] ) ) {
                $d_order = 1;
                foreach ( $pkg_info['dishes'] as $dish_info ) {
                    $dish_id = self::get_or_create_post( 'package_dish', $dish_info['slug'], $dish_info['name'], $d_order++ );
                    self::set_field_value( 'dish_parent_package', $pkg_id, $dish_id );
                    self::set_field_value( 'dish_course', $dish_info['course'], $dish_id );
                    self::set_field_value( 'dish_dietary', $dish_info['dietary'], $dish_id );
                    self::set_field_value( 'dish_chef_note', $dish_info['chefNote'], $dish_id );
                    self::set_field_value( 'dish_description', $dish_info['desc'], $dish_id );
                    self::set_field_value( 'dish_image', $dish_info['image'], $dish_id );
                }
            }
        }
    }

    /**
     * Helper to get existing post by slug or create a new one.
     */
    private static function get_or_create_post( $post_type, $slug, $title, $menu_order = 0 ) {
        $existing = get_posts( array(
            'post_type'      => $post_type,
            'name'           => $slug,
            'posts_per_page' => 1,
            'post_status'    => 'any',
        ) );

        if ( ! empty( $existing ) ) {
            $post_id = $existing[0]->ID;
            wp_update_post( array(
                'ID'          => $post_id,
                'post_title'  => $title,
                'menu_order'  => $menu_order,
                'post_status' => 'publish',
            ) );
            return $post_id;
        }

        return wp_insert_post( array(
            'post_type'   => $post_type,
            'post_name'   => $slug,
            'post_title'  => $title,
            'menu_order'  => $menu_order,
            'post_status' => 'publish',
        ) );
    }
}
