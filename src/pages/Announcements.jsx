import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import announcementsData from '../data/announcements.json';

const Announcements = () => {
    const [announcements] = useState(announcementsData);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-primary-dark mb-4">Pengumuman</h1>
                <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
                {announcements.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                                    <Calendar size={16} />
                                    <span>{item.date}</span>
                                    <span className="bg-blue-100 text-primary px-2 py-0.5 rounded-full text-xs font-bold">{item.category}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600 line-clamp-2">{item.content}</p>
                            </div>
                            <Link
                                to={`/pengumuman/${item.id}`}
                                className="shrink-0 flex items-center gap-1 text-primary font-bold hover:text-primary-dark transition-colors self-start md:self-center"
                            >
                                Detail <ChevronRight size={20} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;
