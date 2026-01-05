import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import announcementsData from '../data/announcements.json';

const AnnouncementDetail = () => {
    const { id } = useParams();
    const announcement = announcementsData.find(a => a.id === parseInt(id));

    if (!announcement) {
        return <div className="text-center py-20">Pengumuman tidak ditemukan</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <Link to="/pengumuman" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors">
                <ArrowLeft size={20} /> Kembali ke Daftar Pengumuman
            </Link>

            <article className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-500">
                        <Calendar size={18} />
                        <span>{announcement.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                        <Tag size={18} />
                        <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-xs font-bold">{announcement.category}</span>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                    {announcement.title}
                </h1>

                <div className="prose prose-lg max-w-none text-slate-700">
                    <p>{announcement.content}</p>
                </div>
            </article>
        </div>
    );
};

export default AnnouncementDetail;
