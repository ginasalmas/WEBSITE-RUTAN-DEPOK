import { Award, BookOpen, ChevronRight, Clock, Globe, Shield, Users, Instagram, Facebook, Twitter, Youtube, CheckCircle, Activity, Sparkles } from "lucide-react";
import kepalaPortrait from "../assets/kepala-rutan.png";
import { motion } from "framer-motion";

const Profile = () => {
    const historyEvents = [
        { year: "2005", title: "Resmikan Pelayanan", desc: "Mulai beroperasi pada lahan 2.5 Ha guna mengurai overkapasitas wilayah Jabodetabek." },
        { year: "2012", title: "Pusat Transformasi", desc: "Pengembangan gedung perkantoran dan fasilitas pembinaan kemandirian WBP." },
        { year: "2018", title: "WBK Achievement", desc: "Mendapatkan predikat Wilayah Bebas dari Korupsi (WBK) dari Kemenpan-RB." },
        { year: "2024", title: "Inovasi Digital", desc: "Transformasi layanan berbasis digital terintegrasi untuk keterbukaan informasi publik." }
    ];

    const socialMedia = [
        { name: 'Instagram', handle: '@rutandepok', color: 'from-purple-600 to-pink-500', icon: <Instagram />, path: 'https://instagram.com/rutandepok' },
        { name: 'Facebook', handle: 'Rutan Kelas I Depok', color: 'from-blue-700 to-blue-500', icon: <Facebook />, path: 'https://facebook.com/rutandepok' },
        { name: 'Twitter', handle: '@rutandepok', color: 'from-sky-500 to-sky-400', icon: <Twitter />, path: 'https://twitter.com/rutandepok' },
        { name: 'Youtube', handle: 'Rutan Depok TV', color: 'from-red-700 to-red-500', icon: <Youtube />, path: 'https://youtube.com/@rutandepok' },
    ];

    return (
        <div className="min-h-screen bg-primary selection:bg-gold-500/30">
            {/* Page Header */}
            <div className="relative py-24 md:py-40 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[150px] animate-pulse"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-xl text-gold-500 text-xs md:text-sm font-black uppercase tracking-[0.4em] mb-8"
                    >
                        <Shield size={16} /> Tentang Institusi
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter"
                    >
                        Profil <span className="text-gold-plate italic">Eksklusif</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Mengenal lebih dekat dedikasi dan perjalanan Rutan Kelas I Depok dalam mewujudkan pemasyarakatan yang manusiawi dan modern.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-20 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

                    {/* Left COLUMN: SEJARAH & STRUCTURE */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Interactive Sejarah Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-navy-800/40 backdrop-blur-3xl p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gold-500/10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Clock size={200} />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black font-display text-white mb-16 flex items-center gap-4">
                                <span className="p-4 bg-gradient-gold rounded-2xl text-dark-deep shadow-lg"><BookOpen size={30} /></span>
                                Jejak Perjalanan
                            </h2>

                            <div className="relative space-y-12">
                                {/* Vertical Line */}
                                <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-gold-500 via-gold-500/50 to-transparent opacity-20 hidden md:block"></div>

                                {historyEvents.map((event, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="relative pl-0 md:pl-20 group"
                                    >
                                        {/* Dot */}
                                        <div className="absolute left-0 top-1.5 w-12 h-12 rounded-2xl bg-navy-900 border border-gold-500/30 flex items-center justify-center z-10 group-hover:bg-gold-500 group-hover:text-primary transition-all duration-500 group-hover:scale-110 shadow-xl hidden md:flex">
                                            <Sparkles size={18} className="opacity-0 group-hover:opacity-100 absolute transition-opacity" />
                                            <span className="font-black text-[10px] group-hover:opacity-0 transition-opacity uppercase">{idx + 1}</span>
                                        </div>

                                        <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 hover:border-gold-500/20 transition-all duration-500 group-hover:bg-white-[0.07] shadow-lg">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                <h3 className="text-2xl font-black text-white group-hover:text-gold-500 transition-colors uppercase tracking-tight">{event.title}</h3>
                                                <span className="px-5 py-1.5 bg-gold-500/10 text-gold-500 rounded-full text-sm font-black border border-gold-500/20 shadow-inner">{event.year}</span>
                                            </div>
                                            <p className="text-slate-400 text-lg leading-relaxed font-light">{event.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Organizational Structure - Premium Refresh */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-navy-800/40 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gold-500/10"
                        >
                            <h2 className="text-3xl md:text-4xl font-black font-display text-white mb-16 flex items-center gap-4">
                                <span className="p-4 bg-navy-900 rounded-2xl text-gold-500 border border-gold-500/20 shadow-xl"><Users size={30} /></span>
                                Struktur Organisasi
                            </h2>

                            <div className="relative p-12 bg-navy-900/40 rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-inner">
                                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    {/* Top Level */}
                                    <div className="mb-20 relative">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-gradient-gold p-0.5 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.2)]"
                                        >
                                            <div className="bg-primary px-12 py-6 rounded-[calc(1rem-2px)] text-center min-w-[280px]">
                                                <p className="text-xs font-black uppercase tracking-[0.3em] text-gold-500 mb-2">Kepala Rutan</p>
                                                <p className="font-black text-white text-lg tracking-tight uppercase">Karutan Kelas I Depok</p>
                                            </div>
                                        </motion.div>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-gold-500 to-transparent"></div>
                                    </div>

                                    {/* Mid Level */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full relative">
                                        {[
                                            { role: "Kamtib", label: "KPR" },
                                            { role: "Pelayanan", label: "Yan Tahanan" },
                                            { role: "Pengelolaan", label: "Kasubag TU" },
                                            { role: "Pembinaan", label: "Kasi Giatja" }
                                        ].map((dept, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ y: -5 }}
                                                className="relative flex flex-col items-center text-center"
                                            >
                                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full hover:border-gold-500/40 hover:bg-white/10 transition-all duration-500 shadow-xl">
                                                    <p className="text-[10px] font-black text-gold-500 uppercase tracking-widest mb-2 opacity-70">{dept.role}</p>
                                                    <p className="font-black text-white text-sm tracking-tight">{dept.label}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-20">
                                        <button className="group flex items-center gap-4 px-10 py-5 bg-navy-800 text-gold-500 border border-gold-500/20 rounded-2xl hover:bg-gradient-gold hover:text-dark-deep transition-all duration-500 font-black text-sm uppercase tracking-widest shadow-2xl">
                                            Unduh Struktur Digital <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right COLUMN: HEAD PROFILE & SOCIALS */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Kepala Rutan Card - THE CINEMATIC VERSION */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-navy-800/60 backdrop-blur-3xl p-10 rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden group"
                        >
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-700"></div>

                            <div className="text-center relative z-10">
                                <div className="relative inline-block mb-10">
                                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-gold shadow-[0_0_60px_rgba(212,175,55,0.3)] mx-auto relative group">
                                        <div className="absolute inset-0 rounded-full bg-gold-500 animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                        <img
                                            src={kepalaPortrait}
                                            alt="Kepala Rutan"
                                            className="w-full h-full rounded-full object-cover border-[6px] border-dark-deep relative z-10"
                                        />
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-gradient-gold text-dark-deep p-3 rounded-2xl shadow-xl border-4 border-dark-deep">
                                        <Award size={24} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-white font-display mb-2">Bapak Kepala, Bc.IP., S.H.</h3>
                                <p className="text-gold-500 text-sm font-black uppercase tracking-[0.2em] mb-10">Kepala Rutan Kelas I Depok</p>

                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 relative italic text-slate-300 leading-relaxed font-medium">
                                    <span className="text-6xl text-gold-500/20 absolute -top-4 left-4 font-serif">"</span>
                                    Komitmen kami adalah memberikan pelayanan prima tanpa pungutan liar dan diskriminasi. Membangun integritas dari hati untuk negeri.
                                    <span className="text-6xl text-gold-500/20 absolute -bottom-10 right-4 font-serif">"</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Media Integration */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-navy-800/40 backdrop-blur-3xl p-10 rounded-[3rem] shadow-2xl border border-white/5"
                        >
                            <h3 className="text-2xl font-black text-white font-display mb-10 flex items-center gap-3">
                                <span className="p-2 bg-white/5 rounded-xl text-gold-500"><Globe size={20} /></span>
                                Kanal Media Sosial
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {socialMedia.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-5 p-5 bg-white/5 border border-white/5 rounded-[1.5rem] hover:border-gold-500/30 transition-all duration-300 hover:bg-white/10"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                            {social.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-gold-500 uppercase tracking-widest">{social.name}</p>
                                            <p className="text-white font-bold">{social.handle}</p>
                                        </div>
                                        <div className="ml-auto opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                                            <ChevronRight size={20} className="text-gold-500" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Kapasitas", value: "1,500", icon: <Users size={20} /> },
                                { label: "Luas Lahan", value: "2.5 Ha", icon: <Globe size={20} /> },
                                { label: "Integritas", value: "WBK", icon: <Award size={20} /> },
                                { label: "Responsif", value: "24/7", icon: <Activity size={20} /> },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-navy-800/40 backdrop-blur-md p-6 rounded-[2rem] border border-gold-500/10 hover:border-gold-500/40 transition-all duration-500 group shadow-lg">
                                    <div className="text-gold-500 mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">{stat.icon}</div>
                                    <div className="text-2xl font-black text-white font-display">{stat.value}</div>
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
