<?php
/**
 * Single Post Template
 */
get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
    <!-- Background Atmosphere -->
    <div class="fixed inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[150px] animate-pulse"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
    </div>

    <!-- Hero Section -->
    <div class="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail('full', array('class' => 'w-full h-full object-cover scale-105 blur-sm brightness-50')); ?>
            <?php else : ?>
                <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1200" class="w-full h-full object-cover scale-105 blur-sm brightness-50">
            <?php endif; ?>
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10 text-center max-w-5xl">
            <div class="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-xl text-gold-500 text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-8 shadow-2xl" data-aos="zoom-in">
                <i class="fa-solid fa-newspaper"></i> 
                <?php 
                $categories = get_the_category();
                if (!empty($categories)) echo esc_html($categories[0]->name);
                else echo "Berita";
                ?>
            </div>
            
            <h1 class="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-tight italic" data-aos="fade-up">
                <?php the_title(); ?>
            </h1>

            <div class="flex flex-wrap items-center justify-center gap-6 md:gap-12" data-aos="fade-up" data-aos-delay="100">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-gold-500">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="text-left">
                        <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Ditulis Oleh</p>
                        <p class="text-white font-bold"><?php the_author(); ?></p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-gold-500">
                        <i class="fa-solid fa-calendar"></i>
                    </div>
                    <div class="text-left">
                        <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Diterbitkan</p>
                        <p class="text-white font-bold"><?php echo get_the_date(); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Article Content -->
    <div class="container mx-auto px-4 py-20 relative z-10 -mt-20">
        <div class="max-w-4xl mx-auto bg-navy-800/40 backdrop-blur-3xl p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
            
            <!-- Main News Image (Unblurred) -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="mb-12 rounded-[2rem] overflow-hidden shadow-2xl border border-white/5" data-aos="zoom-in">
                    <?php the_post_thumbnail('full', array('class' => 'w-full h-auto')); ?>
                </div>
            <?php endif; ?>

            <div class="prose prose-invert prose-gold max-w-none prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-lg prose-headings:font-display prose-headings:italic prose-a:text-gold-500 hover:prose-a:text-gold-400">
                <?php the_content(); ?>
            </div>

            <!-- Footer Meta -->
            <div class="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div class="flex items-center gap-4">
                    <span class="text-slate-500 font-bold uppercase tracking-widest text-xs">Share:</span>
                    <div class="flex gap-2">
                        <a href="#" class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-primary transition-all">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-primary transition-all">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-primary transition-all">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <a href="<?php echo esc_url(home_url('/berita')); ?>" class="flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs hover:text-gold-500 transition-colors">
                    <i class="fa-solid fa-arrow-left"></i> Kembali ke Berita
                </a>
            </div>
        </div>

        <!-- Related Posts / Navigation -->
        <div class="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="nav-previous group">
                <?php previous_post_link('%link', '
                    <div class="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-gold-500/30 transition-all flex flex-col gap-2">
                        <span class="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Berita Sebelumnya</span>
                        <span class="text-lg font-bold text-white group-hover:text-gold-500 transition-colors line-clamp-1">%title</span>
                    </div>
                '); ?>
            </div>
            <div class="nav-next group text-right">
                <?php next_post_link('%link', '
                    <div class="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-gold-500/30 transition-all flex flex-col gap-2">
                        <span class="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Berita Selanjutnya</span>
                        <span class="text-lg font-bold text-white group-hover:text-gold-500 transition-colors line-clamp-1">%title</span>
                    </div>
                '); ?>
            </div>
        </div>
    </div>
</div>
<?php endwhile; endif; ?>

<?php get_footer(); ?>
