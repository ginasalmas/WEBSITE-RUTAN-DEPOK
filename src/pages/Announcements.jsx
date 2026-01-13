import { Calendar, Tag, ArrowRight, Bell, Search, Filter, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Announcements = () => {
    const announcements = [
        {
            id: 1,
            title: "Pengumuman Seleksi CPNS Kemenkumham 2025",
            date: "15 Jan 2025",
            category: "Kepegawaian",
            excerpt: "Informasi lengkap mengenai jadwal dan persyaratan seleksi penerimaan Calon Pegawai Negeri Sipil (CPNS) di lingkungan Kementerian Hukum dan HAM tahun anggaran 2025.",
        },
        {
            id: 2,
            title: "Jadwal Kunjungan Khusus Idul Fitri 1446 H",
            date: "10 Jan 2025",
            category: "Layanan",
            excerpt: "Pemberitahuan mengenai jadwal dan mekanisme layanan kunjungan tatap muka khusus pada Hari Raya Idul Fitri 1446 H bagi keluarga Warga Binaan.",
        },
        {
            id: 3,
            title: "Himbauan Terkait Penipuan Mengatasnamakan Rutan",
            date: "05 Jan 2025",
            category: "Penting",
            excerpt: "Masyarakat dihimbau untuk waspada terhadap segala bentuk penipuan yang mengatasnamakan pejabat atau petugas Rutan Kelas I Depok.",
        },
        {
            id: 4,
            title: "Perubahan Jam Layanan Penitipan Barang",
            date: "02 Jan 2025",
            category: "Layanan",
            excerpt: "Disampaikan kepada seluruh pengunjung bahwa terdapat penyesuaian jam layanan penitipan barang efektif mulai tanggal 10 Januari 2025.",
        }
    ];

    return (
        <div className="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            {/* Page Header */}
            <div className="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-6"
                        >
                            <Bell size={16} /> Informasi Resmi
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-6"
                        >
                            Pusat Pengumuman
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
                        >
                            Dapatkan informasi terbaru mengenai layanan, kegiatan, dan kebijakan resmi Rutan Kelas I Depok secara transparan.
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
                {/* Search and Filter mockup */}
                <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up delay-300">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-grow relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Cari pengumuman..."
                                className="w-full bg-navy-800/40 border border-gold-500/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-800/60 transition-all backdrop-blur-md"
                            />
                        </div>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all font-bold">
                            <Filter size={20} className="text-gold-400" /> Filter
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {announcements.map((item, idx) => (
                            <div
                                key={item.id}
                                className="group relative animate-fade-in-up"
                                style={{ animationDelay: `${(idx + 4) * 100}ms` }}
                            >
                                <div className="absolute -inset-1 bg-gradient-gold rounded-[2.5rem] blur opacity-0 group-hover:opacity-10 transition duration-500"></div>

                                <div className="relative bg-navy-800/40 backdrop-blur-2xl p-6 md:p-10 rounded-[2rem] border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 flex flex-col md:flex-row gap-8 items-start">
                                    <div className="shrink-0">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-navy flex flex-col items-center justify-center text-center border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-primary transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:translate-y-[-4px]">
                                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter opacity-70">{item.date.split(' ')[1]}</span>
                                            <span className="text-xl md:text-2xl font-black">{item.date.split(' ')[0]}</span>
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${item.category === 'Penting'
                                                ? 'bg-red-500/10 text-red-400 border-red-500/20'
                                                : item.category === 'Layanan'
                                                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                    : 'bg-primary/10 text-primary border-primary/20'
                                                }`}>
                                                {item.category}
                                            </span>
                                            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                                            <span className="text-xs text-slate-500 font-medium">Post: {item.date.split(' ')[2]}</span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all duration-300">
                                            <Link to={`/pengumuman/${item.id}`}>{item.title}</Link>
                                        </h3>

                                        <p className="text-slate-400 mb-6 leading-relaxed text-sm md:text-base line-clamp-2 md:line-clamp-3 group-hover:text-slate-300 transition-colors">
                                            {item.excerpt}
                                        </p>

                                        <Link
                                            to={`/pengumuman/${item.id}`}
                                            className="inline-flex items-center gap-2 text-gold-500 font-bold text-sm tracking-widest group/link transition-all"
                                        >
                                            LIHAT Rincian <ArrowRight size={18} className="transform group-hover/link:translate-x-2 transition-transform duration-300" />
                                        </Link>
                                    </div>

                                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block hidden">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                                            <Megaphone size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20 animate-fade-in-up delay-500">
                        <button className="group px-10 py-4 rounded-2xl bg-gradient-gold text-primary font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm">
                            Muat Lebih Banyak Pengumuman
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announcements;
