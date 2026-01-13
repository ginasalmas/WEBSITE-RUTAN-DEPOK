import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Newspaper,
    Megaphone,
    Image as ImageIcon,
    Settings,
    ChevronLeft,
    ChevronRight,
    ShieldCheck,
    Globe
} from 'lucide-react';
import clsx from 'clsx';

const AdminSidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();

    const menuItems = [
        { title: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
        { title: 'Berita', icon: <Newspaper size={20} />, path: '/admin/news' },
        { title: 'Pengumuman', icon: <Megaphone size={20} />, path: '/admin/announcements' },
        { title: 'Media Library', icon: <ImageIcon size={20} />, path: '/admin/media' },
    ];

    const secondaryItems = [
        { title: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
        { title: 'View Website', icon: <Globe size={20} />, path: '/' },
    ];

    return (
        <aside
            className={clsx(
                "fixed left-0 top-0 bottom-0 z-40 bg-[#0F172A] text-slate-300 transition-all duration-300 border-r border-slate-800 shadow-2xl flex flex-col",
                isOpen ? "w-64" : "w-20"
            )}
        >
            {/* Brand */}
            <div className="h-16 flex items-center px-6 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold shrink-0">
                    R
                </div>
                {isOpen && (
                    <div className="ml-3 overflow-hidden whitespace-nowrap">
                        <h1 className="text-white font-bold text-sm tracking-tight">ADMIN PANEL</h1>
                        <p className="text-gold-500 text-[9px] font-black tracking-widest uppercase opacity-70 leading-none mt-0.5">Rutan Depok</p>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-3 space-y-1">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={clsx(
                                "flex items-center h-11 px-3 rounded-xl transition-all duration-200 group relative",
                                isActive
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <span className={clsx("shrink-0", isActive ? "text-white" : "text-slate-500 group-hover:text-primary transition-colors")}>
                                {item.icon}
                            </span>
                            {isOpen && (
                                <span className="ml-3 text-sm font-semibold tracking-wide">
                                    {item.title}
                                </span>
                            )}
                            {isActive && !isOpen && (
                                <div className="absolute left-0 top-2 bottom-2 w-1 bg-white rounded-r-full"></div>
                            )}
                        </Link>
                    );
                })}

                <div className="my-6 px-3">
                    <hr className="border-slate-800" />
                </div>

                {secondaryItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center h-11 px-3 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-200 group"
                    >
                        <span className="shrink-0 text-slate-500 group-hover:text-primary transition-colors">
                            {item.icon}
                        </span>
                        {isOpen && (
                            <span className="ml-3 text-sm font-semibold tracking-wide">
                                {item.title}
                            </span>
                        )}
                    </Link>
                ))}
            </nav>

            {/* Footer / Toggle */}
            <div className="p-4 border-t border-slate-800">
                <div className={clsx(
                    "bg-slate-800/50 rounded-2xl p-3 flex items-center transition-all",
                    isOpen ? "justify-between" : "justify-center"
                )}>
                    {isOpen && (
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                                <ShieldCheck size={16} className="text-green-500" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</p>
                                <p className="text-[11px] font-bold text-green-500 mt-1">Online</p>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-8 h-8 rounded-lg hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                    >
                        {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;
