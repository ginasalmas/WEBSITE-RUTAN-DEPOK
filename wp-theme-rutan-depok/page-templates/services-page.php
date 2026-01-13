<?php
/**
 * Template Name: Services Page
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
    <!-- Background Atmosphere -->
    <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
    </div>

    <!-- Page Header -->
    <div class="relative py-20 md:py-32 overflow-hidden border-b border-white/10">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div class="container mx-auto px-4 relative z-10 text-center">
            <div class="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-xl text-gold-500 text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-8 shadow-2xl" data-aos="zoom-in">
                <i class="fa-solid fa-hand-holding-heart"></i> Layanan Prioritas
            </div>
            <h1 class="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter" data-aos="fade-up">
                Layanan <span class="text-gold-plate">Masyarakat</span>
            </h1>
            <p class="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light italic" data-aos="fade-up" data-aos-delay="100">
                Komitmen kami dalam memberikan pelayanan publik yang transparan, akuntabel, dan bebas dari pungutan liar.
            </p>
        </div>
    </div>

    <div class="container mx-auto px-4 py-24 relative z-10">
        <!-- Main Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            $services = array(
                array(
                    "title" => "Kunjungan Tatap Muka",
                    "icon" => "fa-users",
                    "desc" => "Layanan kunjungan langsung bagi keluarga Warga Binaan Pemasyarakatan dengan sistem pendaftaran digital.",
                    "link" => "/layanan/kunjungan"
                ),
                array(
                    "title" => "Penitipan Barang & Makanan",
                    "icon" => "fa-box-open",
                    "desc" => "Fasilitas penitipan barang dan makanan untuk WBP melalui pemeriksaan ketat demi keamanan bersama.",
                    "link" => "/layanan/penitipan"
                ),
                array(
                    "title" => "Layanan Video Call",
                    "icon" => "fa-video",
                    "desc" => "Solusi komunikasi jarak jauh bagi keluarga yang tidak dapat berkunjung secara langsung.",
                    "link" => "/layanan/vcall"
                ),
                array(
                    "title" => "Integrasi (PB, CB, CMB)",
                    "icon" => "fa-file-shield",
                    "desc" => "Pengurusan administrasi Pembebasan Bersyarat, Cuti Bersyarat, dan Cuti Menjelang Bebas secara transparan.",
                    "link" => "/layanan/integrasi"
                ),
                array(
                    "title" => "Bantuan Hukum Gratis",
                    "icon" => "fa-scale-balanced",
                    "desc" => "Pemberian konsultasi dan bantuan hukum bagi WBP yang kurang mampu bekerjasama dengan LBH terakreditasi.",
                    "link" => "/layanan/hukum"
                ),
                array(
                    "title" => "Informasi & Pengaduan",
                    "icon" => "fa-headset",
                    "desc" => "Pusat informasi layanan dan kanal resmi pengaduan masyarakat atas kualitas layanan kami.",
                    "link" => "/pengaduan"
                )
            );

            foreach ($services as $idx => $s) : ?>
                <div class="group relative bg-navy-800/40 backdrop-blur-2xl p-10 md:p-12 rounded-[3rem] border border-white/5 hover:border-gold-500/30 transition-all duration-700 shadow-2xl hover:-translate-y-2 overflow-hidden" data-aos="fade-up" data-aos-delay="<?php echo $idx * 50; ?>">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-colors"></div>
                    
                    <div class="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center text-gold-500 border border-gold-500/20 text-3xl mb-10 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-primary transition-all duration-500 shadow-lg">
                        <i class="fa-solid <?php echo $s['icon']; ?>"></i>
                    </div>

                    <h3 class="text-2xl font-bold text-white mb-6 font-display italic tracking-tight group-hover:text-gold-500 transition-colors"><?php echo $s['title']; ?></h3>
                    <p class="text-slate-400 leading-relaxed font-light italic mb-10 text-sm md:text-base">
                        <?php echo $s['desc']; ?>
                    </p>

                    <a href="<?php echo esc_url(home_url($s['link'])); ?>" class="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs group/btn">
                        Pelajari Selengkapnya <i class="fa-solid fa-arrow-right text-gold-500 group-hover/btn:translate-x-2 transition-transform"></i>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Call to Action -->
        <div class="mt-32 p-12 md:p-20 bg-gradient-to-br from-navy-800 to-primary rounded-[4rem] border border-gold-500/20 text-center relative overflow-hidden group shadow-3xl" data-aos="zoom-in">
            <div class="absolute top-[-50%] left-[-10%] w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none"></div>
            
            <h2 class="text-4xl md:text-6xl font-display font-black text-white mb-8 relative z-10 italic">
                Kami Siap Melayani <span class="text-gold-plate">Setulus Hati</span>
            </h2>
            <p class="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
                Anda menemui kendala dalam layanan kami? Jangan ragu untuk melaporkannya melalui kanal pengaduan resmi kami.
            </p>
            <div class="flex flex-wrap justify-center gap-6 relative z-10">
                <a href="<?php echo esc_url(home_url('/pengaduan')); ?>" class="px-12 py-5 bg-gradient-gold text-primary font-black rounded-3xl hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all uppercase tracking-widest text-sm shadow-xl active:scale-95">
                    Lapor Sekarang <i class="fa-solid fa-paper-plane ml-2"></i>
                </a>
                <a href="https://wa.me/08123456789" class="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black rounded-3xl hover:bg-white/10 transition-all uppercase tracking-widest text-sm shadow-xl active:scale-95">
                    Bantuan WhatsApp <i class="fa-brands fa-whatsapp ml-2"></i>
                </a>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
