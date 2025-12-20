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
        services: [
            { name: 'Web Development', href: '#' },
            { name: 'Mobile Solutions', href: '#' },
            { name: 'UI/UX Design', href: '#' },
            { name: 'System Management', href: '#' }
        ],
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Join Our Team', href: '#' },
            { name: 'Success Stories', href: '#' },
            { name: 'Press Kit', href: '#' }
        ],
        resources: [
            { name: 'Documentation', href: '#' },
            { name: 'API Reference', href: '#' },
            { name: 'Privacy Center', href: '#' },
            { name: 'Security Matrix', href: '#' }
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
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] blur-[140px] opacity-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 60%)'
                    }}
                />
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-size-[100px_100px]" />

                {/* Massive Background Brand Text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
                    <h1 className="text-[28vw] font-black leading-none m-0 tracking-tighter text-white opacity-[0.03] translate-y-1/3">
                        LEAFIESS
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* --- MIDDLE SECTION: Social Grid Bar --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl mb-32 overflow-hidden group">
                    {socials.map((social, i) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center justify-between p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-emerald-500/5 transition-all duration-500 relative group/link"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-400 group-hover/link:text-emerald-400 transition-colors">
                                    {social.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-black tracking-tighter text-lg uppercase">{social.name}</span>
                                    <span className="text-xs text-neutral-500 font-bold tracking-widest">{social.handles}</span>
                                </div>
                            </div>
                            <ArrowRight size={20} className="text-neutral-600 group-hover/link:text-emerald-500 transform group-hover/link:translate-x-1 transition-all" />

                            {/* Hover accent line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 group-hover/link:w-full transition-all duration-700" />
                        </motion.a>
                    ))}
                </div>

                {/* --- MAIN FOOTER SECTION: Pine Connector Inspired --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Meta */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5"
                    >
                        <div className="flex items-center gap-3 mb-8 group/logo">
                            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center group-hover/logo:rotate-12 transition-transform">
                                <span className="text-black font-black text-xl">L</span>
                            </div>
                            <h2 className="text-3xl font-black text-white tracking-tighter">
                                Leafiess<span className="text-emerald-500">.</span>
                            </h2>
                        </div>
                        <p className="text-neutral-400 text-lg leading-relaxed max-w-md mb-10 font-medium">
                            An elite creative agency focused on crafting premium digital management
                            and web solutions that scale with your business needs. 24/7 support
                            with latency-free execution.
                        </p>

                        <motion.button
                            whileHover={{ x: 10 }}
                            className="bg-emerald-500 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-4 group/btn shadow-[0_15px_30px_rgba(16,185,129,0.2)]"
                        >
                            Contact Support
                            <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center">
                                <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition-transform" />
                            </div>
                        </motion.button>

                        <p className="mt-4 text-xs text-neutral-500 font-bold uppercase tracking-[0.2em]">All queries answered within 24 hours.</p>
                    </motion.div>

                    {/* Links Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-12"
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
                            <a href="#" className="text-neutral-600 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-colors">Privacy</a>
                            <a href="#" className="text-neutral-600 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-colors">Terms</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 w-full lg:w-auto">
                        <div className="relative group w-full lg:w-[400px]">
                            <input
                                type="email"
                                placeholder="YOUR@EMAIL.COM"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-black text-white uppercase tracking-widest focus:outline-none focus:border-emerald-500 transition-all"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-emerald-500 text-black px-6 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;