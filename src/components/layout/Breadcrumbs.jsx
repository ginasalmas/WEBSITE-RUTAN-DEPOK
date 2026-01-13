import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (location.pathname === '/' || pathnames.length === 0) return null;

    const routeMap = {
        'profil': 'Profil',
        'visi-misi': 'Visi & Misi',
        'berita': 'Berita',
        'pengumuman': 'Pengumuman',
        'info-publik': 'Informasi Publik',
        'galeri': 'Galeri',
        'pengaduan': 'Pengaduan',
        'layanan': 'Layanan',
        'karya-wbp': 'E-Katalog WBP'
    };

    return (
        <div className="bg-navy-900/50 backdrop-blur-md border-b border-white/5 py-4 relative z-[40]">
            <div className="container mx-auto px-4">
                <nav className="flex items-center gap-2 text-xs md:text-sm font-medium">
                    <Link
                        to="/"
                        className="text-slate-500 hover:text-gold-500 transition-colors flex items-center gap-1.5 group"
                    >
                        <Home size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="hidden md:inline">Beranda</span>
                    </Link>

                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const label = routeMap[value] || value.charAt(0).toUpperCase() + value.slice(1);

                        return (
                            <React.Fragment key={to}>
                                <ChevronRight size={14} className="text-slate-700" />
                                {last ? (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-gold-500 font-bold truncate max-w-[150px] md:max-w-none"
                                    >
                                        {label}
                                    </motion.span>
                                ) : (
                                    <Link
                                        to={to}
                                        className="text-slate-500 hover:text-slate-300 transition-colors truncate max-w-[100px] md:max-w-none"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </React.Fragment>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumbs;
