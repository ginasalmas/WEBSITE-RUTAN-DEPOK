import { Info, FileText, Activity, Shield, Users, Scale, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Services = () => {
    const services = [
        {
            id: 'kunjungan',
            title: 'Layanan Kunjungan',
            description: 'Fasilitas kunjungan tatap muka dan video call bagi keluarga warga binaan dengan prosedur yang mudah dan transparan.',
            icon: <Users size={32} />,
            color: 'blue',
            details: [
                'Kunjungan Tatap Muka: Senin - Kamis',
                'Kunjungan Online (Video Call)',
                'Kunjungan Khusus (Hari Raya/Libur Nasional)',
                'Pendaftaran Antrean Online'
            ]
        },
        {
            id: 'integrasi',
            title: 'Layanan Integrasi',
            description: 'Pengurusan Hak Integrasi Warga Binaan Pemasyarakatan (PB, CB, CMB, dan Asimilasi) secara GRATIS.',
            icon: <Scale size={32} />,
            color: 'gold',
            details: [
                'Pembebasan Bersyarat (PB)',
                'Cuti Bersyarat (CB)',
                'Cuti Menjelang Bebas (CMB)',
                'Asimilasi di Rumah'
            ]
        },
        {
            id: 'kesehatan',
            title: 'Layanan Kesehatan',
            description: 'Klinik Pratama Rutan Kelas I Depok menyediakan layanan kesehatan dasar 24 jam bagi Warga Binaan.',
            icon: <Activity size={32} />,
            color: 'emerald',
            details: [
                'Pemeriksaan Kesehatan Rutin',
                'Layanan Gawat Darurat 24 Jam',
                'Rujukan Rumah Sakit (Bila Perlu)',
                'Konseling Psikologis'
            ]
        },
        {
            id: 'pembinaan',
            title: 'Pembinaan Kemandirian',
            description: 'Program pelatihan keterampilan bersertifikat untuk bekal kemandirian Warga Binaan setelah bebas.',
            icon: <Star size={32} />,
            color: 'purple',
            details: [
                'Pelatihan Hidroponik & Pertanian',
                'Manufaktur (Handicraft)',
                'Pelatihan Barista & Tata Boga',
                'Sablon & Konveksi'
            ]
        },
        {
            id: 'kerohanian',
            title: 'Pembinaan Kepribadian',
            description: 'Bimbingan mental dan spiritual sesuai agama dan kepercayaan masing-masing untuk pemulihan perilaku hidup.',
            icon: <Shield size={32} />,
            color: 'amber',
            details: [
                'Pesantren At-Taubah (Muslim)',
                'Ibadah Raya (Nasrani)',
                'Bimbingan Konseling Rohani',
                'Pendidikan Kesadaran Hukum'
            ]
        },
        {
            id: 'hukum',
            title: 'Bantuan Hukum',
            description: 'Layanan Bantuan Hukum (LBH) Gratis bagi Warga Binaan yang kurang mampu bekerjasama dengan OBH terakreditasi.',
            icon: <FileText size={32} />,
            color: 'indigo',
            details: [
                'Konsultasi Hukum Gratis',
                'Pendampingan Persidangan',
                'Penyuluhan Hukum',
                'Akses Keadilan Bagi Semua'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            {/* Page Header */}
            <div className="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mb-6"
                        >
                            <Info size={16} /> Layanan Publik
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-8"
                        >
                            Layanan Pemasyarakatan
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        >
                            Komitmen kami dalam memberikan pelayanan prima yang transparan, akuntabel, dan bebas dari gratifikasi.
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Assurance Section */}
                <div className="max-w-4xl mx-auto mb-20 md:mb-32">
                    <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up delay-300">
                        {[
                            { label: 'GRATIS', text: 'Semua layanan tidak dipungut biaya sepeserpun.' },
                            { label: 'TRANSPARAN', text: 'Prosedur jelas dan dapat dipantau perkembangannya.' },
                            { label: 'HUMANIS', text: 'Melayani dengan hati dan menghormati hak asasi manusia.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-navy-800/40 backdrop-blur-md p-8 rounded-3xl border border-gold-500/10 text-center group hover:bg-navy-800/60 transition-all">
                                <h3 className="text-gold-500 font-black text-xl mb-3 tracking-widest">{item.label}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative h-full animate-fade-in-up"
                            style={{ animationDelay: `${(index + 4) * 100}ms` }}
                        >
                            <div className="absolute -inset-1 bg-gradient-gold rounded-[2.5rem] blur opacity-0 group-hover:opacity-10 transition duration-500"></div>

                            <div className="relative h-full bg-navy-800/40 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-gold-500/10 flex flex-col hover:border-gold-500/30 transition-all duration-300 group-hover:-translate-y-2">
                                <div className={clsx(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 bg-gradient-navy border border-gold-500/20 text-gold-500"
                                )}>
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-gold-500 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base flex-grow">
                                    {service.description}
                                </p>

                                <div className="space-y-4 border-t border-white/5 pt-8">
                                    {service.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-slate-500 group-hover:text-slate-300 transition-colors text-xs md:text-sm font-medium">
                                            <CheckCircle size={16} className="text-gold-500 shrink-0" />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-all">
                                        Selengkapnya <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300 text-gold-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-32 max-w-5xl mx-auto">
                    <div className="relative rounded-[3rem] overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-amber-600/20 backdrop-blur-3xl"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                        <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10 rounded-[3rem]">
                            <div className="flex-grow text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Hubungi Layanan Informasi</h2>
                                <p className="text-slate-300 text-lg max-w-xl">
                                    Butuh bantuan atau informasi tambahan mengenai layanan kami? Tim kami siap melayani Anda melalui berbagai kanal komunikasi.
                                </p>
                            </div>
                            <div className="shrink-0 flex flex-col gap-4 w-full md:w-auto">
                                <Link to="/pengaduan" className="px-10 py-5 bg-gradient-gold text-primary font-black rounded-2xl shadow-xl hover:shadow-gold-500/40 text-center transition-all hover:-translate-y-1 uppercase tracking-widest text-sm">
                                    Buat Pengaduan
                                </Link>
                                <Link to="/kontak" className="px-10 py-5 bg-white/5 border border-gold-500/20 text-white font-black rounded-2xl text-center hover:bg-gold-500 hover:text-primary transition-all uppercase tracking-widest text-sm">
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
