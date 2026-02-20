import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowUpRight } from 'lucide-react';

const pricingPlans = [
    {
        name: "Starter",
        tagline: "Landing Page Kilat",
        price: { monthly: "Rp1.4jt", yearly: "Rp1.2jt" },
        description: "Sekali bayar / maintenance tahunan",
        features: ["Waktu Live: ~2-3 Hari", "Kustomisasi: Template Based", "Sistem Login: Tanpa Sistem Login", "Domain & Hosting: 1 Tahun Gratis", "Cocok Untuk: Personal & UMKM"],
        details: {
            process: "2-3 Hari Kerja",
            revisions: "1x Major Revision",
            support: "Email Only",
            tech: "Static Build (HTML/CSS)",
            maintenance: "Free 1 Bulan"
        },
        cta: "Pilih Starter",
        recommended: false
    },
    {
        name: "Business Pro",
        tagline: "Custom Company Profile",
        price: { monthly: "Rp3.4jt", yearly: "Rp3.2jt" },
        description: "Investasi branding profesional",
        features: ["Waktu Live: 7-14 Hari Kerja", "Kustomisasi: Tinggi (Bebas Custom)", "Sistem Login: Dashboard Basic", "Fitur: SEO & Speed Optimized", "Cocok Untuk: Bisnis & Portfolio"],
        details: {
            process: "7-14 Hari Kerja",
            revisions: "3x Major Revisions",
            support: "Priority WhatsApp",
            tech: "React / Next.js",
            maintenance: "Free 3 Bulan"
        },
        cta: "Mulai Pro",
        recommended: true,
        badge: "BEST"
    },
    {
        name: "Enterprise",
        tagline: "Full Custom System",
        price: { monthly: "Relatif", yearly: "Rp7.9jt" },
        description: "Solusi digital skala besar",
        features: ["Waktu Live: Sesuai Kompleksitas", "Kustomisasi: Ultra (Full Engineering)", "Sistem Login: Integrated Dashboard", "Security: SSL & Layered Security", "Cocok Untuk: Startup & Corporate"],
        details: {
            process: "Timeline Custom",
            revisions: "Unlimited during dev",
            support: "24/7 Dedicated Team",
            tech: "Full Stack Architecture",
            maintenance: "Contract Based"
        },
        cta: "Konsultasi",
        recommended: false
    }
];

const PriceRow = memo(({ label, values, index }) => (
    <motion.tr
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="border-b border-[#ffffff17] hover:bg-[#ffffff05] transition-colors bg-[#111118]"
    >
        <td className="p-6 font-mono-jb text-[10px] uppercase tracking-widest text-[#5a5a72]">
            {label}
        </td>
        {values.map((val, idx) => (
            <td key={idx} className={`p-6 border-x border-[#ffffff17] ${pricingPlans[idx].recommended ? 'bg-[#ffffff03]' : ''}`}>
                <div className="flex justify-center items-center">
                    {typeof val === 'boolean' ? (
                        val ? <Check size={16} className="text-emerald-500" strokeWidth={2.5} /> : <X size={16} className="text-[#5a5a72]" strokeWidth={2} />
                    ) : (
                        <span className={`font-space text-xs font-bold uppercase ${pricingPlans[idx].recommended ? 'text-white' : 'text-[#9090A8]'}`}>
                            {val}
                        </span>
                    )}
                </div>
            </td>
        ))}
    </motion.tr>
));

