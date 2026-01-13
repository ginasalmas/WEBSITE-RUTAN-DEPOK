<?php
/**
 * Template Name: Public Info Page
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
    <!-- Background Atmosphere -->
    <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
    </div>

    <!-- Page Header -->
    <div class="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div class="container mx-auto px-4 relative z-10 text-center">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-6" data-aos="fade-up">
                <i class="fa-solid fa-circle-info"></i> Transparansi
            </div>
            <h1 class="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-6 drop-shadow-2xl" data-aos="fade-up" data-aos-delay="100">
                Informasi Publik
            </h1>
            <p class="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light italic" data-aos="fade-up" data-aos-delay="200">
                Akses keterbukaan informasi publik sebagai perwujudan tata kelola pemerintahan yang baik dan transparan.
            </p>
        </div>
    </div>

    <div class="container mx-auto px-4 py-12 relative z-10">
        <!-- Tabs Navigation -->
        <div class="flex flex-wrap justify-center gap-2 mb-16" id="info-tabs">
            <?php
            $tabs = array(
                array("id" => "layanan", "label" => "Layanan Publik", "icon" => "fa-clock"),
                array("id" => "sop", "label" => "SOP & Regulasi", "icon" => "fa-file-lines"),
                array("id" => "dokumen", "label" => "Unduh Dokumen", "icon" => "fa-download"),
                array("id" => "kontak", "label" => "Kontak Layanan", "icon" => "fa-phone")
            );
            foreach ($tabs as $idx => $tab) : ?>
                <button
                    class="info-tab-btn flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 border <?php echo $idx === 0 ? 'bg-gradient-gold text-primary border-transparent shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105 active' : 'bg-white/5 text-slate-400 border-white/5 hover:border-gold-500/20 hover:text-white'; ?>"
                    data-tab="<?php echo $tab['id']; ?>"
                    data-aos="fade-up"
                    data-aos-delay="<?php echo $idx * 50; ?>"
                >
                    <i class="fa-solid <?php echo $tab['icon']; ?>"></i>
                    <?php echo $tab['label']; ?>
                </button>
            <?php endforeach; ?>
        </div>

        <!-- Content Area -->
        <div class="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl p-6 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl min-h-[500px]" data-aos="zoom-in">
            
            <!-- Layanan Content -->
            <div id="tab-content-layanan" class="info-content space-y-10">
                <div class="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div class="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center text-gold-500 border border-gold-500/20 shadow-lg">
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    <h2 class="text-2xl md:text-3xl font-bold font-display text-white">Jam Layanan Kunjungan</h2>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-gradient-to-br from-gold-600/10 to-transparent p-8 rounded-3xl border border-gold-500/20 group hover:border-gold-500/40 transition-all shadow-xl">
                        <h3 class="font-bold text-gold-500 text-xl mb-6 flex items-center gap-2">
                            <i class="fa-solid fa-users"></i> Kunjungan Tatap Muka
                        </h3>
                        <ul class="space-y-4 text-slate-300">
                            <li class="flex justify-between border-b border-white/5 pb-3">
                                <span class="text-slate-400 font-medium">Senin - Kamis</span>
                                <span class="font-bold text-white">09.00 - 15.00 WIB</span>
                            </li>
                            <li class="flex justify-between border-b border-white/5 pb-3">
                                <span class="text-slate-400 font-medium">Jumat</span>
                                <span class="font-bold text-white">09.00 - 11.30 WIB</span>
                            </li>
                            <li class="flex justify-between">
                                <span class="text-slate-400 font-medium">Sabtu</span>
                                <span class="font-bold text-white">09.00 - 13.00 WIB</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-gradient-to-br from-gold-500/10 to-transparent p-8 rounded-3xl border border-gold-500/20 group hover:border-gold-500/40 transition-all shadow-xl">
                        <h3 class="font-bold text-gold-400 text-xl mb-6 flex items-center gap-2">
                            <i class="fa-solid fa-shield-halved"></i> Penitipan Barang
                        </h3>
                        <ul class="space-y-4 text-slate-300">
                            <li class="flex justify-between border-b border-white/5 pb-3">
                                <span class="text-slate-400 font-medium">Setiap Hari</span>
                                <span class="font-bold text-white">08.00 - 16.00 WIB</span>
                            </li>
                            <li class="text-sm italic mt-6 text-gold-400/80 leading-relaxed font-medium">
                                *Wajib membawa identitas diri (KTP/SIM) yang masih berlaku untuk proses verifikasi.
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Simplified Flow Chart -->
                <div class="mt-12 p-8 bg-navy-900/50 rounded-3xl border border-white/5">
                    <h3 class="text-xl font-bold text-white mb-8 flex items-center gap-3">
                        <i class="fa-solid fa-diagram-project text-gold-500"></i> Alur Kunjungan
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div class="text-center p-4">
                            <div class="w-10 h-10 bg-gold-500 text-primary rounded-full flex items-center justify-center mx-auto mb-3 font-black">1</div>
                            <p class="text-xs font-bold text-slate-300">Ambil Antrean</p>
                        </div>
                        <div class="text-center p-4">
                            <div class="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-black">2</div>
                            <p class="text-xs font-bold text-slate-300">Verifikasi Berkas</p>
                        </div>
                        <div class="text-center p-4">
                            <div class="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-black">3</div>
                            <p class="text-xs font-bold text-slate-300">Pemeriksaan Badan</p>
                        </div>
                        <div class="text-center p-4">
                            <div class="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-black">4</div>
                            <p class="text-xs font-bold text-slate-300">Masuk Lokasi</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SOP Content -->
            <div id="tab-content-sop" class="info-content hidden space-y-8 animate-fade-in">
                <div class="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div class="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center text-gold-500 border border-gold-500/20 shadow-lg">
                        <i class="fa-solid fa-file-invoice"></i>
                    </div>
                    <h2 class="text-2xl md:text-3xl font-bold font-display text-white">Standar Operasional Prosedur</h2>
                </div>
                <div class="space-y-4">
                    <?php
                    $sops = array(
                        'SOP Layanan Kunjungan Tatap Muka',
                        'SOP Layanan Video Call WBP',
                        'SOP Penitipan Barang & Makanan',
                        'SOP Pengaduan Masyarakat (WBS)'
                    );
                    foreach ($sops as $i => $title) : ?>
                        <div class="flex items-center justify-between p-6 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/5 hover:border-gold-500/30 transition-all group cursor-pointer">
                            <div class="flex items-center gap-5">
                                <div class="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center text-gold-500 font-bold border border-gold-500/10 group-hover:bg-gold-500 group-hover:text-primary transition-all">0<?php echo $i + 1; ?></div>
                                <div>
                                    <h4 class="font-bold text-white group-hover:text-gold-500 transition-colors uppercase tracking-tight text-sm md:text-base"><?php echo $title; ?></h4>
                                    <p class="text-[10px] md:text-xs text-slate-500 font-medium italic">Terakhir diperbarui: Januari 2025</p>
                                </div>
                            </div>
                            <div class="text-gold-500 group-hover:translate-x-1 transition-transform">
                                <i class="fa-solid fa-chevron-right text-xl"></i>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Dokumen Content -->
            <div id="tab-content-dokumen" class="info-content hidden space-y-8 animate-fade-in">
                <div class="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div class="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center text-gold-500 border border-gold-500/20 shadow-lg">
                        <i class="fa-solid fa-download"></i>
                    </div>
                    <h2 class="text-2xl md:text-3xl font-bold font-display text-white">Unduh Dokumen Publik</h2>
                </div>
                <div class="grid md:grid-cols-1 gap-4">
                    <?php
                    $docs = array(
                        array("name" => "Renstra 2025-2029", "size" => "2.4 MB"),
                        array("name" => "Laporan Kinerja Instansi 2024", "size" => "5.1 MB"),
                        array("name" => "DIPA Petikan Tahun 2025", "size" => "1.2 MB"),
                        array("name" => "Maklumat Pelayanan Rutan Depok", "size" => "0.8 MB")
                    );
                    foreach ($docs as $doc) : ?>
                        <div class="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between hover:border-gold-500/40 transition-all group shadow-lg">
                            <div class="flex items-center gap-5">
                                <div class="w-12 h-12 bg-navy-950 rounded-xl flex items-center justify-center text-slate-500 group-hover:text-gold-500 transition-colors">
                                    <i class="fa-solid fa-file-pdf text-2xl"></i>
                                </div>
                                <div>
                                    <span class="font-bold text-slate-200 group-hover:text-white transition-colors block"><?php echo $doc['name']; ?></span>
                                    <span class="text-[10px] text-slate-500 font-bold uppercase tracking-widest"><?php echo $doc['size']; ?></span>
                                </div>
                            </div>
                            <button class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-primary transition-all shadow-inner border border-white/5">
                                <i class="fa-solid fa-download"></i>
                            </button>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Kontak Content -->
            <div id="tab-content-kontak" class="info-content hidden space-y-10 animate-fade-in">
                <div class="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div class="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center text-gold-500 border border-gold-500/20 shadow-lg">
                        <i class="fa-solid fa-headset"></i>
                    </div>
                    <h2 class="text-2xl md:text-3xl font-bold font-display text-white">Hubungi Layanan Kami</h2>
                </div>
                <div class="grid md:grid-cols-2 gap-12">
                    <div class="space-y-8">
                        <p class="text-slate-400 leading-relaxed text-lg font-light italic">
                            Kami menyediakan berbagai kanal komunikasi untuk mempermudah akses informasi dan penyampaian aspirasi Anda secara langsung.
                        </p>
                        <div class="space-y-6">
                            <div class="flex items-center gap-5 group cursor-pointer">
                                <div class="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 border border-green-500/20 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-primary transition-all duration-300 shadow-lg">
                                    <i class="fa-brands fa-whatsapp text-2xl"></i>
                                </div>
                                <div>
                                    <p class="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">WhatsApp Center</p>
                                    <p class="text-xl font-bold text-white group-hover:text-gold-500 transition-colors">0812-3456-7890</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-5 group cursor-pointer">
                                <div class="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-primary transition-all duration-300 shadow-lg">
                                    <i class="fa-solid fa-envelope text-2xl"></i>
                                </div>
                                <div>
                                    <p class="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Email Resmi</p>
                                    <p class="text-xl font-bold text-white group-hover:text-gold-500 transition-colors">info@rutandepok.go.id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-navy-900/40 border border-white/10 p-8 rounded-[2.5rem] text-center flex flex-col justify-center gap-6 shadow-2xl relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl"></div>
                        <h3 class="font-bold text-white text-xl font-display">Jam Operasional Kantor</h3>
                        <p class="text-slate-400 font-light italic">Pelayanan Administrasi & Informasi Umum</p>
                        <div class="bg-white/5 py-6 rounded-2xl border border-white/5">
                            <p class="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">Senin - Jumat</p>
                            <span class="text-white font-black text-2xl font-display tracking-widest">08.00 - 16.00</span>
                        </div>
                        <button class="px-8 py-5 bg-gradient-gold text-primary font-black rounded-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all uppercase tracking-widest text-xs shadow-xl active:scale-95">
                            Kirim Pertanyaan
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const tabBtns = document.querySelectorAll('.info-tab-btn');
        const contents = document.querySelectorAll('.info-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-tab');

                // Update Button UI
                tabBtns.forEach(b => {
                    b.classList.remove('bg-gradient-gold', 'text-primary', 'border-transparent', 'shadow-[0_0_20px_rgba(212,175,55,0.4)]', 'scale-105', 'active');
                    b.classList.add('bg-white/5', 'text-slate-400', 'border-white/5');
                });
                btn.classList.add('bg-gradient-gold', 'text-primary', 'border-transparent', 'shadow-[0_0_20px_rgba(212,175,55,0.4)]', 'scale-105', 'active');
                btn.classList.remove('bg-white/5', 'text-slate-400', 'border-white/5');

                // Update Content Visibility
                contents.forEach(content => {
                    content.classList.add('hidden');
                });
                document.getElementById('tab-content-' + targetId).classList.remove('hidden');
            });
        });
    });
</script>

<?php get_footer(); ?>
