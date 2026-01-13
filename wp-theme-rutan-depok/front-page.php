<?php get_header(); ?>

<div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
    <div class="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-gold-400/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-navy-800/10 rounded-full blur-[150px] animate-blob animation-delay-4000"></div>
</div>

<!-- Cinematic Slider Ported from React -->
<section class="relative h-[calc(100dvh-72px)] md:h-[calc(100dvh-88px)] w-full overflow-hidden z-10">
    <div id="hero-slider" class="h-full w-full relative">
        <?php
        $slides = array(
            array(
                "image" => get_template_directory_uri() . "/assets/images/hero-service.png",
                "title" => "Melayani dengan Hati",
                "subtitle" => "Wujudkan Pemasyarakatan PASTI: Profesional, Akuntabel, Sinergi, Transparan, Inovatif.",
                "cta" => "Layanan Publik",
                "link" => "/public-info"
            ),
            array(
                "image" => get_template_directory_uri() . "/assets/images/hero-integrity.png",
                "title" => "Zona Integritas",
                "subtitle" => "Komitmen penuh menuju Wilayah Bebas dari Korupsi (WBK) dan Birokrasi Bersih Melayani (WBBM).",
                "cta" => "Profil Kami",
                "link" => "/profil"
            ),
            array(
                "image" => get_template_directory_uri() . "/assets/images/hero-skills.png",
                "title" => "Pembinaan Kemandirian",
                "subtitle" => "Membekali Warga Binaan dengan keterampilan produktif untuk masa depan yang lebih cerah.",
                "cta" => "Program Kami",
                "link" => "/karya-wbp"
            )
        );

        foreach ($slides as $idx => $slide) :
        ?>
            <div class="hero-slide absolute inset-0 transition-opacity duration-1000 <?php echo $idx === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'; ?>" data-index="<?php echo $idx; ?>">
                <div class="absolute inset-0">
                    <img src="<?php echo $slide['image']; ?>" class="w-full h-full object-cover transform scale-105 transition-transform duration-[10000ms] ease-linear" alt="<?php echo $slide['title']; ?>">
                    <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90"></div>
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a192f_100%)] opacity-40"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center p-4">
                    <div class="text-center max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="300">
                        <div class="flex items-center justify-center gap-3 mb-6">
                            <div class="h-px w-12 bg-gold-400"></div>
                            <span class="text-gold-plate font-bold uppercase tracking-[0.3em] text-sm shadow-sm">Rutan Kelas I Depok</span>
                            <div class="h-px w-12 bg-gold-400"></div>
                        </div>
                        <h1 class="text-4xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter leading-none"><?php echo $slide['title']; ?></h1>
                        <p class="text-slate-200 text-lg md:text-2xl font-light mb-10 max-w-3xl mx-auto"><?php echo $slide['subtitle']; ?></p>
                        <div class="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="<?php echo home_url($slide['link']); ?>" class="px-10 py-5 bg-gradient-gold text-dark-deep font-black rounded-full hover:scale-105 transition-all shadow-xl uppercase tracking-widest text-sm"><?php echo $slide['cta']; ?> <i class="fa-solid fa-arrow-right ml-2"></i></a>
                            <a href="<?php echo home_url('/profil'); ?>" class="px-10 py-5 glass text-white font-black rounded-full hover:bg-white/10 transition-all uppercase tracking-widest text-sm border border-white/20">Tentang Kami</a>
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <!-- Slider Navigation -->
    <div class="absolute bottom-12 left-0 right-0 z-20 flex justify-between items-end container mx-auto px-6">
        <div class="flex gap-3" id="slider-dots">
            <?php foreach ($slides as $idx => $slide) : ?>
                <button class="slider-dot h-1.5 transition-all duration-500 rounded-full <?php echo $idx === 0 ? 'w-12 bg-gradient-gold shadow-[0_0_10px_rgba(255,215,0,0.8)]' : 'w-4 bg-white/20'; ?>" data-index="<?php echo $idx; ?>"></button>
            <?php endforeach; ?>
        </div>
        <div class="flex gap-2">
            <button class="slider-prev w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gradient-gold hover:text-dark-deep transition-all backdrop-blur-md shadow-lg"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="slider-next w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gradient-gold hover:text-dark-deep transition-all backdrop-blur-md shadow-lg"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
