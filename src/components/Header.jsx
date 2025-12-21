import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MessageSquareCode, Sparkles, Zap, Cpu, Shield, Star } from "lucide-react";

const Header = () => {
    const [activeTab, setActiveTab] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isScrollingRef = useRef(false);

    const navLinks = [
        { name: "Beranda", id: "home" },
        { name: "Layanan", id: "services" },
        { name: "Profil", id: "profile" },
        { name: "Proyek", id: "projects" },
        { name: "Harga", id: "pricing" },
        { name: "FAQ", id: "faq" },
        { name: "Kontak", id: "contact" },
    ];

    const menuHighlights = [
        { title: "Next-Gen Web", desc: "Experience 10ms response times.", icon: <Zap size={20} />, color: "from-emerald-500/20" },
        { title: "AI Integrated", desc: "Smart systems for smart business.", icon: <Cpu size={20} />, color: "from-blue-500/20" },
        { title: "Safe & Secure", desc: "Enterprise grade encryption.", icon: <Shield size={20} />, color: "from-red-500/20" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -25% 0px", // Increased detection area (50% of screen height)
            threshold: [0, 0.1, 0.2, 0.5]
        };

        const observerCallback = (entries) => {
            if (isScrollingRef.current) return;

            // Collect all sections that are currently visible
            const visibleSections = entries.filter(entry => entry.isIntersecting);

            if (visibleSections.length > 0) {
                // Pick the section with the highest intersection ratio
                const mostVisible = visibleSections.reduce((prev, current) =>
                    (prev.intersectionRatio > current.intersectionRatio) ? prev : current
                );

                if (mostVisible.target.id) {
                    setActiveTab(mostVisible.target.id);
                }
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        navLinks.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            isScrollingRef.current = true;
            setActiveTab(id);
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 1000);
        }
    };

    return (
        <>
            <div className="fixed top-8 left-0 right-0 z-100 flex justify-center px-6 pointer-events-none">
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        width: scrolled ? "900px" : "100%",
                        maxWidth: scrolled ? "900px" : "1280px"
                    }}
                    transition={{
                        y: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 1.2 },
                        width: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
                        maxWidth: { type: "spring", stiffness: 100, damping: 20, mass: 1 }
                    }}
                    className="pointer-events-auto relative group flex justify-center"
                >
                    {/* Liquid Glass / Dynamic Island Container */}
                    <motion.div
                        layout
                        className={`relative flex items-center justify-between p-2 rounded-full transition-all duration-1000 ease-[0.16,1,0.3,1] w-full overflow-hidden
                        ${scrolled
                                ? "bg-black/60 backdrop-blur-3xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] px-4"
                                : "bg-black/20 backdrop-blur-2xl border border-white/5 px-8"
                            }`}
                    >
                        {/* Animated Border Liquid Highlight */}
                        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>

                        {/* Brand Section */}
                        <motion.div
                            layout
                            whileHover={{ scale: 1.02 }}
                            onClick={() => scrollToSection("home")}
                            className="flex items-center gap-2 cursor-pointer relative z-20 shrink-0"
                        >
                            <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all duration-700">
                                <Sparkles size={14} className="text-black" />
                            </div>
                            <span className={`font-black text-lg tracking-tighter text-white uppercase italic transition-all duration-700 whitespace-nowrap ${scrolled ? "hidden lg:block scale-90" : "scale-100"}`}>
                                Leafiess<span className="text-emerald-500">.</span>
                            </span>
                        </motion.div>

                        {/* Middle Nav: Desktop */}
                        <motion.div
                            layout
                            className="hidden lg:flex items-center justify-center flex-1 mx-4"
                        >
                            <ul className="flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <li key={link.id} className="relative">
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-700 relative z-10 whitespace-nowrap
                                            ${activeTab === link.id ? "text-white" : "text-neutral-500 hover:text-white"}`}
                                        >
                                            {link.name}
                                        </button>
                                        {activeTab === link.id && (
                                            <motion.div
                                                layoutId="activeTabPill"
                                                className={`absolute inset-0 rounded-full border shadow-[0_0_20px_rgba(16,185,129,0.2)] ${link.id === 'pricing'
                                                    ? 'bg-emerald-500/20 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)]'
                                                    : 'bg-white/10 border-emerald-500/50'
                                                    }`}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                    mass: 1
                                                }}
                                            >
                                                {link.id === 'pricing' && (
                                                    <motion.div
                                                        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                        className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md"
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[4px]" />
                                            </motion.div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right Section: CTA & Toggle */}
                        <motion.div layout className="flex items-center gap-2 shrink-0">
                            <motion.a
                                href="https://wa.me/6285714412716"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 1)" }}
                                whileTap={{ scale: 0.95 }}
                                className={`hidden md:flex items-center gap-2 bg-emerald-500/90 text-white font-black text-[10px] uppercase tracking-widest transition-all duration-700 rounded-full whitespace-nowrap
                                ${scrolled ? "px-4 py-2" : "px-7 py-3"}`}
                            >
                                <span className={scrolled ? "hidden xl:inline" : "inline"}>Chat</span>
                                <ArrowRight size={14} />
                            </motion.a>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/5 transition-all relative border border-white/5 z-100"
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                            <X size={18} />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                            <Menu size={18} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.header>
            </div>

            {/* Redesigned Mega Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-90 bg-black/98 backdrop-blur-3xl flex flex-col items-center justify-center"
                    >
                        {/* Abstract Background Liquid Blobs */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse" />
                            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-emerald-600/5 rounded-full blur-[150px]" />
                        </div>

                        {/* Centered Navigation Content */}
                        <div className="relative z-10 w-full max-w-lg px-10 text-center flex flex-col items-center gap-12">
                            <div className="space-y-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.8em] mb-4"
                                >
                                    Eksplorasi
                                </motion.div>
                                <div className="h-px w-12 bg-emerald-500/30 mx-auto" />
                            </div>

                            <nav className="flex flex-col gap-4 w-full">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.08 + 0.2, duration: 0.8 }}
                                        onClick={() => scrollToSection(link.id)}
                                        className="group relative py-2 overflow-hidden"
                                    >
                                        <span className={`text-4xl md:text-7xl font-black uppercase italic tracking-tighter transition-all duration-500 inline-block
                                            ${activeTab === link.id ? "text-emerald-500 scale-110" : "text-white/30 group-hover:text-white"}`}>
                                            {link.name}
                                        </span>
                                        {/* Subtle active indicator for mobile */}
                                        {activeTab === link.id && (
                                            <motion.div
                                                layoutId="mobileActiveLine"
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-emerald-500 rounded-full"
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </nav>

                            {/* Back Button / Tombol Kembali */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-8 flex items-center gap-3 text-neutral-500 hover:text-white transition-all duration-300 group"
                            >
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500 group-hover:text-emerald-500 transition-all">
                                    <X size={14} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Kembali</span>
                            </motion.button>
                        </div>

                        {/* Mini Showcase in Menu (Optional for very high end feel) */}
                        <div className="absolute bottom-10 left-0 right-0 hidden lg:flex justify-center opacity-20 pointer-events-none scale-75">
                            <div className="h-[200px] w-[600px] flex gap-10">
                                {menuHighlights.map((item, i) => (
                                    <div key={i} className="flex-1 border border-white/10 rounded-2xl p-4">
                                        <div className="text-white font-bold uppercase italic text-xs">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;

