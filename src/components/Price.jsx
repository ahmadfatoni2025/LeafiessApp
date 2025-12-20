import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';

const pricingPlans = [
    {
        name: "Basic",
        tagline: "For the basics",
        price: { monthly: "Rp2.999.-", yearly: "Rp2.999.-" },
        description: "Per agent per month",
        features: ["Basic speed", "10 GB storage", "Private key security", "No backups"],
        cta: "Join waitlist",
        recommended: false
    },
    {
        name: "Plus",
        tagline: "For the basics",
        price: { monthly: "Rp3.499.-", yearly: "Rp2.999.-" },
        description: "Per agent per month",
        features: ["Medium speed server", "100 GB storage", "VPN", "Other apps", "Advanced security", "24/7 backups"],
        cta: "Start trial",
        recommended: false
    },
    {
        name: "Premium",
        tagline: "For the basics",
        price: { monthly: "Rp5.499.-", yearly: "Rp4.999.-" },
        description: "Per agent per month",
        features: ["High speed server", "1 TB storage", "VPN", "Other apps", "Advanced security", "24/7 backups"],
        cta: "Start trial",
        badge: "10% discount",
        recommended: true
    }
];

const Price = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

    return (
        <section id="pricing" className="py-32 px-4 relative overflow-hidden bg-black text-white">
            {/* Liquid Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                        x: ['-10%', '10%', '-10%'],
                        y: ['-10%', '10%', '-10%']
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-emerald-600/20 blur-[150px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                        x: ['10%', '-10%', '10%'],
                        y: ['10%', '-10%', '10%']
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[150px] rounded-full"
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
                        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">
                            Choose Your Plan<span className="text-emerald-500">.</span>
                        </h2>
                        <p className="text-neutral-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                            Sign up now, upgrade anytime. Every new account gets a 14-day trial of our Pro features.
                        </p>
                    </motion.div>

                    {/* Dynamic Island Toggle */}
                    <div className="mt-12 group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center p-1.5 bg-neutral-900/80 backdrop-blur-3xl rounded-full border border-white/5 relative shadow-2xl"
                        >
                            <div className="relative flex items-center">
                                <button
                                    onClick={() => setBillingCycle('monthly')}
                                    className={`relative z-10 px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${billingCycle === 'monthly' ? 'text-black' : 'text-neutral-500 hover:text-white'}`}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setBillingCycle('yearly')}
                                    className={`relative z-10 px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${billingCycle === 'yearly' ? 'text-black' : 'text-neutral-500 hover:text-white'}`}
                                >
                                    Yearly
                                </button>

                                {/* The "Island" Slider */}
                                <motion.div
                                    layoutId="activeToggle"
                                    className="absolute inset-0 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                                    initial={false}
                                    animate={{
                                        x: billingCycle === 'monthly' ? 0 : '100%',
                                        width: '50%'
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bento Pricing Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-8 md:p-12 flex flex-col group transition-all duration-700 hover:bg-white/[0.03] ${index < 2 ? 'lg:border-r border-white/10' : ''}`}
                            >
                                {/* Special Badge for Premium */}
                                {plan.badge && (
                                    <motion.div
                                        initial={{ rotate: 10, scale: 0.8 }}
                                        animate={{ rotate: -5, scale: 1 }}
                                        className="absolute top-12 right-8 bg-emerald-500 text-black px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(16,185,129,0.3)] z-20"
                                    >
                                        {plan.badge}
                                    </motion.div>
                                )}

                                {/* Card Header */}
                                <div className="mb-10 relative z-10">
                                    <h3 className="text-xl font-black text-white mb-1 group-hover:text-emerald-400 transition-colors duration-500 uppercase italic tracking-tighter">{plan.name}</h3>
                                    <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em] mb-10">{plan.tagline}</p>

                                    <div className="mb-2">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={billingCycle}
                                                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                                exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                                                className="flex items-baseline gap-1"
                                            >
                                                <span className="text-6xl font-black tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                                                </span>
                                            </motion.div>
                                        </AnimatePresence>
                                        <p className="text-neutral-500 text-[9px] font-black uppercase tracking-[0.3em] mt-4 opacity-50">{plan.description}</p>
                                    </div>
                                </div>

                                {/* CTA Button (Fluid Style) */}
                                <div className="mb-10 w-fit relative z-10">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`py-3.5 px-10 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-2 group/btn relative overflow-hidden ${plan.name === 'Standard'
                                            ? "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                                            : "bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_15px_30px_rgba(16,185,129,0.2)]"
                                            }`}
                                    >
                                        <span className="relative z-10">{plan.cta}</span>
                                        <ArrowUpRight size={14} className="relative z-10 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={3} />
                                    </motion.button>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4 pt-8 border-t border-white/5 relative z-10">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 group/feat">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover/feat:bg-emerald-500/20 transition-all duration-300">
                                                <Check size={12} className="text-emerald-500" strokeWidth={3} />
                                            </div>
                                            <span className="text-[10px] font-bold text-neutral-400 group-hover/feat:text-white transition-colors uppercase tracking-widest">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Liquid Reflective Effect */}
                                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                                {plan.recommended && (
                                    <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500 backdrop-blur-md">
                        <Sparkles size={14} className="text-emerald-500" />
                        <span>Infrastructure Performance Standard</span>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Scanlines */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_3px)]" />
        </section>
    );
};

export default Price;
