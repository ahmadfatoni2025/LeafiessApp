// @ts-nocheck
import { motion, useScroll, useTransform } from "framer-motion";
import { HiCommandLine } from "react-icons/hi2";
import { AiFillSliders, AiOutlineSlack, AiFillProfile } from "react-icons/ai";
import { Sparkles, Activity, Users, Layout, ChevronRight } from "lucide-react";

/**
 * Hero Component
 * Redesigned to match 'Juniper' aesthetic while maintaining 
 * the Emerald Green brand palette and Indonesian localizations.
 */
const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-[100vh] flex flex-col items-center justify-start overflow-hidden pt-32 pb-20 bg-[#030502]">
            {/* --- BACKGROUND SYSTEM (EMERALD) --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* 1. Deep Space Base */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#061a12_0%,#030502_100%)]" />

                {/* 2. Starfield */}
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: Math.random() }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 2 + Math.random() * 4, repeat: Infinity }}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: Math.random() * 2 + 'px',
                            height: Math.random() * 2 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                        }}
                    />
                ))}

                {/* 3. Emerald Volumetric Light Pillars */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-[-10%] left-[20%] w-[1px] h-[120%] bg-emerald-500/20 blur-[60px] rotate-[-5deg]" />
                    <div className="absolute top-[-10%] left-[50%] w-[1px] h-[120%] bg-emerald-400/10 blur-[80px]" />
                    <div className="absolute top-[-10%] left-[80%] w-[1px] h-[120%] bg-emerald-600/20 blur-[60px] rotate-[5deg]" />
                </div>

                {/* 4. Central Emerald Glow (Static) */}
                <div
                    className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-20 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
                    }}
                />

                {/* 5. Glassy Floating Objects */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[10%] w-32 h-32 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl rotate-45 opacity-20 hidden lg:block"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] right-[10%] w-40 h-40 rounded-full bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-3xl opacity-10 hidden lg:block"
                />
            </div>

            {/* --- CONTENT CONTAINER --- */}
            <motion.div
                style={{ opacity: opacityHero }}
                className="container mx-auto px-6 text-center max-w-5xl relative z-10"
            >
                {/* Intro Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-xl group cursor-default">
                        <Sparkles size={14} className="text-emerald-400 animate-pulse" />
                        <span className="text-emerald-400/80 text-[10px] font-black uppercase tracking-[0.3em]">
                            Leafiess 2.0 <span className="text-emerald-300/40 mx-2">|</span> Pemimpin Website Digital
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading with Metallic Sheen */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-[140px] font-black tracking-tighter leading-[0.8] mb-8 select-none italic uppercase">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-[#cbd5e1] to-[#64748b] drop-shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
                            Leafiess.
                        </span>
                    </h1>
                    <p className="text-2xl md:text-5xl font-light text-slate-300 tracking-tight leading-tight">
                        Solusi Manajemen <span className="text-emerald-400 font-bold italic">Kebutuhan Bisnis</span>
                    </p>
                </motion.div>

                {/* Sub-text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-500 text-lg max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                >
                    Eksplorasi ekosistem digital modular kami untuk menyederhanakan operasional bisnis dan memantau progres Anda dengan efisiensi tinggi.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16,185,129,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('projects')}
                        className="group relative px-10 py-5 rounded-full bg-emerald-600 text-black font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10 flex items-center gap-3 text-white">
                            Mulai Sekarang
                            <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center">
                                <ChevronRight size={14} className="text-white" />
                            </div>
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 rounded-full border border-emerald-600 text-emerald-400 font-black text-xs uppercase tracking-[0.2em] hover:text-white transition-all backdrop-blur-md flex items-center gap-3"
                    >
                        Tonton Demo
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </motion.button>
                </motion.div>

                {/* Feature Pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mb-32"
                >
                    {[
                        { icon: <AiFillSliders />, text: "Kustomisasi Website" },
                        { icon: <AiOutlineSlack />, text: "Responsif & Optimasi" },
                        { icon: <HiCommandLine />, text: "Modern UI/UX" },
                        { icon: <AiFillProfile />, text: "Dukungan 24/7" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-emerald-400 transition-colors group cursor-default">
                            <span className="text-emerald-500/20 group-hover:text-emerald-400 transition-colors text-lg">{feature.icon}</span>
                            {feature.text}
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* --- DATA CARDS (Bottom Section) --- */}
            {/*  */}

            {/* Bottom Glow for Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-linear-to-t from-[#030502] to-transparent pointer-events-none z-0" />
        </section>
    );
};

export default Hero;