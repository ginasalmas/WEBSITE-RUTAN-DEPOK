import { useState } from 'react';
import { FileText, Clock, Phone, Download } from 'lucide-react';
import clsx from 'clsx';

const PublicInfo = () => {
    const [activeTab, setActiveTab] = useState('layanan');

    const tabs = [
        { id: 'layanan', label: 'Layanan Publik', icon: <Clock size={18} /> },
        { id: 'sop', label: 'SOP & Regulasi', icon: <FileText size={18} /> },
        { id: 'dokumen', label: 'Unduh Dokumen', icon: <Download size={18} /> },
        { id: 'kontak', label: 'Kontak Layanan', icon: <Phone size={18} /> },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-primary-dark mb-4">Informasi Publik</h1>
                <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={clsx(
                            "flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all",
                            activeTab === tab.id
                                ? "bg-primary text-white shadow-lg scale-105"
                                : "bg-white text-slate-600 hover:bg-slate-100"
                        )}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg min-h-[400px]">
                {activeTab === 'layanan' && (
                    <div className="space-y-8 animate-fade-in">
                        <h2 className="text-2xl font-bold text-slate-800 border-b pb-4">Jam Layanan Kunjungan</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-primary text-lg mb-4">Kunjungan Tatap Muka</h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex justify-between border-b border-blue-200 pb-2">
                                        <span>Senin - Kamis</span>
                                        <span className="font-bold">09.00 - 15.00 WIB</span>
                                    </li>
                                    <li className="flex justify-between border-b border-blue-200 pb-2">
                                        <span>Jumat</span>
                                        <span className="font-bold">09.00 - 11.30 WIB</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Sabtu</span>
                                        <span className="font-bold">09.00 - 13.00 WIB</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                <h3 className="font-bold text-amber-700 text-lg mb-4">Penitipan Barang</h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex justify-between border-b border-amber-200 pb-2">
                                        <span>Setiap Hari</span>
                                        <span className="font-bold">08.00 - 16.00 WIB</span>
                                    </li>
                                    <li className="text-sm italic mt-4 text-amber-800">
                                        *Wajib membawa identitas diri (KTP/SIM) yang masih berlaku.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'sop' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-2xl font-bold text-slate-800 border-b pb-4">Standar Operasional Prosedur</h2>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white p-2 rounded shadow-sm text-primary font-bold">0{i}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">SOP Layanan Kunjungan {i}</h4>
                                            <p className="text-sm text-slate-500">Update terakhir: 10 Jan 2025</p>
                                        </div>
                                    </div>
                                    <button className="text-primary font-bold text-sm hover:underline">Lihat Detail</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'dokumen' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-2xl font-bold text-slate-800 border-b pb-4">Dokumen Publik</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {['Renstra 2025-2029', 'Laporan Kinerja 2024', 'DIPA 2025', 'Maklumat Pelayanan'].map((doc, i) => (
                                <div key={i} className="border border-slate-200 p-4 rounded-xl flex items-center justify-between hover:border-primary transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <FileText className="text-slate-400 group-hover:text-primary" />
                                        <span className="font-medium text-slate-700">{doc}</span>
                                    </div>
                                    <button className="bg-slate-100 p-2 rounded-full text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Download size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'kontak' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-2xl font-bold text-slate-800 border-b pb-4">Kontak Layanan Pengaduan</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-slate-600">
                                    Jika Anda memiliki pertanyaan atau keluhan terkait layanan kami, silakan hubungi kontak di bawah ini:
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-3 rounded-full text-green-600"><Phone size={20} /></div>
                                    <div>
                                        <p className="text-xs text-slate-500">WhatsApp Center</p>
                                        <p className="font-bold text-slate-800">0812-3456-7890</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FileText size={20} /></div>
                                    <div>
                                        <p className="text-xs text-slate-500">Email Pengaduan</p>
                                        <p className="font-bold text-slate-800">pengaduan@rutandepok.go.id</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl text-center">
                                <h3 className="font-bold text-slate-800 mb-2">Jam Operasional Layanan Pengaduan</h3>
                                <p className="text-slate-600 mb-4">Senin - Jumat (08.00 - 16.00 WIB)</p>
                                <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary-dark transition-colors w-full">
                                    Chat WhatsApp Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PublicInfo;
