<?php
/**
 * Template Name: Announcements Page
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
    <!-- Background Atmosphere -->
    <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
    </div>

    <!-- Page Header -->
    <div class="relative py-20 md:py-32 overflow-hidden border-b border-white/10">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div class="container mx-auto px-4 relative z-10 text-center">
            <div class="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-rose-500/10 border border-rose-500/30 backdrop-blur-xl text-rose-500 text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-8 shadow-2xl" data-aos="zoom-in">
                <i class="fa-solid fa-bullhorn animate-bounce"></i> Pemberitahuan Resmi
            </div>
            <h1 class="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter" data-aos="fade-up">
                Pusat <span class="text-gold-plate text-transparent bg-clip-text bg-gradient-gold">Pengumuman</span>
            </h1>
            <p class="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light italic" data-aos="fade-up" data-aos-delay="100">
                Dapatkan informasi resmi terbaru mengenai kebijakan, layanan, dan pengumuman penting di lingkungan Rutan Kelas I Depok.
            </p>
        </div>
    </div>

    <div class="container mx-auto px-4 py-24 relative z-10">
        <div class="max-w-5xl mx-auto space-y-8">
            <?php
            // In a real WP site, we'd query posts from an 'announcement' post type or category
            $announcements = array(
                array(
                    "title" => "Penyesuaian Jam Layanan Kunjungan Selama Bulan Ramadhan",
                    "date" => "20 Mar 2025",
                    "category" => "Layanan Publik",
                    "desc" => "Sehubungan dengan bulan suci Ramadhan, terdapat penyesuaian jadwal layanan kunjungan tatap muka dan penitipan barang.",
                    "status" => "Terkini"
                ),
                array(
                    "title" => "Pengumuman Hasil Seleksi Administrasi Pegawai Pemerintah (PPNPN)",
                    "date" => "15 Mar 2025",
                    "category" => "Kepegawaian",
                    "desc" => "Berikut adalah daftar nama peserta yang dinyatakan lulus seleksi administrasi untuk posisi PPNPN tahun 2025.",
                    "status" => "Penting"
                ),
                array(
                    "title" => "Himbauan Mengenai Larangan Pungli dan Gratifikasi di Lingkungan Rutan Depok",
                    "date" => "10 Mar 2025",
                    "category" => "Internal",
                    "desc" => "Ditegaskan kembali kepada seluruh pengunjung dan keluarga WBP bahwa seluruh layanan di Rutan Depok adalah GRATIS.",
                    "status" => "Permanen"
                )
            );

            foreach ($announcements as $idx => $item) : ?>
                <div class="group relative bg-navy-800/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col md:flex-row gap-8 items-center" data-aos="fade-up" data-aos-delay="<?php echo $idx * 100; ?>">
                    <div class="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-navy-900 to-primary rounded-3xl flex items-center justify-center text-gold-500 border border-gold-500/20 shadow-xl group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-primary transition-all duration-500 shrink-0">
                        <i class="fa-solid fa-file-invoice text-3xl"></i>
                    </div>

                    <div class="flex-1 text-center md:text-left">
                        <div class="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-4">
                            <span class="bg-white/5 border border-white/10 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400">
                                <i class="fa-solid fa-tag text-gold-500 mr-2"></i> <?php echo $item['category']; ?>
                            </span>
                            <span class="bg-white/5 border border-white/10 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400">
                                <i class="fa-solid fa-calendar text-gold-500 mr-2"></i> <?php echo $item['date']; ?>
                            </span>
                            <?php if ($item['status'] === 'Terkini') : ?>
                                <span class="bg-green-500/10 border border-green-500/30 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-green-500 animate-pulse">
                                    <?php echo $item['status']; ?>
                                </span>
                            <?php else : ?>
                                <span class="bg-gold-500/10 border border-gold-500/30 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-gold-500">
                                    <?php echo $item['status']; ?>
                                </span>
                            <?php endif; ?>
                        </div>
                        <h3 class="text-2xl md:text-3xl font-display font-bold text-white mb-4 italic leading-tight group-hover:text-gold-500 transition-colors"><?php echo $item['title']; ?></h3>
                        <p class="text-slate-400 leading-relaxed font-light line-clamp-2 italic mb-6">
                            <?php echo $item['desc']; ?>
                        </p>
                    </div>

                    <div class="shrink-0 w-full md:w-auto">
                        <a href="#" class="inline-flex items-center justify-center w-full md:w-16 h-16 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-gradient-gold hover:text-primary hover:border-transparent transition-all shadow-xl group/btn">
                            <i class="fa-solid fa-arrow-right text-xl group-hover/btn:translate-x-2 transition-transform"></i>
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Empty State Mock -->
        <?php if (empty($announcements)) : ?>
            <div class="text-center py-20 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
                <i class="fa-solid fa-box-open text-6xl text-slate-600 mb-6 block"></i>
                <p class="text-slate-500 font-bold uppercase tracking-widest italic">Belum ada pengumuman baru</p>
            </div>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>
