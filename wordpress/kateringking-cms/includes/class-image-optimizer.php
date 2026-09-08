<?php
/**
 * Image Optimizer for KateringKing CMS
 *
 * Automatically converts uploaded JPG/PNG images to modern WebP format,
 * creates WebP variants for all thumbnail sizes, and provides responsive
 * image helper functions for high-performance delivery.
 *
 * @package KateringKing_CMS
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class KK_Image_Optimizer {

    /**
     * Initialize hooks.
     */
    public static function init() {
        // Generate WebP copies when attachment metadata is generated
        add_filter( 'wp_generate_attachment_metadata', array( __CLASS__, 'generate_webp_images' ), 10, 2 );

        // Delete WebP files when an attachment is deleted
        add_action( 'delete_attachment', array( __CLASS__, 'delete_webp_images' ) );

        // Enable WebP upload support in older WordPress versions if needed
        add_filter( 'upload_mimes', array( __CLASS__, 'allow_webp_uploads' ) );
    }

    /**
     * Allow WebP MIME type in media library.
     */
    public static function allow_webp_uploads( $mimes ) {
        $mimes['webp'] = 'image/webp';
        return $mimes;
    }

    /**
     * Generate WebP versions of the uploaded original and all thumbnail sizes.
     *
     * @param array $metadata Attachment metadata.
     * @param int   $attachment_id Attachment ID.
     * @return array Modified metadata.
     */
    public static function generate_webp_images( $metadata, $attachment_id ) {
        $file = get_attached_file( $attachment_id );
        if ( ! $file || ! file_exists( $file ) ) {
            return $metadata;
        }

        $mime = get_post_mime_type( $attachment_id );
        if ( ! in_array( $mime, array( 'image/jpeg', 'image/jpg', 'image/png' ), true ) ) {
            return $metadata;
        }

        // Convert the full size original
        self::convert_to_webp( $file );

        // Convert all intermediate thumbnail sizes
        if ( ! empty( $metadata['sizes'] ) && is_array( $metadata['sizes'] ) ) {
            $upload_dir = dirname( $file );
            foreach ( $metadata['sizes'] as $size_key => $size_info ) {
                if ( ! empty( $size_info['file'] ) ) {
                    $sub_file = $upload_dir . DIRECTORY_SEPARATOR . $size_info['file'];
                    if ( file_exists( $sub_file ) ) {
                        self::convert_to_webp( $sub_file );
                    }
                }
            }
        }

        return $metadata;
    }

    /**
     * Convert a single image file to WebP format.
     *
     * @param string $source_path Absolute path to the source image.
     * @param int    $quality     WebP compression quality (0-100).
     * @return string|false Path to generated WebP or false on failure.
     */
    public static function convert_to_webp( $source_path, $quality = 85 ) {
        $webp_path = preg_replace( '/\.(jpe?g|png)$/i', '.webp', $source_path );

        if ( $webp_path === $source_path || file_exists( $webp_path ) ) {
            return $webp_path;
        }

        // 1. Try Imagick first
        if ( extension_loaded( 'imagick' ) && class_exists( 'Imagick' ) ) {
            try {
                $image = new Imagick( $source_path );
                $image->setImageFormat( 'webp' );
                $image->setImageCompressionQuality( $quality );
                $image->setOption( 'webp:method', '6' ); // Higher compression efficiency
                $image->writeImage( $webp_path );
                $image->clear();
                $image->destroy();
                return $webp_path;
            } catch ( Exception $e ) {
                // Fall back to GD
            }
        }

        // 2. Try GD library
        if ( function_exists( 'imagewebp' ) ) {
            $info = @getimagesize( $source_path );
            if ( ! $info ) {
                return false;
            }

            $img = null;
            if ( $info['mime'] === 'image/jpeg' ) {
                $img = @imagecreatefromjpeg( $source_path );
            } elseif ( $info['mime'] === 'image/png' ) {
                $img = @imagecreatefrompng( $source_path );
                if ( $img ) {
                    // Preserve alpha transparency
                    imagepalettetotruecolor( $img );
                    imagealphablending( $img, true );
                    imagesavealpha( $img, true );
                }
            }

            if ( $img ) {
                @imagewebp( $img, $webp_path, $quality );
                @imagedestroy( $img );
                return file_exists( $webp_path ) ? $webp_path : false;
            }
        }

        return false;
    }

    /**
     * Delete WebP files when an attachment is removed.
     *
     * @param int $attachment_id Attachment ID.
     */
    public static function delete_webp_images( $attachment_id ) {
        $file = get_attached_file( $attachment_id );
        if ( ! $file ) {
            return;
        }

        $webp_file = preg_replace( '/\.(jpe?g|png)$/i', '.webp', $file );
        if ( file_exists( $webp_file ) ) {
            @unlink( $webp_file );
        }

        $metadata = wp_get_attachment_metadata( $attachment_id );
        if ( ! empty( $metadata['sizes'] ) && is_array( $metadata['sizes'] ) ) {
            $upload_dir = dirname( $file );
            foreach ( $metadata['sizes'] as $size_info ) {
                if ( ! empty( $size_info['file'] ) ) {
                    $sub_webp = preg_replace( '/\.(jpe?g|png)$/i', '.webp', $upload_dir . DIRECTORY_SEPARATOR . $size_info['file'] );
                    if ( file_exists( $sub_webp ) ) {
                        @unlink( $sub_webp );
                    }
                }
            }
        }
    }
}
