import { Target, Compass, Award, Shield, Users, ArrowRight, Zap, Eye, Heart } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VisionMission = () => {
    return (
        <div className="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            {/* Page Header */}
            <div className="relative py-12 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        <Compass size={16} /> Arah & Tujuan Kami
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-6 drop-shadow-2xl"
                    >
                        Visi & Misi
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Landasan kokoh dalam mewujudkan pelayanan pemasyarakatan yang berkelas dunia dan humanis.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24 space-y-24 md:space-y-32 relative z-10">

                {/* Vision Section - Asymmetric Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 relative group perspective-1000">
                        <div className="relative z-10 bg-gradient-to-br from-navy-800/40 to-navy-900/40 backdrop-blur-xl rounded-[2.5rem] p-2 border border-gold-500/10 shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:rotate-x-6">
                            <div className="rounded-[2rem] overflow-hidden relative aspect-square lg:aspect-[4/3]">
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
                                    alt="Vision"
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-primary mb-4 shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-bounce-slow">
                                        <Eye size={32} />
                                    </div>
                                    <p className="text-2xl font-bold font-display">Pandangan Masa Depan</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[40px] animate-pulse-slow"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-400/20 rounded-full blur-[40px] animate-pulse-slow animation-delay-2000"></div>
                    </div>

                    <div className="lg:w-1/2 text-center lg:text-left">
                        <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block flex items-center gap-3 justify-center lg:justify-start">
                            <span className="w-12 h-px bg-gold-500"></span> Visi Kami
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1]">
                            Menjadi Penyelenggara Pemasyarakatan yang <span className="text-transparent bg-clip-text bg-gradient-gold relative z-10 font-extrabold inline-block transform hover:scale-105 transition-transform duration-300 cursor-default">PASTI</span>
                        </h2>
                        <div className="text-slate-300 text-lg md:text-xl leading-relaxed font-light p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors">
                            <p className="mb-2 italic opacity-80">"Profesional, Akuntabel, Sinergi, Transparan, dan Inovatif"</p>
                            <div className="w-full h-px bg-white/10 my-6"></div>
                            <p>
                                Mewujudkan pemulihan kesatuan hubungan hidup, kehidupan, dan penghidupan bagi Warga Binaan Pemasyarakatan agar dapat kembali diterima di masyarakat.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Section - Cards Grid */}
                <div className="relative">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-4 block">Misi Kami</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Langkah Nyata Mewujudkan Visi</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Shield size={32} />,
                                title: "Keamanan & Ketertiban",
                                desc: "Melaksanakan pengamanan dan pelayanan tahanan guna memelihara keamanan dan ketertiban secara profesional.",
                                color: "from-blue-500/20 to-blue-600/5",
                                borderColor: "group-hover:border-blue-500/50",
                                iconColor: "text-blue-400"
                            },
                            {
                                icon: <Heart size={32} />,
                                title: "Pembinaan Humanis",
                                desc: "Menyelenggarakan pembinaan kepribadian dan kemandirian dalam rangka reintegrasi sosial yang berbasis HAM.",
                                color: "from-rose-500/20 to-rose-600/5",
                                borderColor: "group-hover:border-rose-500/50",
                                iconColor: "text-rose-400"
                            },
                            {
                                icon: <Award size={32} />,
                                title: "Pelayanan Prima",
                                desc: "Memberikan pelayanan perawatan kesehatan dan kebutuhan dasar bagi tahanan sesuai standar yang berlaku.",
                                color: "from-amber-500/20 to-amber-600/5",
                                borderColor: "group-hover:border-amber-500/50",
                                iconColor: "text-amber-400"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-gradient-to-b ${item.color} backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 ${item.borderColor} transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                                <div className={`w-16 h-16 rounded-2xl bg-dark-deep/50 flex items-center justify-center ${item.iconColor} border border-white/10 mb-8 p-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-200 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values Section (PASTI) - Horizontal Cards */}
                <div className="bg-dark/40 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-gold-400/20 rounded-full blur-[120px]"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-12 flex items-center gap-4">
                            Tata Nilai <span className="bg-gradient-gold text-primary px-4 py-1 rounded-xl shadow-lg shadow-gold-400/20">PASTI</span>
                        </h2>

                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {[
                                { char: 'P', word: 'Profesional', desc: 'Bekerja keras, cerdas, dan tuntas.' },
                                { char: 'A', word: 'Akuntabel', desc: 'Dapat dipertanggungjawabkan.' },
                                { char: 'S', word: 'Sinergi', desc: 'Membangun kerjasama yang produktif.' },
                                { char: 'T', word: 'Transparan', desc: 'Terbuka dalam memberikan informasi.' },
                                { char: 'I', word: 'Inovatif', desc: 'Selalu berkreasi dan mengembangkan diri.' }
                            ].map((val, idx) => (
                                <div key={idx} className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold-400/30 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-start gap-4">
                                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-amber-600 transition-transform group-hover:scale-110 origin-left">
                                            {val.char}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{val.word}</h3>
                                            <p className="text-sm text-slate-400 group-hover:text-slate-300 leading-snug">{val.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VisionMission;
