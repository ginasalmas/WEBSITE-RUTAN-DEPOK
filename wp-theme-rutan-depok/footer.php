    </main>

    <!-- Footer Ported from React -->
    <footer class="relative bg-navy-950 pt-24 pb-12 overflow-hidden border-t border-white/5">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                
                <!-- Brand Section -->
                <div class="space-y-8">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 bg-white/5 rounded-2xl p-2 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="Logo Rutan Depok" class="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                        </div>
                        <div class="flex flex-col">
                            <span class="text-white font-bold font-display text-2xl tracking-tighter leading-none">RUTAN DEPOK</span>
                            <span class="text-gold-500 text-[10px] font-black tracking-[0.4em] uppercase opacity-80 mt-1">Pasti Berdampak</span>
                        </div>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed font-light italic">
                        "Melayani dengan Hati, Bekerja dengan Pasti. Mewujudkan Pemasyarakatan yang Profesional, Akuntabel, Sinergi, Transparan, dan Inovatif."
                    </p>
                    <div class="flex gap-4">
                        <!-- Socials -->
                        <?php
                        $socials = array(
                            'instagram' => 'https://instagram.com/rutandepok',
                            'facebook'  => 'https://facebook.com/rutandepokofficial',
                            'twitter'   => 'https://twitter.com/rutandepok',
                            'youtube'   => 'https://youtube.com/c/RutanDepok'
                        );
                        foreach ($socials as $key => $url) : ?>
                            <a href="<?php echo esc_url($url); ?>" class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:border-gold-500/50 transition-all hover:-translate-y-1">
                                <i class="fa-brands fa-<?php echo $key; ?>"></i>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-white font-bold font-display text-lg mb-8 flex items-center gap-3">
                        <div class="w-8 h-px bg-gold-500"></div> Navigasi
                    </h4>
                    <ul class="space-y-4">
                        <?php
                        $foot_links = array(
                            "Beranda" => "/",
                            "Profil & Sejarah" => "/profil",
                            "Visi & Misi" => "/visi-misi",
                            "Info Publik" => "/public-info",
                            "Karya WBP" => "/karya-wbp",
                            "Berita Terkini" => "/berita",
                            "Layanan Pengaduan" => "/pengaduan"
                        );
                        foreach ($foot_links as $name => $path) : ?>
                            <li><a href="<?php echo home_url($path); ?>" class="text-slate-400 hover:text-gold-500 transition-all text-sm flex items-center gap-3 group">
                                <div class="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-gold-500 transition-all"></div>
                                <?php echo $name; ?>
                            </a></li>
                        <?php endforeach; ?>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="lg:col-span-2">
                    <h4 class="text-white font-bold font-display text-lg mb-8 flex items-center gap-3">
                        <div class="w-8 h-px bg-gold-500"></div> Kontak Kami
                    </h4>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="flex gap-4">
                            <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gold-500 shrink-0 border border-white/10">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <p class="text-slate-400 text-sm leading-relaxed">
                                Jl. Raya Cilodong No.1, Cilodong, Kec. Cilodong, Kota Depok, Jawa Barat 16414
                            </p>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gold-500 shrink-0 border border-white/10">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <p class="text-slate-400 text-sm leading-relaxed">
                                humas.rutandepok@kemenkumham.go.id<br/>
                                (021) 87901234
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p class="text-slate-500 text-xs">
                    &copy; <?php echo date('Y'); ?> Rutan Kelas I Depok. All rights reserved.
                </p>
                <div class="flex gap-8">
                    <a href="#" class="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</a>
                    <a href="#" class="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>
