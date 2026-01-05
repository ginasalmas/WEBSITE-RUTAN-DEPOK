import { ArrowRight, FileText, Info, MessageSquare, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const quickLinks = [
        { name: 'Layanan Kunjungan', icon: <Info size={24} />, path: '/informasi', color: 'bg-blue-500' },
        { name: 'Pengumuman', icon: <Newspaper size={24} />, path: '/pengumuman', color: 'bg-amber-500' },
        { name: 'Pengaduan', icon: <MessageSquare size={24} />, path: '/pengaduan', color: 'bg-red-500' },
        { name: 'SOP & Regulasi', icon: <FileText size={24} />, path: '/informasi', color: 'bg-emerald-500' },
    ];

    const highlights = [
        {
            id: 1,
            title: "Kunjungan Tatap Muka Kembali Dibuka",
            date: "01 Des 2025",
            summary: "Layanan kunjungan tatap muka bagi keluarga warga binaan kini kembali dibuka dengan protokol kesehatan ketat.",
            image: "https://placehold.co/600x400/1e3a8a/ffffff?text=Kunjungan"
        },
        {
            id: 2,
            title: "Pelatihan Kemandirian WBP",
            date: "28 Nov 2025",
            summary: "Warga Binaan Pemasyarakatan (WBP) mengikuti pelatihan pembuatan kerajinan tangan untuk bekal kemandirian.",
            image: "https://placehold.co/600x400/fbbf24/1e3a8a?text=Pelatihan"
        },
        {
            id: 3,
            title: "Upacara Hari Bhakti Pemasyarakatan",
            date: "27 Apr 2025",
            summary: "Rutan Kelas I Depok melaksanakan upacara peringatan Hari Bhakti Pemasyarakatan ke-61 dengan khidmat.",
            image: "https://placehold.co/600x400/1e3a8a/ffffff?text=Upacara"
        }
    ];

    return (
        <div className="space-y-12 pb-12">
            {/* Hero Section */}
            <section className="relative bg-primary-dark text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://placehold.co/1920x1080/000000/ffffff?text=Background')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        RUTAN KELAS I DEPOK
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto">
                        Mewujudkan Pemasyarakatan yang PASTI (Profesional, Akuntabel, Sinergi, Transparan, dan Inovatif)
                    </p>
                    <Link
                        to="/profil"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-primary-dark font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
                    >
                        Tentang Kami <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quickLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center group"
                        >
                            <div className={`${link.color} text-white p-4 rounded-full mb-3 group-hover:scale-110 transition-transform`}>
                                {link.icon}
                            </div>
                            <span className="font-bold text-slate-700">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Latest Highlights */}
            <section className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-dark">Berita Terkini</h2>
                        <div className="h-1 w-20 bg-accent mt-2 rounded-full"></div>
                    </div>
                    <Link to="/berita" className="text-primary hover:text-primary-dark font-medium flex items-center gap-1">
                        Lihat Semua <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item) => (
                        <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-slate-100">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                            />
                            <div className="p-6">
                                <span className="text-xs font-bold text-accent uppercase tracking-wider">{item.date}</span>
                                <h3 className="text-xl font-bold text-slate-800 mt-2 mb-3 line-clamp-2 hover:text-primary transition-colors">
                                    <Link to={`/berita/${item.id}`}>{item.title}</Link>
                                </h3>
                                <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                                    {item.summary}
                                </p>
                                <Link to={`/berita/${item.id}`} className="text-primary font-medium text-sm hover:underline">
                                    Baca Selengkapnya
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Head of Rutan Profile Snippet */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/3 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20"></div>
                                <img
                                    src="https://placehold.co/300x400/1e3a8a/ffffff?text=Kepala+Rutan"
                                    alt="Kepala Rutan"
                                    className="relative w-64 h-80 object-cover rounded-2xl shadow-xl z-10"
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-primary-dark mb-2">Sambutan Kepala Rutan</h2>
                            <h3 className="text-xl text-slate-600 mb-6">Bapak Kepala Rutan, Bc.IP., S.H., M.H.</h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                "Selamat datang di website resmi Rutan Kelas I Depok. Kami berkomitmen untuk memberikan pelayanan terbaik bagi masyarakat dan warga binaan, serta mewujudkan zona integritas menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM)."
                            </p>
                            <Link
                                to="/profil"
                                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 px-6 rounded-lg transition-colors"
                            >
                                Profil Lengkap
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
