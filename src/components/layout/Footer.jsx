import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoKemenkumham from '../../assets/logo-kemenkumham.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark-deep border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl p-2 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl">
                                <img
                                    src="/institution-logo.png"
                                    alt="Logo Rutan Depok"
                                    className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold font-display text-2xl tracking-tighter leading-none">
                                    RUTAN DEPOK
                                </span>
                                <span className="text-gold-500 text-[10px] font-black tracking-[0.4em] uppercase opacity-80 mt-1">
                                    Pasti Berdampak
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed font-light italic">
                            "Melayani dengan Hati, Bekerja dengan Pasti. Mewujudkan Pemasyarakatan yang Profesional, Akuntabel, Sinergi, Transparan, dan Inovatif."
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Facebook size={18} />, path: '#' },
                                { icon: <Instagram size={18} />, path: '#' },
                                { icon: <Twitter size={18} />, path: '#' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.path}
                                    className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-primary hover:text-dark-deep flex items-center justify-center transition-all border border-white/10 hover:border-primary hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] group"
                                >
                                    <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold font-display text-lg mb-8 flex items-center gap-3">
                            <div className="w-8 h-px bg-primary"></div> Navigasi
                        </h4>
                        <ul className="space-y-5">
                            {[
                                { name: 'Beranda', path: '/' },
                                { name: 'Profil & Sejarah', path: '/profil' },
                                { name: 'Visi & Misi', path: '/visi-misi' },
                                { name: 'Layanan Publik', path: '/public-info' },
                                { name: 'E-Katalog WBP', path: '/karya-wbp' },
                                { name: 'Berita Terkini', path: '/berita' },
                                { name: 'Layanan Pengaduan', path: '/pengaduan' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-primary transition-all text-sm flex items-center gap-3 group"
                                        onClick={scrollToTop}
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary group-hover:scale-150 transition-all"></div>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold font-display text-lg mb-8 flex items-center gap-3">
                            <div className="w-8 h-px bg-primary"></div> Hubungi Kami
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-slate-400 text-sm group">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-primary/30 transition-colors">
                                    <MapPin size={18} className="text-primary" />
                                </div>
                                <span className="leading-relaxed mt-1">Jl. M. Nasir, Cilodong, Kec. Cilodong, Kota Depok, Jawa Barat 16413</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400 text-sm group">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-primary/30 transition-colors">
                                    <Phone size={18} className="text-primary" />
                                </div>
                                <span className="font-bold text-white tracking-wide">(021) 1234-5678</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400 text-sm group">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-primary/30 transition-colors">
                                    <Mail size={18} className="text-primary" />
                                </div>
                                <span className="text-white">humas@rutandepok.go.id</span>
                            </li>
                        </ul>
                    </div>

                    {/* Location Section */}
                    <div>
                        <h4 className="text-white font-bold font-display text-lg mb-8 flex items-center gap-3">
                            <div className="w-8 h-px bg-primary"></div> Lokasi Kami
                        </h4>
                        <div className="w-full h-48 bg-white/5 rounded-[2rem] border border-white/10 relative overflow-hidden group shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.868772922756!2d106.8249673!3d-6.4111667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebe405b63013%3A0xa193751276063071!2sRutan%20Kelas%201%20Depok!5e0!3m2!1sid!2sid!4v1709123456789!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="grayscale group-hover:grayscale-0 transition-all duration-[1s] opacity-50 group-hover:opacity-100 scale-105 group-hover:scale-100"
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[2rem]"></div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest text-center md:text-left">
                            &copy; 2025 Rutan Kelas I Depok. All Rights Reserved.
                        </p>
                        <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link to="#" className="hover:text-primary transition-colors">Term of Service</Link>
                        </div>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/10 hover:border-primary/30 transition-all"
                    >
                        Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform text-primary" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
