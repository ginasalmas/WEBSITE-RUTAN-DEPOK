import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Activity } from 'lucide-react';
import clsx from 'clsx';
import logoKemenkumham from '../../assets/logo-kemenkumham.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Beranda', path: '/' },
        { name: 'Profil', path: '/profil' },
        { name: 'Info Publik', path: '/public-info' },
        { name: 'Karya WBP', path: '/karya-wbp' },
        { name: 'Berita', path: '/berita' },
        { name: 'Galeri', path: '/galeri' },
        { name: 'Pengaduan', path: '/pengaduan' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
                scrolled
                    ? 'bg-primary/90 backdrop-blur-lg border-gold-500/20 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]'
                    : 'bg-primary border-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo Area */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <img
                                src="/institution-logo.png"
                                alt="Logo Rutan Depok"
                                className="w-12 h-12 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                            />
                            <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold font-display text-xl tracking-tight leading-none group-hover:text-gold-500 transition-colors duration-300">
                                RUTAN DEPOK
                            </span>
                            <span className="text-gold-500 text-[10px] font-black tracking-[0.3em] uppercase opacity-80 group-hover:tracking-[0.35em] transition-all duration-300">
                                Kemenkumham RI
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={clsx(
                                        "relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 overflow-hidden group",
                                        isActive ? "text-primary-foreground" : "text-slate-300 hover:text-slate-100"
                                    )}
                                >
                                    {/* Active Background Pill */}
                                    <span className={clsx(
                                        "absolute inset-0 bg-gold-500 transition-transform duration-300 ease-out origin-left",
                                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:opacity-20"
                                    )}></span>

                                    <span className="relative z-10">
                                        {link.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Actions removed as per request */}

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden w-10 h-10 flex items-center justify-center text-slate-100 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-center items-center gap-8",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                {navLinks.map((link, idx) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={clsx(
                            "text-3xl font-bold font-display transition-all duration-300 transform",
                            isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                            location.pathname === link.path ? "text-gold-500" : "text-slate-100"
                        )}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav >
    );
};

export default Navbar;
