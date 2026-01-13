import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MessageSquare, User, Phone, Mail, Tag, Info, Shield, Clock, Activity, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Complaints = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        category: 'layanan',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', category: 'layanan', message: '' });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-primary relative overflow-hidden text-white">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
            </div>

            {/* Page Header */}
            <div className="relative py-20 md:py-32 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-xl text-gold-500 text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-8 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                    >
                        <Shield size={18} className="animate-pulse" /> Suara Anda, Prioritas Kami
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter"
                    >
                        Pusat <span className="text-gold-plate">Pengaduan</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Kami berkomitmen untuk terus meningkatkan kualitas layanan. Jangan ragu untuk melaporkan segala bentuk ketidaksesuaian atau memberikan saran yang membangun.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT SIDE: GUIDELINES & INFO */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-navy-800/40 backdrop-blur-2xl p-8 rounded-[2rem] border border-gold-500/10 shadow-xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 font-display flex items-center gap-3">
                                <span className="p-2 bg-gold-500/10 rounded-xl text-gold-500"><Info size={24} /></span>
                                Panduan Pengaduan
                            </h3>
                            <div className="space-y-8">
                                {[
                                    { title: "Kerahasiaan", desc: "Identitas pelapor dijamin aman dan hanya diketahui oleh tim audit internal.", icon: <Shield size={20} /> },
                                    { title: "Responsif", desc: "Setiap laporan akan ditinjau dalam waktu maksimal 2x24 jam kerja.", icon: <Clock size={20} /> },
                                    { title: "Transparan", desc: "Anda akan mendapatkan notifikasi progres tindak lanjut melalui WA/Email.", icon: <Activity size={20} /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="group flex gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 shrink-0 group-hover:bg-gold-500 group-hover:text-primary transition-all duration-300 shadow-lg">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-gold p-8 rounded-[2rem] text-dark-deep shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <MessageSquare size={160} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 relative z-10">Butuh Bantuan Cepat?</h3>
                            <p className="font-bold mb-6 opacity-80 relative z-10">Hubungi petugas center kami sekarang untuk respon instan.</p>
                            <a href="https://wa.me/628123456789" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-dark-deep text-gold-500 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl relative z-10">
                                WhatsApp Center <Send size={18} />
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: THE FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-8 bg-navy-800/40 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-gold-500/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden"
                    >
                        {/* Interactive Sparkles in background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px]"></div>

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-10"
                                >
                                    <div className="w-28 h-28 bg-gold-500 text-primary rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(212,175,55,0.4)] rotate-3">
                                        <CheckCircle size={56} />
                                    </div>
                                    <h2 className="text-4xl font-black text-white mb-6 font-display">Laporan Berhasil Terkirim!</h2>
                                    <p className="text-slate-400 mb-12 text-xl font-light">
                                        Terima kasih. Kami sangat menghargai kejujuran Anda. Tim kami akan segera menganalisis pengaduan ini dengan serius.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-12 py-5 bg-gradient-gold text-dark-deep font-black rounded-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all uppercase tracking-[0.2em] text-sm"
                                    >
                                        Kirim Laporan Lainnya
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-10 relative z-10"
                                >
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="text-xs font-black text-gold-500 uppercase tracking-widest ml-1">Nama Pelapor</label>
                                            <div className="relative group">
                                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">
                                                    <User size={20} />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy-900/50 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-900 transition-all shadow-inner font-medium"
                                                    placeholder="Input nama lengkap..."
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-xs font-black text-gold-500 uppercase tracking-widest ml-1">WhatsApp / HP</label>
                                            <div className="relative group">
                                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">
                                                    <Phone size={20} />
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy-900/50 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-900 transition-all shadow-inner font-medium"
                                                    placeholder="0812-xxxx-xxxx"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="text-xs font-black text-gold-500 uppercase tracking-widest ml-1">Email Aktif</label>
                                            <div className="relative group">
                                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">
                                                    <Mail size={20} />
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy-900/50 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-900 transition-all shadow-inner font-medium"
                                                    placeholder="alamat@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-xs font-black text-gold-500 uppercase tracking-widest ml-1">Kategori Laporan</label>
                                            <div className="relative group">
                                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">
                                                    <Tag size={20} />
                                                </div>
                                                <select
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy-900/50 border border-white/5 rounded-2xl py-5 pl-16 pr-12 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-900 transition-all appearance-none cursor-pointer font-medium"
                                                >
                                                    <option value="layanan">Kualitas Pelayanan</option>
                                                    <option value="pungli">Pungutan Liar / Gratifikasi</option>
                                                    <option value="petugas">Pelanggaran Disiplin Petugas</option>
                                                    <option value="fasilitas">Kondisi Sarana & Prasarana</option>
                                                    <option value="lainnya">Lainnya</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                                    <ChevronDown size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-gold-500 uppercase tracking-widest ml-1">Detail Pengaduan</label>
                                        <div className="relative group">
                                            <textarea
                                                name="message"
                                                required
                                                rows="6"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full bg-navy-900/50 border border-white/5 rounded-[2rem] p-8 text-white focus:outline-none focus:border-gold-500/50 focus:bg-navy-900 transition-all shadow-inner resize-none font-medium leading-relaxed"
                                                placeholder="Jelaskan secara rinci kronologi, lokasi, dan oknum terkait jika ada..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="bg-gold-500/10 border border-gold-500/20 p-8 rounded-[2rem] flex gap-6 text-sm text-slate-300 leading-relaxed shadow-lg">
                                        <div className="p-3 bg-gold-500/20 rounded-2xl text-gold-400 shrink-0 h-fit shadow-inner">
                                            <AlertCircle size={28} />
                                        </div>
                                        <p className="font-medium italic">
                                            "Laporan yang Anda buat dilindungi oleh sistem keamanan berlapis (End-to-End Encryption). Pastikan data yang dikirimkan adalah akurat untuk mempermudah proses verifikasi kami."
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full group relative overflow-hidden bg-gradient-gold p-6 rounded-[2rem] text-dark-deep font-black uppercase tracking-[0.3em] text-sm hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100 shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)]"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                        <span className="relative flex items-center justify-center gap-4">
                                            {status === 'submitting' ? (
                                                <>
                                                    <div className="w-5 h-5 border-4 border-dark-deep/30 border-t-dark-deep rounded-full animate-spin"></div>
                                                    Memproses Data...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    Kirim Laporan Resmi
                                                </>
                                            )}
                                        </span>
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Complaints;
