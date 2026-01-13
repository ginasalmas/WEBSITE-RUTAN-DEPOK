import React from 'react';
import {
    Users,
    Newspaper,
    Megaphone,
    Eye,
    TrendingUp,
    Clock,
    ArrowRight
} from 'lucide-react';

const DashboardHome = () => {
    const stats = [
        { label: 'Total Berita', value: '24', icon: <Newspaper size={24} />, color: 'bg-blue-500', trend: '+12%' },
        { label: 'Pengumuman Aktif', value: '5', icon: <Megaphone size={24} />, color: 'bg-gold-500', trend: 'Stable' },
        { label: 'Total Kunjungan', value: '1,280', icon: <Eye size={24} />, color: 'bg-green-500', trend: '+18%' },
        { label: 'Pengaduan Baru', value: '3', icon: <Clock size={24} />, color: 'bg-red-500', trend: '-5%' },
    ];

    const recentActivities = [
        { id: 1, action: 'Berita baru ditambahkan', detail: 'Kunjungan Kerja Kakanwil Kemenkumham Jawa Barat', time: '2 jam yang lalu', user: 'Admin 1' },
        { id: 2, action: 'Pengumuman diperbarui', detail: 'Jadwal Kunjungan Hari Raya', time: '5 jam yang lalu', user: 'Admin 2' },
        { id: 3, action: 'Gambar galeri diunggah', detail: 'Kegiatan Pembinaan Kemandirian WBP', time: 'Kemarin', user: 'Admin 1' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Selamat Datang, Admin</h1>
                    <p className="text-slate-500 mt-1 font-medium">Berikut adalah rangkuman aktivitas website Rutan Depok hari ini.</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-slate-600">Sistem Berjalan Normal</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-500">
                            {React.cloneElement(stat.icon, { size: 80 })}
                        </div>
                        <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-inherit`}>
                            {stat.icon}
                        </div>
                        <div className="relative z-10">
                            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
                            <div className="flex items-end gap-3 mt-2">
                                <h3 className="text-3xl font-black text-slate-800">{stat.value}</h3>
                                <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : stat.trend === 'Stable' ? 'bg-slate-50 text-slate-500' : 'bg-red-50 text-red-600'}`}>
                                    {stat.trend}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                        <h3 className="font-bold text-slate-800 flex items-center gap-2">
                            <TrendingUp size={18} className="text-primary" />
                            Aktivitas Terbaru
                        </h3>
                        <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                            Lihat Semua <ArrowRight size={14} />
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            {recentActivities.map((activity) => (
                                <div key={activity.id} className="flex gap-4 group">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <Clock size={18} />
                                        </div>
                                        {activity.id !== recentActivities.length && (
                                            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-6 bg-slate-100"></div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-700">{activity.action}</h4>
                                        <p className="text-xs text-slate-500 mt-0.5">{activity.detail}</p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{activity.time}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                                            <span className="text-[10px] text-primary font-bold uppercase tracking-wider">{activity.user}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Tips / System Info */}
                <div className="bg-[#0F172A] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1.5 h-6 bg-gold-500 rounded-full"></div>
                            Informasi Sistem
                        </h3>
                        <div className="space-y-6">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-1">Penyimpanan</p>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-sm font-bold">2.4 GB / 10 GB</span>
                                    <span className="text-[10px] text-slate-400">24% digunakan</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[24%]" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pintasan Cepat</p>
                                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group">
                                    <span className="text-sm font-medium">Buat Berita Baru</span>
                                    <ArrowRight size={16} className="text-slate-600 group-hover:text-primary transition-all" />
                                </button>
                                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group">
                                    <span className="text-sm font-medium">Upload Media</span>
                                    <ArrowRight size={16} className="text-slate-600 group-hover:text-primary transition-all" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
