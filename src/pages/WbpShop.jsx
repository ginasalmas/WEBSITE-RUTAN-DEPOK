import React, { useState } from 'react';
import { ShoppingBag, Eye, Search, Filter, MessageSquare, Tag, Heart, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Miniatur Kapal Pinisi",
        category: "Kerajinan",
        price: "Rp 250.000",
        image: "https://images.unsplash.com/photo-1544474320-754d9299440e?q=80&w=800",
        desc: "Miniatur kapal pinisi buatan tangan WBP Rutan Depok dengan detail tinggi menggunakan material kayu berkualitas."
    },
    {
        id: 2,
        name: "Tas Anyaman Pandan",
        category: "Fashion",
        price: "Rp 120.000",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
        desc: "Tas anyaman elegan dari serat alam, ramah lingkungan dan modis."
    },
    {
        id: 3,
        name: "Lukisan Kanvas Lanskap",
        category: "Seni Lokis",
        price: "Rp 450.000",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800",
        desc: "Karya seni lukis ekspresif hasil bimbingan kegiatan kemandirian seni lukis."
    },
    {
        id: 4,
        name: "Keripik Tempe Renyah",
        category: "Kuliner",
        price: "Rp 15.000",
        image: "https://images.unsplash.com/photo-1621943806325-a7bda6b10787?q=80&w=800",
        desc: "Camilan gurih dan higienis hasil olahan dapur sehat Rutan Depok."
    },
    {
        id: 5,
        name: "Meja Lipat Kayu",
        category: "Meubel",
        price: "Rp 175.000",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
        desc: "Meja lipat serbaguna untuk belajar atau bekerja, praktis dan kokoh."
    },
    {
        id: 6,
        name: "Gantungan Kunci Kulit",
        category: "Souvenir",
        price: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1627225924765-552d44fc4c32?q=80&w=800",
        desc: "Souvenir eksklusif dari bahan kulit sintetis dengan embos logo Rutan."
    }
];

const WbpShop = () => {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const categories = ['Semua', ...new Set(products.map(p => p.category))];

    const filteredProducts = products.filter(p => {
        const matchesCategory = selectedCategory === 'Semua' || p.category === selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleWhatsApp = (product) => {
        const message = `Halo Admin Karya WBP Rutan Depok, saya tertarik dengan produk ${product.name}. Mohon informasi ketersediaan stoknya.`;
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        <ShoppingBag size={16} /> Karya WBP Store
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-6"
                    >
                        E-Katalog ProdukUnggulan
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg leading-relaxed"
                    >
                        Dukung kemandirian Warga Binaan Pemasyarakatan dengan membeli produk-produk berkualitas hasil karya tangan mereka.
                    </motion.p>
                </div>

                {/* Search & Filter Bar */}
                <div className="max-w-6xl mx-auto bg-navy-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-4 md:p-6 border border-white/10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up delay-300">
                    <div className="relative w-full md:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Cari produk..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-500/50 transition-all"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${selectedCategory === cat
                                        ? "bg-gradient-gold text-primary border-transparent shadow-lg shadow-gold-500/20"
                                        : "bg-white/5 text-slate-400 border-white/5 hover:border-gold-500/30 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative bg-navy-800/40 rounded-[2.5rem] border border-white/10 overflow-hidden hover:border-gold-500/30 transition-all duration-500 shadow-xl"
                            >
                                <div className="aspect-square relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-navy-900/80 backdrop-blur-md text-gold-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border border-gold-500/20">
                                            {product.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                        <button
                                            onClick={() => setSelectedProduct(product)}
                                            className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3 rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                        >
                                            <Eye size={18} /> Detail Produk
                                        </button>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">{product.name}</h3>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-gold-500 font-bold text-lg">{product.price}</span>
                                        <div className="flex items-center gap-1 text-slate-500 text-xs italic">
                                            <Tag size={12} /> Tersedia
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleWhatsApp(product)}
                                        className="w-full py-4 bg-gradient-gold text-primary font-black rounded-2xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                                    >
                                        <MessageSquare size={18} /> Pesan via WhatsApp
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Product Detail Modal */}
                <AnimatePresence>
                    {selectedProduct && (
                        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProduct(null)}
                                className="absolute inset-0 bg-primary/95 backdrop-blur-2xl"
                            ></motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative bg-navy-800 border border-white/10 rounded-[3rem] shadow-3xl max-w-5xl w-full overflow-hidden flex flex-col lg:flex-row"
                            >
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-rose-500 text-white rounded-full flex items-center justify-center transition-all"
                                >
                                    <X size={24} />
                                </button>

                                <div className="lg:w-1/2">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="w-full h-full object-cover aspect-square lg:aspect-auto ring-1 ring-white/10"
                                    />
                                </div>
                                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <span className="text-gold-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">{selectedProduct.category}</span>
                                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 italic">{selectedProduct.name}</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">{selectedProduct.desc}</p>

                                    <div className="flex items-center justify-between py-6 border-y border-white/5 mb-8">
                                        <div>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Harga Satuan</p>
                                            <p className="text-3xl font-black text-gold-500">{selectedProduct.price}</p>
                                        </div>
                                        <div className="bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                            Stok Tersedia
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <button
                                            onClick={() => handleWhatsApp(selectedProduct)}
                                            className="w-full py-5 bg-gradient-gold text-primary font-black rounded-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                                        >
                                            <MessageSquare size={22} /> Hubungi Admin Toko
                                        </button>
                                        <p className="text-center text-xs text-slate-500 italic">
                                            *Pemesanan dapat dilakukan juga langsung di Ruang Layanan Rutan Depok.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Footer Info */}
                <div className="mt-24 max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-gold-500/20 rounded-3xl flex items-center justify-center text-gold-500 shrink-0">
                        <Info size={40} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">Tentang Kegiatan Kemandirian</h4>
                        <p className="text-slate-400 leading-relaxed">
                            Setiap pembelian produk merupakan bentuk dukungan nyata terhadap program rehabilitasi dan pembinaan kemandirian Warga Binaan Pemasyarakatan Rutan Depok. Hasil penjualan digunakan untuk pembinaan dan premi bagi WBP yang bekerja.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WbpShop;
