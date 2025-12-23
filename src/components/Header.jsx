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
                                : "bg-black/35 backdrop-blur-xl border border-white/6 px-5 py-2.5 md:px-8 md:py-3"
                            }`}
                    >
                        {/* Static Subtle Highlight */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-b from-white/6 to-transparent pointer-events-none" />

                        {/* Brand Section - Enlarged */}
                        <div
                            onClick={() => scrollToSection("home")}
                            className="flex items-center gap-3 cursor-pointer relative z-20 shrink-0 hover:opacity-80 transition-opacity ml-3 group/brand"
                        >
                            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg group-hover/brand:scale-110 transition-transform">
                                <Sparkles size={18} className="text-black" /> {/* Increased icon size */}
                            </div>
                            <span className={`font-black tracking-tighter text-white uppercase italic whitespace-nowrap transition-all ${scrolled ? "hidden md:block text-lg" : "text-lg md:text-xl"}`}>
                                Leafiess<span className="text-emerald-500">.</span>
                            </span>
                        </div>

                        {/* Middle Nav: Desktop - Enlarged */}
                        <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
                            <ul className="flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <li key={link.id} className="relative"
                                        onMouseEnter={() => setHoveredTab(link.id)}
                                        onMouseLeave={() => setHoveredTab(null)}>
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            className={`px-4.5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all relative z-10 whitespace-nowrap rounded-full
                                            ${activeTab === link.id ? "text-white" : "text-neutral-400 hover:text-neutral-200"}`}
                                        >
                                            {link.name}

                                            {/* Active Indicator - Enlarged */}
                                            {activeTab === link.id && (
                                                <motion.div
                                                    layoutId="activeTabPill"
                                                    className="absolute inset-0 bg-white/12 border border-white/12 rounded-full -z-10 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}

                                            {/* Hover effect */}
                                            {hoveredTab === link.id && activeTab !== link.id && (
                                                <motion.div
                                                    className="absolute inset-0 bg-white/8 rounded-full -z-10"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                />
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Section: CTA & Toggle - Enlarged */}
                        <div className="flex items-center gap-3 shrink-0">
                            <button
                                onClick={() => scrollToSection("contact")}
                                className={`hidden sm:flex items-center gap-3 bg-emerald-500 text-black font-black text-[10px] uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 group/cta
                                ${scrolled ? "px-5 py-3" : "px-7 py-4"}`}
                            >
                                <span>Chat</span>
                                <ArrowRight size={14} strokeWidth={3} className="group-hover/cta:translate-x-1.5 transition-transform" />
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