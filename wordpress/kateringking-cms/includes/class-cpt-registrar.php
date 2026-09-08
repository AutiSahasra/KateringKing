<?php
/**
 * Custom Post Types & Taxonomy Registrar
 *
 * Registers all 11 Custom Post Types and 1 Taxonomy for KateringKing CMS.
 *
 * @package KateringKing_CMS
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class KK_CPT_Registrar {

    /**
     * Register all custom post types and taxonomies.
     */
    public static function register_all() {
        self::register_taxonomies();
        self::register_post_types();
    }

    /**
     * Register Taxonomies.
     */
    private static function register_taxonomies() {
        // Gallery Category Taxonomy
        $labels = array(
            'name'                       => _x( 'Gallery Categories', 'Taxonomy General Name', 'kateringking-cms' ),
            'singular_name'              => _x( 'Gallery Category', 'Taxonomy Singular Name', 'kateringking-cms' ),
            'menu_name'                  => __( 'Categories', 'kateringking-cms' ),
            'all_items'                  => __( 'All Categories', 'kateringking-cms' ),
            'parent_item'                => __( 'Parent Category', 'kateringking-cms' ),
            'parent_item_colon'          => __( 'Parent Category:', 'kateringking-cms' ),
            'new_item_name'              => __( 'New Category Name', 'kateringking-cms' ),
            'add_new_item'               => __( 'Add New Category', 'kateringking-cms' ),
            'edit_item'                  => __( 'Edit Category', 'kateringking-cms' ),
            'update_item'                => __( 'Update Category', 'kateringking-cms' ),
            'view_item'                  => __( 'View Category', 'kateringking-cms' ),
            'separate_items_with_commas' => __( 'Separate categories with commas', 'kateringking-cms' ),
            'add_or_remove_items'        => __( 'Add or remove categories', 'kateringking-cms' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'kateringking-cms' ),
            'popular_items'              => __( 'Popular Categories', 'kateringking-cms' ),
            'search_items'               => __( 'Search Categories', 'kateringking-cms' ),
            'not_found'                  => __( 'Not Found', 'kateringking-cms' ),
        );

        $args = array(
            'labels'                     => $labels,
            'hierarchical'               => true,
            'public'                     => true,
            'show_ui'                    => true,
            'show_admin_column'          => true,
            'show_in_nav_menus'          => false,
            'show_tagcloud'              => false,
            'show_in_rest'               => true,
            'rest_base'                  => 'gallery_categories',
            'rewrite'                    => array( 'slug' => 'gallery-category' ),
        );

        register_taxonomy( 'gallery_category', array( 'gallery_item' ), $args );
    }

    /**
     * Register all Custom Post Types.
     */
    private static function register_post_types() {
        // 1. Trust Stats (Hero & Reviews stats)
        self::register_single_cpt(
            'trust_stat',
            'Trust Stat',
            'Trust Stats',
            'dashicons-chart-bar',
            20,
            array( 'title', 'custom-fields', 'page-attributes' ),
            'trust_stats'
        );

        // 2. Production Scale Metrics
        self::register_single_cpt(
            'production_metric',
            'Production Metric',
            'Production Metrics',
            'dashicons-building',
            21,
            array( 'title', 'custom-fields', 'page-attributes' ),
            'production_metrics'
        );

        // 3. Catering Packages
        self::register_single_cpt(
            'catering_package',
            'Catering Package',
            'Catering Packages',
            'dashicons-food',
            22,
            array( 'title', 'thumbnail', 'custom-fields', 'page-attributes' ),
            'packages'
        );

        // 4. Package Dishes (Child items linked to Catering Packages)
        self::register_single_cpt(
            'package_dish',
            'Package Dish',
            'Package Dishes',
            'dashicons-carrot',
            23,
            array( 'title', 'thumbnail', 'custom-fields', 'page-attributes' ),
            'dishes'
        );

        // 5. Gallery Items
        self::register_single_cpt(
            'gallery_item',
            'Gallery Item',
            'Gallery Items',
            'dashicons-format-gallery',
            24,
            array( 'title', 'thumbnail', 'custom-fields', 'page-attributes' ),
            'gallery_items',
            array( 'gallery_category' )
        );

        // 6. Event Reels
        self::register_single_cpt(
            'event_reel',
            'Event Reel',
            'Event Reels',
            'dashicons-video-alt3',
            25,
            array( 'title', 'thumbnail', 'custom-fields', 'page-attributes' ),
            'event_reels'
        );

        // 7. Testimonials
        self::register_single_cpt(
            'testimonial',
            'Testimonial',
            'Testimonials',
            'dashicons-star-filled',
            26,
            array( 'title', 'thumbnail', 'custom-fields', 'page-attributes' ),
            'testimonials'
        );

        // 8. FAQ Items
        self::register_single_cpt(
            'faq_item',
            'FAQ Item',
            'FAQ Items',
            'dashicons-editor-help',
            27,
            array( 'title', 'custom-fields', 'page-attributes' ),
            'faq_items'
        );

        // 9. Service Cards (About Legacy Section)
        self::register_single_cpt(
            'service_card',
            'Service Card',
            'Service Cards',
            'dashicons-heart',
            28,
            array( 'title', 'custom-fields', 'page-attributes' ),
            'service_cards'
        );

        // 10. Custom Features (Packages Page Dietary/Tailoring Features)
        self::register_single_cpt(
            'custom_feature',
            'Custom Feature',
            'Custom Features',
            'dashicons-star-empty',
            29,
            array( 'title', 'custom-fields', 'page-attributes' ),
            'custom_features'
        );

        // 11. Reel Highlights (Reels Page Behind-The-Scenes Highlights)
        self::register_single_cpt(
            'reel_highlight',
            'Reel Highlight',
            'Reel Highlights',
            'dashicons-visibility',
            30,
            array( 'title', 'custom-fields', 'page-attributes' ),
            'reel_highlights'
        );
    }

    /**
     * Helper to register a single Custom Post Type.
     */
    private static function register_single_cpt(
        $slug,
        $singular,
        $plural,
        $icon,
        $position = 20,
        $supports = array( 'title', 'custom-fields' ),
        $rest_base = '',
        $taxonomies = array()
    ) {
        $labels = array(
            'name'                  => _x( $plural, 'Post Type General Name', 'kateringking-cms' ),
            'singular_name'         => _x( $singular, 'Post Type Singular Name', 'kateringking-cms' ),
            'menu_name'             => __( $plural, 'kateringking-cms' ),
            'name_admin_bar'        => __( $singular, 'kateringking-cms' ),
            'archives'              => sprintf( __( '%s Archives', 'kateringking-cms' ), $singular ),
            'attributes'            => sprintf( __( '%s Attributes', 'kateringking-cms' ), $singular ),
            'parent_item_colon'     => sprintf( __( 'Parent %s:', 'kateringking-cms' ), $singular ),
            'all_items'             => sprintf( __( 'All %s', 'kateringking-cms' ), $plural ),
            'add_new_item'          => sprintf( __( 'Add New %s', 'kateringking-cms' ), $singular ),
            'add_new'               => __( 'Add New', 'kateringking-cms' ),
            'new_item'              => sprintf( __( 'New %s', 'kateringking-cms' ), $singular ),
            'edit_item'             => sprintf( __( 'Edit %s', 'kateringking-cms' ), $singular ),
            'update_item'           => sprintf( __( 'Update %s', 'kateringking-cms' ), $singular ),
            'view_item'             => sprintf( __( 'View %s', 'kateringking-cms' ), $singular ),
            'view_items'            => sprintf( __( 'View %s', 'kateringking-cms' ), $plural ),
            'search_items'          => sprintf( __( 'Search %s', 'kateringking-cms' ), $plural ),
            'not_found'             => __( 'Not found', 'kateringking-cms' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'kateringking-cms' ),
            'featured_image'        => __( 'Featured Image', 'kateringking-cms' ),
            'set_featured_image'    => __( 'Set featured image', 'kateringking-cms' ),
            'remove_featured_image' => __( 'Remove featured image', 'kateringking-cms' ),
            'use_featured_image'    => __( 'Use as featured image', 'kateringking-cms' ),
        );

        $args = array(
            'label'                 => $singular,
            'labels'                => $labels,
            'supports'              => $supports,
            'taxonomies'            => $taxonomies,
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => $position,
            'menu_icon'             => $icon,
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => false,
            'can_export'            => true,
            'has_archive'           => false,
            'exclude_from_search'   => true,
            'publicly_queryable'    => true,
            'capability_type'       => 'post',
            'show_in_rest'          => true,
            'rest_base'             => ! empty( $rest_base ) ? $rest_base : $slug,
        );

        register_post_type( $slug, $args );
    }
}
