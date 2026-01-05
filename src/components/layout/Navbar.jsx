import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Info, FileText, Image, MessageSquare, Newspaper } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Beranda', path: '/', icon: <Home size={18} /> },
        { name: 'Profil', path: '/profil', icon: <Info size={18} /> },
        { name: 'Pengumuman', path: '/pengumuman', icon: <Newspaper size={18} /> },
        { name: 'Informasi', path: '/informasi', icon: <FileText size={18} /> },
        { name: 'Galeri', path: '/galeri', icon: <Image size={18} /> },
        { name: 'Pengaduan', path: '/pengaduan', icon: <MessageSquare size={18} /> },
    ];

    return (
        <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                            R
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-tight">RUTAN KELAS I DEPOK</span>
                            <span className="text-xs text-blue-200">Kementerian Hukum dan HAM RI</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors flex items-center gap-2"
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-accent focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={clsx(
                    "md:hidden bg-primary-dark overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary hover:text-accent transition-colors flex items-center gap-3"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
