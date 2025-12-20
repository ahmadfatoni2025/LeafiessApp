import { motion } from 'framer-motion';
import { Check, X, Zap, Crown, Rocket, ArrowRight, Info } from 'lucide-react';

const pricingPlans = [
    {
        name: "Starter",
        tagline: "Presence",
        price: "500K",
        period: "/project",
        description: "Ideal untuk UMKM atau Landing Page promosi cepat.",
        features: ["1 Page Design", "Responsive", "SEO Basic", "1 Month Support"],
        icon: <Rocket className="w-5 h-5" />,
        recommended: false
    },
    {
        name: "Professional",
        tagline: "Growth",
        price: "3M",
        period: "/project",
        description: "Solusi lengkap untuk bisnis yang sedang berkembang.",
        features: ["Unlimited Pages", "E-Commerce", "Admin Panel", "6 Months Support"],
        icon: <Zap className="w-5 h-5" />,
        recommended: true
    },
    {
        name: "Enterprise",
        tagline: "Elite",
        price: "Custom",
        period: "",
        description: "Sistem custom dengan performa & keamanan enterprise.",
        features: ["Custom Logic", "High Security", "Cloud API", "Lifetime Support"],
        icon: <Crown className="w-5 h-5" />,
        recommended: false
    }
];

const featureComparison = [
    {
        category: "Main Features",
        features: [
            { name: "Pages / Sections", starter: "Up to 5", pro: "Unlimited", enterprise: "Unlimited" },
            { name: "Responsive Design", starter: true, pro: true, enterprise: true },
            { name: "Custom Domain", starter: ".my.id", pro: ".com / .net", enterprise: "Any (.id/.com)" },
            { name: "Content Strategy", starter: "-", pro: "Included", enterprise: "Full Strategy" },
        ]
    },
    {
        category: "Marketing & Analytics",
        features: [
            { name: "SEO Optimization", starter: "Basic", pro: "Advanced", enterprise: "Full Audit" },
            { name: "Google Analytics", starter: true, pro: true, enterprise: true },
            { name: "Facebook Pixel", starter: false, pro: true, enterprise: true },
            { name: "Email Marketing", starter: false, pro: "Integrasi", enterprise: "Automated" },
        ]
    },
    {
        category: "E-Commerce",
        features: [
            { name: "Payment Gateway", starter: false, pro: true, enterprise: true },
            { name: "Product Management", starter: false, pro: "Standard", enterprise: "Advanced DB" },
            { name: "Auto Resi Shipping", starter: false, pro: true, enterprise: true },
        ]
    },
    {
        category: "Support & Security",
        features: [
            { name: "Maintenance", starter: "1 Month", pro: "6 Months", enterprise: "Priority" },
            { name: "SSL Certificate", starter: true, pro: true, enterprise: true },
            { name: "Server Setup", starter: "Shared", pro: "Cloud High", enterprise: "Dedicated" },
            { name: "Weekly Backup", starter: false, pro: true, enterprise: true },
        ]
    }
];

const Price = () => {
    return (
        <section id="pricing" className="py-32 px-4 relative overflow-hidden bg-black text-white">
            {/* Background branding text */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
                <h1 className="text-[20vw] font-black leading-none m-0 tracking-tighter text-white opacity-[0.02]">
                    SELECT_PLAN
                </h1>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter italic uppercase leading-none">
                            Pricing<span className="text-emerald-500">.</span>
                        </h2>
                        <p className="text-neutral-500 text-lg max-w-2xl mx-auto font-medium">
                            Pilih rencana yang tepat untuk bisnis Anda. Transparan, terukur, dan premium.
                        </p>
                    </motion.div>
                </div>

                {/* Top 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-10 rounded-[40px] border backdrop-blur-3xl transition-all duration-700 group ${plan.recommended
                                    ? "bg-emerald-500/5 border-emerald-500/30 shadow-[0_40px_100px_-20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/50"
                                    : "bg-white/[0.02] border-white/5 hover:border-emerald-500/20"
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 right-10 bg-emerald-500 text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-10">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:rotate-12 ${plan.recommended ? 'bg-emerald-500 border-emerald-400 text-black' : 'bg-white/5 border-white/10 text-emerald-400'
                                    }`}>
                                    {plan.icon}
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">{plan.name}</h3>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-5xl font-black text-white">{plan.price}</span>
                                    <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">{plan.period}</span>
                                </div>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-12">
                                {plan.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                            <Check size={10} className="text-emerald-500" strokeWidth={4} />
                                        </div>
                                        <span className="text-xs text-neutral-300 font-bold uppercase tracking-wider">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 ${plan.recommended
                                        ? "bg-emerald-500 text-black shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-400"
                                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                                    }`}
                            >
                                Get Started
                                <ArrowRight size={14} />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Comparison Table */}
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col mb-12">
                        <div className="flex items-center gap-3 mb-2">
                            <Info size={16} className="text-emerald-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500/60">Metric Comparison Matrix</span>
                        </div>
                        <h3 className="text-4xl font-black italic tracking-tighter text-white uppercase">Feature Details<span className="text-emerald-500">_</span></h3>
                    </div>

                    <div className="border border-white/10 rounded-[32px] overflow-hidden bg-white/[0.01] backdrop-blur-xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/[0.02]">
                                        <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Category / Feature</th>
                                        <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 text-center">Starter</th>
                                        <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 text-center bg-emerald-500/5">Pro</th>
                                        <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 text-center">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {featureComparison.map((cat, i) => (
                                        <>
                                            <tr key={`cat-${i}`} className="bg-white/5">
                                                <td colSpan={4} className="px-8 py-4 text-[9px] font-black uppercase tracking-[0.5em] text-emerald-500/40">
                                                    // {cat.category}
                                                </td>
                                            </tr>
                                            {cat.features.map((feat, j) => (
                                                <tr key={`feat-${j}`} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                                    <td className="p-6">
                                                        <span className="text-xs font-bold text-neutral-300 uppercase tracking-widest">{feat.name}</span>
                                                    </td>
                                                    <td className="p-6 text-center">
                                                        {renderTableCell(feat.starter)}
                                                    </td>
                                                    <td className="p-6 text-center bg-emerald-500/[0.02]">
                                                        {renderTableCell(feat.pro)}
                                                    </td>
                                                    <td className="p-6 text-center">
                                                        {renderTableCell(feat.enterprise)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer Insight */}
                <div className="mt-20 text-center">
                    <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.4em]">
                        All prices are initial estimates. Final quotes depend on technical complexity.
                    </p>
                </div>
            </div>

            {/* Scanlines Overlay matching Hero/Profile */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_3px)]" />
        </section>
    );
};

const renderTableCell = (val) => {
    if (typeof val === 'boolean') {
        return val ? <Check size={16} className="text-emerald-500 mx-auto" strokeWidth={3} /> : <X size={16} className="text-neutral-700 mx-auto" />;
    }
    return <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{val}</span>;
}

export default Price;
