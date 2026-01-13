import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Newspaper, Filter, ChevronRight } from 'lucide-react';
import hydroponicImg from '../assets/hydroponic.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const News = () => {
    const newsItems = [
        {
            id: 1,
            title: "Kunjungan Kerja Kakanwil Kemenkumham Jabar",
            date: "14 Jan 2025",
            category: "Kedinasan",
            author: "Humas Rutan",
            image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=800&auto=format&fit=crop",
            excerpt: "Kepala Kantor Wilayah Kementerian Hukum dan HAM Jawa Barat melakukan kunjungan kerja dalam rangka penguatan tugas dan fungsi petugas pemasyarakatan."
        },
        {
            id: 2,
            title: "Panen Raya Sayuran Hidroponik WBP",
            date: "12 Jan 2025",
            category: "Pembinaan",
            author: "Seksi Yantah",
            image: hydroponicImg,
            excerpt: "Warga Binaan Pemasyarakatan (WBP) Rutan Depok kembali melaksanakan panen raya sayuran hidroponik hasil pembinaan kemandirian."
        },
        {
            id: 3,
            title: "Kegiatan Jumat Bersih Lingkungan Rutan",
            date: "10 Jan 2025",
            category: "Kegiatan",
            author: "Humas Rutan",
            image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop",
            excerpt: "Petugas dan WBP bahu membahu membersihkan area blok hunian dan halaman kantor untuk menciptakan lingkungan yang sehat."
        },
        {
            id: 4,
            title: "Penyuluhan Hukum bagi Tahanan Baru",
            date: "08 Jan 2025",
            category: "Layanan Hukum",
            author: "LBH Rekan",
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
            excerpt: "Lembaga Bantuan Hukum (LBH) memberikan penyuluhan hukum gratis kepada tahanan baru terkait hak dan kewajiban selama menjalani masa pidana."
        }
    ];

    return (
        <div className="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            {/* Page Header */}
            <div className="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
                        <div className="text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-6"
                            >
                                <Newspaper size={16} /> Kabar Terkini
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold"
                            >
                                Berita & Kegiatan
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative w-full md:w-80"
                        >
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input
                                type="text"
                                placeholder="Cari berita atau kegiatan..."
                                className="w-full bg-navy-800/40 border border-gold-500/20 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-800/60 transition-all backdrop-blur-md"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, idx) => (
                        <article
                            key={item.id}
                            className="flex flex-col h-full group bg-navy-800/40 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border border-gold-500/10 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up shadow-2xl"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 group-hover:sepia-[10%] group-hover:brightness-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>

                                {/* Labels Overlay */}
                                <div className="absolute bottom-4 left-6 flex gap-2">
                                    <span className="bg-primary/80 backdrop-blur-md text-gold-500 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-gold-500/20">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow relative">
                                <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                                    <Calendar size={14} className="text-gold-400" /> {item.date}
                                    <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                                    <User size={14} className="text-primary" /> {item.author}
                                </div>

                                <h2 className="text-xl md:text-2xl font-bold font-display text-white mb-4 line-clamp-2 leading-tight group-hover:text-gold-500 transition-colors duration-300">
                                    <Link to={`/berita/${item.id}`}>{item.title}</Link>
                                </h2>

                                <p className="text-slate-400 text-sm md:text-base mb-8 line-clamp-3 leading-relaxed flex-grow">
                                    {item.excerpt}
                                </p>

                                <Link
                                    to={`/berita/${item.id}`}
                                    className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest group/btn border-t border-white/5 pt-6 hover:text-gold-500 transition-all uppercase"
                                >
                                    Baca Selengkapnya <ChevronRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform duration-300 text-gold-500" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-20 flex justify-center gap-3 animate-fade-in-up delay-400">
                    <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center font-bold">1</button>
                    <button className="w-12 h-12 rounded-2xl bg-gradient-gold text-primary shadow-lg shadow-gold-500/40 flex items-center justify-center font-bold">2</button>
                    <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center font-bold">3</button>
                    <div className="w-12 h-12 flex items-center justify-center text-slate-600">...</div>
                    <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center font-bold">10</button>
                </div>
            </div>
        </div>
    );
};

export default News;
