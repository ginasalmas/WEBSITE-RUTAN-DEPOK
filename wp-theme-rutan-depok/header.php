<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <!-- Navbar Ported from React -->
    <nav class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b border-white/5 backdrop-blur-md bg-navy-900/80">
        <div class="container mx-auto px-4 lg:px-6">
            <div class="flex items-center justify-between h-20 md:h-24">
                
                <!-- Logo Area -->
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-4 group">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl p-2 border border-white/10 backdrop-blur-md flex items-center justify-center transition-all group-hover:border-gold-500/50 group-hover:bg-white/10 group-hover:scale-105 shadow-2xl relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="Logo Rutan Depok" class="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                    </div>
                    <div class="flex flex-col">
                        <span class="text-white font-display font-black text-xl md:text-2xl tracking-tighter leading-none group-hover:text-gold-500 transition-colors">RUTAN DEPOK</span>
                        <span class="text-gold-500 text-[10px] font-black tracking-[0.4em] uppercase opacity-80 mt-1">Pasti Berdampak</span>
                    </div>
                </a>

                <!-- Desktop Menu -->
                <div class="hidden lg:flex items-center gap-1">
                    <?php
                    $nav_items = array(
                        "Beranda" => "/",
                        "Profil" => "/profil",
                        "Info Publik" => "/public-info",
                        "Layanan" => "/layanan",
                        "Karya WBP" => "/karya-wbp",
                        "Berita" => "/berita",
                        "Galeri" => "/galeri",
                        "Pengaduan" => "/pengaduan"
                    );
                    foreach ($nav_items as $name => $path) : 
                        $is_active = (home_url($path) == home_url($_SERVER['REQUEST_URI']));
                    ?>
                        <a href="<?php echo home_url($path); ?>" class="px-5 py-2 text-sm font-bold transition-all hover:bg-white/5 rounded-full relative group <?php echo $is_active ? 'text-white' : 'text-slate-300 hover:text-white'; ?>">
                            <?php echo $name; ?>
                            <span class="absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-gold transition-transform origin-left <?php echo $is_active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'; ?>"></span>
                        </a>
                    <?php endforeach; ?>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-toggle" class="lg:hidden text-white p-2">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl transition-all duration-500 lg:hidden opacity-0 invisible flex flex-col justify-center items-center gap-8">
            <button id="mobile-menu-close" class="absolute top-8 right-8 text-white"><i class="fa-solid fa-xmark text-3xl"></i></button>
            <?php foreach ($nav_items as $name => $path) : ?>
                <a href="<?php echo home_url($path); ?>" class="text-3xl font-black text-white hover:text-gold-500 transition-colors uppercase tracking-widest">
                    <?php echo $name; ?>
                </a>
            <?php endforeach; ?>
        </div>
    </nav>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const toggle = document.getElementById('mobile-menu-toggle');
            const close = document.getElementById('mobile-menu-close');
            const menu = document.getElementById('mobile-menu');

            toggle.addEventListener('click', () => {
                menu.classList.remove('opacity-0', 'invisible');
                menu.classList.add('opacity-100', 'visible');
            });

            close.addEventListener('click', () => {
                menu.classList.add('opacity-0', 'invisible');
                menu.classList.remove('opacity-100', 'visible');
            });
        });
    </script>

    <main id="main" class="pt-20 md:pt-24">
