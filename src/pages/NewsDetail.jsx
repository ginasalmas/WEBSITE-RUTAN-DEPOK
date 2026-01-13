import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Clock, Tag, Newspaper, ArrowRight, Bookmark, MessageSquare } from 'lucide-react';

const NewsDetail = () => {
    const { id } = useParams();

    // Mock data - in real app, fetch based on ID
    const article = {
        title: "Kunjungan Kerja Kakanwil Kemenkumham Jabar dalam Rangka Penguatan Tusi",
        date: "14 Jan 2025",
        time: "09:00 WIB",
        author: "Humas Rutan",
        category: "Kunjungan Dinas",
        image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1200&auto=format&fit=crop",
        content: [
            "Depok – Kepala Kantor Wilayah Kementerian Hukum dan HAM Jawa Barat melakukan kunjungan kerja ke Rutan Kelas I Depok pada hari Selasa (14/01). Kunjungan ini bertujuan untuk memberikan penguatan terkait tugas dan fungsi (Tusi) petugas pemasyarakatan serta meninjau langsung kondisi sarana dan prasarana yang ada.",
            "Dalam arahannya, Kakanwil menekankan pentingnya integritas dan profesionalisme dalam menjalankan tugas. Beliau juga mengapresiasi inovasi layanan yang telah diterapkan di Rutan Depok, khususnya dalam hal pelayanan kunjungan tatap muka yang semakin tertib dan humanis.",
            "\"Kita harus terus berbenah dan jangan cepat puas. Berikan pelayanan terbaik kepada masyarakat dan warga binaan. Pastikan tidak ada pungutan liar dan diskriminasi,\" tegas Kakanwil di hadapan seluruh petugas Rutan Depok yang hadir di Aula Gedung 1.",
            "Selain memberikan pengarahan, Kakanwil juga menyempatkan diri untuk menyapa warga binaan di blok hunian dan melihat langsung hasil karya pembinaan kemandirian seperti kerajinan tangan dan pertanian hidroponik."
        ]
    };

    return (
        <div className="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
            {/* Cinematic Hero */}
            <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover animate-scale-in transform scale-100 transition-transform duration-[10s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-primary/30 z-0"></div>

                <div className="absolute bottom-0 left-0 w-full z-20 pb-12 md:pb-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Link to="/berita" className="inline-flex items-center text-white/70 hover:text-gold-500 mb-8 transition-all px-4 py-2 rounded-full border border-gold-500/20 hover:border-gold-500/50 backdrop-blur-xl bg-white/5 font-bold text-xs md:text-sm uppercase tracking-widest group">
                                <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Kembali ke Berita
                            </Link>

                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="bg-gradient-gold px-4 py-1.5 rounded-xl text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-lg shadow-gold-500/30">
                                    {article.category}
                                </span>
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-xl border border-gold-500/20 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-300">
                                    <Clock size={14} className="text-gold-500" /> {article.time}
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] md:leading-[1.1] tracking-tight drop-shadow-2xl animate-fade-in-up">
                                {article.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_350px] gap-12 md:gap-16">

                        {/* Main Content */}
                        <div className="space-y-12 animate-fade-in-up delay-200">
                            <div className="flex items-center justify-between border-b border-white/5 pb-8 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent flex items-center justify-center text-primary font-bold border border-white/10 shadow-lg">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg leading-none mb-1">{article.author}</p>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                            Tim Redaksi Humas <div className="w-1 h-1 bg-gold-500 rounded-full"></div> {article.date}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white/10 transition-all">
                                        <Bookmark size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:bg-white/10 transition-all">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="bg-navy-800/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-gold-500/10 shadow-3xl relative">
                                <div className="prose prose-lg md:prose-xl prose-invert text-slate-300 max-w-none leading-[1.8] text-justify md:text-left">
                                    {article.content.map((paragraph, idx) => (
                                        <p key={idx} className="mb-8 relative z-10">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                {/* Decorative Quote Icon */}
                                <div className="absolute top-8 right-8 text-gold-500/5 select-none">
                                    <MessageSquare size={120} />
                                </div>
                            </div>
                        </div>

                        {/* Sticky Sidebar */}
                        <aside className="space-y-8 animate-fade-in-up delay-400">
                            <div className="sticky top-24 space-y-8">
                                {/* Action Card */}
                                <div className="bg-gradient-to-br from-navy-800 to-primary p-8 rounded-[2.5rem] border border-gold-500/10 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/10 rounded-full blur-[50px] group-hover:bg-gold-500/20 transition-all duration-500"></div>

                                    <h3 className="text-xl font-bold text-white mb-6 relative z-10">Topik Terkait</h3>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        {['Humas', 'Kegiatan', 'Inovasi', 'Pemasyarakatan', 'Sinergi'].map(tag => (
                                            <span key={tag} className="px-4 py-2 bg-dark-deep/80 rounded-xl text-xs font-bold text-slate-400 border border-white/5 hover:border-gold-400/50 hover:text-gold-400 transition-all cursor-pointer">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-10 pt-8 border-t border-white/5 text-center relative z-10">
                                        <p className="text-xs text-slate-500 mb-6 italic">"Wujudkan Pemasyarakatan yang Semakin PASTI"</p>
                                        <Link to="/berita" className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-gold text-primary font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1">
                                            Jelajahi Berita Lain <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Quick Info */}
                                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-xl overflow-hidden relative">
                                    <div className="absolute bottom-0 right-0 p-4 text-white/5 rotate-12">
                                        <Newspaper size={100} />
                                    </div>
                                    <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Informasi Redaksi</h4>
                                    <div className="space-y-4 relative z-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <p className="text-xs text-slate-300">Terverifikasi Publik</p>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed">
                                            Laporan berita resmi yang dirilis oleh Sub-Seksi Humas Rutan Kelas I Depok.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
