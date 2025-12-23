import React, { useRef, useState, useEffect, useCallback, memo } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const services = [
    {
        id: 1,
        title: "Website Company Profile",
        description: "Website untuk menampilkan identitas perusahaan, layanan, visi, dan informasi kontak secara profesional guna meningkatkan kredibilitas bisnis.",
        suitable: "Perusahaan, Startup, Organisasi, Instansi.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 2,
        title: "Website UMKM & Bisnis Lokal",
        description: "Website sederhana dan informatif untuk membantu UMKM tampil online, menjangkau pelanggan, dan mempermudah komunikasi.",
        suitable: "Toko, Jasa Lokal, Kuliner, Usaha Rumahan.",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 3,
        title: "Website Landing Page",
        description: "Website satu halaman yang dirancang khusus untuk promosi produk, layanan, atau kampanye tertentu dengan fokus pada konversi.",
        suitable: "Iklan, Peluncuran Produk, Promosi Jasa.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 4,
        title: "Website Toko Online (E-Commerce)",
        description: "Website penjualan online dengan katalog produk, sistem pemesanan, dan integrasi pembayaran untuk mendukung aktivitas jual beli.",
        suitable: "Bisnis Retail, Brand Produk, Reseller.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 5,
        title: "Website Personal & Portofolio",
        description: "Website personal untuk menampilkan profil, karya, pengalaman, dan pencapaian secara profesional.",
        suitable: "Freelancer, Kreator, Profesional Individu.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 6,
        title: "Website Custom & Sistem Khusus",
        description: "Website dengan fitur khusus sesuai kebutuhan bisnis, tidak terbatas pada struktur website standar.",
        suitable: "Sistem Internal, Platform Layanan, Kebutuhan Spesifik.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 7,
        title: "Website Organisasi & Komunitas",
        description: "Website untuk menyampaikan informasi, kegiatan, dan dokumentasi organisasi atau komunitas.",
        suitable: "Komunitas, Yayasan, Organisasi Sosial.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 8,
        title: "Redesign & Pengembangan Website",
        description: "Layanan pembaruan tampilan dan fungsi website lama agar lebih modern, cepat, dan relevan dengan kebutuhan saat ini.",
        suitable: "Bisnis yang sudah memiliki website namun perlu peningkatan.",
        image: "https://images.unsplash.com/photo-1581291518151-0107aa4c194a?auto=format&fit=crop&q=80&w=1200"
    }
];

const AnimatedItem = memo(({ children, delay = 0, index, isSelected, onClick }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1, triggerOnce: true });

    return (
        <motion.div
            ref={ref}
            data-index={index}
            onClick={onClick}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.4, delay: Math.min(delay, 0.4), ease: "easeOut" }}
            className="mb-4 cursor-pointer"
        >
            {children}
        </motion.div>
    );
});
AnimatedItem.displayName = "AnimatedItem";

