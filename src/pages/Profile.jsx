import { Users, History, Award } from 'lucide-react';

const Profile = () => {
    return (
        <div className="container mx-auto px-4 py-12 space-y-16">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-primary-dark mb-4">Profil Instansi</h1>
                <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            </div>

            {/* History Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <History className="text-accent" size={28} />
                        <h2 className="text-2xl font-bold text-slate-800">Sejarah Singkat</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Rutan Kelas I Depok berdiri sejak tahun 2000-an sebagai respon atas kebutuhan tempat penahanan yang memadai di wilayah Depok dan sekitarnya. Awalnya merupakan cabang dari Rutan Salemba, namun seiring berkembangnya wilayah administratif Kota Depok, statusnya ditingkatkan menjadi Rutan Kelas I.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Gedung Rutan Kelas I Depok diresmikan penggunaannya untuk menampung tahanan yang sedang menjalani proses peradilan di wilayah hukum Kota Depok. Dengan kapasitas yang cukup besar, Rutan ini terus berbenah untuk memberikan pelayanan terbaik.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-primary/10 rounded-xl -z-10 transform rotate-3"></div>
                    <img
                        src="https://placehold.co/600x400/1e3a8a/ffffff?text=Gedung+Rutan"
                        alt="Sejarah Rutan"
                        className="rounded-xl shadow-lg w-full"
                    />
                </div>
            </section>

            {/* Structure Section */}
            <section>
                <div className="flex items-center gap-3 mb-8 justify-center">
                    <Users className="text-accent" size={28} />
                    <h2 className="text-2xl font-bold text-slate-800">Struktur Organisasi</h2>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                    <img
                        src="https://placehold.co/1200x600/f1f5f9/1e3a8a?text=Bagan+Struktur+Organisasi"
                        alt="Struktur Organisasi"
                        className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-slate-500 mt-4 italic">Bagan Struktur Organisasi Rutan Kelas I Depok</p>
                </div>
            </section>

            {/* Head Profile Section */}
            <section className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
                <div className="md:flex">
                    <div className="md:w-1/3 bg-primary-dark relative min-h-[300px]">
                        <img
                            src="https://placehold.co/400x500/1e3a8a/ffffff?text=Kepala+Rutan"
                            alt="Kepala Rutan"
                            className="absolute inset-0 w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">Nama Kepala</h3>
                            <p className="text-accent font-medium">Kepala Rutan Kelas I Depok</p>
                        </div>
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="text-accent" size={28} />
                            <h2 className="text-2xl font-bold text-slate-800">Profil Pimpinan</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Lahir di [Kota], [Tanggal]. Menjabat sebagai Kepala Rutan Kelas I Depok sejak [Tahun]. Beliau memiliki visi untuk menjadikan Rutan Depok sebagai instansi yang humanis dan berintegritas.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-slate-800 mb-2">Pendidikan</h4>
                                <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                                    <li>S1 Hukum - Universitas X</li>
                                    <li>S2 Manajemen - Universitas Y</li>
                                    <li>Akademi Ilmu Pemasyarakatan</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-2">Riwayat Jabatan</h4>
                                <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                                    <li>Kepala Rutan Kelas IIB X</li>
                                    <li>Kepala LPKA Kelas I Y</li>
                                    <li>Kabid Pembinaan Lapas Z</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
