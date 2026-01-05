import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-10 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Column 1: Identity */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">RUTAN KELAS I DEPOK</h3>
                        <p className="text-sm mb-4 leading-relaxed">
                            Melayani dengan Hati, Berintegritas, dan Profesional dalam membina Warga Binaan Pemasyarakatan.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Contact */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Hubungi Kami</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                                <span>Jl. M. Nasir, Cilodong, Kota Depok, Jawa Barat 16413</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent shrink-0" />
                                <span>(021) 1234-5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent shrink-0" />
                                <span>humas@rutandepok.go.id</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Tautan Terkait</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://kemenkumham.go.id" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Kemenkumham RI</a></li>
                            <li><a href="https://ditjenpas.go.id" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Ditjen Pemasyarakatan</a></li>
                            <li><a href="https://lapor.go.id" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Layanan Aspirasi (LAPOR!)</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Rutan Kelas I Depok. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
