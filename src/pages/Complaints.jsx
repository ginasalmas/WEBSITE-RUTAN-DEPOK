import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

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
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-primary-dark mb-4">Layanan Pengaduan</h1>
                <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
                <p className="text-slate-600 mt-6">
                    Sampaikan kritik, saran, atau pengaduan Anda untuk perbaikan layanan kami. Identitas pelapor akan dirahasiakan.
                </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                {status === 'success' ? (
                    <div className="text-center py-10 animate-fade-in">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Pengaduan Terkirim!</h2>
                        <p className="text-slate-600 mb-8">
                            Terima kasih atas masukan Anda. Laporan Anda telah kami terima dan akan segera ditindaklanjuti oleh tim terkait.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
                        >
                            Kirim Pengaduan Lain
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Masukkan nama Anda"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Nomor Telepon / WA</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Contoh: 08123456789"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email (Opsional)</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="email@contoh.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-bold text-slate-700 mb-2">Kategori Pengaduan</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                >
                                    <option value="layanan">Pelayanan Publik</option>
                                    <option value="pungli">Pungutan Liar (Pungli)</option>
                                    <option value="petugas">Perilaku Petugas</option>
                                    <option value="fasilitas">Sarana & Prasarana</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Isi Pengaduan</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                placeholder="Jelaskan detail pengaduan Anda secara lengkap..."
                            ></textarea>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-sm text-blue-800">
                            <AlertCircle className="shrink-0" size={20} />
                            <p>
                                Dengan mengirimkan formulir ini, Anda menyetujui bahwa data yang Anda kirimkan adalah benar dan dapat dipertanggungjawabkan. Kami menjamin kerahasiaan identitas pelapor.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? 'Mengirim...' : (
                                <>
                                    <Send size={20} /> Kirim Pengaduan
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Complaints;
