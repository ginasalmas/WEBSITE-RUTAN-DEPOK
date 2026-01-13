<?php
/**
 * Template Name: Vision & Mission Page
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
    <!-- Background Atmosphere -->
    <div class="fixed inset-0 pointer-events-none">
        <div class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
        <div class="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
    </div>

    <!-- Page Header -->
    <div class="relative py-12 md:py-20 overflow-hidden">
        <div class="container mx-auto px-4 relative z-10 text-center">
            <div data-aos="fade-up" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-6">
                <i class="fa-solid fa-compass"></i> Arah & Tujuan Kami
            </div>
            <h1 data-aos="fade-up" data-aos-delay="100" class="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-6 drop-shadow-2xl">
                Visi & Misi
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" class="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Landasan kokoh dalam mewujudkan pelayanan pemasyarakatan yang berkelas dunia dan humanis.
            </p>
        </div>
    </div>

    <div class="container mx-auto px-4 pb-24 space-y-24 md:space-y-32 relative z-10">

        <!-- Vision Section -->
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div class="lg:w-1/2 relative group perspective-1000" data-aos="zoom-in">
                <div class="relative z-10 bg-gradient-to-br from-navy-800/40 to-navy-900/40 backdrop-blur-xl rounded-[2.5rem] p-2 border border-gold-500/10 shadow-2xl transition-all duration-700">
                    <div class="rounded-[2rem] overflow-hidden relative aspect-square lg:aspect-[4/3]">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
                            alt="Vision"
                            class="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                        <div class="absolute bottom-8 left-8 right-8 text-white">
                            <div class="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-primary mb-4 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                                <i class="fa-solid fa-eye text-2xl"></i>
                            </div>
                            <p class="text-2xl font-bold font-display">Pandangan Masa Depan</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
                <span class="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block flex items-center gap-3 justify-center lg:justify-start">
                    <span class="w-12 h-px bg-gold-500"></span> Visi Kami
                </span>
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1]">
                    Menjadi Penyelenggara Pemasyarakatan yang <span class="text-gold-plate font-extrabold inline-block">PASTI</span>
                </h2>
                <div class="text-slate-300 text-lg md:text-xl leading-relaxed font-light p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md shadow-xl">
                    <p class="mb-2 italic opacity-80">"Profesional, Akuntabel, Sinergi, Transparan, dan Inovatif"</p>
                    <div class="w-full h-px bg-white/10 my-6"></div>
                    <p>
                        Mewujudkan pemulihan kesatuan hubungan hidup, kehidupan, dan penghidupan bagi Warga Binaan Pemasyarakatan agar dapat kembali diterima di masyarakat.
                    </p>
                </div>
            </div>
        </div>

        <!-- Mission Section -->
        <div class="relative">
            <div class="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
                <span class="text-gold-400 font-bold uppercase tracking-widest text-sm mb-4 block">Misi Kami</span>
                <h2 class="text-3xl md:text-5xl font-display font-bold text-white mb-6">Langkah Nyata Mewujudkan Visi</h2>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <?php
                $missions = array(
                    array(
                        "icon" => "fa-shield-halved",
                        "title" => "Keamanan & Ketertiban",
                        "desc" => "Melaksanakan pengamanan dan pelayanan tahanan guna memelihara keamanan dan ketertiban secara profesional.",
                        "color" => "from-blue-500/20 to-blue-600/5",
                        "iconColor" => "text-blue-400"
                    ),
                    array(
                        "icon" => "fa-heart",
                        "title" => "Pembinaan Humanis",
                        "desc" => "Menyelenggarakan pembinaan kepribadian dan kemandirian dalam rangka reintegrasi sosial yang berbasis HAM.",
                        "color" => "from-rose-500/20 to-rose-600/5",
                        "iconColor" => "text-rose-400"
                    ),
                    array(
                        "icon" => "fa-award",
                        "title" => "Pelayanan Prima",
                        "desc" => "Memberikan pelayanan perawatan kesehatan dan kebutuhan dasar bagi tahanan sesuai standar yang berlaku.",
                        "color" => "from-amber-500/20 to-amber-600/5",
                        "iconColor" => "text-amber-400"
                    )
                );
                foreach ($missions as $idx => $m) : ?>
                    <div data-aos="fade-up" data-aos-delay="<?php echo $idx * 100; ?>" class="bg-gradient-to-b <?php echo $m['color']; ?> backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden">
                        <div class="w-16 h-16 rounded-2xl bg-dark-deep/50 flex items-center justify-center <?php echo $m['iconColor']; ?> border border-white/10 mb-8 p-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                            <i class="fa-solid <?php echo $m['icon']; ?> text-3xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors"><?php echo $m['title']; ?></h3>
                        <p class="text-slate-400 leading-relaxed text-base group-hover:text-slate-200 transition-colors">
                            <?php echo $m['desc']; ?>
                        </p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Values Section (PASTI) -->
        <div class="bg-dark/40 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-8 md:p-12 relative overflow-hidden" data-aos="zoom-in">
            <div class="relative z-10 flex flex-col items-center">
                <h2 class="text-3xl md:text-4xl font-bold text-white font-display mb-12 flex items-center gap-4">
                    Tata Nilai <span class="bg-gradient-gold text-primary px-4 py-1 rounded-xl shadow-lg">PASTI</span>
                </h2>

                <div class="flex flex-wrap justify-center gap-6 w-full">
                    <?php
                    $values = array(
                        array("char" => "P", "word" => "Profesional", "desc" => "Bekerja keras, cerdas, dan tuntas."),
                        array("char" => "A", "word" => "Akuntabel", "desc" => "Dapat dipertanggungjawabkan."),
                        array("char" => "S", "word" => "Sinergi", "desc" => "Membangun kerjasama yang produktif."),
                        array("char" => "T", "word" => "Transparan", "desc" => "Terbuka dalam memberikan informasi."),
                        array("char" => "I", "word" => "Inovatif", "desc" => "Selalu berkreasi dan mengembangkan diri.")
                    );
                    foreach ($values as $idx => $v) : ?>
                        <div class="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold-400/30 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1">
                            <div class="flex items-start gap-4">
                                <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-amber-600 group-hover:scale-110 transition-transform origin-left">
                                    <?php echo $v['char']; ?>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-white mb-2"><?php echo $v['word']; ?></h3>
                                    <p class="text-sm text-slate-400 group-hover:text-slate-300 leading-snug"><?php echo $v['desc']; ?></p>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

    </div>
</div>

<?php get_footer(); ?>