const Products = ({
    className = "",
    displayScrollbar = true,
}) => {
    const listRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [topGradientOpacity, setTopGradientOpacity] = useState(0);
    const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

    const handleScroll = useCallback((e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        setTopGradientOpacity(Math.min(scrollTop / 50, 1));
        const bottomDistance = scrollHeight - (scrollTop + clientHeight);
        setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
    }, []);

    return (
        <div className={`relative w-full max-w-7xl mx-auto px-4 ${className}`}>
            <div
                ref={listRef}
                className={`max-h-[1200px] overflow-y-auto px-2 py-8 ${displayScrollbar
                    ? '[&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-emerald-500/20 [&::-webkit-scrollbar-thumb]:rounded-full'
                    : 'scrollbar-hide'
                    }`}
                onScroll={handleScroll}
            >
                {services.map((service, index) => {
                    const isSelected = selectedIndex === index;

                    return (
                        <AnimatedItem
                            key={service.id}
                            index={index}
                            delay={index * 0.1}
                            isSelected={isSelected}
                            onClick={() => setSelectedIndex(index === selectedIndex ? -1 : index)}
                        >
                            <motion.div
                                className={`relative border rounded-2xl md:rounded-[2.5rem] overflow-hidden transition-all duration-700 ${isSelected
                                    ? "bg-emerald-500/5 border-emerald-500/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
                                    : "bg-white/5 border-white/5 hover:border-emerald-500/20 hover:bg-white/10"
                                    }`}
                            >
                                <div className="p-6 md:p-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6 md:gap-10">
                                            <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${isSelected
                                                ? 'bg-emerald-500 border-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.4)] rotate-3'
                                                : 'bg-white/5 border-white/10'
                                                }`}>
                                                <span className={`text-xs md:text-lg font-black ${isSelected ? 'text-black' : 'text-neutral-500'}`}>
                                                    0{index + 1}
                                                </span>
                                            </div>
                                            <h3 className={`text-xl md:text-4xl font-black tracking-tighter transition-colors duration-500 ${isSelected ? 'text-white' : 'text-neutral-500'}`}>
                                                {service.title}
                                            </h3>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isSelected ? 180 : 0, scale: isSelected ? 1.3 : 1 }}
                                            className={isSelected ? 'text-emerald-500' : 'text-neutral-800'}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-8 md:h-8">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <div className="mt-10 md:mt-14 pt-10 md:pt-14 border-t border-white/5 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                                                    <div className="space-y-10">
                                                        <div className="space-y-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-px bg-emerald-500" />
                                                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Overview</span>
                                                            </div>
                                                            <motion.p
                                                                initial={{ y: 10, opacity: 0 }}
                                                                animate={{ y: 0, opacity: 1 }}
                                                                transition={{ delay: 0.2 }}
                                                                className="text-neutral-400 leading-relaxed text-sm md:text-xl font-medium"
                                                            >
                                                                {service.description}
                                                            </motion.p>
                                                        </div>

                                                        <motion.div
                                                            initial={{ y: 10, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                            className="bg-emerald-500/5 rounded-3xl p-6 md:p-8 border border-emerald-500/10 backdrop-blur-md"
                                                        >
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                                                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-neutral-400">
                                                                    Target Audience:
                                                                </span>
                                                            </div>
                                                            <p className="text-white text-sm md:text-lg font-bold leading-relaxed italic">
                                                                "{service.suitable}"
                                                            </p>
                                                        </motion.div>

                                                        <div className="flex flex-col sm:flex-row gap-4">
                                                            <motion.a
                                                                href="https://wa.me/6288233078885"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                initial={{ y: 10, opacity: 0 }}
                                                                animate={{ y: 0, opacity: 1 }}
                                                                transition={{ delay: 0.4 }}
                                                                whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
                                                                whileTap={{ scale: 0.98 }}
                                                                className="flex-1 py-5 bg-emerald-500 text-black rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all shadow-[0_20px_40px_rgba(16,185,129,0.2)] flex items-center justify-center gap-3"
                                                            >
                                                                Konsultasi Sekarang
                                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                                            </motion.a>
                                                        </div>
                                                    </div>

                                                    <motion.div
                                                        initial={{ scale: 0.9, opacity: 0, x: 20 }}
                                                        animate={{ scale: 1, opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.4, duration: 0.8 }}
                                                        className="relative aspect-4/3 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 group/img"
                                                    >
                                                        <OptimizedImage
                                                            src={service.image}
                                                            alt={service.title}
                                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />

                                                        {/* Floating Minimal Info */}
                                                        <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Preview Architecture</span>
                                                                <div className="flex -space-x-2">
                                                                    {[1, 2, 3].map(i => (
                                                                        <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-emerald-500/20 backdrop-blur-sm" />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </AnimatedItem>
                    );
                })}
            </div>

            {/* Ambient Overlays */}
            <div
                className="absolute top-0 left-0 right-0 h-[100px] bg-linear-to-b from-black/80 to-transparent pointer-events-none z-10"
                style={{ opacity: topGradientOpacity }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 h-[100px] bg-linear-to-t from-black/80 to-transparent pointer-events-none z-10"
                style={{ opacity: bottomGradientOpacity }}
            />
        </div>
    );
};

export default Products;