</section>

<!-- Floating Stats Bar -->
<div class="relative z-20 -mt-24 container mx-auto px-6 mb-24">
    <div class="bg-navy-800/40 backdrop-blur-3xl border border-gold-500/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] grid grid-cols-2 lg:grid-cols-4 gap-8 group relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>
        <?php
        $stats = array(
            array("label" => "Kapasitas Hunian", "value" => "1,500+", "icon" => "fa-users"),
            array("label" => "Warga Binaan", "value" => "1,240", "icon" => "fa-shield-halved"),
            array("label" => "Petugas Jaga", "value" => "156", "icon" => "fa-star"),
            array("label" => "Layanan Publik", "value" => "24/7", "icon" => "fa-bolt")
        );
        foreach ($stats as $stat) : ?>
            <div class="flex gap-5 items-center border-r border-white/10 last:border-0 pr-4" data-aos="fade-up">
                <div class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold-500 border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                    <i class="fa-solid <?php echo $stat['icon']; ?> text-xl"></i>
                </div>
                <div>
                    <h3 class="text-3xl font-bold text-white"><?php echo $stat['value']; ?></h3>
                    <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1"><?php echo $stat['label']; ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<!-- Bento Grid Services -->
<section class="py-24 relative z-10">
    <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-right">
            <div class="max-w-2xl">
                <span class="text-gold-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block flex items-center gap-2">
                    <span class="w-8 h-px bg-gold-500"></span> Layanan Digital
                </span>
                <h2 class="text-3xl md:text-5xl font-display font-black text-white">Akses Layanan Pemasyarakatan <span class="text-gold-plate animate-pulse-slow">Lebih Mudah & Cepat</span></h2>
            </div>
            <a href="<?php echo home_url('/public-info'); ?>" class="px-8 py-3 rounded-full border border-gold-500/20 text-slate-200 hover:text-gold-500 hover:border-gold-500 transition-all font-bold flex items-center gap-2 hover:bg-gold-500/5 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">Lihat Semua Layanan <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-none md:grid-rows-2 gap-6 min-h-[600px]">
            <!-- Main Card -->
            <a href="<?php echo home_url('/public-info'); ?>" class="md:col-span-2 md:row-span-2 group relative rounded-[2.5rem] overflow-hidden border border-gold-500/10 bg-navy-800/40 hover:border-gold-500/30 transition-all duration-500 shadow-xl" data-aos="zoom-in">
                <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000')] bg-cover opacity-20 group-hover:scale-105 transition-transform duration-700"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
                <div class="absolute bottom-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px]"></div>
                <div class="absolute bottom-0 left-0 p-10 z-10">
                    <div class="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center text-primary mb-6 shadow-xl group-hover:-translate-y-1 transition-transform"><i class="fa-solid fa-users text-2xl"></i></div>
                    <h3 class="text-3xl font-black text-white mb-2 group-hover:text-gold-500 transition-colors">Layanan Kunjungan</h3>
                    <p class="text-slate-400 text-lg mb-8 max-w-sm leading-relaxed">Daftar antrean online, cek jadwal kunjungan, dan layanan video call dari rumah.</p>
                    <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gold-500 font-black uppercase text-xs tracking-widest group-hover:bg-gold-500 group-hover:text-primary group-hover:border-transparent transition-all">Akses Sekarang <i class="fa-solid fa-arrow-right"></i></div>
                </div>
            </a>

            <!-- Small Card 1 -->
            <a href="<?php echo home_url('/pengaduan'); ?>" class="group rounded-[2.5rem] p-8 border border-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-gold-500/10 hover:border-gold-500/40 transition-all duration-500 shadow-xl relative flex flex-col justify-end overflow-hidden" data-aos="zoom-in" data-aos-delay="100">
                <div class="absolute top-0 right-0 w-40 h-40 bg-gold-400/10 rounded-full blur-[60px] -mr-10 -mt-10 group-hover:bg-gold-500/20 transition-all"></div>
                <div class="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-gold-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl backdrop-blur-md">
                    <i class="fa-solid fa-message text-2xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="text-gold-500 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">Layanan Aspirasi</span>
                    <h3 class="text-2xl font-black text-white leading-tight">Pengaduan Masyarakat</h3>
                </div>
            </a>

            <!-- Small Card 2 -->
            <a href="<?php echo home_url('/public-info'); ?>" class="group rounded-[2.5rem] p-8 border border-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-gold-500/10 hover:border-gold-500/40 transition-all duration-500 shadow-xl relative flex flex-col justify-end overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
                <div class="absolute top-0 right-0 w-40 h-40 bg-gold-400/10 rounded-full blur-[60px] -mr-10 -mt-10 group-hover:bg-gold-500/20 transition-all"></div>
                <div class="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-gold-500 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-2xl backdrop-blur-md">
                    <i class="fa-solid fa-file-invoice text-2xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="text-gold-500 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">Standardisasi</span>
                    <h3 class="text-2xl font-black text-white leading-tight">SOP & Regulasi</h3>
                </div>
            </a>

            <!-- Wide Card -->
            <a href="<?php echo home_url('/pengumuman'); ?>" class="md:col-span-2 group rounded-[2.5rem] p-10 border border-gold-500/20 bg-navy-900/60 hover:border-gold-500/60 transition-all duration-700 shadow-2xl relative flex items-center justify-between overflow-hidden" data-aos="zoom-in" data-aos-delay="300">
                <div class="absolute -left-10 -top-10 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] group-hover:bg-gold-500/10 transition-all"></div>
                <div class="flex items-center gap-8 relative z-10">
                    <div class="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center text-primary shadow-xl group-hover:rotate-6 transition-transform"><i class="fa-solid fa-bell text-3xl animate-bounce-slow"></i></div>
                    <div>
                        <span class="inline-block px-3 py-1 rounded-full bg-gold-500 text-dark-deep text-[10px] font-black uppercase tracking-widest mb-3">Terbaru</span>
                        <h3 class="text-3xl font-black text-white group-hover:text-gold-500 transition-colors">Pusat Informasi</h3>
                        <p class="text-slate-400 font-medium italic opacity-70 group-hover:opacity-100 transition-opacity">Update resmi & pengumuman terkini institusi.</p>
                    </div>
                </div>
                <div class="p-4 rounded-full bg-white/5 border border-white/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-primary transition-all duration-500">
                    <i class="fa-solid fa-arrow-right text-3xl"></i>
                </div>
            </a>
        </div>
    </div>
