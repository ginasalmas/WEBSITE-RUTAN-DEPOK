import { useState } from 'react';
import { FileText, Clock, Phone, Download, Info, ChevronRight, MessageSquare, Shield, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VisitorFlow from '../components/features/VisitorFlow';
import clsx from 'clsx';

const PublicInfo = () => {
    const [activeTab, setActiveTab] = useState('layanan');

    const tabs = [
        { id: 'layanan', label: 'Layanan Publik', icon: <Clock size={18} /> },
        { id: 'sop', label: 'SOP & Regulasi', icon: <FileText size={18} /> },
        { id: 'dokumen', label: 'Unduh Dokumen', icon: <Download size={18} /> },
        { id: 'kontak', label: 'Kontak Layanan', icon: <Phone size={18} /> },
    ];

    return (
        <div className="min-h-screen bg-primary relative overflow-hidden text-white">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            </div>

            {/* Page Header */}
            <div className="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        <Info size={16} /> Transparansi
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-6"
                    >
                        Informasi Publik
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Akses keterbukaan informasi publik sebagai perwujudan tata kelola pemerintahan yang baik.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {tabs.map((tab, idx) => (
                        <motion.button
                            key={tab.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            onClick={() => setActiveTab(tab.id)}
                            className={clsx(
                                "flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 border",
                                activeTab === tab.id
                                    ? "bg-gradient-gold text-primary border-transparent shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                                    : "bg-white/5 text-slate-400 border-white/5 hover:border-gold-500/20 hover:text-white"
                            )}
                        >
                            {tab.icon}
                            {tab.label}
                        </motion.button>
                    ))}
                </div>

                {/* Content Area */}
                <motion.div
                    layout
                    className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl p-6 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl min-h-[500px]"
                >
                    <AnimatePresence mode="wait">
                        {activeTab === 'layanan' && (
                            <motion.div
                                key="layanan"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-10"
                            >
                                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                                    <div className="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center text-gold-500 border border-gold-500/20">
                                        <Clock size={24} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display text-white">Jam Layanan Kunjungan</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-gradient-to-br from-gold-600/10 to-transparent p-8 rounded-3xl border border-gold-500/20 group hover:border-gold-500/40 transition-all">
                                        <h3 className="font-bold text-gold-500 text-xl mb-6 flex items-center gap-2">
                                            <Users size={20} /> Kunjungan Tatap Muka
                                        </h3>
                                        <ul className="space-y-4 text-slate-300">
                                            <li className="flex justify-between border-b border-white/5 pb-3">
                                                <span className="text-slate-400">Senin - Kamis</span>
                                                <span className="font-bold text-white">09.00 - 15.00 WIB</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-3">
                                                <span className="text-slate-400">Jumat</span>
                                                <span className="font-bold text-white">09.00 - 11.30 WIB</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span className="text-slate-400">Sabtu</span>
                                                <span className="font-bold text-white">09.00 - 13.00 WIB</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gradient-to-br from-gold-500/10 to-transparent p-8 rounded-3xl border border-gold-500/20 group hover:border-gold-500/40 transition-all">
                                        <h3 className="font-bold text-gold-400 text-xl mb-6 flex items-center gap-2">
                                            <Shield size={20} /> Penitipan Barang
                                        </h3>
                                        <ul className="space-y-4 text-slate-300">
                                            <li className="flex justify-between border-b border-white/5 pb-3">
                                                <span className="text-slate-400">Setiap Hari</span>
                                                <span className="font-bold text-white">08.00 - 16.00 WIB</span>
                                            </li>
                                            <li className="text-sm italic mt-6 text-gold-400/80 leading-relaxed">
                                                *Wajib membawa identitas diri (KTP/SIM) yang masih berlaku.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <VisitorFlow />
                            </motion.div>
                        )}

                        {activeTab === 'sop' && (
                            <motion.div
                                key="sop"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
                                        <FileText size={24} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display text-white">Standar Operasional Prosedur</h2>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        'SOP Layanan Kunjungan Tatap Muka',
                                        'SOP Layanan Video Call',
                                        'SOP Penitipan Barang',
                                        'SOP Pengaduan Masyarakat'
                                    ].map((title, i) => (
                                        <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/5 hover:border-gold-500/30 transition-all group">
                                            <div className="flex items-center gap-5">
                                                <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center text-gold-500 font-bold border border-gold-500/10">0{i + 1}</div>
                                                <div>
                                                    <h4 className="font-bold text-white group-hover:text-gold-500 transition-colors">{title}</h4>
                                                    <p className="text-xs text-slate-500">Terakhir diperbarui: 10 Jan 2025</p>
                                                </div>
                                            </div>
                                            <button className="text-gold-500 hover:text-white transition-colors">
                                                <ChevronRight size={24} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'dokumen' && (
                            <motion.div
                                key="dokumen"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
                                        <Download size={24} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display text-white">Dokumen Publik</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {['Renstra 2025-2029', 'Laporan Kinerja 2024', 'DIPA 2025', 'Maklumat Pelayanan'].map((doc, i) => (
                                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between hover:border-primary transition-all group">
                                            <div className="flex items-center gap-4">
                                                <FileText className="text-slate-500 group-hover:text-primary transition-colors" />
                                                <span className="font-bold text-slate-200 group-hover:text-white transition-colors">{doc}</span>
                                            </div>
                                            <button className="w-10 h-10 bg-dark-deep rounded-full flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-dark-deep transition-all border border-white/5">
                                                <Download size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'kontak' && (
                            <motion.div
                                key="kontak"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-10"
                            >
                                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
                                        <Phone size={24} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display text-white">Kontak Layanan</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-8">
                                        <p className="text-slate-400 leading-relaxed text-lg font-light">
                                            Kami menyediakan berbagai kanal komunikasi untuk mempermudah akses informasi dan penyampaian aspirasi Anda.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-5 group">
                                                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 border border-green-500/20 group-hover:scale-110 transition-transform"><Phone size={24} /></div>
                                                <div>
                                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">WhatsApp Center</p>
                                                    <p className="text-xl font-bold text-white">0812-3456-7890</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-5 group">
                                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform"><MessageSquare size={24} /></div>
                                                <div>
                                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Resmi</p>
                                                    <p className="text-xl font-bold text-white">info@rutandepok.go.id</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center flex flex-col justify-center gap-6">
                                        <h3 className="font-bold text-white text-xl">Jam Operasional Layanan</h3>
                                        <p className="text-slate-400">Senin - Jumat<br /><span className="text-white font-bold text-lg">08.00 - 16.00 WIB</span></p>
                                        <button className="px-8 py-4 bg-gradient-gold text-primary font-black rounded-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all uppercase tracking-widest text-sm">
                                            Chat Sekarang
                                        </button>
                                    </div>
                                </div>
                                <VisitorFlow />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default PublicInfo;
