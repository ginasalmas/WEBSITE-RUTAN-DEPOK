<?php
/**
 * Post Index / News Archive
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
    <!-- Background Atmosphere -->
    <div class="fixed inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
        <div class="absolute bottom-[-10%] left-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
    </div>

    <!-- Page Header -->
    <div class="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
                <div class="text-center md:text-left">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-6" data-aos="fade-up">
                        <i class="fa-solid fa-newspaper"></i> Kabar Terkini
                    </div>
                    <h1 class="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold" data-aos="fade-up" data-aos-delay="100">
                        Berita & Kegiatan
                    </h1>
                </div>

                <div class="relative w-full md:w-80" data-aos="fade-left">
                    <form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>">
                        <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
                        <input
                            type="text"
                            name="s"
                            placeholder="Cari berita..."
                            value="<?php echo get_search_query(); ?>"
                            class="w-full bg-navy-800/40 border border-gold-500/20 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-800/60 transition-all backdrop-blur-md"
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <!-- News Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <article
                    class="flex flex-col h-full group bg-navy-800/40 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border border-gold-500/10 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                    data-aos="fade-up"
                >
                    <!-- Image Container -->
                    <div class="relative h-64 overflow-hidden">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 group-hover:sepia-[10%] group-hover:brightness-90')); ?>
                        <?php else : ?>
                            <img
                                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=800&auto=format&fit=crop"
                                alt="<?php the_title(); ?>"
                                class="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 group-hover:sepia-[10%] group-hover:brightness-90"
                            />
                        <?php endif; ?>
                        <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>

                        <!-- Labels Overlay -->
                        <div class="absolute bottom-4 left-6 flex gap-2">
                            <?php
                            $categories = get_the_category();
                            if (!empty($categories)) : ?>
                                <span class="bg-primary/80 backdrop-blur-md text-gold-500 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-gold-500/20">
                                    <?php echo esc_html($categories[0]->name); ?>
                                </span>
                            <?php endif; ?>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-8 flex flex-col flex-grow relative">
                        <div class="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                            <i class="fa-solid fa-calendar text-gold-400"></i> <?php echo get_the_date(); ?>
                            <div class="w-1 h-1 bg-white/20 rounded-full"></div>
                            <i class="fa-solid fa-user text-primary"></i> <?php the_author(); ?>
                        </div>

                        <h2 class="text-xl md:text-2xl font-bold font-display text-white mb-4 line-clamp-2 leading-tight group-hover:text-gold-500 transition-colors duration-300">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>

                        <div class="text-slate-400 text-sm md:text-base mb-8 line-clamp-3 leading-relaxed flex-grow">
                            <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                        </div>

                        <a
                            href="<?php the_permalink(); ?>"
                            class="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest group/btn border-t border-white/5 pt-6 hover:text-gold-500 transition-all uppercase"
                        >
                            Baca Selengkapnya <i class="fa-solid fa-chevron-right transform group-hover/btn:translate-x-2 transition-transform duration-300 text-gold-500"></i>
                        </a>
                    </div>
                </article>
            <?php endwhile;
            else : ?>
                <div class="col-span-full text-center py-20">
                    <p class="text-slate-400 text-xl italic font-light">Belum ada berita yang diterbitkan.</p>
                </div>
            <?php endif; ?>
        </div>

        <!-- Pagination -->
        <div class="mt-20 flex justify-center gap-3">
            <?php
            echo paginate_links(array(
                'prev_text' => '<i class="fa-solid fa-chevron-left"></i>',
                'next_text' => '<i class="fa-solid fa-chevron-right"></i>',
                'type' => 'list',
                'class' => 'pagination-list'
            ));
            ?>
        </div>
    </div>
</div>

<style>
    .pagination-list {
        display: flex;
        gap: 0.75rem;
    }
    .pagination-list li {
        list-style: none;
    }
    .pagination-list .page-numbers {
        width: 3rem;
        height: 3rem;
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px border rgba(255, 255, 255, 0.1);
        color: #94a3b8;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        transition: all 0.3s;
    }
    .pagination-list .page-numbers:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }
    .pagination-list .page-numbers.current {
        background: linear-gradient(135deg, #FFD700, #B8860B);
        color: #010204;
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        border: transparent;
    }
</style>

<?php get_footer(); ?>
