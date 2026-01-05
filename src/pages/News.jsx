import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import newsData from '../data/news.json';

const News = () => {
    const [news] = useState(newsData);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-primary-dark mb-4">Berita Terkini</h1>
                <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((item) => (
                    <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                                <span className="flex items-center gap-1"><User size={14} /> {item.author}</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 hover:text-primary transition-colors">
                                <Link to={`/berita/${item.id}`}>{item.title}</Link>
                            </h2>
                            <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                                {item.summary}
                            </p>
                            <Link to={`/berita/${item.id}`} className="inline-block text-center bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold py-2 px-4 rounded-lg transition-colors mt-auto">
                                Baca Selengkapnya
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-12 text-center">
                <button className="bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 font-bold py-2 px-8 rounded-full transition-colors">
                    Muat Lebih Banyak
                </button>
            </div>
        </div>
    );
};

export default News;