const Price = () => {
    const [viewMode, setViewMode] = useState('simple'); // 'simple' or 'detailed'

    return (
        <section id="pricing" className="py-24 px-4 relative overflow-hidden bg-[#050508] border-b border-[#ffffff17]">
            {/* Optimized Static Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#061a12_0%,#050508_100%)] opacity-40" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-2 font-mono-jb text-[0.63rem] tracking-[0.14em] text-[#9090A8] mb-4 px-3 py-1 border border-[#ffffff17] rounded-full">
                            <span className="text-[#5a5a72]">//</span> harga_paket
                        </div>
                        <h2 className="font-space text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white text-center">
                            PILIH PAKET ANDA<span className="text-emerald-500">.</span>
                        </h2>

                        {/* Toggle Switch */}
                        <div className="flex justify-center mt-8">
                            <div className="bg-[#111118] border border-[#ffffff17] p-1 rounded-full flex relative">
                                <motion.div
                                    className="absolute top-1 bottom-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
                                    initial={false}
                                    animate={{
                                        x: viewMode === 'simple' ? 0 : '100%',
                                        width: '50%'
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                                <button
                                    onClick={() => setViewMode('simple')}
                                    className={`relative z-10 px-6 py-2 rounded-full text-[10px] font-mono-jb font-bold uppercase tracking-widest transition-colors ${viewMode === 'simple' ? 'text-emerald-400' : 'text-[#5a5a72] hover:text-[#9090A8]'}`}
                                >
                                    Simple View
                                </button>
                                <button
                                    onClick={() => setViewMode('detailed')}
                                    className={`relative z-10 px-6 py-2 rounded-full text-[10px] font-mono-jb font-bold uppercase tracking-widest transition-colors ${viewMode === 'detailed' ? 'text-emerald-400' : 'text-[#5a5a72] hover:text-[#9090A8]'}`}
                                >
                                    Detail Mode
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mb-12">
                    {pricingPlans.map((plan, idx) => (
                        <div key={idx} className={`p-8 rounded-[20px] border ${plan.recommended ? 'border-emerald-500/20 bg-[#13131a] shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)]' : 'border-[#ffffff17] bg-[#111118]'} relative overflow-hidden`}>
                            {plan.badge && <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase font-mono-jb font-bold px-3 py-1 rounded-full">{plan.badge}</div>}
                            <h3 className="font-space text-xl font-bold mb-2 text-white">{plan.name}</h3>
                            <div className="font-space text-3xl font-bold mb-6 text-white">{plan.price.monthly}</div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.slice(0, 4).map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[11px] text-[#9090A8] font-mono-jb"><Check size={12} className="text-emerald-500" /> {f}</li>
                                ))}
                            </ul>

                            <AnimatePresence>
                                {viewMode === 'detailed' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden mb-6 border-t border-[#ffffff17] pt-4"
                                    >
                                        <div className="space-y-3">
                                            {Object.entries(plan.details).map(([key, value]) => (
                                                <div key={key} className="flex justify-between items-center text-[10px]">
                                                    <span className="font-mono-jb text-[#5a5a72] uppercase tracking-wider">{key}</span>
                                                    <span className="font-bold text-white text-right">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button className="w-full py-3.5 bg-white text-black hover:bg-emerald-400 hover:text-black transition-all rounded-lg text-[10px] font-space font-bold uppercase tracking-widest">Pilih Paket</button>
                        </div>
                    ))}
                </div>

                {/* Desktop Comparison Table */}
                <div className="hidden lg:block max-w-6xl mx-auto overflow-hidden rounded-[20px] border border-[#ffffff17] bg-[#13131a]">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-[#ffffff17]">
                                <th className="p-8 text-left w-1/4">
                                    <h4 className="font-mono-jb text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2">Matrix</h4>
                                    <h3 className="font-space text-xl font-bold text-white tracking-tight">Layanan</h3>
                                </th>
                                {pricingPlans.map((plan, idx) => (
                                    <th key={idx} className={`p-8 w-1/4 border-x border-[#ffffff17] ${plan.recommended ? 'bg-[#ffffff05]' : 'bg-[#111118]'}`}>
                                        <div className="text-center">
                                            <p className="font-mono-jb text-[#5a5a72] text-[9px] uppercase tracking-widest mb-3">{plan.tagline}</p>
                                            <h3 className="font-space text-xl font-bold text-white tracking-tight mb-4">{plan.name}</h3>
                                            <div className="font-space text-3xl font-bold text-white tracking-tight">{plan.price.monthly}</div>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { label: "Waktu Pengerjaan", values: ["7-8 Hari", "14-21 Hari", "Custom"] },
                                { label: "Tech Stack", values: ["Static HTML/JS", "React + Next.js", "Full Architecture"] },
                                { label: "Optimasi SEO", values: [true, true, true] },
                                { label: "CMS Integration", values: [false, true, true] },
                                { label: "Cloud Hosting", values: [true, true, true] },
                                { label: "Security (SSL)", values: [true, true, true] },
                            ].map((row, i) => (
                                <PriceRow key={i} {...row} index={i} />
                            ))}

                            {/* Detailed Rows (Conditionally Rendered) */}
                            {viewMode === 'detailed' && (
                                <>
                                    <tr className="bg-[#0c0c12] border-y border-[#ffffff17]">
                                        <td colSpan={4} className="p-4 text-center">
                                            <span className="font-mono-jb text-[10px] text-emerald-500 uppercase tracking-[0.3em]">Detailed Specifications</span>
                                        </td>
                                    </tr>
                                    {[
                                        { label: "Technical Support", values: ["Email Standard", "Priority WA", "Dedicated 24/7"] },
                                        { label: "Revision Rounds", values: ["1x Major", "3x Major", "Unlimited"] },
                                        { label: "Maintenance", values: ["1 Month Free", "3 Months Free", "Contract"] },
                                        { label: "Training", values: ["Video Guide", "Live 1x", "Full Team Training"] },
                                    ].map((row, i) => (
                                        <PriceRow key={`detail-${i}`} {...row} index={i + 10} />
                                    ))}
                                </>
                            )}

                            <tr>
                                <td className="p-8 bg-[#111118]" />
                                {pricingPlans.map((plan, idx) => (
                                    <td key={idx} className={`p-8 border-x border-[#ffffff17] ${plan.recommended ? 'bg-[#ffffff05]' : 'bg-[#111118]'}`}>
                                        <button className={`w-full py-4 rounded-lg text-[11px] font-space font-bold uppercase tracking-widest transition-all ${plan.recommended ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 hover:translate-y-[-2px]' : 'bg-white/5 text-white hover:bg-white/10 border border-[#ffffff17]'}`}>
                                            Order {plan.name}
                                        </button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Price;
