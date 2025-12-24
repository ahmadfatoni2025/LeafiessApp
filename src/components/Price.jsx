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
        cta: "Pilih Starter",
        recommended: false
    },
    {
        name: "Business Pro",
        tagline: "Custom Company Profile",
        price: { monthly: "Rp3.4jt", yearly: "Rp3.2jt" },
        description: "Investasi branding profesional",
        features: ["Waktu Live: 7-14 Hari Kerja", "Kustomisasi: Tinggi (Bebas Custom)", "Sistem Login: Dashboard Basic", "Fitur: SEO & Speed Optimized", "Cocok Untuk: Bisnis & Portfolio"],
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
        className="border-b border-white/5 hover:bg-white/2 transition-colors"
    >
        <td className="p-6 text-[9px] font-black uppercase tracking-widest text-neutral-500">
            {label}
        </td>
        {values.map((val, idx) => (
            <td key={idx} className={`p-6 border-x border-white/5 ${pricingPlans[idx].recommended ? 'bg-emerald-500/3' : ''}`}>
                <div className="flex justify-center items-center">
                    {typeof val === 'boolean' ? (
                        val ? <Check size={14} className="text-emerald-500" strokeWidth={4} /> : <X size={14} className="text-neutral-700" strokeWidth={2} />
                    ) : (
                        <span className={`text-[10px] font-bold uppercase ${pricingPlans[idx].recommended ? 'text-white' : 'text-neutral-500'}`}>
                            {val}
                        </span>
                    )}
                </div>
            </td>
        ))}
    </motion.tr>
));

const Price = () => {
    const [billingCycle] = useState('monthly');

    return (
        <section id="pricing" className="py-24 px-4 relative overflow-hidden bg-black text-white">
            {/* Optimized Static Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#061a12_0%,#000_100%)] opacity-40" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-emerald-500 text-[9px] font-black mb-3 tracking-[0.3em] uppercase block">Pricing Strategy</span>
                        <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase italic italic-leading-tight">
                            PILIH PAKET ANDA<span className="text-emerald-500">.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Mobile Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mb-12">
                    {pricingPlans.map((plan, idx) => (
                        <div key={idx} className={`p-6 rounded-3xl border ${plan.recommended ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 bg-white/5'} backdrop-blur-xl relative overflow-hidden`}>
                            {plan.badge && <div className="absolute top-4 right-4 bg-emerald-500 text-black text-[8px] font-black px-3 py-1 rounded-full">{plan.badge}</div>}
                            <h3 className="text-xl font-black mb-2 uppercase italic">{plan.name}</h3>
                            <div className="text-3xl font-black mb-6">{plan.price.monthly}</div>
                            <ul className="space-y-3 mb-8">
                                {plan.features.slice(0, 4).map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[10px] text-neutral-400 font-bold uppercase italic"><Check size={12} className="text-emerald-500" /> {f}</li>
                                ))}
                            </ul>
                            <button className="w-full py-4 bg-white/5 hover:bg-emerald-500 hover:text-black transition-all rounded-xl text-[9px] font-black uppercase tracking-widest border border-white/10">Pilih Paket</button>
                        </div>
                    ))}
                </div>

                {/* Desktop Comparison Table */}
                <div className="hidden lg:block max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-white/5 bg-neutral-900/50 backdrop-blur-3xl shadow-2xl">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="p-10 text-left w-1/4">
                                    <h4 className="text-emerald-500 text-[9px] font-black uppercase tracking-widest mb-1">Matrix</h4>
                                    <h3 className="text-xl font-black text-white italic tracking-tighter uppercase">Layanan</h3>
                                </th>
                                {pricingPlans.map((plan, idx) => (
                                    <th key={idx} className={`p-10 w-1/4 border-x border-white/5 ${plan.recommended ? 'bg-emerald-500/2' : ''}`}>
                                        <div className="text-center">
                                            <p className="text-neutral-500 text-[8px] font-black uppercase tracking-widest mb-2">{plan.tagline}</p>
                                            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-4">{plan.name}</h3>
                                            <div className="text-3xl font-black text-white tracking-tighter">{plan.price.monthly}</div>
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
                            <tr>
                                <td className="p-10" />
                                {pricingPlans.map((plan, idx) => (
                                    <td key={idx} className={`p-10 border-x border-white/5 ${plan.recommended ? 'bg-emerald-500/2' : ''}`}>
                                        <button className={`w-full py-4 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${plan.recommended ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
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
