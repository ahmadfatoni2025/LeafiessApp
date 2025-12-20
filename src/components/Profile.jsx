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
        name: "MARCUS",
        role: "FRONTEND LEAD",
        focus: "UI/UX ARCHITECTURE",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        icon: <Code2 size={16} />,
        color: "#10b981"
    },
    {
        name: "ELARA",
        role: "BACKEND LEAD",
        focus: "SCALABLE SYSTEMS",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        icon: <Database size={16} />,
        color: "#059669"
    },
    {
        name: "ADRIAN",
        role: "HUMAN RESOURCE",
        focus: "TALENT ACQUISITION",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        icon: <Users2 size={16} />,
        color: "#34d399"
    }
];

const Profile = () => {
    return (
        <section id="team" className="py-32 px-4 relative overflow-hidden bg-black text-white">
            {/* Background Effects matching Hero */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[160px] opacity-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)'
                    }}
                />
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto relative z-10">

                {/* --- AGENCY CORE TEAM (Inspired by bottom part image) --- */}
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
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/30 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-[3000ms] pointer-events-none" />
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
