<?php
/**
 * Template Name: News Page
 */
get_header(); ?>

<div class="pt-32 pb-24 bg-navy-950 min-h-screen">
    <div class="container mx-auto px-6">
        <header class="text-center mb-24" data-aos="fade-up">
            <span class="text-gold-500 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Kabar Terkini</span>
            <h1 class="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter">
                Berita <span class="text-gold-plate">Rutan</span>
            </h1>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            for($i=1; $i<=6; $i++): ?>
                <article class="group bg-navy-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-gold-500/50 transition-all shadow-xl" data-aos="fade-up">
                    <div class="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute top-6 left-6 px-4 py-2 bg-dark/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black uppercase text-gold-500 tracking-widest">Kedinasan</div>
                    </div>
                    <div class="p-8">
                        <span class="text-slate-500 text-xs font-bold block mb-4 italic">14 Januari 2025</span>
                        <h3 class="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-gold-500 transition-colors">Giat Penguatan Tugas dan Fungsi Petugas Rutan Depok</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">Meningkatkan kapasitas pegawai dalam menjalankan tugas pemasyarakatan yang berintegritas dan profesional sesuai dengan amanat UU...</p>
                        <a href="#" class="inline-flex items-center gap-2 text-gold-500 font-black uppercase text-xs tracking-widest border-b border-gold-500/0 hover:border-gold-500 transition-all py-1">Baca Selengkapnya <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>
            <?php endfor; ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
