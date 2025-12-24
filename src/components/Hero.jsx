// @ts-nocheck
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Globe, Cpu, Zap, Layout, Terminal, ArrowRight, Star, Target, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

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

    // State untuk mengontrol animasi setelah loading screen
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Setelah loading screen selesai
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 2400); // Menyesuaikan dengan durasi loading screen

        return () => clearTimeout(timer);
    }, []);

    // Stagger settings
    const baseDelay = isLoaded ? 0 : 2.4;

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030502] pt-16 md:pt-20">
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Background gradient */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: baseDelay - 1 }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#061d12_0%,#030502_100%)]"
                />

                {/* Grid pattern */}
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

                {/* Diagonal light beams */}
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

                {/* Central glow effect */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 3, delay: baseDelay - 1, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] bg-emerald-500/5 rounded-full blur-[140px]"
                />

                {/* Animated particles effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2, delay: baseDelay + 0.5 }}
                    className="absolute inset-0"
                >
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-[1px] h-[1px] bg-emerald-400 rounded-full"
                            initial={{
                                x: Math.random() * 100 + '%',
                                y: Math.random() * 100 + '%',
                                opacity: 0
                            }}
                            animate={{
                                x: Math.random() * 100 + '%',
                                y: Math.random() * 100 + '%',
                                opacity: [0, 0.5, 0]
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* --- FLOATING ELEMENTS (HIDDEN ON MOBILE) --- */}
            <FloatingElement icon={Globe} delay={baseDelay + 0.2} x="10%" y="20%" color="text-emerald-400" />
            <FloatingElement icon={Terminal} delay={baseDelay + 0.6} x="88%" y="30%" color="text-emerald-300" />
            <FloatingElement icon={Layout} delay={baseDelay + 0.4} x="15%" y="70%" color="text-emerald-500" />
            <FloatingElement icon={Zap} delay={baseDelay + 0.8} x="85%" y="75%" color="text-emerald-400" />
            <FloatingElement icon={Cpu} delay={baseDelay + 1.0} x="5%" y="40%" color="text-emerald-300" />

            {/* --- CONTENT CONTAINER --- */}
            <div className="container mx-auto px-4 md:px-6 relative z-30">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

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

                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: baseDelay + 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mb-6 md:mb-8 select-none cursor-default"
                    >
                        <motion.h1
                            className="text-[18vw] sm:text-[15vw] md:text-[140px] lg:text-[180px] xl:text-[220px] font-black leading-[0.85] tracking-tighter uppercase italic text-emerald-500"
                            style={{
                                WebkitTextStroke: '1px rgba(255,255,255,0.05)',
                                textShadow: '4px 4px 0px #000'
                            }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            Leafiess
                        </motion.h1>

                        {/* Glow effect behind text */}
                        <div className="absolute inset-0 -z-10 blur-[60px] opacity-20">
                            <div className="text-[18vw] sm:text-[15vw] md:text-[140px] lg:text-[180px] xl:text-[220px] font-black leading-[0.85] tracking-tighter uppercase italic text-emerald-500">
                                Leafiess
                            </div>
                        </div>
                    </motion.div>

                    {/* Hook & Subtext */}
                    <div className="max-w-3xl mx-auto space-y-4 px-2 mb-12 md:mb-16">
                        <motion.h3
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: baseDelay + 0.3, ease: "easeOut" }}
                            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-[1.1]"
                        >
                            Bangun <span className="text-emerald-500 relative">
                                Website Elit
                                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></span>
                            </span> & Sistem Manajemen Digital.
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: baseDelay + 0.4, ease: "easeOut" }}
                            className="text-neutral-400 text-[9px] md:text-sm lg:text-base font-semibold tracking-widest md:tracking-[0.25em] uppercase leading-relaxed max-w-2xl mx-auto"
                        >
                            Transformasi bisnis Anda menjadi otoritas digital dengan desain premium dan rekayasa tanpa latensi.
                        </motion.p>
                    </div>

                    {/* CTA SECTION - LAPISAN PALING ATAS */}
                    <div className="relative w-full max-w-2xl mx-auto z-50">
                        {/* Glowing effect background for CTA - hanya untuk efek visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.1, scale: 1 }}
                            transition={{ duration: 1.5, delay: baseDelay + 0.6 }}
                            className="absolute -inset-6 md:-inset-10 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 rounded-3xl blur-3xl pointer-events-none"
                        />



                        <div className="relative flex flex-col items-center gap-6 md:gap-8">
                            {/* MAIN CTA BUTTON - SUPER PROMINENT */}
                            <motion.button
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    y: 0,
                                    boxShadow: [
                                        "0 0 50px rgba(16,185,129,0.4)",
                                        "0 0 80px rgba(16,185,129,0.6)",
                                        "0 0 50px rgba(16,185,129,0.4)"
                                    ]
                                }}
                                transition={{
                                    scale: { duration: 0.6, delay: baseDelay + 0.7 },
                                    opacity: { duration: 0.6, delay: baseDelay + 0.7 },
                                    y: { duration: 0.6, delay: baseDelay + 0.7 },
                                    boxShadow: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    boxShadow: "0 0 100px rgba(16,185,129,0.8)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('services')}
                                className="relative w-full px-10 py-5 md:py-6 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 text-white font-black text-base md:text-lg uppercase tracking-wider rounded-2xl flex items-center justify-center gap-4 group overflow-hidden z-50"
                            >
                                {/* Animated background gradient */}
                                <motion.div
                                    animate={{ x: ["-200%", "200%"] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                />

                                {/* Solid gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500" />

                                {/* Content */}
                                <Trophy size={24} className="relative z-10" />
                                <span className="relative z-10 text-lg md:text-xl font-extrabold">
                                    MULAI PROYEK ANDA SEKARANG
                                </span>
                                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-3 transition-transform duration-300" />

                                {/* Glowing corner dots */}
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-300 rounded-full blur-sm animate-ping" />
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-emerald-300 rounded-full blur-sm animate-ping" style={{ animationDelay: '0.5s' }} />
                            </motion.button>

                            {/* Animated text below main CTA */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: baseDelay + 1.2, duration: 1 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-emerald-500" />
                                <span className="text-emerald-400/90 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                                    KONSULTASI AWAL GRATIS
                                </span>
                                <div className="w-6 h-[1px] bg-gradient-to-r from-emerald-500 to-transparent" />
                            </motion.div>

                            {/* Secondary CTA */}
                            <motion.a
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: baseDelay + 0.9, duration: 0.5 }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255,255,255,0.12)",
                                    borderColor: "rgba(255,255,255,0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/+6285714412716"
                                className="relative w-full sm:w-auto px-10 py-4 border-2 border-white/30 text-white font-black text-sm uppercase tracking-wider rounded-xl backdrop-blur-xl transition-all flex items-center justify-center gap-4 group overflow-hidden z-50"
                            >
                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                                <span className="relative z-10">WHATSAPP KONSULTASI LANGSUNG</span>
                                <div className="relative z-10 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                                </div>
                            </motion.a>
                        </div>

                        {/* Trust indicators below CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: baseDelay + 1.5, duration: 1 }}
                            className="mt-10 flex flex-wrap justify-center gap-8 text-white/70 text-xs md:text-sm font-medium tracking-wider uppercase"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Garansi Kualitas</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                <span>Support 24/7</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                                <span>Revisi Unlimited</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Di bawah CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: baseDelay + 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-emerald-500/40 to-white/0"
                />
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.5em]">SCROLL</span>
            </motion.div>

            {/* HAPUS Bottom Gradient Fade yang menutupi tombol */}
        </section>
    );
};

export default Hero;