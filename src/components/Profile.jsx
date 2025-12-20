import { motion } from 'framer-motion';
import {
    Cpu,
    Fingerprint,
    ArrowUpRight,
    Zap,
    Target,
    Activity,
    Terminal,
    Code2,
    Database,
    Users2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const teamMembers = [
    {
        name: "Tony",
        role: "FRONTEND LEAD",
        focus: "UI/UX ARCHITECTURE",
        img: "https://i.pinimg.com/736x/2b/f0/b0/2bf0b0feecc5c890ea47f90c7c7c775d.jpg",
        icon: <Code2 size={16} />,
        color: "#10b981"
    },
    {
        name: "Manyu",
        role: "BACKEND LEAD",
        focus: "SCALABLE SYSTEMS",
        img: "https://i.pinimg.com/736x/09/e4/0a/09e40a3f556058ae2f57ba22bce36f12.jpg",
        icon: <Database size={16} />,
        color: "#059669"
    },
    {
        name: "candra",
        role: "HUMAN RESOURCE",
        focus: "TALENT ACQUISITION",
        img: "https://i.pinimg.com/1200x/d3/a2/38/d3a238f0e817a045c2002f14457eddc0.jpg",
        icon: <Users2 size={16} />,
        color: "#34d399"
    }
];

const Profile = () => {
    return (
        <section id="profile" className="py-32 px-4 relative overflow-hidden bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-400">
            {/* Background Effects matching Hero */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[160px] opacity-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)'
                    }}
                />
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-size-[50px_50px]" />
                <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* --- ELEGANT H1 HEADER --- */}
                <div className="flex flex-col mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => <div key={i} className="w-8 h-1 bg-emerald-500 rounded-full" />)}
                        </div>
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-emerald-500/60">Elite_Profiles//2024</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-[120px] font-[1000] italic tracking-tighter leading-[0.85] text-white uppercase"
                    >
                        Our Core Team<span className="text-emerald-500">.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-neutral-500 text-lg md:text-xl font-medium mt-8 max-w-2xl border-l border-emerald-500/30 pl-8"
                    >
                        Dengan pendekatan rekayasa yang terukur, kami membangun ekosistem digital berperforma tinggi yang didukung oleh tim arsitek frontend, engineer backend, dan talenta spesialis untuk menghasilkan solusi yang stabil, scalable, dan berkelanjutan.
                    </motion.p>
                </div>

                {/* --- AGENCY CORE TEAM --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative h-[600px] rounded-[32px] overflow-hidden border border-white/5 bg-neutral-900/40 cursor-pointer"
                        >
                            {/* Member Image */}
                            <img
                                src={member.img}
                                alt={member.name}
                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-[0.7] group-hover:scale-105"
                            />

                            {/* Hero-style Overlays */}
                            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black pointer-events-none" />
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                                style={{ background: `radial-gradient(circle at center, ${member.color}, transparent)` }}
                            />

                            {/* Card Content UI */}
                            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-emerald-500">
                                        {member.icon}
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Status</span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">DEPLOYED://</span>
                                    </div>
                                </div>

                                <div className="relative">
                                    {/* Tech Lines */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <Zap size={14} className="text-emerald-500/50" />
                                        <div className="h-px flex-1 bg-white/10" />
                                        <Activity size={14} className="text-white/20" />
                                    </div>

                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-2 block">{member.role}</span>
                                    <h3 className="text-5xl font-black italic tracking-tighter text-white uppercase leading-none mb-4 group-hover:text-emerald-400 transition-colors">
                                        {member.name}<span className="text-emerald-500">!</span>
                                    </h3>

                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                                        <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{member.focus}</p>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                                            <ArrowUpRight size={14} className="group-hover:text-black transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scanner Line Effect */}
                            <div className="absolute top-0 left-0 w-full h-px bg-emerald-500/30 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-3000 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Global Holographic Scanlines */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_3px)]" />
        </section>
    );
};

export default Profile;
