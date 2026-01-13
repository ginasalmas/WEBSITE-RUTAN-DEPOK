import React, { useState, useEffect } from 'react';
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    ExternalLink,
    MoreVertical,
    Filter,
    Image as ImageIcon,
    Check,
    X,
    AlertCircle
} from 'lucide-react';
import clsx from 'clsx';

const ManageNews = () => {
    const [news, setNews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [formData, setFormData] = useState({
        title: '',
        category: 'Berita Umum',
        date: new Date().toISOString().split('T')[0],
        image: '',
        content: '',
        author: 'Admin Rutan'
    });

    useEffect(() => {
        // Initial data loading
        const savedNews = localStorage.getItem('admin_news');
        if (savedNews) {
            setNews(JSON.parse(savedNews));
        } else {
            // Fallback or initial mock data if needed
            setNews([
                { id: 1, title: 'Kunjungan Kerja Kakanwil Kemenkumham Jabar', category: 'Layanan', date: '2025-03-01', author: 'Humas', image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=400' },
                { id: 2, title: 'Sinergi Rutan Depok dengan Aparat Penegak Hukum', category: 'Keamanan', date: '2025-02-28', author: 'Admin', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400' },
            ]);
        }
        setIsLoading(false);
    }, []);

    const saveToLocalStorage = (updatedNews) => {
        localStorage.setItem('admin_news', JSON.stringify(updatedNews));
        setNews(updatedNews);
    };

    const handleOpenModal = (item = null) => {
        if (item) {
            setEditingItem(item);
            setFormData(item);
        } else {
            setEditingItem(null);
            setFormData({
                title: '',
                category: 'Berita Umum',
                date: new Date().toISOString().split('T')[0],
                image: '',
                content: '',
                author: 'Admin Rutan'
            });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingItem) {
            const updated = news.map(n => n.id === editingItem.id ? { ...formData, id: n.id } : n);
            saveToLocalStorage(updated);
        } else {
            const newItem = { ...formData, id: Date.now() };
            saveToLocalStorage([newItem, ...news]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
            const updated = news.filter(n => n.id !== id);
            saveToLocalStorage(updated);
        }
    };

    const filteredNews = news.filter(n =>
        n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Manajemen Berita</h1>
                    <p className="text-slate-500 text-sm font-medium">Buat, edit, dan kelola artikel berita website.</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95"
                >
                    <Plus size={20} />
                    Tambah Berita
                </button>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Cari judul berita atau kategori..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary rounded-2xl text-sm transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition-all">
                    <Filter size={18} />
                    Filter Kategori
                </button>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                <th className="px-8 py-5">Berita</th>
                                <th className="px-6 py-5">Kategori</th>
                                <th className="px-6 py-5">Penulis</th>
                                <th className="px-6 py-5">Tanggal</th>
                                <th className="px-8 py-5 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredNews.length > 0 ? filteredNews.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center text-slate-300">
                                                {item.image ? (
                                                    <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                ) : (
                                                    <ImageIcon size={20} />
                                                )}
                                            </div>
                                            <div className="max-w-[300px]">
                                                <h4 className="text-sm font-bold text-slate-700 line-clamp-2 leading-tight group-hover:text-primary transition-colors cursor-pointer">{item.title}</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[10px] text-slate-400 font-medium">ID: #{item.id}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider rounded-full border border-primary/20">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 border border-white shadow-sm flex items-center justify-center text-[10px] uppercase font-black text-slate-500">
                                                {item.author?.[0] || 'A'}
                                            </div>
                                            <span className="text-xs font-semibold text-slate-600">{item.author}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-medium text-slate-500">{item.date}</span>
                                    </td>
                                    <td className="px-8 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => handleOpenModal(item)}
                                                className="p-2.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all"
                                                title="Edit Berita"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                title="Hapus Berita"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                            <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all">
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" className="px-8 py-20 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4 border border-slate-100">
                                                <Search size={32} />
                                            </div>
                                            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Tidak ada berita ditemukan</p>
                                            <button
                                                onClick={() => setSearchTerm('')}
                                                className="mt-4 text-primary font-bold text-sm hover:underline"
                                            >
                                                Reset Pencarian
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Editor Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl p-8 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800">{editingItem ? 'Edit Berita' : 'Buat Berita Baru'}</h2>
                                <p className="text-slate-500 text-sm mt-1">Lengkapi informasi di bawah ini untuk menerbitkan berita.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-3 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-2xl transition-all"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Judul Berita</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="Masukkan judul berita yang menarik"
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl text-sm font-bold transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Kategori</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl text-sm font-bold transition-all appearance-none cursor-pointer"
                                    >
                                        <option>Berita Umum</option>
                                        <option>Layanan</option>
                                        <option>Keamanan</option>
                                        <option>Event</option>
                                        <option>Prestasi</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Tanggal Terbit</label>
                                    <input
                                        type="date"
                                        required
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl text-sm font-bold transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">URL Gambar Header</label>
                                <div className="relative group">
                                    <ImageIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="url"
                                        value={formData.image}
                                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                        placeholder="https://example.com/image.jpg"
                                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl text-sm font-bold transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Konten Berita</label>
                                <textarea
                                    required
                                    rows="6"
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    placeholder="Tuliskan berita secara mendalam..."
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl text-sm font-medium transition-all"
                                ></textarea>
                            </div>

                            <div className="pt-4 flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-all"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
                                >
                                    {editingItem ? 'Simpan Perubahan' : 'Terbitkan Berita'}
                                    <Check size={18} className="group-hover:scale-125 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageNews;
