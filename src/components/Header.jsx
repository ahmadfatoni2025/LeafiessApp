import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MessageSquareCode, Sparkles } from "lucide-react";

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
        { name: "Kontak", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        // Intersection Observer for active section detection
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Detect section in the center of the viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            if (isScrollingRef.current) return; // Don't update while smooth scrolling manually

            entries.forEach((entry) => {
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

            // Re-enable observer after scroll ends
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 1000);
        }
    };

    const baseDelay = 2.6; // Slightly after Hero starts

    return (
        <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: baseDelay, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[900px] pointer-events-auto relative"
            >
                {/* Unified Premium Pill */}
                <div className={`relative flex items-center justify-between bg-black/40 backdrop-blur-3xl rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1.5 transition-all duration-700 ${scrolled ? "px-2 shadow-[0_10px_30px_rgba(16,185,129,0.1)]" : "px-3"}`}>

                    {/* Animated Edge Glow */}
                    <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Left Section: Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => scrollToSection("home")}
                        className="flex items-center gap-2 pl-4 cursor-pointer relative z-20 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-500">
                            <Sparkles size={16} className="text-black" />
                        </div>
                        <span className="font-extrabold text-lg tracking-tight text-white select-none">
                            Leafiess<span className="text-emerald-500">.</span>
                        </span>
                    </motion.div>

                    {/* Middle Section: Desktop Nav links */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center">
                        <ul className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <li key={link.id} className="relative">
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className={`px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative z-10 ${activeTab === link.id ? "text-white" : "text-neutral-500 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </button>
                                    {activeTab === link.id && (
                                        <motion.div
                                            layoutId="activePill"
                                            className="absolute inset-0 bg-white/5 rounded-full border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        >
                                            {/* Subtle Glow Outline */}
                                            <div className="absolute -inset-px rounded-full border border-emerald-500/30 blur-[2px]" />
                                            <div className="absolute inset-0 bg-emerald-500/10 rounded-full" />
                                        </motion.div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-2 bg-emerald-500/90 text-white px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow-[0_5px_15px_rgba(16,185,129,0.2)]"
                        >
                            <a href="https://wa.me/+6285714412716">Konsultasi</a>
                            <ArrowRight size={14} strokeWidth={3} />
                        </motion.button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-white hover:bg-white/5 transition-all relative border border-white/5"
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                        <X size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                        <Menu size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 right-0 mt-3 p-2 bg-neutral-900/60 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.8)] lg:hidden overflow-hidden"
                        >
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 + 0.1 }}
                                        onClick={() => scrollToSection(link.id)}
                                        className={`flex items-center justify-between px-6 py-4 rounded-3xl transition-all duration-500 ${activeTab === link.id
                                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                            : "text-neutral-400 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        <span className="text-xs font-bold uppercase tracking-[0.2em]">{link.name}</span>
                                        {activeTab === link.id && (
                                            <div className="flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                                                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                                            </div>
                                        )}
                                    </motion.button>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="p-1 mt-2"
                                >
                                    <button className="w-full flex items-center justify-center gap-3 bg-emerald-500 text-black py-4 rounded-[1.5rem] font-bold text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
                                        <MessageSquareCode size={18} />
                                        Konsultasi Sekarang
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
};

export default Header;
