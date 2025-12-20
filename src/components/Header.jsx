import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "Team", id: "team" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    /**
     * @param {string} id
     */
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    return (
        <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-black/40 rounded-full flex items-center justify-between px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-emerald-500/10 w-full max-w-[650px] backdrop-blur-2xl relative pointer-events-auto group/nav"
            >
                {/* Emerald Background Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Top Shine Line */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent pointer-events-none" />

                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection("home")}
                    className="pl-6 flex items-center cursor-pointer relative z-50"
                >
                    <span className="font-black text-xl tracking-tighter text-white select-none">
                        Leafiess<span className="text-emerald-500 drop-shadow-[0_0_8px_#10b981]">.</span>
                    </span>
                </motion.div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center gap-1 relative z-10">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                            className="relative flex items-center"
                        >
                            <button
                                onClick={() => {
                                    setActiveTab(link.name);
                                    scrollToSection(link.id);
                                }}
                                className={`relative z-10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer ${link.name === activeTab ? "text-emerald-400" : "text-neutral-500 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </button>

                            {/* Active Background Pill */}
                            <AnimatePresence>
                                {activeTab === link.name && (
                                    <motion.div
                                        layoutId="navPill"
                                        className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/20 rounded-full z-0"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    >
                                        <div className="absolute inset-0 blur-md bg-emerald-500/10 rounded-full" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden pr-4 relative z-50">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 hover:bg-emerald-500/20 transition-all cursor-pointer"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "100vh" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 md:hidden flex flex-col pt-32 px-10 pointer-events-auto overflow-hidden"
                        >
                            {/* Background Glows for Mobile */}
                            <div className="absolute top-1/4 -right-20 w-64 h-64 bg-emerald-500/10 blur-[120px] rounded-full" />
                            <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-emerald-500/5 blur-[120px] rounded-full" />

                            <div className="relative z-10 flex flex-col gap-8">
                                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-4">Navigation</span>
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.id}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        onClick={() => scrollToSection(link.id)}
                                        className="flex items-center justify-between group/mob"
                                    >
                                        <span className={`text-4xl font-black tracking-tighter transition-all duration-500 ${activeTab === link.name ? "text-emerald-500" : "text-white/60 group-hover/mob:text-white"
                                            }`}>
                                            {link.name}
                                        </span>
                                        <ArrowUpRight className={`transition-all duration-500 ${activeTab === link.name ? "text-emerald-500 scale-125" : "text-white/20 group-hover/mob:text-emerald-500 group-hover/mob:translate-x-1 group-hover/mob:-translate-y-1"
                                            }`} size={32} />
                                    </motion.button>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="mt-auto pb-20 flex flex-col gap-6"
                            >
                                <div className="h-px bg-white/10 w-full" />
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/40">
                                    <span>Jakarta, ID</span>
                                    <span>© 2024 Leafiess.</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
};

export default Header;
