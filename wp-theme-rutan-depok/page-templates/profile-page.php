<?php
/**
 * Template Name: Profile Page
 */
get_header(); ?>

<div class="min-h-screen bg-primary selection:bg-gold-500/30">
    <!-- Page Header -->
    <div class="relative py-24 md:py-40 overflow-hidden border-b border-white/5">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[150px] animate-pulse"></div>

        <div class="container mx-auto px-4 relative z-10 text-center">
            <div data-aos="fade-up" class="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-xl text-gold-500 text-xs md:text-sm font-black uppercase tracking-[0.4em] mb-8">
                <i class="fa-solid fa-shield-halved"></i> Tentang Institusi
            </div>
            <h1 data-aos="fade-up" data-aos-delay="100" class="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter">
                Profil <span class="text-gold-plate italic">Eksklusif</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" class="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Mengenal lebih dekat dedikasi dan perjalanan Rutan Kelas I Depok dalam mewujudkan pemasyarakatan yang manusiawi dan modern.
            </p>
        </div>
    </div>

    <div class="container mx-auto px-4 -mt-16 md:-mt-24 relative z-20 pb-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

            <!-- Left COLUMN: SEJARAH & STRUCTURE -->
            <div class="lg:col-span-8 space-y-12">

                <!-- Interactive Sejarah Timeline -->
                <div data-aos="fade-up" class="bg-navy-800/40 backdrop-blur-3xl p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gold-500/10 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-12 opacity-5">
                        <i class="fa-solid fa-clock text-[200px]"></i>
                    </div>

                    <h2 class="text-3xl md:text-4xl font-black font-display text-white mb-16 flex items-center gap-4">
                        <span class="p-4 bg-gradient-gold rounded-2xl text-dark-deep shadow-lg"><i class="fa-solid fa-book-open text-2xl"></i></span>
                        Jejak Perjalanan
                    </h2>

                    <div class="relative space-y-12">
                        <!-- Vertical Line -->
                        <div class="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-gold-500 via-gold-500/50 to-transparent opacity-20 hidden md:block"></div>

                        <?php
                        $milestones = array(
                            array("year" => "2005", "title" => "Resmikan Pelayanan", "desc" => "Mulai beroperasi pada lahan 2.5 Ha guna mengurai overkapasitas wilayah Jabodetabek."),
                            array("year" => "2012", "title" => "Pusat Transformasi", "desc" => "Pengembangan gedung perkantoran dan fasilitas pembinaan kemandirian WBP."),
                            array("year" => "2018", "title" => "WBK Achievement", "desc" => "Mendapatkan predikat Wilayah Bebas dari Korupsi (WBK) dari Kemenpan-RB."),
                            array("year" => "2024", "title" => "Inovasi Digital", "desc" => "Transformasi layanan berbasis digital terintegrasi untuk keterbukaan informasi publik.")
                        );
                        foreach ($milestones as $idx => $m) : ?>
                            <div class="relative pl-0 md:pl-20 group" data-aos="fade-left" data-aos-delay="<?php echo $idx * 100; ?>">
                                <div class="absolute left-0 top-1.5 w-12 h-12 rounded-2xl bg-navy-900 border border-gold-500/30 flex items-center justify-center z-10 group-hover:bg-gold-500 group-hover:text-primary transition-all duration-500 group-hover:scale-110 shadow-xl hidden md:flex">
                                    <span class="font-black text-[10px] group-hover:opacity-0 transition-opacity uppercase"><?php echo $idx + 1; ?></span>
                                    <i class="fa-solid fa-sparkles text-xs opacity-0 group-hover:opacity-100 absolute transition-opacity"></i>
                                </div>

                                <div class="bg-white/5 p-8 rounded-[2rem] border border-white/5 hover:border-gold-500/20 transition-all duration-500 group-hover:bg-white-[0.07] shadow-lg">
                                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <h3 class="text-2xl font-black text-white group-hover:text-gold-500 transition-colors uppercase tracking-tight"><?php echo $m['title']; ?></h3>
                                        <span class="px-5 py-1.5 bg-gold-500/10 text-gold-500 rounded-full text-sm font-black border border-gold-500/20 shadow-inner"><?php echo $m['year']; ?></span>
                                    </div>
                                    <p class="text-slate-400 text-lg leading-relaxed font-light"><?php echo $m['desc']; ?></p>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Organizational Structure -->
                <div data-aos="fade-up" class="bg-navy-800/40 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gold-500/10">
                    <h2 class="text-3xl md:text-4xl font-black font-display text-white mb-16 flex items-center gap-4">
                        <span class="p-4 bg-navy-900 rounded-2xl text-gold-500 border border-gold-500/20 shadow-xl"><i class="fa-solid fa-users text-2xl"></i></span>
                        Struktur Organisasi
                    </h2>

                    <div class="relative p-12 bg-navy-900/40 rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-inner text-center">
                        <div class="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div class="relative z-10 flex flex-col items-center">
                            <div class="mb-20 relative">
                                <div class="bg-gradient-gold p-0.5 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform">
                                    <div class="bg-primary px-12 py-6 rounded-[calc(1rem-2px)] text-center min-w-[280px]">
                                        <p class="text-xs font-black uppercase tracking-[0.3em] text-gold-500 mb-2">Kepala Rutan</p>
                                        <p class="font-black text-white text-lg tracking-tight uppercase">Karutan Kelas I Depok</p>
                                    </div>
                                </div>
                                <div class="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-gold-500 to-transparent"></div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full relative">
                                <?php
                                $depts = array(
                                    array("role" => "Kamtib", "label" => "KPR"),
                                    array("role" => "Pelayanan", "label" => "Yan Tahanan"),
                                    array("role" => "Pengelolaan", "label" => "Kasubag TU"),
                                    array("role" => "Pembinaan", "label" => "Kasi Giatja")
                                );
                                foreach ($depts as $d) : ?>
                                    <div class="bg-white/5 border border-white/10 p-6 rounded-2xl w-full hover:border-gold-500/40 hover:bg-white/10 transition-all duration-500 shadow-xl">
                                        <p class="text-[10px] font-black text-gold-500 uppercase tracking-widest mb-2 opacity-70"><?php echo $d['role']; ?></p>
                                        <p class="font-black text-white text-sm tracking-tight uppercase"><?php echo $d['label']; ?></p>
                                    </div>
                                <?php endforeach; ?>
                            </div>

                            <div class="mt-20">
                                <a href="#" class="group flex items-center gap-4 px-10 py-5 bg-navy-800 text-gold-500 border border-gold-500/20 rounded-2xl hover:bg-gradient-gold hover:text-dark-deep transition-all duration-500 font-black text-sm uppercase tracking-widest shadow-2xl">
                                    Unduh Struktur Digital <i class="fa-solid fa-chevron-right group-hover:translate-x-2 transition-transform"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right COLUMN: HEAD PROFILE & SOCIALS -->
            <div class="lg:col-span-4 space-y-8">

                <!-- Kepala Rutan Card -->
                <div data-aos="fade-left" class="bg-navy-800/60 backdrop-blur-3xl p-10 rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden group">
                    <div class="absolute -right-20 -top-20 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-700"></div>

                    <div class="text-center relative z-10">
                        <div class="relative inline-block mb-10">
                            <div class="w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-gold shadow-[0_0_60px_rgba(212,175,55,0.3)] mx-auto relative group">
                                <div class="absolute inset-0 rounded-full bg-gold-500 animate-ping opacity-20"></div>
                                <img
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/kepala-rutan.png"
                                    alt="Kepala Rutan"
                                    class="w-full h-full rounded-full object-cover border-[6px] border-dark-deep relative z-10"
                                />
                            </div>
                            <div class="absolute bottom-2 right-2 bg-gradient-gold text-dark-deep p-3 rounded-2xl shadow-xl border-4 border-dark-deep">
                                <i class="fa-solid fa-award text-2xl"></i>
                            </div>
                        </div>
                        <h3 class="text-2xl font-black text-white font-display mb-2 uppercase">Lamarta Sembiring, Bc.IP., S.H.</h3>
                        <p class="text-gold-500 text-xs font-black uppercase tracking-[0.2em] mb-10">Kepala Rutan Kelas I Depok</p>

                        <div class="bg-white/5 p-8 rounded-[2rem] border border-white/5 relative italic text-slate-300 leading-relaxed font-medium">
                            <i class="fa-solid fa-quote-left text-4xl text-gold-500/20 absolute -top-2 left-4"></i>
                            Komitmen kami adalah memberikan pelayanan prima tanpa pungutan liar dan diskriminasi. Membangun integritas dari hati untuk negeri.
                            <i class="fa-solid fa-quote-right text-4xl text-gold-500/20 absolute -bottom-6 right-4"></i>
                        </div>
                    </div>
                </div>

                <!-- Kanal Media Sosial -->
                <div data-aos="fade-left" data-aos-delay="100" class="bg-navy-800/40 backdrop-blur-3xl p-10 rounded-[3rem] shadow-2xl border border-white/5">
                    <h3 class="text-2xl font-black text-white font-display mb-10 flex items-center gap-3">
                        <span class="p-2 bg-white/5 rounded-xl text-gold-500"><i class="fa-solid fa-globe"></i></span>
                        Kanal Media Sosial
                    </h3>
                    <div class="grid grid-cols-1 gap-4">
                        <?php
                        $socials = array(
                            array("name" => "Instagram", "handle" => "@rutandepok", "color" => "from-purple-600 to-pink-500", "icon" => "fa-inverse-instagram"),
                            array("name" => "Facebook", "handle" => "Rutan Kelas I Depok", "color" => "from-blue-700 to-blue-500", "icon" => "fa-facebook-f"),
                            array("name" => "Twitter", "handle" => "@rutandepok", "color" => "from-sky-500 to-sky-400", "icon" => "fa-x-twitter"),
                            array("name" => "Youtube", "handle" => "Rutan Depok TV", "color" => "from-red-700 to-red-500", "icon" => "fa-youtube")
                        );
                        foreach ($socials as $s) : ?>
                            <a href="#" class="group flex items-center gap-5 p-5 bg-white/5 border border-white/5 rounded-[1.5rem] hover:border-gold-500/30 transition-all duration-300 hover:bg-white/10">
                                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br <?php echo $s['color']; ?> flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <i class="fa-brands <?php echo strpos($s['icon'], 'fa-') === 0 ? $s['icon'] : 'fa-' . $s['icon']; ?>"></i>
                                </div>
                                <div>
                                    <p class="text-[10px] font-black text-gold-500 uppercase tracking-widest"><?php echo $s['name']; ?></p>
                                    <p class="text-white font-bold text-sm"><?php echo $s['handle']; ?></p>
                                </div>
                                <div class="ml-auto opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                                    <i class="fa-solid fa-chevron-right text-gold-500"></i>
                                </div>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="grid grid-cols-2 gap-4">
                    <?php
                    $quick_stats = array(
                        array("label" => "Kapasitas", "value" => "1,500", "icon" => "fa-users"),
                        array("label" => "Lahan", "value" => "2.5 Ha", "icon" => "fa-map"),
                        array("label" => "Integritas", "value" => "WBK", "icon" => "fa-award"),
                        array("label" => "Responsif", "value" => "24/7", "icon" => "fa-bolt")
                    );
                    foreach ($quick_stats as $idx => $qs) : ?>
                        <div data-aos="zoom-in" data-aos-delay="<?php echo $idx * 50; ?>" class="bg-navy-800/40 backdrop-blur-md p-6 rounded-[2rem] border border-gold-500/10 hover:border-gold-500/40 transition-all duration-500 group shadow-lg">
                            <div class="text-gold-500 mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left"><i class="fa-solid <?php echo $qs['icon']; ?>"></i></div>
                            <div class="text-2xl font-black text-white font-display"><?php echo $qs['value']; ?></div>
                            <div class="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1"><?php echo $qs['label']; ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
