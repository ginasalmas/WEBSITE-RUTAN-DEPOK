import React, { useState } from 'react';
import { ShieldCheck, Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/admin';

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Mock authentication logic
        setTimeout(() => {
            if (formData.username === 'admin' && formData.password === 'admin') {
                localStorage.setItem('admin_token', 'mock_token');
                navigate(from, { replace: true });
            } else {
                setError('Username atau password salah.');
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>

            <div className="w-full max-w-[420px] relative z-10">
                <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#0F172A] p-10 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -mr-12 -mt-12"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl -ml-12 -mb-12"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 mb-4 shadow-2xl shadow-primary/20 group hover:scale-105 transition-transform duration-500">
                                <ShieldCheck size={40} className="text-white group-hover:text-gold-500 transition-colors" />
                            </div>
                            <h1 className="text-2xl font-black text-white tracking-tight">ADMIN PORTAL</h1>
                            <p className="text-gold-500 text-[10px] font-black tracking-[0.4em] uppercase opacity-70 mt-1">Rutan Kelas I Depok</p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="p-10">
                        <h2 className="text-xl font-bold text-slate-800 mb-2">Selamat Datang</h2>
                        <p className="text-slate-500 text-sm mb-8">Silakan masuk untuk mengelola portal website.</p>

                        <form onSubmit={handleLogin} className="space-y-6">
                            {error && (
                                <div className="bg-red-50 border border-red-100 text-red-600 text-[13px] font-bold p-4 rounded-2xl animate-in slide-in-from-top-2">
                                    {error}
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Username</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                                    <input
                                        type="text"
                                        required
                                        value={formData.username}
                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                        placeholder="Masukkan username"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl text-sm font-medium transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
                                    <button type="button" className="text-xs font-bold text-primary hover:underline">Lupa password?</button>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        placeholder="Masukkan password"
                                        className="w-full pl-12 pr-12 py-4 bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl text-sm font-medium transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#0F172A] hover:bg-primary text-white font-bold py-4 rounded-2xl shadow-xl shadow-slate-200 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group"
                            >
                                {isLoading ? (
                                    <Loader2 size={18} className="animate-spin" />
                                ) : (
                                    <>
                                        Masuk Sekarang
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all"></span>
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-10 text-center">
                            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Pasti Berdampak</p>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-8 text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                    &copy; 2025 Rutan Kelas I Depok
                </p>
            </div>
        </div>
    );
};

export default Login;
