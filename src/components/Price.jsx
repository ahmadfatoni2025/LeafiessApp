import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowUpRight, Sparkles } from 'lucide-react';

const pricingPlans = [
    {
        name: "Starter",
        tagline: "Landing Page Kilat",
        price: { monthly: "Rp1.4jt", yearly: "Rp1.2jt" },
        description: "Sekali bayar / maintenance tahunan",
        features: [
            "Waktu Live: ~2-3 Hari",
            "Kustomisasi: Template Based",
            "Sistem Login: Tanpa Sistem Login",
            "Domain & Hosting: 1 Tahun Gratis",
            "Cocok Untuk: Personal & UMKM"
        ],
        cta: "Pilih Starter",
        recommended: false
    },
    {
        name: "Business Pro",
        tagline: "Custom Company Profile",
        price: { monthly: "Rp3.9jt", yearly: "Rp3.5jt" },
        description: "Investasi branding profesional",
        features: [
            "Waktu Live: 7-14 Hari Kerja",
            "Kustomisasi: Tinggi (Bebas Custom)",
            "Sistem Login: Dashboard Basic",
            "Fitur: SEO & Speed Optimized",
            "Cocok Untuk: Bisnis & Portfolio"
        ],
        cta: "Mulai Pro",
        recommended: true,
        badge: "Paling Populer"
    },
    {
        name: "Enterprise",
        tagline: "Full Custom System",
        price: { monthly: "Rp8.5jt", yearly: "Rp7.9jt" },
        description: "Solusi digital skala besar",
        features: [
            "Waktu Live: Sesuai Kompleksitas",
            "Kustomisasi: Ultra (Full Engineering)",
            "Sistem Login: Integrated Dashboard",
            "Security: SSL & Layered Security",
            "Cocok Untuk: Startup & Corporate"
        ],
        cta: "Konsultasi",
        recommended: false
    }
];

const Price = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

    return (
        <section id="pricing" className="py-32 px-4 relative overflow-hidden bg-black text-white">
            {/* Liquid Background Glows - Optimized with radial gradients instead of heavy blur filters */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.15, 0.2, 0.15],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] opacity-20 transform-gpu"
                    style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] opacity-20 transform-gpu"
                    style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)' }}
                />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Header Content */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-emerald-500 text-[10px] font-black mb-4 tracking-[0.4em] uppercase">Pricing Strategy</span>
                        <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic leading-[0.85] select-none">
                            <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-[#cbd5e1] to-[#64748b] drop-shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                                Pilih Paket Anda<span className="text-emerald-500">.</span>
                            </span>
                        </h2>
                        <p className="text-neutral-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                            Daftar sekarang, tingkatkan kapan saja. Setiap akun baru mendapatkan uji coba 14 hari fitur Pro kami.
                        </p>
                    </motion.div>

                </div>

                {/* High-End Integrated Comparison Matrix */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-6xl mx-auto mb-32 relative overflow-hidden"
                >
                    {/* Background Vertical Glow for Highlighted Column (Business Pro) */}
                    <div className="absolute top-0 bottom-0 left-[33.33%] right-[33.33%] bg-emerald-500/5 border-x border-white/10 pointer-events-none hidden lg:block z-0" />

                    <div className="overflow-x-auto rounded-[2.5rem] border border-white/5 bg-[#050505]/80 backdrop-blur-3xl relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                        <table className="w-full border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="p-12 w-1/4">
                                        <div className="text-left">
                                            <h4 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Matrix Layanan</h4>
                                            <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">Pilih<br />Tingkatan</h3>
                                        </div>
                                    </th>
                                    {pricingPlans.map((plan, idx) => (
                                        <th key={idx} className={`p-12 w-1/4 border-x border-white/5 ${plan.recommended ? 'bg-emerald-500/3 relative' : ''}`}>
                                            <div className="text-center">
                                                {plan.badge && (
                                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[9px] font-black uppercase px-4 py-1.5 rounded-full shadow-[0_10px_20px_rgba(16,185,129,0.3)] whitespace-nowrap">
                                                        {plan.badge}
                                                    </span>
                                                )}
                                                <p className="text-neutral-500 text-[10px] font-black uppercase tracking-widest mb-4">{plan.tagline}</p>
                                                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-6">{plan.name}</h3>
                                                <div className="flex flex-col items-center">
                                                    <AnimatePresence mode="wait">
                                                        <motion.span
                                                            key={billingCycle}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            className="text-4xl font-black text-white tracking-tighter"
                                                        >
                                                            {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                                                        </motion.span>
                                                    </AnimatePresence>
                                                    <span className="text-neutral-600 text-[9px] font-bold uppercase tracking-widest mt-2">{plan.description}</span>
                                                </div>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: "Waktu Pengerjaan", values: ["2-3 Hari", "7-14 Hari", "Custom"] },
                                    { label: "Kustomisasi UI/UX", values: ["Template Based", "High-End Custom", "Structural Engineering"] },
                                    { label: "Optimasi SEO", values: [true, true, true] },
                                    { label: "Sistem Manajemen / CMS", values: [false, true, true] },
                                    { label: "Server & Hosting", values: [true, true, true] },
                                    { label: "Sertifikat SSL", values: [true, true, true] },
                                    { label: "Branding Kit", values: [false, true, true] },
                                    { label: "Dedicated Analyst", values: [false, false, true] },
                                ].map((row, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        className="border-b border-white/5 group/row hover:bg-white/1 transition-colors"
                                    >
                                        <td className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 group-hover/row:text-neutral-300">
                                            {row.label}
                                        </td>
                                        {row.values.map((val, idx) => (
                                            <td key={idx} className={`p-12 border-x border-white/5 ${pricingPlans[idx].recommended ? 'bg-emerald-500/3' : ''}`}>
                                                <div className="flex justify-center items-center">
                                                    {typeof val === 'boolean' ? (
                                                        val ? (
                                                            <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                                                <Check size={14} className="text-emerald-500" strokeWidth={4} />
                                                            </div>
                                                        ) : (
                                                            <X size={16} className="text-neutral-700" strokeWidth={2} />
                                                        )
                                                    ) : (
                                                        <span className={`text-[11px] font-bold uppercase tracking-tight ${pricingPlans[idx].recommended ? 'text-white' : 'text-neutral-500'}`}>
                                                            {val}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                        ))}
                                    </motion.tr>
                                ))}
                                <motion.tr
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    <td className="p-12 font-mono text-[9px] text-neutral-600 uppercase tracking-widest italic flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
                                        Ready to Build
                                    </td>
                                    {pricingPlans.map((plan, idx) => (
                                        <td key={idx} className={`p-12 ${plan.recommended ? 'bg-emerald-500/3' : ''}`}>
                                            <div className="flex justify-center">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${plan.recommended
                                                        ? 'bg-emerald-500 text-black shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)]'
                                                        : 'bg-white/5 text-white border border-white/10 hover:border-emerald-500/30'
                                                        }`}
                                                >
                                                    {plan.cta}
                                                    <ArrowUpRight size={14} strokeWidth={3} />
                                                </motion.button>
                                            </div>
                                        </td>
                                    ))}
                                </motion.tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500 backdrop-blur-md">
                        <Sparkles size={14} className="text-emerald-500" />
                        <span>Standar Performa Infrastruktur</span>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Scanlines */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_3px)]" />
        </section>
    );
};

export default Price;
