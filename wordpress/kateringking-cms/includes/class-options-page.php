<?php
/**
 * Options Pages Registrar
 *
 * Registers ACF Options pages for global site settings, hero section,
 * about section, footer settings, and enquiry form dropdowns.
 *
 * @package KateringKing_CMS
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class KK_Options_Page {

    /**
     * Register ACF Options Pages.
     */
    public static function register_pages() {
        if ( ! function_exists( 'acf_add_options_page' ) ) {
            return;
        }

        // Top-level menu page
        acf_add_options_page( array(
            'page_title'    => __( 'KateringKing Settings', 'kateringking-cms' ),
            'menu_title'    => __( 'KK Settings', 'kateringking-cms' ),
            'menu_slug'     => 'kateringking-settings',
            'capability'    => 'manage_options',
            'position'      => 19,
            'icon_url'      => 'dashicons-crown',
            'redirect'      => true,
        ) );

        // 1. Site Settings (Brand, Phone, WhatsApp, Social)
        acf_add_options_sub_page( array(
            'page_title'    => __( 'Site Settings (Global)', 'kateringking-cms' ),
            'menu_title'    => __( 'Site Settings', 'kateringking-cms' ),
            'parent_slug'   => 'kateringking-settings',
            'menu_slug'     => 'kateringking-site-settings',
            'capability'    => 'manage_options',
        ) );

        // 2. Hero Section Settings
        acf_add_options_sub_page( array(
            'page_title'    => __( 'Hero Section Settings', 'kateringking-cms' ),
            'menu_title'    => __( 'Hero Section', 'kateringking-cms' ),
            'parent_slug'   => 'kateringking-settings',
            'menu_slug'     => 'kateringking-hero-settings',
            'capability'    => 'manage_options',
        ) );

        // 3. About Section Settings
        acf_add_options_sub_page( array(
            'page_title'    => __( 'About & Legacy Settings', 'kateringking-cms' ),
            'menu_title'    => __( 'About Section', 'kateringking-cms' ),
            'parent_slug'   => 'kateringking-settings',
            'menu_slug'     => 'kateringking-about-settings',
            'capability'    => 'manage_options',
        ) );

        // 4. Footer Settings
        acf_add_options_sub_page( array(
            'page_title'    => __( 'Footer & CTA Settings', 'kateringking-cms' ),
            'menu_title'    => __( 'Footer & CTA', 'kateringking-cms' ),
            'parent_slug'   => 'kateringking-settings',
            'menu_slug'     => 'kateringking-footer-settings',
            'capability'    => 'manage_options',
        ) );

        // 5. Form Dropdowns Settings
        acf_add_options_sub_page( array(
            'page_title'    => __( 'Enquiry Form Dropdowns', 'kateringking-cms' ),
            'menu_title'    => __( 'Form Dropdowns', 'kateringking-cms' ),
            'parent_slug'   => 'kateringking-settings',
            'menu_slug'     => 'kateringking-form-dropdowns',
            'capability'    => 'manage_options',
        ) );
    }
}
