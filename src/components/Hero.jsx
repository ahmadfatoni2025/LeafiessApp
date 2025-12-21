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

    // Stagger settings
    const baseDelay = 2.4; // Starts right as loading screen is fully gone

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030502] pt-16 md:pt-20">
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: baseDelay - 1 }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#061d12_0%,#030502_100%)]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.03 }}
                    transition={{ duration: 2, delay: baseDelay - 0.5 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
                        backgroundSize: 'clamp(30px, 5vw, 60px) clamp(30px, 5vw, 60px)'
                    }}
                />

                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "140%", opacity: 1 }}
                        transition={{ duration: 2, delay: baseDelay, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-[-20%] left-[15%] w-px bg-emerald-500/20 blur-[80px] -rotate-12"
                    />
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "140%", opacity: 1 }}
                        transition={{ duration: 2, delay: baseDelay, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-[-20%] right-[15%] w-px bg-emerald-500/20 blur-[80px] rotate-12"
                    />
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 3, delay: baseDelay - 1, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] bg-emerald-500/5 rounded-full blur-[140px]"
                />
            </div>

            {/* --- FLOATING ELEMENTS (HIDDEN ON MOBILE) --- */}
            <FloatingElement icon={Globe} delay={baseDelay + 0.2} x="10%" y="20%" color="text-emerald-400" />
            <FloatingElement icon={Terminal} delay={baseDelay + 0.6} x="88%" y="30%" color="text-emerald-300" />
            <FloatingElement icon={Layout} delay={baseDelay + 0.4} x="15%" y="70%" color="text-emerald-500" />
            <FloatingElement icon={Zap} delay={baseDelay + 0.8} x="85%" y="75%" color="text-emerald-400" />

            {/* --- CONTENT CONTAINER --- */}
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: baseDelay, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-6 md:mb-10"
                    >
                        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Sparkles size={10} className="text-emerald-400" />
                            <span className="text-emerald-400 text-[7px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] relative z-10">
                                Tamilan elegan & modern, serta <span className="text-white/40 ml-1">Automasi Sistem</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Pre-title */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: baseDelay + 0.1, ease: "easeOut" }}
                        className="mb-2 md:mb-4"
                    >
                        <h2 className="text-[8px] md:text-sm font-black text-white/30 uppercase tracking-[0.3em] md:tracking-[0.4em] italic leading-none">
                            Arsitektur Digital <span className="text-white not-italic tracking-normal opacity-80">Masa Depan</span>
                        </h2>
                    </motion.div>

                    {/* Main Title - snappier scale entrance */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: baseDelay + 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mb-6 md:mb-8 select-none"
                    >
                        <h1 className="text-[18vw] sm:text-[15vw] md:text-[140px] lg:text-[180px] xl:text-[220px] font-black leading-[0.85] tracking-tighter uppercase italic text-emerald-500"
                            style={{
                                WebkitTextStroke: '1px rgba(255,255,255,0.05)',
                                textShadow: '4px 4px 0px #000'
                            }}>
                            Leafiess
                        </h1>
                    </motion.div>

                    {/* Hook & Subtext */}
                    <div className="max-w-3xl mx-auto space-y-4 px-2">
                        <motion.h3
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: baseDelay + 0.3, ease: "easeOut" }}
                            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-[1.1]"
                        >
                            Bangun <span className="text-emerald-500">Website Elit</span> & Sistem Manajemen Digital.
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: baseDelay + 0.4, ease: "easeOut" }}
                            className="text-neutral-500 text-[9px] md:text-sm lg:text-base font-bold tracking-widest md:tracking-[0.25em] uppercase leading-relaxed max-w-2xl mx-auto"
                        >
                            Transformasi bisnis Anda menjadi otoritas digital dengan desain premium dan rekayasa tanpa latensi.
                        </motion.p>
                    </div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: baseDelay + 0.5, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mt-10 md:mt-16 w-full px-4 sm:px-0"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => scrollToSection('services')}
                            className="w-full sm:w-auto px-8 md:px-14 py-4 md:py-4.5 bg-emerald-500 text-white font-black text-[10px] md:text-[12px] uppercase tracking-widest rounded-xl md:rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(16,185,129,0.25)] transition-all"
                        >
                            <span>MULAI EKSPLORASI</span>
                            <ChevronRight size={16} strokeWidth={4} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 md:px-14 py-4 md:py-4.5 border border-white/10 text-white font-black text-[10px] md:text-[12px] uppercase tracking-widest rounded-xl md:rounded-2xl backdrop-blur-md transition-all flex items-center justify-center gap-3 relative group"
                        >
                            <a href="https://wa.me/+6285714412716" className="flex items-center gap-3">
                                KONSULTASI GRATIS
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse group-hover:scale-125 transition-transform" />
                            </a>
                        </motion.button>
                    </motion.div>
                </div>
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