</section>

<!-- News & Announcements -->
<section class="py-24 relative z-10">
    <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <span class="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block flex items-center gap-2">
                    <span class="w-8 h-px bg-gold-500"></span> Update Terkini
                </span>
                <h2 class="text-3xl md:text-5xl font-bold text-white font-display">Kabar & Pengumuman</h2>
            </div>
        </div>

        <div class="grid lg:grid-cols-3 gap-12">
            <!-- News List -->
            <div class="lg:col-span-2 space-y-8">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                        <div class="p-2 bg-white/5 rounded-lg text-gold-500 border border-gold-500/20 shadow-lg"><i class="fa-solid fa-newspaper"></i></div>
                        Berita Terbaru
                    </h3>
                    <a href="<?php echo home_url('/berita'); ?>" class="text-slate-400 hover:text-gold-500 text-sm font-bold flex items-center gap-2 transition-colors">Lihat Semua <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div class="grid gap-6">
                    <?php
                    $news = array(
                        array("title" => "Kunjungan Kerja Kakanwil Kemenkumham Jabar", "date" => "14 Jan 2025", "tag" => "Kedinasan"),
                        array("title" => "Panen Raya Hidroponik Warga Binaan", "date" => "12 Jan 2025", "tag" => "Pembinaan")
                    );
                    foreach ($news as $item) : ?>
                        <div class="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-gold-500/50 transition-all flex flex-col md:flex-row h-full md:h-48 shadow-xl" data-aos="fade-up">
                            <div class="w-full md:w-64 h-48 md:h-full relative overflow-hidden">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hydroponic.png" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                <div class="absolute top-3 left-3"><span class="bg-dark/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-wide"><?php echo $item['tag']; ?></span></div>
                            </div>
                            <div class="p-8 flex flex-col justify-center">
                                <span class="text-gold-500 font-black text-[10px] uppercase tracking-widest mb-2"><i class="fa-solid fa-calendar mr-2"></i> <?php echo $item['date']; ?></span>
                                <h4 class="text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors"><?php echo $item['title']; ?></h4>
                                <a href="<?php echo home_url('/berita'); ?>" class="text-sm font-black uppercase text-slate-400 hover:text-white flex items-center gap-2 transition-colors">Selengkapnya <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Announcements -->
            <div class="lg:col-span-1" data-aos="fade-left">
                <div class="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden h-full">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-pulse-slow"></div>
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold text-white mb-10 flex items-center gap-4">
                            <div class="p-2 bg-gradient-gold rounded-lg text-primary shadow-lg"><i class="fa-solid fa-bell"></i></div>
                            Pusat Informasi
                        </h3>
                        <div class="space-y-6">
                            <?php
                            $announces = array(
                                array("day" => "15", "month" => "Jan", "title" => "Jadwal Kunjungan Hari Raya Idul Fitri 1446 H", "type" => "Penting"),
                                array("day" => "10", "month" => "Jan", "title" => "Pembukaan Pendaftaran Pelatihan Barista Batch 3", "type" => "Info"),
                                array("day" => "05", "month" => "Jan", "title" => "Perubahan Jam Layanan Penitipan Barang", "type" => "Regulasi")
                            );
                            foreach ($announces as $a) : ?>
                                <div class="group flex gap-5 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-gold-500/30">
                                    <div class="w-14 h-14 bg-dark-deep rounded-xl flex flex-col items-center justify-center border border-white/10 group-hover:border-gold-500/50 transition-colors">
                                        <span class="text-[8px] font-black text-slate-500 uppercase"><?php echo $a['month']; ?></span>
                                        <span class="text-lg font-bold text-white group-hover:text-gold-400"><?php echo $a['day']; ?></span>
                                    </div>
                                    <div class="flex-1">
                                        <span class="inline-block px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mb-1 bg-gold-500/10 text-gold-500 border border-gold-500/20"><?php echo $a['type']; ?></span>
                                        <h4 class="text-sm font-bold text-slate-200 group-hover:text-white transition-colors leading-tight"><?php echo $a['title']; ?></h4>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <a href="<?php echo home_url('/pengumuman'); ?>" class="w-full mt-10 py-4 border border-white/10 rounded-full text-white font-bold text-center block hover:bg-gradient-gold hover:text-primary transition-all shadow-lg hover:shadow-gold-500/20">Lihat Semua Pengumuman</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Inline Slider Script -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        let current = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.slider-dot');
        const next = document.querySelector('.slider-next');
        const prev = document.querySelector('.slider-prev');

        function move(index) {
            slides.forEach((s, i) => {
                s.classList.remove('opacity-100', 'z-10');
                s.classList.add('opacity-0', 'z-0');
                dots[i].classList.remove('w-12', 'bg-gradient-gold', 'shadow-[0_0_10px_rgba(255,215,0,0.8)]');
                dots[i].classList.add('w-4', 'bg-white/20');
            });
            slides[index].classList.add('opacity-100', 'z-10');
            slides[index].classList.remove('opacity-0', 'z-0');
            dots[index].classList.add('w-12', 'bg-gradient-gold', 'shadow-[0_0_10px_rgba(255,215,0,0.8)]');
            dots[index].classList.remove('w-4', 'bg-white/20');
            current = index;
        }

        next?.addEventListener('click', () => move((current + 1) % slides.length));
        prev?.addEventListener('click', () => move((current === 0 ? slides.length - 1 : current - 1)));
        dots.forEach((dot, i) => dot.addEventListener('click', () => move(i)));
        
        setInterval(() => move((current + 1) % slides.length), 6000);
    });
</script>

<?php get_footer(); ?>
