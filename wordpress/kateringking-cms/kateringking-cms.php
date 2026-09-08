<?php
/**
 * Plugin Name:       KateringKing CMS
 * Plugin URI:        https://kateringking.com
 * Description:       Headless CMS backend for KateringKing luxury catering website. Provides Custom Post Types, ACF field groups, REST API endpoints, and Options pages for managing all website content from the WordPress dashboard.
 * Version:           1.0.0
 * Author:            KateringKing Dev Team
 * Author URI:        https://kateringking.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kateringking-cms
 * Domain Path:       /languages
 * Requires at least: 6.0
 * Requires PHP:      7.4
 */

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Plugin constants
define( 'KK_CMS_VERSION', '1.0.0' );
define( 'KK_CMS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'KK_CMS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'KK_CMS_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );

/**
 * Main plugin class — singleton pattern.
 */
final class KateringKing_CMS {

    /** @var KateringKing_CMS|null */
    private static $instance = null;

    /**
     * Get singleton instance.
     */
    public static function instance() {
        if ( null === self::$instance ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor — hook into WordPress lifecycle.
     */
    private function __construct() {
        $this->load_dependencies();
        $this->init_hooks();
    }

    /**
     * Include all required class files.
     */
    private function load_dependencies() {
        require_once KK_CMS_PLUGIN_DIR . 'includes/class-cpt-registrar.php';
        require_once KK_CMS_PLUGIN_DIR . 'includes/class-acf-fields.php';
        require_once KK_CMS_PLUGIN_DIR . 'includes/class-options-page.php';
        require_once KK_CMS_PLUGIN_DIR . 'includes/class-rest-api.php';
        require_once KK_CMS_PLUGIN_DIR . 'includes/class-image-optimizer.php';
        require_once KK_CMS_PLUGIN_DIR . 'includes/class-seeder.php';
    }

    /**
     * Register all WordPress hooks and filters.
     */
    private function init_hooks() {
        // Register Custom Post Types & Taxonomies
        add_action( 'init', array( 'KK_CPT_Registrar', 'register_all' ) );

        // Initialize Seeder admin actions
        if ( is_admin() ) {
            add_action( 'init', array( 'KK_Seeder', 'init' ) );
        }

        // Register ACF field groups (after ACF is loaded)
        add_action( 'acf/init', array( 'KK_ACF_Fields', 'register_all' ) );

        // Register Options Pages (after ACF is loaded)
        add_action( 'acf/init', array( 'KK_Options_Page', 'register_pages' ) );

        // Register custom REST API endpoints
        add_action( 'rest_api_init', array( 'KK_REST_API', 'register_routes' ) );

        // Image optimization hooks
        add_action( 'init', array( 'KK_Image_Optimizer', 'init' ) );

        // Enable CORS for headless frontend
        add_action( 'rest_api_init', array( $this, 'add_cors_headers' ) );

        // Enqueue admin styles
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_styles' ) );

        // Add custom admin menu order
        add_filter( 'custom_menu_order', '__return_true' );
        add_filter( 'menu_order', array( $this, 'custom_menu_order' ) );

        // Flush rewrite rules on activation
        register_activation_hook( __FILE__, array( $this, 'activate' ) );
        register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );
    }

    /**
     * Add CORS headers for headless React frontend.
     * Allows requests from localhost dev server and production domain.
     */
    public function add_cors_headers() {
        // Remove default WordPress CORS handling
        remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );

        add_filter( 'rest_pre_serve_request', function( $served ) {
            $origin = isset( $_SERVER['HTTP_ORIGIN'] ) ? $_SERVER['HTTP_ORIGIN'] : '*';
            header( 'Access-Control-Allow-Origin: ' . ( $origin ? $origin : '*' ) );
            header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
            header( 'Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept' );
            if ( $origin && $origin !== '*' ) {
                header( 'Access-Control-Allow-Credentials: true' );
            }
            return $served;
        });

        // Handle OPTIONS preflight early
        if ( isset( $_SERVER['REQUEST_METHOD'] ) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS' ) {
            add_action( 'init', function() {
                $origin = isset( $_SERVER['HTTP_ORIGIN'] ) ? $_SERVER['HTTP_ORIGIN'] : '*';
                header( 'Access-Control-Allow-Origin: ' . ( $origin ? $origin : '*' ) );
                header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
                header( 'Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept' );
                status_header( 200 );
                exit;
            } );
        }
    }

    /**
     * Enqueue admin-specific styles for better dashboard UX.
     */
    public function enqueue_admin_styles() {
        wp_enqueue_style(
            'kateringking-admin',
            KK_CMS_PLUGIN_URL . 'assets/admin.css',
            array(),
            KK_CMS_VERSION
        );
    }

    /**
     * Custom admin menu order — group all KateringKing CPTs together.
     */
    public function custom_menu_order( $menu_order ) {
        return $menu_order; // Default for now, can be customized later
    }

    /**
     * Plugin activation — flush rewrite rules for new CPTs.
     */
    public function activate() {
        KK_CPT_Registrar::register_all();
        flush_rewrite_rules();
    }

    /**
     * Plugin deactivation — clean up rewrite rules.
     */
    public function deactivate() {
        flush_rewrite_rules();
    }
}

/**
 * Initialize the plugin.
 */
function kateringking_cms() {
    return KateringKing_CMS::instance();
}

// Boot the plugin
kateringking_cms();
