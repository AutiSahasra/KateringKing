<?php
/**
 * Custom REST API Endpoints
 *
 * Exposes 14 custom REST API endpoints under `/wp-json/kateringking/v1/`
 * returning data in the exact shapes expected by the React frontend.
 *
 * @package KateringKing_CMS
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class KK_REST_API {

    /** @var string REST API namespace */
    const NAMESPACE = 'kateringking/v1';

    /**
     * Register all custom routes.
     */
    public static function register_routes() {
        // 1. Site Settings
        register_rest_route( self::NAMESPACE, '/site-settings', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_site_settings' ),
            'permission_callback' => '__return_true',
        ) );

        // 2. Hero Section
        register_rest_route( self::NAMESPACE, '/hero', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_hero' ),
            'permission_callback' => '__return_true',
        ) );

        // 3. Trust Stats
        register_rest_route( self::NAMESPACE, '/trust-stats', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_trust_stats' ),
            'permission_callback' => '__return_true',
        ) );

        // 4. Production Metrics
        register_rest_route( self::NAMESPACE, '/production-metrics', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_production_metrics' ),
            'permission_callback' => '__return_true',
        ) );

        // 5. Packages (with nested dishes)
        register_rest_route( self::NAMESPACE, '/packages', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_packages' ),
            'permission_callback' => '__return_true',
        ) );

        // 6. Gallery (categories + items)
        register_rest_route( self::NAMESPACE, '/gallery', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_gallery' ),
            'permission_callback' => '__return_true',
        ) );

        // 7. Event Reels
        register_rest_route( self::NAMESPACE, '/event-reels', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_event_reels' ),
            'permission_callback' => '__return_true',
        ) );

        // 8. Testimonials
        register_rest_route( self::NAMESPACE, '/testimonials', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_testimonials' ),
            'permission_callback' => '__return_true',
        ) );

        // 9. About Section (legacy + service cards)
        register_rest_route( self::NAMESPACE, '/about', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_about' ),
            'permission_callback' => '__return_true',
        ) );

        // 10. FAQs
        register_rest_route( self::NAMESPACE, '/faqs', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_faqs' ),
            'permission_callback' => '__return_true',
        ) );

        // 11. Navigation Menus
        register_rest_route( self::NAMESPACE, '/menus', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_menus' ),
            'permission_callback' => '__return_true',
        ) );

        // 12. Custom Features (Packages Page)
        register_rest_route( self::NAMESPACE, '/custom-features', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_custom_features' ),
            'permission_callback' => '__return_true',
        ) );

        // 13. Reel Highlights (Reels Page)
        register_rest_route( self::NAMESPACE, '/reel-highlights', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_reel_highlights' ),
            'permission_callback' => '__return_true',
        ) );

        // 14. Form Dropdown Options
        register_rest_route( self::NAMESPACE, '/form-options', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( __CLASS__, 'get_form_options' ),
            'permission_callback' => '__return_true',
        ) );

        // 15. Content Seeder Endpoint
        register_rest_route( self::NAMESPACE, '/seed', array(
            'methods'             => WP_REST_Server::ALLMETHODS,
            'callback'            => array( __CLASS__, 'run_seed' ),
            'permission_callback' => '__return_true',
        ) );
    }

    /**
     * Helper to get field from ACF or fallback to post_meta / get_option.
     */
    private static function get_meta_or_option( $key, $post_id = 'options', $default = '' ) {
        if ( function_exists( 'get_field' ) ) {
            $val = get_field( $key, $post_id );
            if ( ! empty( $val ) || $val === false || $val === 0 || $val === '0' ) {
                return $val;
            }
        }

        if ( $post_id === 'options' || $post_id === 'option' ) {
            $val = get_option( $key, $default );
            return ! empty( $val ) ? $val : $default;
        }

        $val = get_post_meta( $post_id, $key, true );
        return ! empty( $val ) ? $val : $default;
    }

    /**
     * Helper to resolve image URL from an ACF return value (ID, array, or URL).
     */
    private static function resolve_image_url( $image_field, $post_id = 0, $size = 'full' ) {
        if ( is_array( $image_field ) && ! empty( $image_field['url'] ) ) {
            return $image_field['url'];
        }
        if ( is_numeric( $image_field ) && (int) $image_field > 0 ) {
            $src = wp_get_attachment_image_url( (int) $image_field, $size );
            if ( $src ) {
                return $src;
            }
        }
        if ( is_string( $image_field ) && ! empty( $image_field ) ) {
            return $image_field;
        }
        if ( $post_id > 0 && has_post_thumbnail( $post_id ) ) {
            return get_the_post_thumbnail_url( $post_id, $size );
        }
        return '';
    }

    /**
     * 1. GET /wp-json/kateringking/v1/site-settings
     */
    public static function get_site_settings() {
        $wa_num = self::get_meta_or_option( 'kk_whatsapp_number', 'options', '917777998789' );
        $wa_disp = self::get_meta_or_option( 'kk_whatsapp_display', 'options', '77 77 99 87 89' );
        $phone_intl = self::get_meta_or_option( 'kk_phone_intl_display', 'options', '+91 77 77 99 87 89' );
        $wa_url = 'https://wa.me/' . preg_replace( '/[^0-9]/', '', $wa_num );

        $response = array(
            'brandName'           => self::get_meta_or_option( 'kk_brand_name', 'options', 'KateringKing' ),
            'tagline'             => self::get_meta_or_option( 'kk_tagline', 'options', 'Royal Culinary Art & Bespoke Event Banquets' ),
            'description'         => self::get_meta_or_option( 'kk_description', 'options', 'Creating unforgettable gastronomic journeys for royal weddings, executive galas, and landmark celebrations for over 25 years.' ),
            'phone'               => self::get_meta_or_option( 'kk_phone', 'options', '+91 77779 98789' ),
            'phoneDisplay'        => self::get_meta_or_option( 'kk_phone_display', 'options', '77 77 99 87 89' ),
            'phoneIntlDisplay'    => $phone_intl,
            'whatsappNumber'      => $wa_num,
            'whatsappDisplay'     => $wa_disp,
            'whatsappIntlDisplay' => $phone_intl,
            'whatsappUrl'         => $wa_url,
            'email'               => self::get_meta_or_option( 'kk_email', 'options', 'concierge@kateringking.com' ),
            'address'             => self::get_meta_or_option( 'kk_address', 'options', 'Heritage Estate, Royal Avenue, Jubilee Hills, Hyderabad' ),
            'social'              => array(
                'instagram'       => self::get_meta_or_option( 'kk_instagram_url', 'options', 'https://www.instagram.com/kateringkingservices?igsh=MThtM3E2Y3BhdnNqag==' ),
                'instagramHandle' => self::get_meta_or_option( 'kk_instagram_handle', 'options', '@kateringkingservices' ),
                'facebook'        => self::get_meta_or_option( 'kk_facebook_url', 'options', 'https://www.facebook.com/kateringkingservices' ),
                'facebookHandle'  => self::get_meta_or_option( 'kk_facebook_handle', 'options', 'kateringkingservices' ),
                'whatsapp'        => $wa_url,
                'whatsappDisplay' => $wa_disp,
                'whatsappNumber'  => $phone_intl,
            ),
        );

        return rest_ensure_response( $response );
    }

    /**
     * 2. GET /wp-json/kateringking/v1/hero
     */
    public static function get_hero() {
        $response = array(
            'headlineNormal' => self::get_meta_or_option( 'kk_hero_headline_normal', 'options', 'Royal Banquets Executed at' ),
            'headlineAccent' => self::get_meta_or_option( 'kk_hero_headline_accent', 'options', 'Industrial Scale.' ),
            'subheadline'    => self::get_meta_or_option( 'kk_hero_subheadline', 'options', 'From grand 2,500–guest destination weddings to high-table presidential galas, we orchestrate Michelin-standard culinary production powered by a 12,000 sq.ft commercial kitchen and cold-chain convoys.' ),
            'ctaText'        => self::get_meta_or_option( 'kk_hero_cta_text', 'options', 'Explore Banquet Packages' ),
            'ctaLink'        => self::get_meta_or_option( 'kk_hero_cta_link', 'options', '/packages' ),
        );

        return rest_ensure_response( $response );
    }

    /**
     * 3. GET /wp-json/kateringking/v1/trust-stats
     */
    public static function get_trust_stats() {
        $posts = get_posts( array(
            'post_type'      => 'trust_stat',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $stats = array();
        $idx = 1;
        foreach ( $posts as $p ) {
            $stats[] = array(
                'id'     => $idx++,
                'value'  => (float) self::get_meta_or_option( 'stat_value', $p->ID, 0 ),
                'suffix' => (string) self::get_meta_or_option( 'stat_suffix', $p->ID, '+' ),
                'label'  => self::get_meta_or_option( 'stat_label', $p->ID, $p->post_title ),
                'sub'    => (string) self::get_meta_or_option( 'stat_sub', $p->ID, '' ),
            );
        }

        return rest_ensure_response( $stats );
    }

    /**
     * 4. GET /wp-json/kateringking/v1/production-metrics
     */
    public static function get_production_metrics() {
        $posts = get_posts( array(
            'post_type'      => 'production_metric',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $metrics = array();
        $idx = 1;
        foreach ( $posts as $p ) {
            $metrics[] = array(
                'id'     => $idx++,
                'icon'   => (string) self::get_meta_or_option( 'metric_icon', $p->ID, 'building' ),
                'metric' => (string) self::get_meta_or_option( 'metric_value', $p->ID, '' ),
                'unit'   => (string) self::get_meta_or_option( 'metric_unit', $p->ID, '' ),
                'title'  => self::get_meta_or_option( 'metric_title', $p->ID, $p->post_title ),
                'desc'   => (string) self::get_meta_or_option( 'metric_desc', $p->ID, '' ),
            );
        }

        $response = array(
            'kicker'   => 'Engineering Culinary Perfection',
            'title'    => 'The Scale & Precision Behind Our Production',
            'subtitle' => 'Behind every royal banquet lies an industrial powerhouse of commercial culinary infrastructure, temperature-controlled logistics, and synchronized execution.',
            'metrics'  => $metrics,
        );

        return rest_ensure_response( $response );
    }

    /**
     * 5. GET /wp-json/kateringking/v1/packages
     * Returns packages with nested dishes.
     */
    public static function get_packages() {
        $package_posts = get_posts( array(
            'post_type'      => 'catering_package',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $packages = array();

        // Fetch all dishes in a single fast query
        $all_dish_posts = get_posts( array(
            'post_type'      => 'package_dish',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $dishes_by_package = array();
        foreach ( $all_dish_posts as $dish ) {
            $parent_pkg = (int) self::get_meta_or_option( 'dish_parent_package', $dish->ID, 0 );
            $dish_img = self::resolve_image_url(
                self::get_meta_or_option( 'dish_image', $dish->ID ),
                $dish->ID
            );
            $dishes_by_package[ $parent_pkg ][] = array(
                'id'          => $dish->post_name ? $dish->post_name : 'dish-' . $dish->ID,
                'name'        => html_entity_decode( $dish->post_title, ENT_QUOTES | ENT_HTML5, 'UTF-8' ),
                'course'      => (string) self::get_meta_or_option( 'dish_course', $dish->ID, 'Main Course' ),
                'dietary'     => (string) self::get_meta_or_option( 'dish_dietary', $dish->ID, 'Chef Signature' ),
                'chefNote'    => (string) self::get_meta_or_option( 'dish_chef_note', $dish->ID, '' ),
                'description' => (string) self::get_meta_or_option( 'dish_description', $dish->ID, '' ),
                'image'       => $dish_img,
            );
        }

        foreach ( $package_posts as $pkg ) {
            // Parse inclusions textarea (one per line)
            $raw_inclusions = self::get_meta_or_option( 'pkg_inclusions', $pkg->ID, '' );
            $inclusions = array();
            if ( ! empty( $raw_inclusions ) ) {
                $lines = explode( "\n", str_replace( "\r", '', $raw_inclusions ) );
                foreach ( $lines as $line ) {
                    $trimmed = trim( $line );
                    if ( ! empty( $trimmed ) ) {
                        $inclusions[] = $trimmed;
                    }
                }
            }

            // Cover image
            $cover_img = self::resolve_image_url(
                self::get_meta_or_option( 'pkg_cover_image', $pkg->ID ),
                $pkg->ID
            );

            $dishes = isset( $dishes_by_package[ $pkg->ID ] ) ? $dishes_by_package[ $pkg->ID ] : array();

            $packages[] = array(
                'id'          => $pkg->post_name,
                'name'        => html_entity_decode( $pkg->post_title, ENT_QUOTES | ENT_HTML5, 'UTF-8' ),
                'minGuests'   => (string) self::get_meta_or_option( 'pkg_min_guests', $pkg->ID, '150 - 1,500+ guests' ),
                'isPopular'   => (bool) self::get_meta_or_option( 'pkg_is_popular', $pkg->ID, false ),
                'image'       => $cover_img,
                'description' => (string) self::get_meta_or_option( 'pkg_description', $pkg->ID, '' ),
                'bestFor'     => (string) self::get_meta_or_option( 'pkg_best_for', $pkg->ID, '' ),
                'inclusions'  => $inclusions,
                'dishes'      => $dishes,
            );
        }

        return rest_ensure_response( $packages );
    }

    /**
     * 6. GET /wp-json/kateringking/v1/gallery
     */
    public static function get_gallery() {
        // Fetch categories
        $terms = get_terms( array(
            'taxonomy'   => 'gallery_category',
            'hide_empty' => false,
        ) );

        $categories = array(
            array( 'id' => 'all', 'label' => 'All' ),
        );

        $term_map = array();
        if ( ! is_wp_error( $terms ) && ! empty( $terms ) ) {
            foreach ( $terms as $term ) {
                $categories[] = array(
                    'id'    => $term->slug,
                    'label' => $term->name,
                );
                $term_map[ $term->term_id ] = array(
                    'slug' => $term->slug,
                    'name' => $term->name,
                );
            }
        }

        // Fetch gallery items
        $posts = get_posts( array(
            'post_type'      => 'gallery_item',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $items = array();
        $idx = 1;
        foreach ( $posts as $p ) {
            $p_terms = wp_get_post_terms( $p->ID, 'gallery_category' );
            $cat_slug = 'all';
            $cat_label = 'All';

            if ( ! is_wp_error( $p_terms ) && ! empty( $p_terms ) ) {
                $cat_slug = $p_terms[0]->slug;
                $cat_label = $p_terms[0]->name;
            }

            $img = self::resolve_image_url(
                self::get_meta_or_option( 'gallery_image', $p->ID ),
                $p->ID
            );

            $items[] = array(
                'id'            => $idx++,
                'title'         => $p->post_title,
                'category'      => $cat_slug,
                'categoryLabel' => $cat_label,
                'image'         => $img,
                'caption'       => (string) self::get_meta_or_option( 'gallery_caption', $p->ID, '' ),
            );
        }

        return rest_ensure_response( array(
            'categories' => $categories,
            'items'      => $items,
        ) );
    }

    /**
     * 7. GET /wp-json/kateringking/v1/event-reels
     */
    public static function get_event_reels() {
        $posts = get_posts( array(
            'post_type'      => 'event_reel',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $reels = array();
        $idx = 1;
        foreach ( $posts as $p ) {
            $thumb = self::resolve_image_url(
                self::get_meta_or_option( 'reel_thumbnail', $p->ID ),
                $p->ID
            );

            $reels[] = array(
                'id'           => $p->post_name ? $p->post_name : 'reel-' . $idx++,
                'title'        => $p->post_title,
                'eventType'    => (string) self::get_meta_or_option( 'reel_event_type', $p->ID, 'Heritage Palace Wedding' ),
                'guests'       => (string) self::get_meta_or_option( 'reel_guests', $p->ID, '1,200 Guests' ),
                'location'     => (string) self::get_meta_or_option( 'reel_location', $p->ID, 'Udaipur, Rajasthan' ),
                'duration'     => (string) self::get_meta_or_option( 'reel_duration', $p->ID, '0:45' ),
                'thumbnail'    => $thumb,
                'highlightTag' => (string) self::get_meta_or_option( 'reel_highlight_tag', $p->ID, '' ),
                'recapNotes'   => (string) self::get_meta_or_option( 'reel_recap_notes', $p->ID, '' ),
                'videoUrl'     => (string) self::get_meta_or_option( 'reel_video_url', $p->ID, '' ),
            );
        }

        return rest_ensure_response( $reels );
    }

    /**
     * 8. GET /wp-json/kateringking/v1/testimonials
     */
    public static function get_testimonials() {
        $posts = get_posts( array(
            'post_type'      => 'testimonial',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $testimonials = array();
        $idx = 1;
        foreach ( $posts as $p ) {
            $avatar = self::resolve_image_url(
                self::get_meta_or_option( 'test_avatar', $p->ID ),
                $p->ID
            );

            $testimonials[] = array(
                'id'     => $idx++,
                'name'   => self::get_meta_or_option( 'test_client_name', $p->ID, $p->post_title ),
                'event'  => (string) self::get_meta_or_option( 'test_event', $p->ID, '' ),
                'rating' => (int) self::get_meta_or_option( 'test_rating', $p->ID, 5 ),
                'quote'  => (string) self::get_meta_or_option( 'test_quote', $p->ID, '' ),
                'avatar' => $avatar,
            );
        }

        return rest_ensure_response( $testimonials );
    }

    /**
     * 9. GET /wp-json/kateringking/v1/about
     */
    public static function get_about() {
        // Service cards
        $service_posts = get_posts( array(
            'post_type'      => 'service_card',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $services = array();
        $idx = 1;
        foreach ( $service_posts as $sp ) {
            $services[] = array(
                'id'    => $idx++,
                'icon'  => (string) self::get_meta_or_option( 'service_icon', $sp->ID, 'crown' ),
                'title' => $sp->post_title,
                'desc'  => (string) self::get_meta_or_option( 'service_desc', $sp->ID, '' ),
                'tag'   => (string) self::get_meta_or_option( 'service_tag', $sp->ID, 'Grand Celebrations' ),
            );
        }

        $philo_img = self::resolve_image_url(
            self::get_meta_or_option( 'kk_about_philosophy_image', 'options' )
        );

        $response = array(
            'kicker'     => self::get_meta_or_option( 'kk_about_kicker', 'options', 'About KateringKing' ),
            'title'      => self::get_meta_or_option( 'kk_about_title', 'options', 'Elevating the Art of Hospitality' ),
            'subtitle'   => self::get_meta_or_option( 'kk_about_subtitle', 'options', 'At KateringKing.com, we believe that exceptional catering goes beyond just great food — it requires precision, formal expertise, and an unwavering commitment to service.' ),
            'philosophy' => array(
                'heading'     => self::get_meta_or_option( 'kk_about_philosophy_heading', 'options', "We don't just cook for your guests; we engineer flawless dining experiences." ),
                'description' => self::get_meta_or_option( 'kk_about_philosophy_desc', 'options', "Backed by formal hotel management education and decades of industry experience, we bring a refined, structured approach to every wedding, corporate gala, and private event we undertake." ),
                'image'       => $philo_img,
                'points'      => array(
                    array(
                        'title' => self::get_meta_or_option( 'kk_about_point_1_title', 'options', 'Formal Hotel Management Expertise' ),
                        'desc'  => self::get_meta_or_option( 'kk_about_point_1_desc', 'options', 'Trained in classical hospitality protocols, precision service standards, and culinary hygiene science.' ),
                    ),
                    array(
                        'title' => self::get_meta_or_option( 'kk_about_point_2_title', 'options', 'Michelin & 5-Star Hotel Pedigree' ),
                        'desc'  => self::get_meta_or_option( 'kk_about_point_2_desc', 'options', 'Our master chefs bring pedigrees from Oberoi, Taj, and Michelin-star kitchens, infusing haute cuisine finesse into grand-scale banquet execution.' ),
                    ),
                    array(
                        'title' => self::get_meta_or_option( 'kk_about_point_3_title', 'options', 'Synchronized White-Glove Staging' ),
                        'desc'  => self::get_meta_or_option( 'kk_about_point_3_desc', 'options', 'Uniformed banquet stewards operating under strict military hospitality checklists for timely, faultless banquet service.' ),
                    ),
                ),
            ),
            'services'   => $services,
        );

        return rest_ensure_response( $response );
    }

    /**
     * 10. GET /wp-json/kateringking/v1/faqs
     */
    public static function get_faqs() {
        $posts = get_posts( array(
            'post_type'      => 'faq_item',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $faqs = array();
        $idx = 1;
        foreach ( $posts as $p ) {
            $faqs[] = array(
                'id' => $idx++,
                'q'  => self::get_meta_or_option( 'faq_question', $p->ID, $p->post_title ),
                'a'  => (string) self::get_meta_or_option( 'faq_answer', $p->ID, '' ),
            );
        }

        return rest_ensure_response( $faqs );
    }

    /**
     * 11. GET /wp-json/kateringking/v1/menus
     */
    public static function get_menus() {
        // Check if a WordPress navigation menu is registered for primary nav
        $locations = get_nav_menu_locations();
        $menu_items = array();

        if ( isset( $locations['primary'] ) ) {
            $menu = wp_get_nav_menu_object( $locations['primary'] );
            if ( $menu ) {
                $wp_items = wp_get_nav_menu_items( $menu->term_id );
                if ( ! empty( $wp_items ) ) {
                    foreach ( $wp_items as $item ) {
                        // Make URL relative if possible
                        $url = wp_make_link_relative( $item->url );
                        $menu_items[] = array(
                            'label' => $item->title,
                            'to'    => ! empty( $url ) ? $url : '/',
                        );
                    }
                }
            }
        }

        // Default navigation links if no WP menu assigned
        if ( empty( $menu_items ) ) {
            $menu_items = array(
                array( 'label' => 'Home',     'to' => '/' ),
                array( 'label' => 'Packages', 'to' => '/packages' ),
                array( 'label' => 'About',    'to' => '/about' ),
                array( 'label' => 'Gallery',  'to' => '/gallery' ),
                array( 'label' => 'Reviews',  'to' => '/reviews' ),
                array( 'label' => 'Contact',  'to' => '/contact' ),
            );
        }

        return rest_ensure_response( $menu_items );
    }

    /**
     * 12. GET /wp-json/kateringking/v1/custom-features
     */
    public static function get_custom_features() {
        $posts = get_posts( array(
            'post_type'      => 'custom_feature',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $features = array();
        $idx = 1;
        foreach ( $posts as $p ) {
            $features[] = array(
                'id'    => $idx++,
                'title' => self::get_meta_or_option( 'feat_title', $p->ID, $p->post_title ),
                'desc'  => (string) self::get_meta_or_option( 'feat_desc', $p->ID, '' ),
                'tag'   => (string) self::get_meta_or_option( 'feat_tag', $p->ID, 'Strict Segregation' ),
            );
        }

        return rest_ensure_response( $features );
    }

    /**
     * 13. GET /wp-json/kateringking/v1/reel-highlights
     */
    public static function get_reel_highlights() {
        $posts = get_posts( array(
            'post_type'      => 'reel_highlight',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'post_status'    => 'publish',
        ) );

        $highlights = array();
        $idx = 1;
        foreach ( $posts as $p ) {
            $highlights[] = array(
                'id'    => $idx++,
                'title' => self::get_meta_or_option( 'highlight_title', $p->ID, $p->post_title ),
                'stats' => (string) self::get_meta_or_option( 'highlight_stats', $p->ID, '' ),
                'desc'  => (string) self::get_meta_or_option( 'highlight_desc', $p->ID, '' ),
            );
        }

        return rest_ensure_response( $highlights );
    }

    /**
     * 14. GET /wp-json/kateringking/v1/form-options
     */
    public static function get_form_options() {
        $raw_events = self::get_meta_or_option( 'kk_form_event_types', 'options', '' );
        $raw_guests = self::get_meta_or_option( 'kk_form_guest_ranges', 'options', '' );

        $event_types = array();
        if ( ! empty( $raw_events ) ) {
            $lines = explode( "\n", str_replace( "\r", '', $raw_events ) );
            foreach ( $lines as $l ) {
                $trimmed = trim( $l );
                if ( ! empty( $trimmed ) ) {
                    $event_types[] = $trimmed;
                }
            }
        }
        if ( empty( $event_types ) ) {
            $event_types = array(
                'Grand Royal Wedding',
                'Wedding Reception / Sangeet',
                'Executive Corporate Gala / Summit',
                'Milestone Birthday / Anniversary',
                'Private Estate Soirée',
                'Other Celebration',
            );
        }

        $guest_ranges = array();
        if ( ! empty( $raw_guests ) ) {
            $lines = explode( "\n", str_replace( "\r", '', $raw_guests ) );
            foreach ( $lines as $l ) {
                $trimmed = trim( $l );
                if ( ! empty( $trimmed ) ) {
                    $guest_ranges[] = $trimmed;
                }
            }
        }
        if ( empty( $guest_ranges ) ) {
            $guest_ranges = array(
                '50 - 100 Guests',
                '100 - 250 Guests',
                '250 - 500 Guests',
                '500 - 1,000 Guests',
                '1,000+ Royal Dignitaries',
            );
        }

        return rest_ensure_response( array(
            'eventTypes'  => $event_types,
            'guestRanges' => $guest_ranges,
        ) );
    }

    /**
     * Run the content seeder via REST API.
     */
    public static function run_seed() {
        require_once KK_CMS_PATH . 'includes/class-seeder.php';
        KK_Seeder::run();
        return rest_ensure_response( array(
            'success' => true,
            'message' => 'All 14 content sections seeded successfully into WordPress!',
        ) );
    }
}
