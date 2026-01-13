<?php
/**
 * Template Name: Complaints Page
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
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>

        <div class="container mx-auto px-4 relative z-10 text-center">
            <div class="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-xl text-gold-500 text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-8 shadow-[0_0_30px_rgba(212,175,55,0.1)]" data-aos="scale-in">
                <i class="fa-solid fa-shield-halved animate-pulse"></i> Suara Anda, Prioritas Kami
            </div>
            <h1 class="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter" data-aos="fade-up">
                Pusat <span class="text-gold-plate">Pengaduan</span>
            </h1>
            <p class="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light italic" data-aos="fade-up" data-aos-delay="100">
                Kami berkomitmen untuk terus meningkatkan kualitas layanan. Jangan ragu untuk melaporkan segala bentuk ketidaksesuaian atau memberikan saran yang membangun.
            </p>
        </div>
    </div>

    <div class="container mx-auto px-4 py-24 relative z-10">
        <div class="grid lg:grid-cols-12 gap-16 items-start">

            <!-- LEFT SIDE: GUIDELINES & INFO -->
            <div class="lg:col-span-4 space-y-8">
                <div class="bg-navy-800/40 backdrop-blur-2xl p-8 rounded-[2rem] border border-gold-500/10 shadow-xl" data-aos="fade-right">
                    <h3 class="text-2xl font-bold text-white mb-8 font-display flex items-center gap-3">
                        <span class="p-2 bg-gold-500/10 rounded-xl text-gold-500 shadow-inner"><i class="fa-solid fa-circle-info"></i></span>
                        Panduan Pengaduan
                    </h3>
                    <div class="space-y-8">
                        <?php
                        $guides = array(
                            array("title" => "Kerahasiaan", "desc" => "Identitas pelapor dijamin aman dan hanya diketahui oleh tim audit internal.", "icon" => "fa-shield-halved"),
                            array("title" => "Responsif", "desc" => "Setiap laporan akan ditinjau dalam waktu maksimal 2x24 jam kerja.", "icon" => "fa-clock"),
                            array("title" => "Transparan", "desc" => "Anda akan mendapatkan notifikasi progres tindak lanjut melalui WA/Email.", "icon" => "fa-bolt")
                        );
                        foreach ($guides as $idx => $g) : ?>
                            <div class="group flex gap-5">
                                <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 shrink-0 group-hover:bg-gold-500 group-hover:text-primary transition-all duration-300 shadow-lg group-hover:shadow-gold-500/30">
                                    <i class="fa-solid <?php echo $g['icon']; ?>"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-white mb-1 tracking-tight"><?php echo $g['title']; ?></h4>
                                    <p class="text-slate-400 text-sm leading-relaxed font-light italic"><?php echo $g['desc']; ?></p>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="bg-gradient-gold p-8 rounded-[2rem] text-dark-deep shadow-2xl relative overflow-hidden group" data-aos="fade-right" data-aos-delay="100">
                    <div class="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                        <i class="fa-solid fa-message text-[160px]"></i>
                    </div>
                    <h3 class="text-2xl font-black mb-4 relative z-10 tracking-tighter">Butuh Bantuan Cepat?</h3>
                    <p class="font-bold mb-6 opacity-80 relative z-10 text-sm">Hubungi petugas center kami sekarang untuk respon instan via WhatsApp.</p>
                    <a href="https://wa.me/628123456789" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 bg-dark-deep text-gold-500 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl relative z-10">
                        WhatsApp Center <i class="fa-solid fa-paper-plane"></i>
                    </a>
                </div>
            </div>

            <!-- RIGHT SIDE: THE FORM -->
            <div class="lg:col-span-8 bg-navy-800/40 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-gold-500/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden" data-aos="fade-left">
                <!-- Interactive Sparkles in background -->
                <div class="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none"></div>

                <!-- Success Message (initially hidden) -->
                <div id="success-screen" class="hidden text-center py-10 animate-fade-in">
                    <div class="w-28 h-28 bg-gold-500 text-primary rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(212,175,55,0.4)] rotate-3">
                        <i class="fa-solid fa-circle-check text-5xl"></i>
                    </div>
                    <h2 class="text-4xl font-black text-white mb-6 font-display italic tracking-tighter">Laporan Berhasil Terkirim!</h2>
                    <p class="text-slate-400 mb-12 text-xl font-light italic">
                        Terima kasih. Kami sangat menghargai kejujuran Anda. Tim kami akan segera menganalisis pengaduan ini dengan serius.
                    </p>
                    <button
                        onclick="location.reload()"
                        class="px-12 py-5 bg-gradient-gold text-dark-deep font-black rounded-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all uppercase tracking-[0.2em] text-sm shadow-xl"
                    >
                        Kirim Laporan Lainnya
                    </button>
                </div>

                <!-- Complaint Form -->
                <form id="complaint-form" class="space-y-10 relative z-10 animate-fade-in">
                    <div class="grid md:grid-cols-2 gap-10">
                        <div class="space-y-4">
                            <label class="text-xs font-black text-gold-500 uppercase tracking-widest ml-1">Nama Pelapor</label>
                            <div class="relative group">
                                <div class="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    class="w-full bg-navy-900/50 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-900 transition-all shadow-inner font-medium"
                                    placeholder="Input nama lengkap..."
                                >
                            </div>
                        </div>
                        <div class="space-y-4">
                            <label class="text-xs font-black text-gold-500 uppercase tracking-widest ml-1">WhatsApp / HP</label>
                            <div class="relative group">
                                <div class="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    class="w-full bg-navy-900/50 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-900 transition-all shadow-inner font-medium"
                                    placeholder="0812-xxxx-xxxx"
                                >
                            </div>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-10">
                        <div class="space-y-4">
                            <label class="text-xs font-black text-gold-500 uppercase tracking-widest ml-1">Email Aktif</label>
                            <div class="relative group">
                                <div class="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    class="w-full bg-navy-900/50 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-900 transition-all shadow-inner font-medium"
                                    placeholder="alamat@email.com"
                                >
                            </div>
                        </div>
                        <div class="space-y-4">
                            <label class="text-xs font-black text-gold-500 uppercase tracking-widest ml-1">Kategori Laporan</label>
                            <div class="relative group">
                                <div class="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">
                                    <i class="fa-solid fa-tag"></i>
                                </div>
                                <select
                                    name="category"
                                    class="w-full bg-navy-900/50 border border-white/5 rounded-2xl py-5 pl-16 pr-12 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-900 transition-all appearance-none cursor-pointer font-medium"
                                >
                                    <option value="layanan">Kualitas Pelayanan</option>
                                    <option value="pungli">Pungutan Liar / Gratifikasi</option>
                                    <option value="petugas">Pelanggaran Disiplin Petugas</option>
                                    <option value="fasilitas">Kondisi Sarana & Prasarana</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                                <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <label class="text-xs font-black text-gold-500 uppercase tracking-widest ml-1">Detail Pengaduan</label>
                        <div class="relative group shadow-2xl">
                            <textarea
                                name="message"
                                required
                                rows="6"
                                class="w-full bg-navy-900/50 border border-white/5 rounded-[2rem] p-8 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-900 transition-all shadow-inner resize-none font-medium leading-relaxed italic"
                                placeholder="Jelaskan secara rinci kronologi, lokasi, dan oknum terkait jika ada..."
                            ></textarea>
                        </div>
                    </div>

                    <div class="bg-gold-500/10 border border-gold-500/20 p-8 rounded-[2rem] flex gap-6 text-sm text-slate-300 leading-relaxed shadow-lg backdrop-blur-md">
                        <div class="p-3 bg-gold-500/20 rounded-2xl text-gold-400 shrink-0 h-fit shadow-inner border border-gold-500/20">
                            <i class="fa-solid fa-circle-exclamation text-2xl"></i>
                        </div>
                        <p class="font-medium italic">
                            "Laporan yang Anda buat dilindungi oleh sistem keamanan berlapis. Pastikan data yang dikirimkan adalah akurat untuk mempermudah proses verifikasi kami."
                        </p>
                    </div>

                    <button
                        type="submit"
                        id="submit-btn"
                        class="w-full group relative overflow-hidden bg-gradient-gold p-6 rounded-[2rem] text-dark-deep font-black uppercase tracking-[0.3em] text-sm hover:scale-[1.02] transition-all shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)]"
                    >
                        <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span class="relative flex items-center justify-center gap-4" id="btn-text">
                            <i class="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                            Kirim Laporan Resmi
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('complaint-form');
        const successScreen = document.getElementById('success-screen');
        const submitBtn = document.getElementById('submit-btn');
        const btnText = document.getElementById('btn-text');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // UI state change
            submitBtn.disabled = true;
            btnText.innerHTML = `<i class="fa-solid fa-circle-notch animate-spin"></i> Memproses Data...`;
            
            // Simulate API delay
            setTimeout(() => {
                form.classList.add('hidden');
                successScreen.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1500);
        });
    });
</script>

<?php get_footer(); ?>
