// @ts-nocheck
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax transforms for different layers
    const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const heroTextOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const avatarY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const avatarScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
    const avatarRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
    const glowY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    const badgeY = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const floatingLeftY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const floatingRightY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const gridOpacity = useTransform(scrollYProgress, [0, 0.6], [0.06, 0]);
    const leafLeftY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const leafRightY = useTransform(scrollYProgress, [0, 1], [0, -140]);

    // Typewriter effect
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const words = ['Scalable Systems', 'Premium Interfaces', 'Digital Ecosystems', 'Smart Solutions'];

    useEffect(() => {
        const handleType = () => {
            const currentWord = words[textIndex];
            if (!isDeleting) {
                setCharIndex(prev => prev + 1);
                if (charIndex === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setCharIndex(prev => prev - 1);
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % words.length);
                }
            }
        };
        const timer = setTimeout(handleType, isDeleting ? 50 : 100);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, textIndex, words]);

    // Floating particles - reduced for performance
    const particles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 4,
    }));

    return (
        <section
            id="home"
            className="relative min-h-[110vh] flex flex-col items-center justify-start overflow-hidden bg-[#050508] pt-52 md:pt-52 pb-0"
            ref={containerRef}
        >
            {/* ===== BACKGROUND LAYERS (Parallax) ===== */}

            {/* Main emerald glow */}
            <motion.div
                style={{ y: glowY, scale: glowScale }}
                className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none z-0"
            >
                <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0.04)_35%,transparent_70%)]" />
            </motion.div>

            {/* Secondary soft glows */}
            <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.05)_0%,transparent_70%)] pointer-events-none z-0 blur-2xl" />
            <div className="absolute top-[5%] right-[15%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.04)_0%,transparent_70%)] pointer-events-none z-0 blur-3xl" />

            {/* Grid overlay with parallax opacity */}
            <motion.div
                style={{ opacity: gridOpacity }}
                className="absolute inset-0 pointer-events-none z-0"
                aria-hidden="true"
            >
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)`,
                        backgroundSize: '64px 64px',
                        maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 20%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 20%, transparent 80%)',
                    }}
                />
            </motion.div>

            {/* Floating particles */}
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-emerald-400/20 pointer-events-none z-0"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* ===== HERO CONTENT ===== */}

            {/* Badge */}
            <motion.div
                style={{ y: badgeY }}
                className="relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2.5 px-5 py-2 border border-emerald-500/20 rounded-full bg-emerald-500/5 backdrop-blur-sm mb-8 cursor-default group hover:border-emerald-500/40 transition-colors duration-300"
                >
                    <Sparkles size={14} className="text-emerald-400 group-hover:animate-spin" />
                    <span className="font-mono-jb text-[0.7rem] tracking-[0.12em] text-emerald-400/80 uppercase">
                        New AI-Powered Digital Solutions
                    </span>
                </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
                style={{ y: heroTextY, opacity: heroTextOpacity }}
                className="relative z-10 text-center px-4 max-w-[900px] "
            >
                <motion.h1
                    className="font-space text-[clamp(2.2rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] text-white mb-6"
                >
                    <motion.span
                        className="block"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Turn Raw Data Into
                    </motion.span>
                    <motion.span
                        className="block bg-linear-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Clear Decisions
                    </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.75 }}
                    className="max-w-[520px] mx-auto text-center text-[1rem] md:text-[1.1rem] text-[#9090A8] leading-[1.8] mb-10"
                >
                    Connect to any database, ask questions in
                    <br className="hidden md:block" /> plain language, and get <strong className="text-white font-semibold">instant insights</strong>.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
                >
                    <button
                        onClick={() => scrollToSection('services')}
                        className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 bg-emerald-500 text-black font-space font-semibold text-[0.85rem] tracking-wide rounded-xl transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                        Start Your Free Trial
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        <div className="absolute inset-0 rounded-xl bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </button>
                </motion.div>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                    className="flex items-center justify-center gap-2 mb-8"
                >
                    <div className="w-px h-3.5 bg-emerald-500/30" />
                    <span className="font-mono-jb text-[0.68rem] tracking-[0.1em] text-[#5a5a72]">
                        {words[textIndex].substring(0, charIndex)}
                        <span className="animate-pulse text-emerald-400/60">_</span>
                    </span>
                </motion.div>
            </motion.div>

            {/* ===== AVATAR IMAGE (Parallax) ===== */}
            <motion.div
                style={{ y: avatarY, scale: avatarScale, rotate: avatarRotate }}
                className="relative z-10 w-full max-w-[1000px] mx-auto px-4 mt-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    {/* Avatar glow behind */}
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none scale-75" />
                    <div className="absolute -inset-8 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_60%)] pointer-events-none" />

                    {/* Avatar Image */}
                    <div className="relative flex justify-center">
                        <img
                            src="https://www.pngmart.com/files/22/How-To-Train-Your-Dragon-PNG-Isolated-File.png"
                            alt="Leafiess Mascot"
                            className="w-[2000px] md:w-[4000px] lg:w-[300px] h-auto drop-shadow-[0_20px_60px_rgba(16,185,129,0.15)] relative z-10"
                            loading="eager"
                            decoding="async"
                        />

                        {/* Ring glow effect around avatar */}
                        <div className="absolute inset-[10%] rounded-full border border-emerald-500/10 pointer-events-none" />
                        <div className="absolute inset-[-5%] rounded-full border border-emerald-500/5 pointer-events-none" />
                    </div>

                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#050508] to-transparent pointer-events-none z-20" />
                </motion.div>
            </motion.div>

            {/* ===== FLOATING TECH BADGES (Parallax) ===== */}
            <motion.div
                style={{ y: floatingLeftY }}
                className="absolute left-[5%] md:left-[10%] top-[18%] z-5 pointer-events-none hidden lg:block shadow-2xl shadow-emerald-500"
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/6 bg-[#13131a]/80 backdrop-blur-sm"
                >
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-[0.55rem] font-bold text-white shadow-2xl shadow-emerald-500">⚡</div>
                    <div>
                        <div className="text-[0.8rem] text-white font-space font-medium">React</div>
                        <div className="text-[0.8rem] text-[#5a5a72]">Frontend</div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                style={{ y: floatingRightY }}
                className="absolute right-[5%] md:right-[10%] top-[22%] z-5 pointer-events-none hidden lg:block"
            >
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/6 bg-[#13131a]/80 backdrop-blur-sm"
                >
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-[0.55rem] font-bold text-white">🔷</div>
                    <div>
                        <div className="text-[0.6rem] text-white font-space font-medium">TypeScript</div>
                        <div className="text-[0.5rem] text-[#5a5a72]">Language</div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                style={{ y: floatingLeftY }}
                className="absolute left-[8%] md:left-[15%] top-[40%] z-5 pointer-events-none hidden lg:block"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/6 bg-[#13131a]/80 backdrop-blur-sm"
                >
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center text-[0.55rem] font-bold text-white">🔥</div>
                    <div>
                        <div className="text-[0.6rem] text-white font-space font-medium">Node.js</div>
                        <div className="text-[0.5rem] text-[#5a5a72]">Backend</div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                style={{ y: floatingRightY }}
                className="absolute right-[8%] md:right-[12%] top-[38%] z-5 pointer-events-none hidden lg:block"
            >
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/6 bg-[#13131a]/80 backdrop-blur-sm"
                >
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center text-[0.55rem] font-bold text-white">🚀</div>
                    <div>
                        <div className="text-[0.6rem] text-white font-space font-medium">Next.js</div>
                        <div className="text-[0.5rem] text-[#5a5a72]">Framework</div>
                    </div>
                </motion.div>
            </motion.div>

            {/* ===== LEAF DECORATIONS (Parallax) ===== */}
            {/* Left leaf */}
            <motion.div
                style={{ y: leafLeftY }}
                className="absolute left-0 top-[0%] z-3 pointer-events-none hidden md:block"
            >
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 0.7, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <img
                        src="/leaf-decor.png"
                        alt="avatar"
                        className="w-[280px] lg:w-[780px] h-auto opacity-60"
                        loading="eager"
                        decoding="async"
                        style={{
                            maskImage: 'linear-gradient(to right, black 40%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)',
                            maskComposite: 'intersect',
                            WebkitMaskComposite: 'destination-in',
                        }}
                    />
                    <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />
                </motion.div>
            </motion.div>

            {/* Right leaf (mirrored) */}
            <motion.div
                style={{ y: leafRightY }}
                className="absolute right-0 top-[0%] z-3 pointer-events-none hidden md:block"
            >
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 0.7, x: 0 }}
                    transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <img
                        src="/leaf-decor.png"
                        alt=""
                        className="w-[280px] lg:w-[780px] h-auto opacity-60"
                        loading="eager"
                        decoding="async"
                        style={{
                            transform: 'scaleX(-1)',
                            maskImage: 'linear-gradient(to left, black 40%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)',
                            maskComposite: 'intersect',
                            WebkitMaskComposite: 'destination-in',
                        }}
                    />
                    <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />
                </motion.div>
            </motion.div>

            {/* Bottom section gradient fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#030502] via-[#050508]/80 to-transparent pointer-events-none z-20" />
        </section>
    );
};

export default Hero;