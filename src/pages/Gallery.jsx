import { useState } from 'react';
import { Image } from 'lucide-react';

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'Semua' },
        { id: 'kerajinan', label: 'Kerajinan Tangan' },
        { id: 'seni', label: 'Seni Lukis' },
        { id: 'kegiatan', label: 'Kegiatan Pembinaan' },
    ];

    const items = [
        { id: 1, category: 'kerajinan', title: 'Miniatur Kapal', image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=Miniatur+Kapal' },
        { id: 2, category: 'seni', title: 'Lukisan Abstrak', image: 'https://placehold.co/400x600/fbbf24/1e3a8a?text=Lukisan' },
        { id: 3, category: 'kegiatan', title: 'Senam Pagi', image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=Senam' },
        { id: 4, category: 'kerajinan', title: 'Dompet Kulit', image: 'https://placehold.co/400x400/fbbf24/1e3a8a?text=Dompet' },
        { id: 5, category: 'kegiatan', title: 'Pengajian Rutin', image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=Pengajian' },
        { id: 6, category: 'seni', title: 'Kaligrafi', image: 'https://placehold.co/400x500/fbbf24/1e3a8a?text=Kaligrafi' },
    ];

    const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-primary-dark mb-4">Galeri Karya Warga Binaan</h1>
                <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
                <p className="text-slate-600 mt-6">
                    Hasil kreativitas dan produktivitas Warga Binaan Pemasyarakatan Rutan Kelas I Depok.
                </p>
            </div>

            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${filter === cat.id
                                ? 'bg-primary text-white'
                                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                    <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{categories.find(c => c.id === item.category)?.label}</span>
                            <h3 className="text-white text-xl font-bold">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
