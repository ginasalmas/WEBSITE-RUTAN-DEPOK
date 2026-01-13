<?php
/**
 * Template Name: Gallery Page
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
    <!-- Background Atmosphere -->
    <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
    </div>

    <!-- Page Header -->
    <div class="relative py-20 md:py-32 overflow-hidden border-b border-white/10">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div class="container mx-auto px-4 relative z-10 text-center">
            <div class="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-xl text-gold-500 text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-8 shadow-2xl" data-aos="zoom-in">
                <i class="fa-solid fa-camera-retro"></i> Momen & Dokumentasi
            </div>
            <h1 class="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter" data-aos="fade-up">
                Galeri <span class="text-gold-plate">Kegiatan</span>
            </h1>
            <p class="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light italic" data-aos="fade-up" data-aos-delay="100">
                Dokumentasi visual berbagai kegiatan pembinaan, layanan publik, dan momen penting di Rutan Kelas I Depok.
            </p>
        </div>
    </div>

    <div class="container mx-auto px-4 py-24 relative z-10">
        <!-- Filter Bar -->
        <div class="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
            <?php
            $categories = array('Semua', 'Kegiatan WBP', 'Layanan Publik', 'Kedinasan', 'Fasilitas');
            foreach ($categories as $idx => $cat) : ?>
                <button 
                    class="gallery-filter-btn px-8 py-3 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 border <?php echo $idx === 0 ? 'bg-gradient-gold text-primary border-transparent' : 'bg-white/5 text-slate-400 border-white/5 hover:border-gold-500/30 hover:text-white'; ?>"
                    data-category="<?php echo $cat; ?>"
                >
                    <?php echo $cat; ?>
                </button>
            <?php endforeach; ?>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid">
            <?php
            $gallery_items = array(
                array("title" => "Panen Raya Hidroponik", "category" => "Kegiatan WBP", "image" => "https://images.unsplash.com/photo-1530836361253-ee29408895df?q=80&w=800"),
                array("title" => "Layanan Kunjungan Hari Raya", "category" => "Layanan Publik", "image" => "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=800"),
                array("title" => "Pelatihan Meubel kayu", "category" => "Kegiatan WBP", "image" => "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800"),
                array("title" => "Rapat Koordinasi Wilayah", "category" => "Kedinasan", "image" => "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800"),
                array("title" => "Perpustakaan Warga Binaan", "category" => "Fasilitas", "image" => "https://images.unsplash.com/photo-1507738911731-17173d6199e7?q=80&w=800"),
                array("title" => "Kegiatan Olahraga Rutin", "category" => "Kegiatan WBP", "image" => "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800")
            );

            foreach ($gallery_items as $idx => $item) : ?>
                <div class="gallery-item group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-700 shadow-2xl" 
                     data-category="<?php echo $item['category']; ?>"
                     data-aos="fade-up" 
                     data-aos-delay="<?php echo $idx * 50; ?>">
                    <img src="<?php echo $item['image']; ?>" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0">
                    <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div class="absolute top-6 left-6">
                        <span class="bg-navy-900/80 backdrop-blur-md text-gold-500 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-gold-500/20 shadow-lg">
                            <?php echo $item['category']; ?>
                        </span>
                    </div>

                    <div class="absolute bottom-10 left-10 right-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 class="text-2xl font-bold text-white mb-6 leading-tight italic tracking-tighter"><?php echo $item['title']; ?></h3>
                        <button class="open-lightbox w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-2xl hover:bg-gradient-gold hover:text-primary hover:border-transparent transition-all uppercase tracking-widest text-xs shadow-xl"
                                data-image="<?php echo $item['image']; ?>"
                                data-title="<?php echo $item['title']; ?>"
                                data-cat="<?php echo $item['category']; ?>">
                            Lihat Full <i class="fa-solid fa-expand ml-2"></i>
                        </button>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Lightbox Modal -->
    <div id="gallery-lightbox" class="fixed inset-0 z-[200] hidden flex items-center justify-center p-4 md:p-12 overflow-hidden">
        <div class="absolute inset-0 bg-primary/98 backdrop-blur-3xl lightbox-close"></div>
        <button class="absolute top-10 right-10 z-10 w-16 h-16 bg-white/5 hover:bg-rose-500 text-white rounded-full flex items-center justify-center transition-all lightbox-close shadow-2xl border border-white/10">
            <i class="fa-solid fa-xmark text-2xl"></i>
        </button>

        <div class="relative max-w-6xl w-full h-[85vh] bg-navy-950 border border-white/10 rounded-[4rem] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.8)] transform scale-95 opacity-0 transition-all duration-500" id="lightbox-content">
            <div class="flex-1 overflow-hidden">
                <img id="lightbox-image" src="" class="w-full h-full object-cover">
            </div>
            <div class="w-full md:w-96 p-12 flex flex-col justify-center bg-navy-900 relative">
                <div class="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl"></div>
                <span id="lightbox-category" class="text-gold-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"></span>
                <h2 id="lightbox-title" class="text-3xl md:text-5xl font-display font-black text-white mb-8 italic leading-none tracking-tighter"></h2>
                <div class="h-px w-full bg-white/5 mb-10"></div>
                <div class="flex items-center gap-4 text-slate-500 text-sm font-bold uppercase tracking-widest mb-10">
                    <i class="fa-solid fa-calendar"></i> Januari 2025
                </div>
                <button class="w-full py-5 bg-gradient-gold text-primary font-black rounded-3xl hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all uppercase tracking-widest text-xs shadow-xl active:scale-95">
                    Download HD <i class="fa-solid fa-download ml-2"></i>
                </button>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const filterBtns = document.querySelectorAll('.gallery-filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('gallery-lightbox');
        const lightboxContent = document.getElementById('lightbox-content');
        const openBtns = document.querySelectorAll('.open-lightbox');
        const closeBtns = document.querySelectorAll('.lightbox-close');

        // Filter Logic
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-gradient-gold', 'text-primary', 'border-transparent');
                    b.classList.add('bg-white/5', 'text-slate-400', 'border-white/5');
                });
                btn.classList.add('bg-gradient-gold', 'text-primary', 'border-transparent');
                btn.classList.remove('bg-white/5', 'text-slate-400', 'border-white/5');

                const category = btn.getAttribute('data-category');
                galleryItems.forEach(item => {
                    if (category === 'Semua' || item.getAttribute('data-category') === category) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });

        // Lightbox Logic
        openBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('lightbox-image').src = btn.getAttribute('data-image');
                document.getElementById('lightbox-title').textContent = btn.getAttribute('data-title');
                document.getElementById('lightbox-category').textContent = btn.getAttribute('data-cat');

                lightbox.classList.remove('hidden');
                setTimeout(() => {
                    lightboxContent.classList.remove('scale-95', 'opacity-0');
                    lightboxContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            });
        });

        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                lightboxContent.classList.add('scale-95', 'opacity-0');
                lightboxContent.classList.remove('scale-100', 'opacity-100');
                setTimeout(() => {
                    lightbox.classList.add('hidden');
                }, 500);
            });
        });
    });
</script>

<?php get_footer(); ?>
