// @ts-nocheck
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Sparkles, Globe, Cpu, Zap, Layout, Terminal } from "lucide-react";

/**
 * Floating Icon Component (Emerald Theme)
 */
const FloatingElement = ({ icon: Icon, delay, x, y, color }) => (
    <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 0.4 }}
        transition={{
            y: { duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" },
            opacity: { duration: 1, delay: delay }
        }}
        className="absolute hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/5 backdrop-blur-xl border border-emerald-500/10 z-20 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
        style={{ left: x, top: y }}
    >
        <Icon size={24} className={color} />
    </motion.div>
);

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030502] pt-16 md:pt-20">
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#061d12_0%,#030502_100%)]" />

                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
                        backgroundSize: 'clamp(30px, 5vw, 60px) clamp(30px, 5vw, 60px)'
                    }}
                />

                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-[-20%] left-[15%] w-px h-[140%] bg-emerald-500/20 blur-[80px] rotate-[-12deg]" />
                    <div className="absolute top-[-20%] right-[15%] w-px h-[140%] bg-emerald-500/20 blur-[80px] rotate-[12deg]" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] bg-emerald-500/5 rounded-full blur-[140px]" />
            </div>

            {/* --- FLOATING ELEMENTS (HIDDEN ON MOBILE) --- */}
            <FloatingElement icon={Globe} delay={0.2} x="10%" y="20%" color="text-emerald-400" />
            <FloatingElement icon={Terminal} delay={0.6} x="88%" y="30%" color="text-emerald-300" />
            <FloatingElement icon={Layout} delay={0.4} x="15%" y="70%" color="text-emerald-500" />
            <FloatingElement icon={Zap} delay={0.8} x="85%" y="75%" color="text-emerald-400" />

            {/* --- CONTENT CONTAINER --- */}
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="flex flex-col items-center text-center max-w-5xl mx-auto"
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-6 md:mb-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Sparkles size={10} className="text-emerald-400" />
                            <span className="text-emerald-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] relative z-10">
                                STATUS_SISTEM://<span className="text-white/40 ml-1">AKTIF_v2.0.4</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Pre-title */}
                    <motion.div
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.4em" }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="mb-2 md:mb-4"
                    >
                        <h2 className="text-[9px] md:text-sm font-black text-white/30 uppercase tracking-[0.4em] italic leading-none">
                            Arsitektur Digital <span className="text-white not-italic tracking-normal opacity-80">Masa Depan</span>
                        </h2>
                    </motion.div>

                    {/* Main Title - Responsive Polish */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mb-6 md:mb-8 select-none"
                    >
                        <h1 className="text-[14vw] sm:text-[12vw] md:text-[140px] lg:text-[180px] xl:text-[220px] font-black leading-[0.85] tracking-tighter uppercase italic text-emerald-500 drop-shadow-[0_20px_50px_rgba(16,185,129,0.3)]"
                            style={{
                                WebkitTextStroke: '1px rgba(255,255,255,0.05)',
                                textShadow: `
                                    2px 2px 0px #065f46,
                                    4px 4px 0px #065f46,
                                    6px 6px 0px #064e3b,
                                    12px 12px 0px #000
                                `
                            }}>
                            Leafiess
                        </h1>
                    </motion.div>

                    {/* Hook & Subtext */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="max-w-3xl mx-auto space-y-4 px-4"
                    >
                        <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-[1.1]">
                            Bangun <span className="text-emerald-500">Website Elit</span> & Sistem Manajemen Digital.
                        </h3>
                        <p className="text-neutral-500 text-[10px] md:text-sm lg:text-base font-bold tracking-[0.15em] md:tracking-[0.25em] uppercase leading-relaxed max-w-2xl mx-auto">
                            Transformasi bisnis Anda menjadi otoritas digital dengan desain premium dan rekayasa tanpa latensi.
                        </p>
                    </motion.div>

                    {/* CTAs - Responsive Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mt-10 md:mt-16 w-full sm:w-auto"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => scrollToSection('services')}
                            className="w-full sm:w-auto px-10 md:px-14 py-4.5 bg-emerald-500 text-white font-black text-[10px] md:text-[12px] uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(16,185,129,0.25)] transition-all"
                        >
                            <span>MULAI EKSPLORASI</span>
                            <ChevronRight size={16} strokeWidth={4} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-10 md:px-14 py-4.5 border border-white/10 text-white font-black text-[10px] md:text-[12px] uppercase tracking-widest rounded-2xl backdrop-blur-md transition-all flex items-center justify-center gap-3 relative group"
                        >
                            <a href="https://wa.me/+6285714412716" className="flex items-center gap-3">
                                KONSULTASI GRATIS
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse group-hover:scale-125 transition-transform" />
                            </a>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Professional Touch */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-linear-to-b from-white/0 via-emerald-500/50 to-white/0" />
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.5em] vertical-text">SCROLL</span>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#030502] to-transparent pointer-events-none z-10" />
        </section>
    );
};

export default Hero;
