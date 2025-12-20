import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: 1,
        title: "Website Company Profile",
        description: "Website untuk menampilkan identitas perusahaan, layanan, visi, dan informasi kontak secara profesional guna meningkatkan kredibilitas bisnis.",
        suitable: "Perusahaan, Startup, Organisasi, Instansi.",
        image: "company_profile_ui.png"
    },
    {
        id: 2,
        title: "Website UMKM & Bisnis Lokal",
        description: "Website sederhana dan informatif untuk membantu UMKM tampil online, menjangkau pelanggan, dan mempermudah komunikasi.",
        suitable: "Toko, Jasa Lokal, Kuliner, Usaha Rumahan.",
        image: "umkm_business_ui.png"
    },
    {
        id: 3,
        title: "Website Landing Page",
        description: "Website satu halaman yang dirancang khusus untuk promosi produk, layanan, atau kampanye tertentu dengan fokus pada konversi.",
        suitable: "Iklan, Peluncuran Produk, Promosi Jasa.",
        image: "landing_page_ui.png"
    },
    {
        id: 4,
        title: "Website Toko Online (E-Commerce)",
        description: "Website penjualan online dengan katalog produk, sistem pemesanan, dan integrasi pembayaran untuk mendukung aktivitas jual beli.",
        suitable: "Bisnis Retail, Brand Produk, Reseller.",
        image: "ecommerce_ui.png"
    },
    {
        id: 5,
        title: "Website Personal & Portofolio",
        description: "Website personal untuk menampilkan profil, karya, pengalaman, dan pencapaian secara profesional.",
        suitable: "Freelancer, Kreator, Profesional Individu.",
        image: "personal_portfolio_ui.png"
    },
    {
        id: 6,
        title: "Website Custom & Sistem Khusus",
        description: "Website dengan fitur khusus sesuai kebutuhan bisnis, tidak terbatas pada struktur website standar.",
        suitable: "Sistem Internal, Platform Layanan, Kebutuhan Spesifik.",
        image: "custom_system_ui.png"
    },
    {
        id: 7,
        title: "Website Organisasi & Komunitas",
        description: "Website untuk menyampaikan informasi, kegiatan, dan dokumentasi organisasi atau komunitas.",
        suitable: "Komunitas, Yayasan, Organisasi Sosial.",
        image: "company_profile_ui.png"
    },
    {
        id: 8,
        title: "Redesign & Pengembangan Website",
        description: "Layanan pembaruan tampilan dan fungsi website lama agar lebih modern, cepat, dan relevan dengan kebutuhan saat ini.",
        suitable: "Bisnis yang sudah memiliki website namun perlu peningkatan.",
        image: "custom_system_ui.png"
    }
];

const AnimatedItem = ({ children, delay = 0, index, isSelected, onClick }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1, triggerOnce: false });

    return (
        <motion.div
            ref={ref}
            data-index={index}
            onClick={onClick}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay }}
            className="mb-4 cursor-pointer"
        >
            {children}
        </motion.div>
    );
};

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
        <div className={`relative w-full max-w-[900px] mx-auto ${className}`}>
            <div
                ref={listRef}
                className={`max-h-[800px] overflow-y-auto px-4 py-12 ${displayScrollbar
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
                                className={`relative border rounded-4xl overflow-hidden transition-all duration-700 ${isSelected
                                    ? "bg-emerald-500/3 border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.08)]"
                                    : "bg-white/1 border-white/5 hover:border-emerald-500/20"
                                    }`}
                            >
                                <div className="p-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${isSelected ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-white/5 border-white/10'
                                                }`}>
                                                <span className={`text-xs font-mono font-bold ${isSelected ? 'text-black' : 'text-neutral-500'}`}>
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <h3 className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-500 ${isSelected ? 'text-white' : 'text-neutral-400'}`}>
                                                {service.title}
                                            </h3>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isSelected ? 180 : 0, scale: isSelected ? 1.2 : 1 }}
                                            className={isSelected ? 'text-emerald-400' : 'text-neutral-700'}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <div className="mt-8 pt-8 border-t border-white/5 grid lg:grid-cols-[1.2fr_1fr] gap-10">
                                                    <div className="space-y-6">
                                                        <motion.p
                                                            initial={{ y: 10, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.2 }}
                                                            className="text-neutral-400 leading-relaxed text-sm md:text-base"
                                                        >
                                                            {service.description}
                                                        </motion.p>

                                                        <motion.div
                                                            initial={{ y: 10, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                            className="bg-emerald-500/5 rounded-2xl p-5 border border-emerald-500/10 backdrop-blur-sm"
                                                        >
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <div className="w-1 h-3 bg-emerald-400 rounded-full" />
                                                                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-emerald-400">
                                                                    Cocok Untuk:
                                                                </span>
                                                            </div>
                                                            <p className="text-neutral-300 text-xs md:text-sm font-medium leading-relaxed">
                                                                {service.suitable}
                                                            </p>
                                                        </motion.div>

                                                        <motion.button
                                                            initial={{ y: 10, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.4 }}
                                                            whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
                                                            whileTap={{ scale: 0.98 }}
                                                            className="w-full py-4 bg-emerald-500 text-black rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                                                        >
                                                            Konsultasi Sekarang
                                                        </motion.button>
                                                    </div>

                                                    <motion.div
                                                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.3, duration: 0.5 }}
                                                        className="relative aspect-4/3 rounded-3xl overflow-hidden border border-white/10 group/img"
                                                    >
                                                        <img
                                                            src={service.image}
                                                            alt={service.title}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                                                            onError={(e) => {
                                                                e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                                                            }}
                                                        />
                                                        <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-transparent to-transparent opacity-80" />

                                                        {/* Floating Tag */}
                                                        <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                                                            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Preview Design</span>
                                                            <div className="flex gap-1">
                                                                <div className="w-1 h-1 rounded-full bg-emerald-400" />
                                                                <div className="w-1 h-1 rounded-full bg-emerald-400/40" />
                                                                <div className="w-1 h-1 rounded-full bg-emerald-400/40" />
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
