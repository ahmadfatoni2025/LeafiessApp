import { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';


const FAQ_DATA = [
    {
        category: "Proses",
        time: "3-7 Hari",
        question: "Berapa lama estimasi pengerjaan website di Leafiess?",
        answer: "Durasi pengerjaan standar kami adalah 3 hingga 7 hari kerja. Ini mencakup tahap desain UI/UX hingga pengembangan sistem fungsional, tergantung pada kompleksitas fitur yang diminta.",
        date: "21.12.2024"
    },
    {
        category: "Teknis",
        time: "Mobile Ready",
        question: "Apakah website sudah dioptimasi untuk perangkat mobile?",
        answer: "Mutlak. Kami menerapkan standar 'Mobile-First' dan arsitektur responsif cair (Liquid Architecture) untuk memastikan website Anda tampil sempurna di smartphone, tablet, maupun desktop.",
        date: "20.12.2024"
    },
    {
        category: "Proses",
        time: "Scale Ready",
        question: "Dapatkah saya melakukan revisi pada desain yang dibuat?",
        answer: "Ya, kami menyediakan sesi revisi khusus untuk memastikan hasil akhir selaras 100% dengan visi brand Anda. Kepuasan estetika dan fungsi adalah prioritas utama kami.",
        date: "19.12.2024"
    },
    {
        category: "Teknis",
        time: "SEO Core",
        question: "Bagaimana dengan optimasi SEO pada website saya?",
        answer: "Setiap baris kode yang kami tulis sudah dioptimasi secara semantik untuk mesin pencari. Kami juga mengonfigurasi On-Page SEO dasar agar website Anda lebih mudah ditemukan oleh Google.",
        date: "18.12.2024"
    },
    {
        category: "Harga",
        time: "DP 50%",
        question: "Bagaimana sistem pembayaran untuk proyek di Leafiess Inc?",
        answer: "Kami menggunakan sistem DP 50% di awal proyek sebagai komitmen pengerjaan, dan sisa 50% setelah website selesai divalidasi dan siap untuk dipublikasikan secara live.",
        date: "17.12.2024"
    },
    {
        category: "Lainnya",
        time: "24/7 Live",
        question: "Apakah Leafiess menyediakan jasa maintenance website?",
        answer: "Ya, kami memberikan dukungan teknis pasca-produksi untuk memastikan sistem Anda berjalan tanpa hambatan, tetap aman, dan diperbarui sesuai standar teknologi terbaru.",
        date: "16.12.2024"
    }
];

const FAQItem = memo(({ faq, index, isOpen, onToggle }) => (
    <motion.div
        className="group border-b border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
    >
        <div
            className="flex flex-col md:flex-row gap-8 py-8 md:py-10 cursor-pointer relative"
            onClick={onToggle}
        >
            <div className="md:w-1/4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono-jb text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">
                        {faq.category}
                    </span>
                    <span className="text-[#5a5a72] font-mono-jb text-[10px] font-bold uppercase tracking-widest">
                        {faq.time}
                    </span>
                </div>
                <div className="font-mono-jb text-[#5a5a72] text-[9px] uppercase tracking-widest mt-4">
                    LEAFIEES SUPPORT • {faq.date}
                </div>
            </div>

            <div className="flex-1">
                <h3 className={`font-space text-xl md:text-3xl font-bold tracking-tight leading-tight transition-all duration-300
                    ${isOpen ? 'text-white' : 'text-[#D8D8E0] group-hover:text-emerald-400'}`}>
                    {faq.question}
                </h3>

                <AnimatePresence>
                    {isOpen && (
                        <motion.p
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[#9090A8] text-base font-normal leading-relaxed max-w-2xl font-space"
                        >
                            {faq.answer}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            <div className="absolute right-0 top-10 md:top-10">
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300
                    ${isOpen ? 'bg-emerald-500 border-emerald-500 text-black rotate-45' : 'border-[#ffffff17] text-[#5a5a72] group-hover:border-emerald-500/50 group-hover:text-emerald-400'}`}>
                    <Plus size={20} />
                </div>
            </div>
        </div>
    </motion.div>
));
FAQItem.displayName = "FAQItem";

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [openIndex, setOpenIndex] = useState(null);

    const categories = ["Semua", "Proses", "Teknis", "Harga", "Lainnya"];

    const filteredFaqs = activeCategory === "Semua"
        ? FAQ_DATA
        : FAQ_DATA.filter(faq => faq.category === activeCategory);

    const handleToggle = useCallback((index) => {
        setOpenIndex(prev => prev === index ? null : index);
    }, []);

    return (
        <section id="faq" className="py-24 md:py-40 bg-[#050508] text-white relative overflow-hidden border-b border-[#ffffff17]">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 font-mono-jb text-[0.63rem] tracking-[0.14em] text-[#9090A8] mb-4 px-3 py-1 border border-[#ffffff17] rounded-full">
                            <span className="text-[#5a5a72]">//</span> faq_center
                        </div>
                        <h1 className="font-space text-5xl md:text-7xl font-bold tracking-tight text-white leading-[0.9]">
                            Tanya Jawab<span className="text-emerald-500">.</span>
                        </h1>
                    </motion.div>

                    <div className="flex flex-col gap-6 md:text-right">
                        <div className="flex flex-wrap gap-2 md:justify-end">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-full font-mono-jb text-[11px] font-bold uppercase tracking-wider transition-all duration-300
                                    ${activeCategory === cat
                                            ? "bg-emerald-500 text-black shadow-[0_10px_20px_rgba(16,185,129,0.2)]"
                                            : "bg-[#13131a] border border-[#ffffff17] text-[#9090A8] hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <span className="font-mono-jb text-[10px] uppercase tracking-[0.2em] text-[#5a5a72]">Paling sering ditanyakan ({filteredFaqs.length})</span>
                    </div>
                </div>

                <div className="border-t border-[#ffffff17]">
                    {filteredFaqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>


            {/* Scrolling Marquee - Updated Style */}
            <div className="mt-40 border-y border-[#ffffff17] bg-[#0c0c12] py-4 overflow-hidden relative">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap items-center gap-16"
                >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="font-space text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/40 text-4xl font-bold uppercase tracking-tight">LEAFIESS INC. DARE TO INNOVATE</span>
                            <span className="text-[#ffffff2e]"><ArrowUpRight size={24} /></span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
