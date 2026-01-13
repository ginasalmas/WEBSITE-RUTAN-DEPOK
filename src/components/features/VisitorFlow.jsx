import React, { useState } from 'react';
import { UserCheck, ClipboardList, Package, Users, ShieldCheck, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VisitorFlow = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Pendaftaran Online",
            icon: <UserCheck size={24} />,
            desc: "Pengunjung mendaftar melalui aplikasi atau website resmi untuk mendapatkan nomor antrean digital.",
            details: ["Siapkan KTP/SIM", "Pilih jadwal kunjungan", "Unduh bukti pendaftaran"]
        },
        {
            title: "Verifikasi Berkas",
            icon: <ClipboardList size={24} />,
            desc: "Tiba di Rutan 30 menit sebelum jadwal untuk verifikasi dokumen asli oleh petugas.",
            details: ["Tunjukkan KTP asli", "Cek kesesuaian data", "Pengambilan foto pengunjung"]
        },
        {
            title: "Pemeriksaan Barang",
            icon: <Package size={24} />,
            desc: "Barang bawaan akan diperiksa melalui X-Ray dan penggeledahan manual untuk memastikan keamanan.",
            details: ["Dilarang membawa Sajam/Narkoba", "Titipkan HP di loker", "Pemeriksaan fisik (Body Search)"]
        },
        {
            title: "Pertemuan (Kunjungan)",
            icon: <Users size={24} />,
            desc: "Setelah dinyatakan aman, pengunjung dapat memasuki ruang kunjungan untuk bertemu WBP.",
            details: ["Waktu kunjungan 15-20 menit", "Maksimal 3 orang keluarga", "Patuhi protokol kesehatan"]
        }
    ];

    return (
        <div className="bg-navy-800/40 backdrop-blur-2xl rounded-[3rem] border border-gold-500/10 p-8 md:p-12 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/5 rounded-full blur-[100px] -mr-20 -mt-20 group-hover:bg-gold-600/10 transition-colors"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-gradient-gold rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-gold-500/20">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Panduan Alur Kunjungan</h2>
                        <p className="text-slate-400 text-sm">Langkah-langkah resmi berkunjung ke Rutan Kelas I Depok</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
                    {steps.map((step, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveStep(idx)}
                            className={`relative text-left p-6 rounded-[2rem] border transition-all duration-500 ${activeStep === idx
                                    ? 'bg-gold-500/10 border-gold-500/50 shadow-lg shadow-gold-500/10 scale-[1.02]'
                                    : 'bg-white/5 border-white/5 hover:border-white/20'
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${activeStep === idx ? 'bg-gold-500 text-primary' : 'bg-white/10 text-slate-400'
                                }`}>
                                {step.icon}
                            </div>
                            <h3 className={`font-bold mb-1 transition-colors ${activeStep === idx ? 'text-gold-500' : 'text-white'}`}>
                                {idx + 1}. {step.title}
                            </h3>
                            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold-500 rounded-t-full transition-all duration-500 ${activeStep === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                }`}></div>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-navy-900/50 rounded-[2.5rem] p-8 md:p-10 border border-white/5 flex flex-col md:flex-row gap-10 items-center"
                    >
                        <div className="flex-1">
                            <h4 className="text-gold-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Langkah {activeStep + 1}</h4>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 italic">{steps[activeStep].title}</h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">{steps[activeStep].desc}</p>

                            <div className="space-y-4">
                                {steps[activeStep].details.map((detail, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-200">
                                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                                        <span className="font-medium">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-64 shrink-0">
                            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-navy-800 rounded-2xl flex items-center justify-center text-gold-500 mb-4 border border-gold-500/20">
                                    <Info size={32} />
                                </div>
                                <h5 className="font-bold text-white mb-2 underline decoration-gold-500/50">Penting</h5>
                                <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-tighter">
                                    Pastikan mematuhi tata tertib demi kenyamanan bersama.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default VisitorFlow;
