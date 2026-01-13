<?php
/**
 * Rutan Depok functions and definitions
 */

function rutan_depok_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'rutan-depok'),
        'footer'  => __('Footer Menu', 'rutan-depok'),
    ));
}
add_action('after_setup_theme', 'rutan_depok_setup');

/**
 * Register Custom Post Types
 */
function rutan_depok_register_cpts() {
    // Announcements (Pengumuman)
    register_post_type('pengumuman', array(
        'labels' => array(
            'name' => __('Pengumuman', 'rutan-depok'),
            'singular_name' => __('Pengumuman', 'rutan-depok'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-megaphone',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'pengumuman'),
    ));

    // Gallery (Galeri)
    register_post_type('galeri', array(
        'labels' => array(
            'name' => __('Galeri', 'rutan-depok'),
            'singular_name' => __('Galeri', 'rutan-depok'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-format-image',
        'supports' => array('title', 'editor', 'thumbnail'),
        'rewrite' => array('slug' => 'galeri-item'),
    ));
}
add_action('init', 'rutan_depok_register_cpts');

function rutan_depok_scripts() {
    // Enqueue Tailwind CSS via Play CDN (for development/simplicity)
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);
    
    // Enqueue Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap', array(), null);
    
    // Enqueue Theme Styles
    wp_enqueue_style('rutan-depok-style', get_stylesheet_uri(), array(), '1.0');
    
    // Enqueue FontAwesome for icons (replacing Lucide-React)
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');
    
    // Enqueue Animate on Scroll (AOS) for animations (replacing Framer Motion)
    wp_enqueue_style('aos-css', 'https://unpkg.com/aos@2.3.1/dist/aos.css', array(), '2.3.1');
    wp_enqueue_script('aos-js', 'https://unpkg.com/aos@2.3.1/dist/aos.js', array(), '2.3.1', true);
    
    // Custom JS for theme initialization
    wp_add_inline_script('aos-js', 'AOS.init({ duration: 800, once: true });');
}
add_action('wp_enqueue_scripts', 'rutan_depok_scripts');

/**
 * Configure Tailwind Colors and Fonts via Inline Script
 */
function rutan_depok_tailwind_config() {
    ?>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            DEFAULT: '#0a192f',
                            light: '#112240',
                            dark: '#020c1b',
                        },
                        navy: {
                            900: '#0a192f',
                            800: '#112240',
                            700: '#1d2d50',
                            600: '#233554',
                        },
                        gold: {
                            DEFAULT: '#D4AF37',
                            400: '#F5D17E',
                            500: '#D4AF37',
                            600: '#B8860B',
                            700: '#996515',
                        },
                        dark: {
                            DEFAULT: '#020617',
                            deep: '#010409',
                        },
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        display: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    backgroundImage: {
                        'gradient-navy': 'linear-gradient(135deg, #0a192f 0%, #020c1b 100%)',
                        'gradient-gold': 'linear-gradient(135deg, #F5D17E 0%, #D4AF37 50%, #B8860B 100%)',
                        'gold-plate': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
                    }
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer base {
            body { 
                @apply bg-[#020617] text-slate-200 antialiased font-sans;
                background: radial-gradient(ellipse at top, #1e293b 0%, #0f172a 60%, #020617 100%);
            }
            h1, h2, h3, h4, h5, h6 { @apply font-display font-bold tracking-tight text-white/95; }
        }
        @layer utilities {
            .glass { @apply bg-white/5 backdrop-blur-xl border border-white/10; }
            .text-gold-plate { @apply text-transparent bg-clip-text bg-gold-plate drop-shadow-sm; }
        }
    </style>
    <?php
}
add_action('wp_head', 'rutan_depok_tailwind_config');
