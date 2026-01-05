import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import newsData from '../data/news.json';

const NewsDetail = () => {
    const { id } = useParams();
    const newsItem = newsData.find(n => n.id === parseInt(id));

    if (!newsItem) {
        return <div className="text-center py-20">Berita tidak ditemukan</div>;
    }

    // Related news (exclude current)
    const relatedNews = newsData.filter(n => n.id !== parseInt(id)).slice(0, 2);

    return (
        <div className="container mx-auto px-4 py-12">
            <Link to="/berita" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors">
                <ArrowLeft size={20} /> Kembali ke Berita
            </Link>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <img
                            src={newsItem.image}
                            alt={newsItem.title}
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-6 text-sm text-slate-500 mb-6 border-b border-slate-100 pb-6">
                                <span className="flex items-center gap-2"><Calendar size={16} /> {newsItem.date}</span>
                                <span className="flex items-center gap-2"><User size={16} /> {newsItem.author}</span>
                                <button className="ml-auto flex items-center gap-2 text-primary hover:text-primary-dark">
                                    <Share2 size={16} /> Share
                                </button>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                                {newsItem.title}
                            </h1>

                            <div className="prose prose-lg max-w-none text-slate-700">
                                <p className="lead font-medium text-slate-900 mb-6">{newsItem.summary}</p>
                                <p>{newsItem.content}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Sidebar / Related News */}
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-accent pl-3">Berita Lainnya</h3>
                        <div className="space-y-6">
                            {relatedNews.map(item => (
                                <div key={item.id} className="group">
                                    <Link to={`/berita/${item.id}`} className="block">
                                        <div className="overflow-hidden rounded-lg mb-3">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <h4 className="font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 mb-1">
                                            {item.title}
                                        </h4>
                                        <span className="text-xs text-slate-500">{item.date}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
