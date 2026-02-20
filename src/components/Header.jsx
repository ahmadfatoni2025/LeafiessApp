// @ts-nocheck
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles, ChevronRight } from "lucide-react";

const Header = () => {
    const [activeTab, setActiveTab] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredTab, setHoveredTab] = useState(null);
    const isScrollingRef = useRef(false);
    const rafRef = useRef(null);

    const navLinks = [
        { name: "Beranda", id: "home" },
        { name: "Layanan", id: "services" },
        { name: "Profil", id: "profile" },
        { name: "Proyek", id: "projects" },
        { name: "Harga", id: "pricing" },
        { name: "FAQ", id: "faq" },
        { name: "Kontak", id: "contact" },
    ];

    // Optimized scroll handler with RAF
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                rafRef.current = requestAnimationFrame(() => {
                    const isScrolled = window.scrollY > 120; // Slightly increased threshold
                    setScrolled(isScrolled);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    // Optimized intersection observer
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -55% 0px", // Adjusted margins
            threshold: 0
        };

        const observerCallback = (entries) => {
            if (isScrollingRef.current) return;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        navLinks.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            isScrollingRef.current = true;
            setActiveTab(id);
            setIsMenuOpen(false);

            // Smooth scroll dengan offset
            const headerHeight = 100; // Increased header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setTimeout(() => {
                isScrollingRef.current = false;
            }, 800);
        }
    }, []);

    return (
        <>
            {/* Container positioning - Made larger */}
            <div className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-4 md:px-8 pointer-events-none">
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        width: scrolled ? "auto" : "100%",
                        maxWidth: scrolled ? "950px" : "1400px" // Increased max width
                    }}
                    transition={{
                        y: { duration: 0.8, ease: "circOut" },
                        width: { duration: 0.6, ease: "anticipate" },
                        maxWidth: { duration: 0.6, ease: "anticipate" }
                    }}
                    className="pointer-events-auto relative group flex justify-center w-full"
                >
                    {/* Glass Container - Made larger */}
                    <div
                        className={`relative flex items-center justify-between p-2.5 rounded-full transition-all duration-500 ease-out flex-1 
                        ${scrolled
                                ? "bg-black/75 backdrop-blur-3xl border border-white/12 shadow-2xl px-3 py-2 md:px-4 md:py-2.5"
                                : "bg-black/35 backdrop-blur-xl border border-emerald-400/50 px-5 py-2.5 md:px-8 md:py-3"
                            }`}
                    >
                        {/* Static Subtle Highlight */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-b from-white/6 to-transparent pointer-events-none" />

                        {/* Brand Section - Enlarged */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="flex items-center gap-2 group cursor-pointer"
                        >
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                <span className=" font-bold text-lg text-emerald-500">L</span>
                            </div>
                            <span className="font-space font-bold text-lg tracking-tight text-white group-hover:text-emerald-500 transition-colors">
                                Leafiess<span className="text-emerald-500">.</span>
                            </span>
                        </motion.div>

                        {/* Middle Nav: Desktop - Enlarged */}
                        <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
                            <ul className="flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <li key={link.id} className="relative"
                                        onMouseEnter={() => setHoveredTab(link.id)}
                                        onMouseLeave={() => setHoveredTab(null)}>
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            onMouseEnter={() => setHoveredTab(link.id)}
                                            onMouseLeave={() => setHoveredTab(null)}
                                            className={`relative px-4 py-2 rounded-lg text-xs uppercase tracking-widest transition-all duration-300 ${activeTab === link.id
                                                ? "text-emerald-400 bg-emerald-500/10"
                                                : "text-neutral-400 hover:text-white"
                                                }`}
                                        >
                                            {activeTab === link.id && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <span className="relative z-10">{link.name}</span>
                                        </button>
                                        {hoveredTab === link.id && activeTab !== link.id && (
                                            <motion.div
                                                className="absolute inset-0 bg-white/8 rounded-full -z-10"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Section: CTA & Toggle - Enlarged */}
                        <div className="flex items-center gap-3 shrink-0">
                            <button
                                className="group relative px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-emerald-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <div className="relative flex items-center gap-2">
                                    <span className=" text-xs font-bold uppercase tracking-wide text-white">Let's Talk</span>
                                    <ArrowRight size={14} className="text-emerald-500 group-hover:-rotate-45 transition-transform duration-300" />
                                </div>
                            </button>

                            {/* Mobile Toggle - Enlarged */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/6 border border-white/10 hover:bg-white/12 transition-all z-[110]"
                            >
                                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </motion.header>
            </div>

            {/* Mobile Menu - Enlarged */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Mobile Menu - Full Screen */}
                        <motion.div
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed inset-0 z-[95] bg-[#050505] flex flex-col pt-32 px-6 pb-10"
                        >
                            {/* Background Elements */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
                                <div className="absolute bottom-0 left-0 w-full h-[300px] bg-linear-to-t from-emerald-900/10 to-transparent" />
                            </div>

                            <nav className="flex flex-col gap-2 flex-1 relative z-10 overflow-y-auto">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                        onClick={() => scrollToSection(link.id)}
                                        className={`flex items-center justify-between p-4 rounded-2xl transition-all border border-transparent
                                            ${activeTab === link.id
                                                ? 'bg-white/10 text-white border-white/10'
                                                : 'text-white/60 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <span className="text-2xl font-bold tracking-tight">
                                            {link.name}
                                        </span>
                                        {activeTab === link.id ? (
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                                        ) : (
                                            <ArrowRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-500" />
                                        )}
                                    </motion.button>
                                ))}
                            </nav>

                            {/* CTA Section - Absolute Bottom */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 border-t border-white/10 pt-6 relative z-10"
                            >
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="w-full flex items-center justify-center gap-3 bg-emerald-500 text-black font-black text-lg uppercase tracking-widest py-5 rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.2)] hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all group/cta-mobile"
                                >
                                    <span>Mulai Sekarang</span>
                                    <ChevronRight size={22} strokeWidth={3} className="group-hover/cta-mobile:translate-x-2 transition-transform" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;