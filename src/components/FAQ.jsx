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
            className="flex flex-col md:flex-row gap-8 py-10 md:py-16 cursor-pointer relative"
            onClick={onToggle}
        >
            <div className="md:w-1/4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-2 py-0.5 rounded tracking-widest uppercase">
                        {faq.category}
                    </span>
                    <span className="text-neutral-600 text-[10px] font-bold uppercase tracking-widest">
                        {faq.time}
                    </span>
                </div>
                <div className="text-neutral-500 text-[10px] whitespace-nowrap font-medium mt-4">
                    LEAFIEES SUPPORT • {faq.date}
                </div>
            </div>

            <div className="flex-1">
                <h3 className={`text-2xl md:text-5xl font-black tracking-tighter leading-tight transition-all duration-700
                    ${isOpen ? 'text-emerald-500' : 'text-neutral-200 group-hover:text-white'}`}>
                    {faq.question}
                </h3>

                <AnimatePresence>
                    {isOpen && (
                        <motion.p
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 32 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
                        >
                            {faq.answer}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            <div className="absolute right-0 top-10 md:top-16">
                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-700
                    ${isOpen ? 'bg-emerald-500 border-emerald-500 text-black rotate-45' : 'text-neutral-600 group-hover:border-emerald-500 group-hover:text-emerald-500'}`}>
                    <Plus size={24} />
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
        <section id="faq" className="py-24 md:py-40 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-6xl md:text-[140px] font-black tracking-tighter leading-none italic uppercase">
                            FAQs <span className="text-emerald-500 font-normal not-italic opacity-40 text-4xl md:text-8xl">({FAQ_DATA.length})</span>
                        </h1>
                    </motion.div>

                    <div className="flex flex-col gap-6 md:text-right">
                        <div className="flex flex-wrap gap-2 md:justify-end">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500
                                    ${activeCategory === cat
                                            ? "bg-emerald-500 text-black shadow-[0_10px_20px_rgba(16,185,129,0.3)]"
                                            : "bg-white/5 border border-white/10 text-neutral-500 hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Filter: All Questions</span>
                    </div>
                </div>

                <div className="border-t border-white/10">
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


            {/* Scrolling Marquee - DARE TO CHANGE Style */}
            <div className="mt-40 border-y border-emerald-500/20 bg-emerald-500 py-6 overflow-hidden relative">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap items-center gap-12"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="text-black text-2xl md:text-5xl font-black uppercase tracking-tighter">LEAFIEES INC. DARE TO INNOVATE</span>
                            <span className="text-black"><ArrowUpRight size={40} /></span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
