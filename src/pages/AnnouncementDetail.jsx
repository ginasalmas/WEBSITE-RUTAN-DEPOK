import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, Download, FileText, Share2, Printer, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

const AnnouncementDetail = () => {
    const { id } = useParams();

    // Mock data
    const announcement = {
        title: "Pengumuman Seleksi CPNS Kemenkumham Tahun Anggaran 2025",
        date: "15 Jan 2025",
        category: "Kepegawaian",
        content: [
            "Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia membuka kesempatan bagi Warga Negara Indonesia yang memiliki integritas dan komitmen tinggi untuk bergabung menjadi Calon Pegawai Negeri Sipil (CPNS) di lingkungan Kementerian Hukum dan HAM.",
            "Formasi yang dibuka meliputi Jabatan Penjaga Tahanan, Pemeriksa Keimigrasian, dan Pembimbing Kemasyarakatan. Proses seleksi akan dilakukan secara transparan, akuntabel, dan bebas dari KKN.",
            "Pendaftaran dilakukan secara online melalui portal SSCASN BKN mulai tanggal 20 Januari s.d. 10 Februari 2025. Pelamar dihimbau untuk membaca dengan teliti persyaratan dan tata cara pendaftaran yang tercantum dalam pengumuman resmi.",
            "Hati-hati terhadap penipuan! Kelulusan peserta adalah prestasi peserta sendiri. Jika ada pihak-pihak yang menjanjikan kelulusan dengan motif apapun, maka hal tersebut adalah tindakan penipuan."
        ],
        attachments: [
            { name: "Pengumuman Resmi.pdf", size: "2.5 MB" },
            { name: "Format Surat Lamaran.docx", size: "150 KB" }
        ]
    };

    return (
        <div className="min-h-screen bg-primary text-white selection:bg-gold-500 selection:text-dark-deep">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            {/* Page Header Area */}
            <div className="relative z-10 border-b border-white/5 py-4 mt-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link to="/pengumuman" className="inline-flex items-center text-slate-400 hover:text-gold-500 transition-colors text-xs font-bold tracking-widest uppercase gap-2 group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Kembali
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-4"
                    >
                        <button className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl"><Share2 size={18} /></button>
                        <button className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl"><Printer size={18} /></button>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-navy-800/80 rounded-2xl flex items-center justify-center text-gold-500 border border-gold-500/20 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                                <Megaphone size={32} />
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
                            <Tag size={12} /> {announcement.category}
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-8 leading-tight tracking-tight">
                            {announcement.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-slate-400 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-gold-500" />
                                <span>{announcement.date}</span>
                            </div>
                            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <FileText size={18} className="text-gold-400" />
                                <span>Resmi</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                        <div className="lg:col-span-2 space-y-8 animate-fade-in-up delay-100">
                            <div className="bg-navy-800/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-gold-500/10 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] pointer-events-none"></div>

                                <div className="prose prose-lg prose-invert text-slate-300 max-w-none relative z-10">
                                    {announcement.content.map((p, idx) => (
                                        <p key={idx} className="mb-6 leading-relaxed text-justify md:text-left">
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / Attachments */}
                        <div className="lg:col-span-1 space-y-8 animate-fade-in-up delay-200">
                            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-xl relative overflow-hidden">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <FileText size={20} className="text-gold-400" /> Lampiran
                                </h3>
                                <div className="space-y-4">
                                    {announcement.attachments.map((file, idx) => (
                                        <div
                                            key={idx}
                                            className="group/item flex items-center justify-between p-4 bg-primary/20 rounded-2xl border border-gold-500/10 hover:border-gold-500/50 transition-all cursor-pointer hover:bg-gold-500/5"
                                        >
                                            <div className="flex items-center gap-3 overflow-hidden">
                                                <div className="shrink-0 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 group-hover/item:text-primary transition-colors">
                                                    <FileText size={18} />
                                                </div>
                                                <div className="overflow-hidden">
                                                    <p className="text-slate-100 font-bold text-xs truncate group-hover/item:text-primary transition-colors">{file.name}</p>
                                                    <p className="text-[10px] text-slate-500 uppercase font-bold">{file.size}</p>
                                                </div>
                                            </div>
                                            <button className="shrink-0 p-2 text-slate-500 hover:text-primary transition-all">
                                                <Download size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <div className="bg-gold-500/5 border border-gold-500/20 rounded-2xl p-4 text-center">
                                        <p className="text-xs text-slate-400 mb-2">Punya pertanyaan seputar pengumuman ini?</p>
                                        <Link to="/pengaduan" className="text-xs font-bold text-gold-500 hover:text-white transition-colors">Hubungi Layanan Informasi</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Mini Stats / Info */}
                            <div className="bg-gradient-to-br from-[#1e293b] to-dark-deep p-6 rounded-[2.5rem] border border-white/10 shadow-lg relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity"></div>
                                <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Informasi Tambahan</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Dilihat</span>
                                        <span className="text-slate-200 font-bold">1,240 Kali</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Status</span>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-green-500/10 text-green-400 border border-green-500/20">Aktif</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementDetail;
