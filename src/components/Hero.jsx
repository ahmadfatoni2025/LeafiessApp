// @ts-nocheck
import { motion } from "framer-motion";
import { HiCommandLine } from "react-icons/hi2";
import { AiFillSliders, AiOutlineSlack, AiFillProfile } from "react-icons/ai";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const floatingElements = [
        { text: "(12+12)", top: "20%", left: "15%", delay: 0 },
        { text: "-15+6", top: "45%", left: "18%", delay: 1 },
        { text: "3y", top: "60%", left: "12%", delay: 2 },
        { text: "24", top: "70%", left: "20%", delay: 0.5, isBox: true },
        { text: "12", top: "35%", right: "15%", delay: 1.5, isBox: true },
        { text: "17+6-4", top: "55%", right: "12%", delay: 2.5 },
        { text: "5x9", top: "75%", right: "18%", delay: 3, hasSymbol: true },
        { text: "-8", top: "65%", right: "30%", delay: 1 }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-transparent">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Main Green Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[160px] opacity-60 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)'
                    }}
                />

                {/* Floating Mathematical Elements */}
                {floatingElements.map((el, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.1, 0.2, 0.1],
                            y: [0, -15, 0],
                            x: [0, i % 2 === 0 ? 10 : -10, 0]
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            delay: el.delay,
                            ease: "easeInOut"
                        }}
                        className="absolute font-mono text-emerald-500/10 text-lg md:text-xl pointer-events-none select-none"
                        style={{
                            top: el.top,
                            left: el.left,
                            right: el.right,
                            ...(el.isBox && {
                                border: '1px solid rgba(16, 185, 129, 0.1)',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                background: 'rgba(16, 185, 129, 0.05)'
                            })
                        }}
                    >
                        {el.hasSymbol && <span className="mr-2 text-xs opacity-50">√</span>}
                        {el.text}
                    </motion.div>
                ))}

                {/* Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Grid */}
                    <div
                        className="
            absolute inset-0
            opacity-[0.1]
            bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
            bg-[length:100px_100px]
        "
                    />

                    {/* Fokus tengah + gradasi hitam */}
                    <div
                        className="
            absolute inset-0
            bg-radial
            from-transparent
            via-black/40
            to-black
        "
                    />
                </div>

            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-6 text-center max-w-5xl relative z-10"
            >
                <motion.div variants={itemVariants} className="flex justify-center mb-6">
                    <span className="text-neutral-400 text-[10px] md:text-xs font-medium tracking-wider flex items-center gap-2">
                        Siap Digunakan, dan tampil <span className="text-emerald-400">Profesional</span>
                    </span>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-10">
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-4 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                        Leafiess<br />
                        <span className="text-emerald-400 text-4xl md:text-8xl">Solusi Manajemen Kebutuhan Bisnis</span>
                    </h1>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-12 text-neutral-300">
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-wide bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <span className="text-emerald-400"><AiFillSliders /></span>
                        Custom Website
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-wide bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <span className="text-emerald-400"><AiOutlineSlack /></span>
                        Responsive dan Optimized
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-wide bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <span className="text-emerald-400"><HiCommandLine /></span>
                        Modern UI/UX
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-wide bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <span className="text-emerald-400"><AiFillProfile /></span>
                        Maintenance & Support
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('projects')}
                        className="relative px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] text-white flex items-center gap-4 group overflow-hidden transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.5)] bg-emerald-500"
                    >
                        {/* Liquid Shine Effect */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                        <span className="relative z-10 text-black">Start a challenge</span>
                        <div className="relative z-10 w-6 h-6 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center transition-transform group-hover:translate-x-1 border border-black/10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="black" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </div>

                        {/* Liquid Glow Accent */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-tr from-white/20 to-transparent pointer-events-none" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('home')}
                        className="relative px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] text-white flex items-center gap-4 group overflow-hidden border border-white/20 hover:border-emerald-500/50 transition-all duration-500 bg-white/5 backdrop-blur-xl"
                    >
                        {/* Hover Liquid Background */}
                        <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-500" />

                        {/* Floating Shine */}
                        <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                        <span className="relative z-10">Free Trial</span>
                        <div className="relative z-10 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Hero Footer */}
            <div className="absolute bottom-10 left-0 right-0 px-10 flex justify-between items-center z-10 hidden md:flex">
                <div className="flex items-center gap-6">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Follow Us</span>
                    <div className="flex gap-4">
                        {[
                            { name: 'instagram', icon: <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                            { name: 'twitter', icon: <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-1 2.1-3 2.8c1.4.2 2-1 2-1s-1 3.5-5.5 4a12 12 0 0 1-18 10c9-1 12-8 12-8s-1.5 1.5-3.5 1.5" /></svg> },
                            { name: 'github', icon: <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg> },
                            { name: 'linkedin', icon: <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> }
                        ].map((social) => (
                            <motion.a
                                key={social.name}
                                href="#"
                                whileHover={{ y: -2, opacity: 1, scale: 1.1 }}
                                className="text-neutral-400 hover:text-emerald-400 transition-all"
                            >
                                <div className="w-8 h-8 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors">
                                    {social.icon}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 text-neutral-500">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;