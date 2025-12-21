import { motion } from 'framer-motion';
import {
    Twitter,
    Instagram,
    Github,
    Linkedin,
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
    MoveRight,
    ArrowRight
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        layanan: [
            { name: 'Pengembangan Web', href: '#' },
            { name: 'Solusi Mobile', href: '#' },
            { name: 'Desain UI/UX', href: '#' },
            { name: 'Manajemen Sistem', href: '#' }
        ],
        perusahaan: [
            { name: 'Tentang Kami', href: '#' },
            { name: 'Bergabung dengan Tim Kami', href: '#' },
            { name: 'Kisah Sukses', href: '#' },
            { name: 'Press Kit', href: '#' }
        ],
        sumber: [
            { name: 'Dokumentasi', href: '#' },
            { name: 'Referensi API', href: '#' },
            { name: 'Pusat Privasi', href: '#' },
            { name: 'Matriks Keamanan', href: '#' }
        ]
    };

    const socials = [
        { name: 'Twitter', icon: <Twitter size={20} />, href: '#', handles: '@leafiess_dev' },
        { name: 'Instagram', icon: <Instagram size={20} />, href: '#', handles: '@leafiess_studio' },
        { name: 'Github', icon: <Github size={20} />, href: '#', handles: 'leafiess-lab' },
        { name: 'Linkedin', icon: <Linkedin size={20} />, href: '#', handles: 'leafiess-agency' }
    ];

    return (
        <footer className="relative bg-black pt-32 pb-12 overflow-hidden border-t border-white/5">
            {/* Background Texture & Glow - Matching Hero */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[600px] blur-[80px] md:blur-[140px] opacity-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 60%)'
                    }}
                />
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-size--[50px_50px] md:bg-size-[100px_100px]" />

                {/* Massive Background Brand Text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
                    <h1 className="text-[35vw] md:text-[28vw] font-black leading-none m-0 tracking-tighter text-white opacity-[0.02] translate-y-1/3">
                        LEAFIESS
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* --- MIDDLE SECTION: Social Grid Bar --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl mb-20 md:mb-32 overflow-hidden group">
                    {socials.map((social, i) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center justify-between p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-white/10 hover:bg-emerald-500/5 transition-all duration-500 relative group/link"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-400 group-hover/link:text-emerald-400 transition-colors">
                                    {social.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-black tracking-tighter text-base md:text-lg uppercase">{social.name}</span>
                                    <span className="text-[10px] text-neutral-500 font-bold tracking-widest">{social.handles}</span>
                                </div>
                            </div>
                            <ArrowRight size={18} className="text-neutral-600 group-hover/link:text-emerald-500 transform group-hover/link:translate-x-1 transition-all md:w-5 md:h-5" />

                            {/* Hover accent line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 group-hover/link:w-full transition-all duration-700" />
                        </motion.a>
                    ))}
                </div>

                {/* --- MAIN FOOTER SECTION: Pine Connector Inspired --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-20 md:mb-24">
                    {/* Brand Meta */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5"
                    >
                        <div className="flex items-center gap-3 mb-6 md:mb-8 group/logo">
                            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center group-hover/logo:rotate-12 transition-transform">
                                <span className="text-black font-black text-xl">L</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                                Leafiess<span className="text-emerald-500">.</span>
                            </h2>
                        </div>
                        <p className="text-neutral-400 text-sm md:text-lg leading-relaxed max-w-md mb-8 md:mb-10 font-medium">
                            Agensi kreatif elit yang berfokus pada pembuatan solusi sistem manajemen digital
                            dan web premium yang berkembang seiring dengan kebutuhan bisnis Anda. Dukungan 24/7
                            dengan eksekusi tanpa latensi.
                        </p>

                        <motion.button
                            whileHover={{ x: 10 }}
                            className="w-full sm:w-auto bg-emerald-500 text-black px-8 py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center sm:justify-start gap-4 group/btn shadow-[0_15px_30px_rgba(16,185,129,0.2)]"
                        >
                            Hubungi Dukungan
                            <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center">
                                <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition-transform" />
                            </div>
                        </motion.button>

                        <p className="mt-4 text-[9px] md:text-xs text-neutral-500 font-bold uppercase tracking-[0.2em]">Semua pertanyaan dijawab dalam 24 jam.</p>
                    </motion.div>

                    {/* Links Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
                    >
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-8">{title}</h3>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-neutral-400 hover:text-emerald-400 font-bold text-sm tracking-wide transition-colors flex items-center gap-2 group/item">
                                                <div className="w-0 h-[1.5px] bg-emerald-500 group-hover/item:w-3 transition-all" />
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* --- BOTTOM BAR: Dopler/Pine Hybrid --- */}
                <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <span className="text-neutral-600 text-[10px] font-black uppercase tracking-[0.4em]">© {currentYear} Leafiess studio inc.</span>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-neutral-600 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-colors">Privasi</a>
                            <a href="#" className="text-neutral-600 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-colors">Syarat & Ketentuan</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 w-full lg:w-auto">
                        <div className="relative group w-full lg:w-[400px]">
                            <input
                                type="email"
                                placeholder="EMAIL@ANDA.COM"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-black text-white uppercase tracking-widest focus:outline-none focus:border-emerald-500 transition-all"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-emerald-500 text-black px-6 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all">
                                Berlangganan
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;