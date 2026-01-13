import React, { useState } from 'react';
import { MessageCircle, Phone, HelpCircle, X, MapPin, Send, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickAccess = () => {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        {
            icon: <MessageCircle size={24} />,
            label: "WhatsApp Layanan",
            color: "bg-emerald-500",
            href: "https://wa.me/6281234567890",
            desc: "Chat dengan petugas layanan"
        },
        {
            icon: <HelpCircle size={24} />,
            label: "Pusat Bantuan",
            color: "bg-blue-500",
            href: "/pengaduan",
            desc: "Kirim pengaduan atau saran"
        },
        {
            icon: <MapPin size={24} />,
            label: "Lokasi Rutan",
            color: "bg-rose-500",
            href: "https://maps.google.com/?q=Rutan+Depok",
            desc: "Navigasi Google Maps"
        },
        {
            icon: <AlertTriangle size={24} />,
            label: "Layanan Pengaduan",
            color: "bg-amber-500",
            href: "/pengaduan",
            desc: "Wistleblowing System"
        }
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-20 right-0 w-72 mb-4 space-y-3"
                    >
                        {actions.map((action, idx) => (
                            <motion.a
                                key={idx}
                                href={action.href}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-4 bg-navy-800/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl hover:border-gold-500/50 hover:bg-navy-700/90 transition-all group shadow-2xl"
                            >
                                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                    {action.icon}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white group-hover:text-gold-500 transition-colors">{action.label}</p>
                                    <p className="text-[10px] text-slate-400 leading-tight">{action.desc}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-navy-900 border-2 border-gold-500 animate-none' : 'bg-gradient-gold animate-bounce-slow'
                    }`}
            >
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isOpen ? <X size={28} className="text-gold-500" /> : <Send size={28} className="text-primary" />}
                </motion.div>

                {!isOpen && (
                    <span className="absolute -top-2 -right-2 flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-gold-500 border-2 border-primary items-center justify-center text-[10px] font-black text-primary">!</span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default QuickAccess;
