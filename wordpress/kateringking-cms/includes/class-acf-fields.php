<?php
/**
 * ACF Field Groups Registration
 *
 * Programmatically defines all ACF field groups for KateringKing CMS.
 *
 * @package KateringKing_CMS
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class KK_ACF_Fields {

    /**
     * Register all field groups.
     */
    public static function register_all() {
        if ( ! function_exists( 'acf_add_local_field_group' ) ) {
            return;
        }

        self::register_site_settings_fields();
        self::register_hero_fields();
        self::register_about_fields();
        self::register_footer_fields();
        self::register_form_dropdowns_fields();
        self::register_trust_stat_fields();
        self::register_production_metric_fields();
        self::register_catering_package_fields();
        self::register_package_dish_fields();
        self::register_gallery_item_fields();
        self::register_event_reel_fields();
        self::register_testimonial_fields();
        self::register_faq_fields();
        self::register_service_card_fields();
        self::register_custom_feature_fields();
        self::register_reel_highlight_fields();
    }

    /**
     * 1. Site Settings (Options Page)
     */
    private static function register_site_settings_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_site_settings',
            'title' => __( 'Site Settings (Global)', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_kk_brand_name',
                    'label' => __( 'Brand Name', 'kateringking-cms' ),
                    'name' => 'kk_brand_name',
                    'type' => 'text',
                    'default_value' => 'KateringKing',
                ),
                array(
                    'key' => 'field_kk_tagline',
                    'label' => __( 'Tagline', 'kateringking-cms' ),
                    'name' => 'kk_tagline',
                    'type' => 'text',
                    'default_value' => 'Royal Culinary Art & Bespoke Event Banquets',
                ),
                array(
                    'key' => 'field_kk_description',
                    'label' => __( 'Description', 'kateringking-cms' ),
                    'name' => 'kk_description',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'Creating unforgettable gastronomic journeys for royal weddings, executive galas, and landmark celebrations for over 25 years.',
                ),
                array(
                    'key' => 'field_kk_phone',
                    'label' => __( 'Phone Number (Formatted)', 'kateringking-cms' ),
                    'name' => 'kk_phone',
                    'type' => 'text',
                    'default_value' => '+91 77779 98789',
                ),
                array(
                    'key' => 'field_kk_phone_display',
                    'label' => __( 'Phone Display', 'kateringking-cms' ),
                    'name' => 'kk_phone_display',
                    'type' => 'text',
                    'default_value' => '77 77 99 87 89',
                ),
                array(
                    'key' => 'field_kk_phone_intl_display',
                    'label' => __( 'Phone Intl Display', 'kateringking-cms' ),
                    'name' => 'kk_phone_intl_display',
                    'type' => 'text',
                    'default_value' => '+91 77 77 99 87 89',
                ),
                array(
                    'key' => 'field_kk_whatsapp_number',
                    'label' => __( 'WhatsApp Number (Digits only with country code)', 'kateringking-cms' ),
                    'name' => 'kk_whatsapp_number',
                    'type' => 'text',
                    'default_value' => '917777998789',
                ),
                array(
                    'key' => 'field_kk_email',
                    'label' => __( 'Concierge Email', 'kateringking-cms' ),
                    'name' => 'kk_email',
                    'type' => 'email',
                    'default_value' => 'concierge@kateringking.com',
                ),
                array(
                    'key' => 'field_kk_address',
                    'label' => __( 'Studio / Office Address', 'kateringking-cms' ),
                    'name' => 'kk_address',
                    'type' => 'textarea',
                    'rows' => 2,
                    'default_value' => 'Heritage Estate, Royal Avenue, Jubilee Hills, Hyderabad',
                ),
                array(
                    'key' => 'field_kk_instagram_url',
                    'label' => __( 'Instagram Profile URL', 'kateringking-cms' ),
                    'name' => 'kk_instagram_url',
                    'type' => 'url',
                    'default_value' => 'https://www.instagram.com/kateringkingservices?igsh=MThtM3E2Y3BhdnNqag==',
                ),
                array(
                    'key' => 'field_kk_instagram_handle',
                    'label' => __( 'Instagram Handle', 'kateringking-cms' ),
                    'name' => 'kk_instagram_handle',
                    'type' => 'text',
                    'default_value' => '@kateringkingservices',
                ),
                array(
                    'key' => 'field_kk_facebook_url',
                    'label' => __( 'Facebook Page URL', 'kateringking-cms' ),
                    'name' => 'kk_facebook_url',
                    'type' => 'url',
                    'default_value' => 'https://www.facebook.com/kateringkingservices',
                ),
                array(
                    'key' => 'field_kk_facebook_handle',
                    'label' => __( 'Facebook Handle', 'kateringking-cms' ),
                    'name' => 'kk_facebook_handle',
                    'type' => 'text',
                    'default_value' => 'kateringkingservices',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'options_page',
                        'operator' => '==',
                        'value' => 'kateringking-site-settings',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 2. Hero Section (Options Page)
     */
    private static function register_hero_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_hero_settings',
            'title' => __( 'Hero Section Settings', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_kk_hero_headline_normal',
                    'label' => __( 'Headline (Normal Part)', 'kateringking-cms' ),
                    'name' => 'kk_hero_headline_normal',
                    'type' => 'text',
                    'default_value' => 'Royal Banquets Executed at',
                ),
                array(
                    'key' => 'field_kk_hero_headline_accent',
                    'label' => __( 'Headline (Accent Part - Gold & Italic)', 'kateringking-cms' ),
                    'name' => 'kk_hero_headline_accent',
                    'type' => 'text',
                    'default_value' => 'Industrial Scale.',
                ),
                array(
                    'key' => 'field_kk_hero_subheadline',
                    'label' => __( 'Subheadline', 'kateringking-cms' ),
                    'name' => 'kk_hero_subheadline',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'From grand 2,500–guest destination weddings to high-table presidential galas, we orchestrate Michelin-standard culinary production powered by a 12,000 sq.ft commercial kitchen and cold-chain convoys.',
                ),
                array(
                    'key' => 'field_kk_hero_cta_text',
                    'label' => __( 'CTA Button Text', 'kateringking-cms' ),
                    'name' => 'kk_hero_cta_text',
                    'type' => 'text',
                    'default_value' => 'Explore Banquet Packages',
                ),
                array(
                    'key' => 'field_kk_hero_cta_link',
                    'label' => __( 'CTA Button Link', 'kateringking-cms' ),
                    'name' => 'kk_hero_cta_link',
                    'type' => 'text',
                    'default_value' => '/packages',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'options_page',
                        'operator' => '==',
                        'value' => 'kateringking-hero-settings',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 3. About Section (Options Page)
     */
    private static function register_about_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_about_settings',
            'title' => __( 'About Section Settings', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_kk_about_kicker',
                    'label' => __( 'Section Kicker', 'kateringking-cms' ),
                    'name' => 'kk_about_kicker',
                    'type' => 'text',
                    'default_value' => 'About KateringKing',
                ),
                array(
                    'key' => 'field_kk_about_title',
                    'label' => __( 'Section Title', 'kateringking-cms' ),
                    'name' => 'kk_about_title',
                    'type' => 'text',
                    'default_value' => 'Elevating the Art of Hospitality',
                ),
                array(
                    'key' => 'field_kk_about_subtitle',
                    'label' => __( 'Section Subtitle', 'kateringking-cms' ),
                    'name' => 'kk_about_subtitle',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'At KateringKing.com, we believe that exceptional catering goes beyond just great food — it requires precision, formal expertise, and an unwavering commitment to service.',
                ),
                array(
                    'key' => 'field_kk_about_philosophy_heading',
                    'label' => __( 'Philosophy Heading', 'kateringking-cms' ),
                    'name' => 'kk_about_philosophy_heading',
                    'type' => 'text',
                    'default_value' => "We don't just cook for your guests; we engineer flawless dining experiences.",
                ),
                array(
                    'key' => 'field_kk_about_philosophy_desc',
                    'label' => __( 'Philosophy Description', 'kateringking-cms' ),
                    'name' => 'kk_about_philosophy_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'Backed by formal hotel management education and decades of industry experience, we bring a refined, structured approach to every wedding, corporate gala, and private event we undertake.',
                ),
                array(
                    'key' => 'field_kk_about_philosophy_image',
                    'label' => __( 'Philosophy Feature Image', 'kateringking-cms' ),
                    'name' => 'kk_about_philosophy_image',
                    'type' => 'image',
                    'return_format' => 'url',
                ),
                array(
                    'key' => 'field_kk_about_point_1_title',
                    'label' => __( 'Expertise Point 1 Title', 'kateringking-cms' ),
                    'name' => 'kk_about_point_1_title',
                    'type' => 'text',
                    'default_value' => 'Formal Hotel Management Expertise',
                ),
                array(
                    'key' => 'field_kk_about_point_1_desc',
                    'label' => __( 'Expertise Point 1 Description', 'kateringking-cms' ),
                    'name' => 'kk_about_point_1_desc',
                    'type' => 'textarea',
                    'rows' => 2,
                    'default_value' => 'Trained in classical hospitality protocols, precision service standards, and culinary hygiene science.',
                ),
                array(
                    'key' => 'field_kk_about_point_2_title',
                    'label' => __( 'Expertise Point 2 Title', 'kateringking-cms' ),
                    'name' => 'kk_about_point_2_title',
                    'type' => 'text',
                    'default_value' => 'Michelin & 5-Star Hotel Pedigree',
                ),
                array(
                    'key' => 'field_kk_about_point_2_desc',
                    'label' => __( 'Expertise Point 2 Description', 'kateringking-cms' ),
                    'name' => 'kk_about_point_2_desc',
                    'type' => 'textarea',
                    'rows' => 2,
                    'default_value' => 'Our master chefs bring pedigrees from Oberoi, Taj, and Michelin-star kitchens, infusing haute cuisine finesse into grand-scale banquet execution.',
                ),
                array(
                    'key' => 'field_kk_about_point_3_title',
                    'label' => __( 'Expertise Point 3 Title', 'kateringking-cms' ),
                    'name' => 'kk_about_point_3_title',
                    'type' => 'text',
                    'default_value' => 'Synchronized White-Glove Staging',
                ),
                array(
                    'key' => 'field_kk_about_point_3_desc',
                    'label' => __( 'Expertise Point 3 Description', 'kateringking-cms' ),
                    'name' => 'kk_about_point_3_desc',
                    'type' => 'textarea',
                    'rows' => 2,
                    'default_value' => 'Uniformed banquet stewards operating under strict military hospitality checklists for timely, faultless banquet service.',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'options_page',
                        'operator' => '==',
                        'value' => 'kateringking-about-settings',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 4. Footer Settings (Options Page)
     */
    private static function register_footer_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_footer_settings',
            'title' => __( 'Footer & CTA Settings', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_kk_footer_certifications',
                    'label' => __( 'Certifications Strip Text', 'kateringking-cms' ),
                    'name' => 'kk_footer_certifications',
                    'type' => 'text',
                    'default_value' => 'FSSAI Central Licensed • ISO 22000 & HACCP Certified • 5-Star Culinary Brigade',
                ),
                array(
                    'key' => 'field_kk_footer_cta_kicker',
                    'label' => __( 'CTA Banner Kicker', 'kateringking-cms' ),
                    'name' => 'kk_footer_cta_kicker',
                    'type' => 'text',
                    'default_value' => 'Direct Executive Concierge',
                ),
                array(
                    'key' => 'field_kk_footer_cta_title',
                    'label' => __( 'CTA Banner Title', 'kateringking-cms' ),
                    'name' => 'kk_footer_cta_title',
                    'type' => 'text',
                    'default_value' => 'Ready to Stage an Unforgettable Royal Banquet?',
                ),
                array(
                    'key' => 'field_kk_footer_cta_desc',
                    'label' => __( 'CTA Banner Description', 'kateringking-cms' ),
                    'name' => 'kk_footer_cta_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'Whether planning a 2,500-guest destination wedding or an exclusive executive gala, our banquet directors and Michelin-trained chefs ensure flawless execution.',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'options_page',
                        'operator' => '==',
                        'value' => 'kateringking-footer-settings',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 5. Form Dropdowns (Options Page)
     */
    private static function register_form_dropdowns_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_form_dropdowns',
            'title' => __( 'Enquiry Form Dropdowns', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_kk_form_event_types',
                    'label' => __( 'Event Types (One per line)', 'kateringking-cms' ),
                    'name' => 'kk_form_event_types',
                    'type' => 'textarea',
                    'rows' => 8,
                    'instructions' => __( 'Enter each event type on a new line. These populate the Occasion / Event Type dropdowns in EnquiryModal and ContactPage.', 'kateringking-cms' ),
                    'default_value' => "Grand Royal Wedding\nWedding Reception / Sangeet\nExecutive Corporate Gala / Summit\nMilestone Birthday / Anniversary\nPrivate Estate Soirée\nOther Celebration",
                ),
                array(
                    'key' => 'field_kk_form_guest_ranges',
                    'label' => __( 'Guest Count Ranges (One per line)', 'kateringking-cms' ),
                    'name' => 'kk_form_guest_ranges',
                    'type' => 'textarea',
                    'rows' => 6,
                    'instructions' => __( 'Enter each guest range on a new line. These populate the Estimated Guest Count dropdowns.', 'kateringking-cms' ),
                    'default_value' => "50 - 100 Guests\n100 - 250 Guests\n250 - 500 Guests\n500 - 1,000 Guests\n1,000+ Royal Dignitaries",
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'options_page',
                        'operator' => '==',
                        'value' => 'kateringking-form-dropdowns',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 6. Trust Stat CPT
     */
    private static function register_trust_stat_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_trust_stat',
            'title' => __( 'Trust Stat Details', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_stat_value',
                    'label' => __( 'Stat Value (Number)', 'kateringking-cms' ),
                    'name' => 'stat_value',
                    'type' => 'number',
                    'required' => 1,
                ),
                array(
                    'key' => 'field_stat_suffix',
                    'label' => __( 'Suffix (e.g. +, .8%)', 'kateringking-cms' ),
                    'name' => 'stat_suffix',
                    'type' => 'text',
                    'default_value' => '+',
                ),
                array(
                    'key' => 'field_stat_label',
                    'label' => __( 'Label', 'kateringking-cms' ),
                    'name' => 'stat_label',
                    'type' => 'text',
                    'required' => 1,
                ),
                array(
                    'key' => 'field_stat_sub',
                    'label' => __( 'Sub-label', 'kateringking-cms' ),
                    'name' => 'stat_sub',
                    'type' => 'text',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'trust_stat',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 7. Production Metric CPT
     */
    private static function register_production_metric_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_production_metric',
            'title' => __( 'Production Metric Details', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_metric_icon',
                    'label' => __( 'Icon Type', 'kateringking-cms' ),
                    'name' => 'metric_icon',
                    'type' => 'select',
                    'choices' => array(
                        'building' => __( 'Building (Facility)', 'kateringking-cms' ),
                        'users'    => __( 'Users (Capacity)', 'kateringking-cms' ),
                        'truck'    => __( 'Truck (Logistics)', 'kateringking-cms' ),
                        'shield'   => __( 'Shield (Safety / Certification)', 'kateringking-cms' ),
                    ),
                    'default_value' => 'building',
                ),
                array(
                    'key' => 'field_metric_value',
                    'label' => __( 'Metric Value', 'kateringking-cms' ),
                    'name' => 'metric_value',
                    'type' => 'text',
                    'instructions' => __( 'e.g. 12,000 or 5,000+ or 14 Fleets or ISO 22000', 'kateringking-cms' ),
                    'required' => 1,
                ),
                array(
                    'key' => 'field_metric_unit',
                    'label' => __( 'Metric Unit / Subheading', 'kateringking-cms' ),
                    'name' => 'metric_unit',
                    'type' => 'text',
                    'instructions' => __( 'e.g. SQ. FT. or COVERS / DAY or COLD-CHAIN or & HACCP CERTIFIED', 'kateringking-cms' ),
                ),
                array(
                    'key' => 'field_metric_title',
                    'label' => __( 'Metric Title', 'kateringking-cms' ),
                    'name' => 'metric_title',
                    'type' => 'text',
                    'required' => 1,
                ),
                array(
                    'key' => 'field_metric_desc',
                    'label' => __( 'Metric Description', 'kateringking-cms' ),
                    'name' => 'metric_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'production_metric',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 8. Catering Package CPT
     */
    private static function register_catering_package_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_catering_package',
            'title' => __( 'Catering Package Details', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_pkg_min_guests',
                    'label' => __( 'Guest Range / Minimum Guests', 'kateringking-cms' ),
                    'name' => 'pkg_min_guests',
                    'type' => 'text',
                    'default_value' => '150 - 1,500+ guests',
                ),
                array(
                    'key' => 'field_pkg_is_popular',
                    'label' => __( 'Mark as Most Popular / Featured?', 'kateringking-cms' ),
                    'name' => 'pkg_is_popular',
                    'type' => 'true_false',
                    'default_value' => 0,
                    'ui' => 1,
                ),
                array(
                    'key' => 'field_pkg_cover_image',
                    'label' => __( 'Package Cover Image', 'kateringking-cms' ),
                    'name' => 'pkg_cover_image',
                    'type' => 'image',
                    'return_format' => 'url',
                ),
                array(
                    'key' => 'field_pkg_description',
                    'label' => __( 'Short Description', 'kateringking-cms' ),
                    'name' => 'pkg_description',
                    'type' => 'textarea',
                    'rows' => 2,
                ),
                array(
                    'key' => 'field_pkg_best_for',
                    'label' => __( 'Best For', 'kateringking-cms' ),
                    'name' => 'pkg_best_for',
                    'type' => 'textarea',
                    'rows' => 2,
                ),
                array(
                    'key' => 'field_pkg_inclusions',
                    'label' => __( 'Package Inclusions (One per line)', 'kateringking-cms' ),
                    'name' => 'pkg_inclusions',
                    'type' => 'textarea',
                    'rows' => 6,
                    'instructions' => __( 'Enter each inclusion highlight on a new line.', 'kateringking-cms' ),
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'catering_package',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 9. Package Dish CPT
     */
    private static function register_package_dish_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_package_dish',
            'title' => __( 'Dish Details & Parent Package', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_dish_parent_package',
                    'label' => __( 'Parent Catering Package', 'kateringking-cms' ),
                    'name' => 'dish_parent_package',
                    'type' => 'post_object',
                    'post_type' => array( 'catering_package' ),
                    'return_format' => 'id',
                    'allow_null' => 0,
                    'multiple' => 0,
                    'required' => 1,
                    'instructions' => __( 'Select which Catering Package this dish belongs to.', 'kateringking-cms' ),
                ),
                array(
                    'key' => 'field_dish_course',
                    'label' => __( 'Course / Category', 'kateringking-cms' ),
                    'name' => 'dish_course',
                    'type' => 'text',
                    'instructions' => __( 'e.g. Main Course / Carvery, Appetizer, Live Counter, Dessert', 'kateringking-cms' ),
                    'default_value' => 'Main Course',
                ),
                array(
                    'key' => 'field_dish_dietary',
                    'label' => __( 'Dietary Classification', 'kateringking-cms' ),
                    'name' => 'dish_dietary',
                    'type' => 'select',
                    'choices' => array(
                        'Chef Signature' => 'Chef Signature',
                        'Pure Vegetarian' => 'Pure Vegetarian',
                        'Non-Veg'         => 'Non-Veg',
                        'Jain / Sattvic'  => 'Jain / Sattvic',
                        'Vegan'           => 'Vegan',
                    ),
                    'default_value' => 'Chef Signature',
                ),
                array(
                    'key' => 'field_dish_chef_note',
                    'label' => __( 'Chef Note', 'kateringking-cms' ),
                    'name' => 'dish_chef_note',
                    'type' => 'textarea',
                    'rows' => 2,
                    'instructions' => __( 'Short highlight note e.g. "Slow-cooked whole leg of lamb in 32 aromatic court spices"', 'kateringking-cms' ),
                ),
                array(
                    'key' => 'field_dish_description',
                    'label' => __( 'Full Description', 'kateringking-cms' ),
                    'name' => 'dish_description',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                array(
                    'key' => 'field_dish_image',
                    'label' => __( 'Dish Platter Photo', 'kateringking-cms' ),
                    'name' => 'dish_image',
                    'type' => 'image',
                    'return_format' => 'url',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'package_dish',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 10. Gallery Item CPT
     */
    private static function register_gallery_item_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_gallery_item',
            'title' => __( 'Gallery Item Details', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_gallery_image',
                    'label' => __( 'Gallery Image', 'kateringking-cms' ),
                    'name' => 'gallery_image',
                    'type' => 'image',
                    'return_format' => 'url',
                    'required' => 1,
                ),
                array(
                    'key' => 'field_gallery_caption',
                    'label' => __( 'Caption', 'kateringking-cms' ),
                    'name' => 'gallery_caption',
                    'type' => 'textarea',
                    'rows' => 2,
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'gallery_item',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 11. Event Reel CPT
     */
    private static function register_event_reel_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_event_reel',
            'title' => __( 'Event Reel Details', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_reel_event_type',
                    'label' => __( 'Event Type', 'kateringking-cms' ),
                    'name' => 'reel_event_type',
                    'type' => 'text',
                    'default_value' => 'Heritage Palace Wedding',
                ),
                array(
                    'key' => 'field_reel_guests',
                    'label' => __( 'Guests Count', 'kateringking-cms' ),
                    'name' => 'reel_guests',
                    'type' => 'text',
                    'default_value' => '1,200 Guests',
                ),
                array(
                    'key' => 'field_reel_location',
                    'label' => __( 'Location', 'kateringking-cms' ),
                    'name' => 'reel_location',
                    'type' => 'text',
                    'default_value' => 'Udaipur, Rajasthan',
                ),
                array(
                    'key' => 'field_reel_duration',
                    'label' => __( 'Duration', 'kateringking-cms' ),
                    'name' => 'reel_duration',
                    'type' => 'text',
                    'default_value' => '0:45',
                ),
                array(
                    'key' => 'field_reel_thumbnail',
                    'label' => __( 'Video / Reel Thumbnail', 'kateringking-cms' ),
                    'name' => 'reel_thumbnail',
                    'type' => 'image',
                    'return_format' => 'url',
                ),
                array(
                    'key' => 'field_reel_highlight_tag',
                    'label' => __( 'Highlight Tag', 'kateringking-cms' ),
                    'name' => 'reel_highlight_tag',
                    'type' => 'text',
                    'default_value' => '42 Live Counters',
                ),
                array(
                    'key' => 'field_reel_recap_notes',
                    'label' => __( 'Recap Notes', 'kateringking-cms' ),
                    'name' => 'reel_recap_notes',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                array(
                    'key' => 'field_reel_video_url',
                    'label' => __( 'Video URL (Optional embed/mp4)', 'kateringking-cms' ),
                    'name' => 'reel_video_url',
                    'type' => 'url',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'event_reel',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 12. Testimonial CPT
     */
    private static function register_testimonial_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_testimonial',
            'title' => __( 'Testimonial Details', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_test_client_name',
                    'label' => __( 'Client / Host Name', 'kateringking-cms' ),
                    'name' => 'test_client_name',
                    'type' => 'text',
                    'required' => 1,
                ),
                array(
                    'key' => 'field_test_event',
                    'label' => __( 'Event Description', 'kateringking-cms' ),
                    'name' => 'test_event',
                    'type' => 'text',
                    'instructions' => __( "e.g. Daughter's Royal Palace Wedding (1,200 Guests)", 'kateringking-cms' ),
                ),
                array(
                    'key' => 'field_test_rating',
                    'label' => __( 'Rating (1 to 5 stars)', 'kateringking-cms' ),
                    'name' => 'test_rating',
                    'type' => 'number',
                    'min' => 1,
                    'max' => 5,
                    'default_value' => 5,
                ),
                array(
                    'key' => 'field_test_quote',
                    'label' => __( 'Review Quote', 'kateringking-cms' ),
                    'name' => 'test_quote',
                    'type' => 'textarea',
                    'rows' => 4,
                    'required' => 1,
                ),
                array(
                    'key' => 'field_test_avatar',
                    'label' => __( 'Client Photo / Avatar', 'kateringking-cms' ),
                    'name' => 'test_avatar',
                    'type' => 'image',
                    'return_format' => 'url',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'testimonial',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 13. FAQ Item CPT
     */
    private static function register_faq_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_faq',
            'title' => __( 'FAQ Details', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_faq_question',
                    'label' => __( 'Question', 'kateringking-cms' ),
                    'name' => 'faq_question',
                    'type' => 'text',
                    'required' => 1,
                ),
                array(
                    'key' => 'field_faq_answer',
                    'label' => __( 'Answer', 'kateringking-cms' ),
                    'name' => 'faq_answer',
                    'type' => 'textarea',
                    'rows' => 4,
                    'required' => 1,
                ),
                array(
                    'key' => 'field_faq_sort_order',
                    'label' => __( 'Sort Order', 'kateringking-cms' ),
                    'name' => 'faq_sort_order',
                    'type' => 'number',
                    'default_value' => 0,
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'faq_item',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 14. Service Card CPT
     */
    private static function register_service_card_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_service_card',
            'title' => __( 'Service Card Details', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_service_tag',
                    'label' => __( 'Badge / Tag', 'kateringking-cms' ),
                    'name' => 'service_tag',
                    'type' => 'text',
                    'default_value' => 'Grand Celebrations',
                ),
                array(
                    'key' => 'field_service_title',
                    'label' => __( 'Title', 'kateringking-cms' ),
                    'name' => 'service_title',
                    'type' => 'text',
                    'required' => 1,
                ),
                array(
                    'key' => 'field_service_desc',
                    'label' => __( 'Description', 'kateringking-cms' ),
                    'name' => 'service_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                array(
                    'key' => 'field_service_icon',
                    'label' => __( 'Icon Type', 'kateringking-cms' ),
                    'name' => 'service_icon',
                    'type' => 'select',
                    'choices' => array(
                        'crown'    => __( 'Crown (Weddings & Galas)', 'kateringking-cms' ),
                        'building' => __( 'Building (Corporate & Exhibitions)', 'kateringking-cms' ),
                        'utensils' => __( 'Utensils (Private Dining)', 'kateringking-cms' ),
                    ),
                    'default_value' => 'crown',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'service_card',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 15. Custom Feature CPT (Packages Page)
     */
    private static function register_custom_feature_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_custom_feature',
            'title' => __( 'Custom Feature Details', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_feat_tag',
                    'label' => __( 'Tag / Badge', 'kateringking-cms' ),
                    'name' => 'feat_tag',
                    'type' => 'text',
                    'default_value' => 'Strict Segregation',
                ),
                array(
                    'key' => 'field_feat_title',
                    'label' => __( 'Title', 'kateringking-cms' ),
                    'name' => 'feat_title',
                    'type' => 'text',
                    'required' => 1,
                ),
                array(
                    'key' => 'field_feat_desc',
                    'label' => __( 'Description', 'kateringking-cms' ),
                    'name' => 'feat_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                array(
                    'key' => 'field_feat_sort_order',
                    'label' => __( 'Sort Order', 'kateringking-cms' ),
                    'name' => 'feat_sort_order',
                    'type' => 'number',
                    'default_value' => 0,
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'custom_feature',
                    ),
                ),
            ),
        ) );
    }

    /**
     * 16. Reel Highlight CPT (Reels Page)
     */
    private static function register_reel_highlight_fields() {
        acf_add_local_field_group( array(
            'key' => 'group_kk_reel_highlight',
            'title' => __( 'Reel Highlight Details', 'kateringking-cms' ),
            'fields' => array(
                array(
                    'key' => 'field_highlight_title',
                    'label' => __( 'Title', 'kateringking-cms' ),
                    'name' => 'highlight_title',
                    'type' => 'text',
                    'required' => 1,
                ),
                array(
                    'key' => 'field_highlight_stats',
                    'label' => __( 'Stats / Highlight Note', 'kateringking-cms' ),
                    'name' => 'highlight_stats',
                    'type' => 'text',
                    'default_value' => '1,200 skewers / hour',
                ),
                array(
                    'key' => 'field_highlight_desc',
                    'label' => __( 'Description', 'kateringking-cms' ),
                    'name' => 'highlight_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                array(
                    'key' => 'field_highlight_sort_order',
                    'label' => __( 'Sort Order', 'kateringking-cms' ),
                    'name' => 'highlight_sort_order',
                    'type' => 'number',
                    'default_value' => 0,
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'reel_highlight',
                    ),
                ),
            ),
        ) );
    }
}
