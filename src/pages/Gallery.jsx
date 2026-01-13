import { useState } from 'react';
import { Search, Filter, ZoomIn, X, Image as ImageIcon, Download, Share2, Maximize2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = ['Semua', 'Kegiatan', 'Fasilitas', 'Kunjungan', 'Karya WBP'];

    const galleryItems = [
        { id: 1, title: 'Pembinaan Kemandirian', category: 'Karya WBP', image: 'https://images.unsplash.com/photo-1513118172236-00b7cc57e1fa?q=80&w=800&auto=format&fit=crop', desc: 'WBP sedang melakukan kegiatan kerajinan tangan sebagai bagian dari program kemandirian.' },
        { id: 2, title: 'Ruang Kunjungan Baru', category: 'Fasilitas', image: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop', desc: 'Fasilitas ruang kunjungan yang nyaman dan humanis untuk keluarga warga binaan.' },
        { id: 3, title: 'Upacara Bendera', category: 'Kegiatan', image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop', desc: 'Kegiatan upacara bendera rutin untuk meningkatkan jiwa nasionalisme petugas dan WBP.' },
        { id: 4, title: 'Dapur Higienis', category: 'Fasilitas', image: 'https://images.unsplash.com/photo-1588820222330-165b4515ee61?q=80&w=800&auto=format&fit=crop', desc: 'Lingkungan dapur yang bersih dan steril untuk menjamin kualitas makanan.' },
        { id: 5, title: 'Olahraga Pagi', category: 'Kegiatan', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop', desc: 'Senam pagi bersama untuk menjaga kebugaran fisik dan mental.' },
        { id: 6, title: 'Hasil Kerajinan Tangan', category: 'Karya WBP', image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop', desc: 'Pameran hasil karya seni dari tangan kreatif warga binaan.' },
    ];

    const filteredItems = selectedCategory === 'Semua'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            {/* Page Header */}
            <div className="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        <ImageIcon size={16} /> Arsip Visual
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-6 italic"
                    >
                        Galeri Dokumentasi
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Kejujuran visual dalam setiap momen kegiatan dan pelayanan di Rutan Kelas I Depok.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
                {/* Search & Filter Bar */}
                <div className="max-w-6xl mx-auto bg-navy-800/40 backdrop-blur-2xl rounded-3xl shadow-2xl p-4 md:p-6 border border-gold-500/10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up delay-300">
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={clsx(
                                    "px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 border",
                                    selectedCategory === cat
                                        ? "bg-gradient-gold text-primary border-transparent shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                                        : "bg-white/5 text-slate-400 border-white/5 hover:border-gold-500/20 hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Cari dokumentasi..."
                            className="w-full bg-navy-900/50 border border-gold-500/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-800/20 transition-all"
                        />
                    </div>
                </div>

                {/* Gallery Grid - Masonry-like */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-fade-in-up delay-400">
                    {filteredItems.map((item, idx) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-[2.5rem] shadow-3xl cursor-pointer break-inside-avoid transition-all duration-700 hover:-translate-y-2"
                            onClick={() => setSelectedImage(item)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/20 to-transparent opacity-80 group-hover:opacity-40 transition-all duration-500 z-10"></div>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s]"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                <span className="inline-flex px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 shadow-lg">
                                    {item.category}
                                </span>
                                <h3 className="text-white font-bold text-2xl group-hover:text-gold-400 transition-colors tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-slate-400 text-xs mt-3 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                            </div>

                            <div className="absolute top-6 right-6 z-20 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-primary hover:text-dark-deep hover:border-primary transition-all shadow-2xl">
                                    <Maximize2 size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center animate-fade-in-up delay-500">
                    <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-primary/30 via-gold-400/30 to-purple-500/30">
                        <div className="px-12 py-8 bg-dark-deep rounded-[1.4rem] border border-white/5 backdrop-blur-sm">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ingin berpartisipasi?</h2>
                            <p className="text-slate-400 mb-8 max-w-md mx-auto italic">Ikuti terus akun media sosial kami untuk mendapatkan update kegiatan real-time.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">Instagram</button>
                                <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">Facebook</button>
                                <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">YouTube</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal - Cinematic approach */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in" onClick={() => setSelectedImage(null)}>
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-dark-deep/95 backdrop-blur-3xl"></div>

                    {/* Content */}
                    <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>

                        {/* Close button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-0 right-0 p-4 text-slate-400 hover:text-white transition-colors z-50"
                        >
                            <X size={40} strokeWidth={1} />
                        </button>

                        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                            {/* Image Part */}
                            <div className="w-full lg:w-[70%] h-[50vh] lg:h-[80vh] flex items-center justify-center relative group">
                                <div className="absolute inset-0 bg-gold-500/10 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="max-h-full max-w-full object-contain rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] z-10"
                                />
                                <div className="absolute bottom-4 right-4 flex gap-4 z-20">
                                    <button className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-gold-500 hover:text-primary transition-all shadow-2xl border border-white/10">
                                        <Download size={24} />
                                    </button>
                                    <button className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-gold-500 hover:text-primary transition-all shadow-2xl border border-white/10">
                                        <Share2 size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Info Part */}
                            <div className="w-full lg:w-[30%] text-left space-y-8 animate-fade-in-up">
                                <div>
                                    <span className="text-gold-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">{selectedImage.category}</span>
                                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight italic tracking-tighter">{selectedImage.title}</h3>
                                    <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light italic">
                                        "{selectedImage.desc}"
                                    </p>
                                </div>

                                <div className="space-y-6 pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-4 group/info">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold-400 border border-white/5 transition-colors group-hover/info:bg-gold-400 group-hover/info:text-dark-deep">
                                            <ImageIcon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Resolusi</p>
                                            <p className="text-white font-bold">Ultra High-Definition</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group/info">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/5 transition-colors group-hover/info:bg-primary group-hover/info:text-dark-deep">
                                            <Filter size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Lisensi</p>
                                            <p className="text-white font-bold">Informasi Publik Resmi</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors"
                                    >
                                        <ArrowLeft size={16} /> TUTUP Galeri
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
