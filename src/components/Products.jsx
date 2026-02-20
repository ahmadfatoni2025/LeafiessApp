// @ts-nocheck
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Wallet,
    ArrowRightLeft,
    BarChart3,
    ShieldCheck,
    Globe,
    ArrowUpRight,
    Lock,
    Smartphone
} from "lucide-react";

/**
 * Bento Grid Item Component
 */
const BentoItem = ({ title, description, children, className, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0c0c12] p-8 hover:border-emerald-500/30 transition-colors ${className}`}
        >
            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-[80px] group-hover:bg-emerald-500/10 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Visual/Animation Area */}
                <div className="mb-8 min-h-[140px] flex items-center justify-center">
                    {children}
                </div>

                {/* Content */}
                <div>
                    <h3 className="font-space text-2xl font-bold text-white mb-3">
                        {title}
                    </h3>
                    <p className="text-[#9090A8] text-sm leading-relaxed max-w-[90%]">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};


const Products = () => {
    return (
        <section className="py-32 px-4 bg-[#050508]">
            <div className="max-w-7xl mx-auto">


                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Item 1: Custom Web Development (Matches "Digital Wallet" -> core foundation) */}
                    <BentoItem
                        className="md:col-span-2"
                        title="Custom Web Development"
                        description="Membangun website berkinerja tinggi, scalable, dan aman. Dari landing page hingga sistem enterprise yang kompleks."
                    >
                        {/* Animation: Floating Cards / Interface */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 p-5 bg-[#111118]/90 border border-white/10 rounded-xl backdrop-blur-md shadow-2xl w-[280px]"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div className="h-2 w-20 bg-emerald-500/50 rounded-full" />
                                    <div className="text-emerald-400 text-xs font-mono-jb">+142% Growth</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-8 w-full bg-white/5 rounded-lg" />
                                    <div className="flex gap-2">
                                        <div className="h-16 w-1/2 bg-white/5 rounded-lg" />
                                        <div className="h-16 w-1/2 bg-white/5 rounded-lg" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Background Elements */}
                            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-[60px]" />
                        </div>
                    </BentoItem>

                    {/* Item 2: UI/UX Design (Matches "Send & Receive" -> interaction) */}
                    <BentoItem
                        title="UI/UX Design"
                        description="Desain antarmuka yang intuitif dan estetis, berfokus pada pengalaman pengguna yang mulus dan konversi tinggi."
                        delay={0.1}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                                className="relative flex items-center gap-4"
                            >
                                <motion.div
                                    animate={{ x: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="p-4 rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <ArrowRightLeft className="text-emerald-400 w-8 h-8" />
                                </motion.div>
                                <motion.div
                                    className="absolute left-full ml-2 px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full whitespace-nowrap"
                                    animate={{ scale: [0.9, 1.1, 0.9] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    User Flow
                                </motion.div>
                            </motion.div>
                        </div>
                    </BentoItem>

                    {/* Item 3: SEO & Analytics (Matches "Reports") */}
                    <BentoItem
                        title="SEO & Analytics"
                        description="Optimasi mesin pencari dan analisis data mendalam untuk memastikan visibilitas maksimal dan keputusan berbasis data."
                        delay={0.2}
                    >
                        <div className="flex items-end justify-center gap-2 h-[100px] w-full">
                            {[40, 70, 50, 90, 60].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                                    className="w-8 bg-gradient-to-t from-emerald-500/10 to-emerald-500 rounded-t-lg"
                                    viewport={{ once: true }}
                                />
                            ))}
                        </div>
                    </BentoItem>

                    {/* Item 4: Maintenance & Security (Matches "Secure Storage") */}
                    <BentoItem
                        title="Maintenance & Security"
                        description="Pemeliharaan rutin dan perlindungan keamanan tingkat lanjut untuk melindungi aset digital Anda dari ancaman."
                        delay={0.3}
                    >
                        <div className="relative flex items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }} // Ripple effect
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md"
                            />
                            <div className="relative z-10 p-5 rounded-full bg-[#111118] border border-emerald-500/30">
                                <ShieldCheck className="w-10 h-10 text-emerald-400" />
                            </div>
                            {/* Orbiting particles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <div className="absolute -top-4 left-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" />
                            </motion.div>
                        </div>
                    </BentoItem>

                    {/* Item 5: Mobile & Cross-Platform (Matches "Global Currency") */}
                    <BentoItem
                        title="Mobile & Cross-Platform"
                        description="Aplikasi mobile responsif yang berjalan mulus di iOS dan Android, memperluas jangkauan bisnis Anda ke pengguna smartphone."
                        delay={0.4}
                    >
                        <div className="relative flex items-center justify-center w-full">
                            <motion.div
                                initial={{ rotateY: 0 }}
                                whileHover={{ rotateY: 180 }}
                                transition={{ duration: 0.6 }}
                                className="relative w-full max-w-[200px] h-[80px] bg-white/5 border border-white/10 rounded-xl flex items-center justify-between px-4 overflow-hidden"
                            >
                                <div className="flex items-center gap-3">
                                    <Globe className="w-8 h-8 text-emerald-500" />
                                    <div>
                                        <div className="h-2 w-12 bg-white/20 rounded-full mb-1" />
                                        <div className="h-2 w-8 bg-white/10 rounded-full" />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-emerald-400 font-mono-jb text-sm">iOS/Android</div>
                                </div>
                            </motion.div>
                        </div>
                    </BentoItem>

                </div>
            </div>
        </section>
    );
};

export default Products;
