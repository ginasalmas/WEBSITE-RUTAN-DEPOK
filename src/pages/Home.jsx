import { useState, useEffect } from 'react';
import { Newspaper, Info, MessageSquare, FileText, ArrowRight, Activity, Shield, Users, Trophy, ChevronLeft, ChevronRight, Star, Bell, Calendar, Tag, Play, ExternalLink, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import hydroponicImg from '../assets/hydroponic.png';
import heroService from '../assets/hero-service.png';
import heroIntegrity from '../assets/hero-integrity.png';
import heroSkills from '../assets/hero-skills.png';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    // Parallax & Scroll Check
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const slides = [
        {
            id: 1,
            image: heroService,
            title: "Melayani dengan Hati",
            subtitle: "Wujudkan Pemasyarakatan PASTI: Profesional, Akuntabel, Sinergi, Transparan, Inovatif.",
            cta: "Layanan Publik"
        },
        {
            id: 2,
            image: heroIntegrity,
            title: "Zona Integritas",
            subtitle: "Komitmen penuh menuju Wilayah Bebas dari Korupsi (WBK) dan Birokrasi Bersih Melayani (WBBM).",
            cta: "Profil Kami"
        },
        {
            id: 3,
            image: heroSkills,
            title: "Pembinaan Kemandirian",
            subtitle: "Membekali Warga Binaan dengan keterampilan produktif untuk masa depan yang lebih cerah.",
            cta: "Program Kami"
        }
    ];

    const highlights = [
        { id: 1, title: "Kunjungan Kerja Kakanwil Kemenkumham Jabar", date: "14 Jan 2025", category: "Kedinasan", image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=800&auto=format&fit=crop", excerpt: "Penguatan tugas dan fungsi petugas pemasyarakatan." },
        { id: 2, title: "Panen Raya Hidroponik Warga Binaan", date: "12 Jan 2025", category: "Pembinaan", image: hydroponicImg, excerpt: "Hasil pembinaan kemandirian kembali dituai dengan sukses." },
        { id: 3, title: "Giat Jumat Bersih Lingkungan Rutan", date: "10 Jan 2025", category: "Kegiatan", image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop", excerpt: "Menjaga kebersihan dan kesehatan lingkungan blok hunian." },
    ];

    const announcements = [
        { id: 1, title: "Jadwal Kunjungan Hari Raya Idul Fitri 1446 H", date: "15 Jan 2025", type: "Penting" },
        { id: 2, title: "Pembukaan Pendaftaran Pelatihan Barista Batch 3", date: "10 Jan 2025", type: "Info" },
        { id: 3, title: "Perubahan Jam Layanan Penitipan Barang", date: "05 Jan 2025", type: "Regulasi" },
        { id: 4, title: "Himbauan Terkait Kesehatan di Musim Pancaroba", date: "01 Jan 2025", type: "Kesehatan" },
    ];

    useEffect(() => {
        const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <div className="min-h-screen bg-primary text-slate-200 font-sans selection:bg-gold-500 selection:text-dark-deep relative overflow-hidden">

            {/* DYNAMIC BACKGROUND BLOBS - NAVY & GOLD THEME */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-gold-400/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-navy-800/10 rounded-full blur-[150px] animate-blob animation-delay-4000"></div>
            </div>

            {/* HERO SECTION - CINEMATIC SLIDER */}
            <section className="relative h-[calc(100dvh-72px)] md:h-[calc(100dvh-88px)] w-full overflow-hidden z-10">
                {slides.map((slide, index) => (
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
                    >
                        {/* Image Layer */}
                        <div className="absolute inset-0">
                            <motion.img
                                src={slide.image}
                                alt={slide.title}
                                initial={{ scale: 1 }}
                                animate={{ scale: index === currentSlide ? 1.1 : 1 }}
                                transition={{ duration: 10, ease: "linear" }}
                                className="w-full h-full object-cover"
                            />
                            {/* Pro Gradient Overlay - RICHER DARK NAVY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90"></div>
                            {/* Accent Gradient */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a192f_100%)] opacity-40"></div>
                        </div>

                        {/* Content Layer */}
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: index === currentSlide ? 0 : 20, opacity: index === currentSlide ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-center max-w-5xl mx-auto"
                            >
                                <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
                                    <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
                                    <span className="text-gold-plate font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm shadow-sm drop-shadow-md">Rutan Kelas I Depok</span>
                                    <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-gold-400"></div>
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight drop-shadow-2xl px-2">
                                    {slide.title}
                                </h1>
                                <p className="text-base md:text-2xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10 drop-shadow-md px-4">
                                    {slide.subtitle}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                                    <Link
                                        to="/public-info"
                                        className="group relative px-8 py-3 md:py-4 bg-gradient-gold text-dark-deep font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] text-sm md:text-base"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                        <span className="relative flex items-center justify-center gap-2">
                                            {slide.cta} <ArrowRight size={20} />
                                        </span>
                                    </Link>
                                    <Link
                                        to="/profil"
                                        className="px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-full transition-all backdrop-blur-md hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:border-gold-500/50 text-sm md:text-base"
                                    >
                                        Tentang Kami
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}

                {/* Slider Navigation */}
                <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-20 flex justify-between items-end container mx-auto px-4 pointer-events-none">
                    {/* Progress Dots */}
                    <div className="flex gap-2 md:gap-3 pointer-events-auto">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-8 md:w-12 bg-gradient-gold shadow-[0_0_10px_rgba(255,215,0,0.8)]' : 'w-3 md:w-4 bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                    {/* Arrows */}
                    <div className="flex gap-2 pointer-events-auto">
                        <button onClick={prevSlide} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gradient-gold hover:text-dark-deep hover:border-transparent transition-all backdrop-blur-md shadow-lg group">
                            <ChevronLeft size={20} className="md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        <button onClick={nextSlide} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gradient-gold hover:text-dark-deep hover:border-transparent transition-all backdrop-blur-md shadow-lg group">
                            <ChevronRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* FLOATING STATS BAR - VIBRANT GLASS */}
            <div className="relative z-20 -mt-16 md:-mt-24 container mx-auto px-4 mb-16 md:mb-24">
                <div className="bg-navy-800/40 backdrop-blur-3xl border border-gold-500/10 rounded-3xl p-4 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 hover:border-gold-500/30 transition-all duration-500 group relative overflow-hidden">
                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>

                    {[
                        { label: "Kapasitas Hunian", value: "1,500+", icon: <Users className="text-gold-500 group-hover:scale-110 transition-transform duration-300 w-6 h-6 md:w-auto md:h-auto" /> },
                        { label: "Warga Binaan", value: "1,240", icon: <Shield className="text-gold-400 group-hover:scale-110 transition-transform duration-300 w-6 h-6 md:w-auto md:h-auto" /> },
                        { label: "Petugas Jaga", value: "156", icon: <Star className="text-gold-500 group-hover:scale-110 transition-transform duration-300 w-6 h-6 md:w-auto md:h-auto" /> },
                        { label: "Layanan Publik", value: "24/7", icon: <Activity className="text-gold-400 group-hover:scale-110 transition-transform duration-300 w-6 h-6 md:w-auto md:h-auto" /> },
                    ].map((stat, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-5 border-r-0 md:border-r border-white/10 lg:pr-4 relative z-10 last:border-0 odd:border-r md:odd:border-r-0">
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center border border-white/10 shadow-lg group/icon shrink-0">
                                {stat.icon}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-3xl font-bold font-display text-white drop-shadow-sm">{stat.value}</h3>
                                <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SERVICES SECTION - MODERN BENTO GRID */}
            <section className="py-16 md:py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-gold-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block flex items-center gap-2">
                                <span className="w-8 h-px bg-gold-500"></span> Layanan Digital
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                                Akses Layanan Pemasyarakatan <span className="text-gold-plate animate-pulse-slow">Lebih Mudah & Cepat</span>
                            </h2>
                        </div>
                        <Link to="/layanan" className="px-6 py-3 rounded-full border border-gold-500/20 hover:border-gold-500 text-slate-200 hover:text-gold-500 transition-all font-medium flex items-center gap-2 hover:bg-gold-500/5 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] text-sm md:text-base">
                            Lihat Semua Layanan <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 md:gap-6 h-auto md:min-h-[600px]">

                        {/* MAIN CARD: Kunjungan - GRADIENT POWER */}
                        <Link to="/public-info" className="md:col-span-2 md:row-span-2 group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-gold-500/10 bg-navy-800/40 hover:border-gold-500/30 transition-all duration-500 shadow-xl h-[400px] md:h-auto">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-20 group-hover:opacity-30"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px]"></div>

                            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full z-10">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gold-500 flex items-center justify-center text-primary mb-4 md:mb-6 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                                    <Users size={24} className="md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 group-hover:text-gold-500 transition-colors">Layanan Kunjungan</h3>
                                <p className="text-slate-400 text-sm md:text-lg mb-6 md:mb-8 max-w-md line-clamp-2 md:line-clamp-none leading-relaxed">Daftar antrean online, cek jadwal kunjungan, dan layanan video call dari rumah.</p>
                                <div className="flex items-center gap-3 text-gold-500 font-bold uppercase tracking-wider text-xs md:text-sm group/btn px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/5 w-fit border border-white/10 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all">
                                    Akses Sekarang <ArrowRight size={16} className="md:w-[18px] md:h-[18px] group-hover/btn:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        {/* SECONDARY: Pengaduan - PREMIUM GLASS */}
                        <Link to="/pengaduan" className="md:col-span-1 md:row-span-1 group relative rounded-[2.5rem] p-8 border border-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-gold-500/10 hover:border-gold-500/40 transition-all duration-500 shadow-xl overflow-hidden flex flex-col justify-end min-h-[280px]">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gold-400/10 rounded-full blur-[60px] -mr-10 -mt-10 group-hover:bg-gold-500/20 transition-all"></div>
                            <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-gold-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl backdrop-blur-md">
                                <MessageSquare size={32} />
                            </div>
                            <div className="relative z-10">
                                <span className="text-gold-500 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">Layanan Aspirasi</span>
                                <h3 className="text-2xl font-black text-white leading-tight">Pengaduan Masyarakat</h3>
                                <p className="text-slate-400 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden font-medium">Sampaikan saran & kritik Anda secara aman melalui portal resmi.</p>
                            </div>
                        </Link>

                        {/* SECONDARY: SOP - PREMIUM GLASS */}
                        <Link to="/public-info" className="md:col-span-1 md:row-span-1 group relative rounded-[2.5rem] p-8 border border-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-gold-500/10 hover:border-gold-500/40 transition-all duration-500 shadow-xl overflow-hidden flex flex-col justify-end min-h-[280px]">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gold-400/10 rounded-full blur-[60px] -mr-10 -mt-10 group-hover:bg-gold-500/20 transition-all"></div>
                            <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-gold-500 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-2xl backdrop-blur-md">
                                <FileText size={32} />
                            </div>
                            <div className="relative z-10">
                                <span className="text-gold-500 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">Standardisasi</span>
                                <h3 className="text-2xl font-black text-white leading-tight">SOP & Regulasi</h3>
                                <p className="text-slate-400 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden font-medium">Transparansi standar operasional dan payung hukum layanan kami.</p>
                            </div>
                        </Link>

                        {/* WIDE CARD: Pengumuman - THE SHOWSTOPPER */}
                        <Link to="/pengumuman" className="md:col-span-2 md:row-span-1 group relative rounded-[2.5rem] p-10 border border-gold-500/20 bg-navy-900/60 hover:border-gold-500/60 transition-all duration-700 shadow-2xl overflow-hidden flex items-center justify-between min-h-[220px]">
                            <div className="absolute -left-10 -top-10 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] group-hover:bg-gold-500/10 transition-all duration-700"></div>

                            <div className="relative z-10 flex items-center gap-8">
                                <div className="w-24 h-24 rounded-3xl bg-gradient-gold p-0.5 shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:rotate-6 transition-transform duration-500">
                                    <div className="w-full h-full rounded-[calc(1.5rem-2px)] bg-primary flex items-center justify-center text-gold-500">
                                        <Bell size={40} className="group-hover:scale-110 animate-bounce-slow" />
                                    </div>
                                </div>
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-dark-deep text-[10px] font-black uppercase tracking-widest mb-3">Terbaru</span>
                                    <h3 className="text-3xl md:text-4xl font-black text-white group-hover:text-gold-500 transition-colors font-display">Pusat Informasi</h3>
                                    <p className="text-slate-300 text-lg mt-1 font-medium italic opacity-70 group-hover:opacity-100 transition-opacity">Update resmi & pengumuman terkini institusi.</p>
                                </div>
                            </div>

                            <div className="hidden lg:flex flex-col items-end relative z-10">
                                <div className="p-4 rounded-full bg-white/5 border border-white/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-primary transition-all duration-500">
                                    <ArrowRight size={32} />
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            {/* COMBINED NEWS & ANNOUNCEMENTS SECTION */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block flex items-center gap-2">
                                <span className="w-8 h-px bg-gold-500"></span> Update Terkini
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white font-display">Kabar & Pengumuman</h2>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* LEFT COLUMN: LATEST NEWS (2/3 width) */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <div className="p-2 bg-gradient-navy-alt rounded-lg text-gold-500 border border-gold-500/20 shadow-lg"><Newspaper size={20} /></div>
                                    Berita Terbaru
                                </h3>
                                <Link to="/berita" className="text-slate-400 hover:text-gold-500 text-sm font-bold flex items-center gap-2 transition-colors px-4 py-2 rounded-full hover:bg-white/5">
                                    Lihat Semua <ArrowRight size={16} />
                                </Link>
                            </div>

                            <div className="grid gap-6">
                                {highlights.map((item) => (
                                    <div key={item.id} className="group bg-gradient-to-b from-[#1e293b]/50 to-[#0f172a]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/50 transition-all flex flex-col md:flex-row h-full md:h-48 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 duration-300">
                                        <div className="w-full md:w-64 h-48 md:h-full relative shrink-0 overflow-hidden">
                                            <div className="absolute inset-0 bg-dark-deep/40 group-hover:bg-transparent transition-colors z-10"></div>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            {/* Tag Overlay on Image */}
                                            <div className="absolute top-3 left-3 z-20">
                                                <span className="bg-dark/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-wide shadow-lg">
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col justify-center w-full">
                                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                                                <span className="text-gold-400 flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors line-clamp-2">
                                                <Link to={`/berita/${item.id}`}>{item.title}</Link>
                                            </h4>
                                            <p className="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                                                {item.excerpt}
                                            </p>
                                            <Link to={`/berita/${item.id}`} className="text-sm font-bold text-slate-300 group-hover:text-gold-400 flex items-center gap-2 mt-auto">
                                                Baca Selengkapnya <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: ANNOUNCEMENTS (1/3 width) */}
                        <div className="lg:col-span-1">
                            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-8 border border-white/10 h-full relative overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(137,222,246,0.1)] transition-shadow duration-500">
                                {/* Enhanced Background for Pusat Informasi */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-pulse-slow"></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                            <div className="p-2 bg-gradient-gold rounded-lg text-primary shadow-lg"><Bell size={20} /></div>
                                            Pusat Informasi
                                        </h3>
                                        <Link to="/pengumuman" className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 hover:bg-gold-500 hover:text-primary text-slate-300 transition-all border border-white/5 hover:border-gold-500">
                                            Arsip
                                        </Link>
                                    </div>

                                    <div className="space-y-4">
                                        {announcements.map((item) => (
                                            <div key={item.id} className="group flex gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-gold-500/30 items-start">
                                                <div className="w-14 h-14 rounded-xl bg-dark-deep border border-white/10 flex flex-col items-center justify-center text-center shrink-0 shadow-inner group-hover:border-gold-500/50 transition-colors">
                                                    <span className="text-[10px] font-bold text-slate-500 uppercase">{item.date.split(' ')[1]}</span>
                                                    <span className="text-lg font-bold text-white group-hover:text-gold-400">{item.date.split(' ')[0]}</span>
                                                </div>
                                                <div>
                                                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1 ${item.type === 'Penting' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                                                        item.type === 'Info' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                                            'bg-green-500/10 text-green-400 border border-green-500/20'
                                                        }`}>
                                                        {item.type}
                                                    </span>
                                                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                                                        <Link to="/pengumuman">{item.title}</Link>
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                                        <Link to="/pengumuman" className="w-full block py-3 rounded-full border border-white/10 hover:bg-gradient-gold hover:text-primary hover:border-transparent text-slate-300 font-bold text-sm transition-all shadow-lg hover:shadow-gold-500/20">
                                            Lihat Semua Pengumuman
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
