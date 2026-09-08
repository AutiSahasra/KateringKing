<?php
/**
 * One-time automated content seeder execution
 */
define( 'WP_USE_THEMES', false );
require_once __DIR__ . '/wp-load.php';

if ( ! class_exists( 'KK_Seeder' ) ) {
    require_once __DIR__ . '/wp-content/plugins/kateringking-cms/includes/class-seeder.php';
}

KK_Seeder::run();

header( 'Content-Type: application/json' );
echo json_encode( array(
    'status'  => 'success',
    'message' => 'All 14 content sections seeded successfully into WordPress database!'
) );

// Self-clean
@unlink( __FILE__ );
