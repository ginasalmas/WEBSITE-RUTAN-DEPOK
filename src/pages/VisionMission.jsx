import { Target, Compass } from 'lucide-react';

const VisionMission = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold text-primary-dark mb-4">Visi & Misi</h1>
                <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
                <p className="text-slate-600 mt-6 text-lg">
                    Landasan operasional kami dalam memberikan pelayanan dan pembinaan.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Visi */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-100 p-4 rounded-full text-primary">
                            <Compass size={48} />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">VISI</h2>
                    <p className="text-center text-slate-700 text-lg font-medium italic">
                        "Terwujudnya Kementerian Hukum dan Hak Asasi Manusia yang Profesional, Akuntabel, Sinergi, Transparan, dan Inovatif."
                    </p>
                </div>

                {/* Misi */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex justify-center mb-6">
                        <div className="bg-amber-100 p-4 rounded-full text-amber-600">
                            <Target size={48} />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">MISI</h2>
                    <ul className="space-y-4 text-slate-700">
                        <li className="flex gap-3">
                            <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">1</span>
                            <span>Mewujudkan peraturan perundang-undangan yang berkualitas.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">2</span>
                            <span>Mewujudkan pelayanan hukum yang berkualitas.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">3</span>
                            <span>Mewujudkan penegakan hukum yang berkualitas.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">4</span>
                            <span>Mewujudkan penghormatan, pemenuhan, dan perlindungan Hak Asasi Manusia.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">5</span>
                            <span>Mewujudkan layanan manajemen administrasi Kementerian Hukum dan Hak Asasi Manusia.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Tata Nilai PASTI */}
            <div className="mt-20 text-center">
                <h2 className="text-3xl font-bold text-primary-dark mb-10">Tata Nilai PASTI</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {['Profesional', 'Akuntabel', 'Sinergi', 'Transparan', 'Inovatif'].map((val, idx) => (
                        <div key={val} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-black text-slate-200 mb-2">0{idx + 1}</div>
                            <h3 className="text-xl font-bold text-primary">{val}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
