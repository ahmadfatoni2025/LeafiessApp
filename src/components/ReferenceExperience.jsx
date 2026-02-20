import React from 'react';
import { motion } from 'framer-motion';

const history = [
    {
        period: "Jan 2023 — Sekarang",
        company: "Pixel Workshop",
        role: "Senior Frontend Developer",
        desc: "Memimpin tim frontend beranggotakan 5 engineer dalam membangun platform SaaS untuk 3 klien enterprise. Mengimplementasikan design system berbasis Radix.",
        tags: ["Next.js 14", "TypeScript", "Tailwind", "Radix UI"]
    },
    {
        period: "Mar 2022 — Des 2022",
        company: "Nusantara Digital",
        role: "Frontend Developer",
        desc: "Mengembangkan platform marketplace UMKM. Meningkatkan Lighthouse Performance Score dari 62 menjadi 94.",
        tags: ["React.js", "Redux", "Algolia", "PostgreSQL"]
    },
    {
        period: "Jul 2021 — Feb 2022",
        company: "Kreativa Studio",
        role: "UI Developer",
        desc: "Bergabung sebagai UI developer pertama di agensi kreatif. Membangun 14 website dan e-catalog interaktif dari desain Figma.",
        tags: ["React", "GSAP", "Figma", "WordPress"]
    }
];

const ReferenceExperience = () => {
    return (
        <section id="experience-ref" className="py-28 bg-[#050508] border-b border-[#ffffff17]">
            <div className="container mx-auto px-6">
                <div className="inline-flex items-center gap-2 font-mono-jb text-[0.63rem] tracking-[0.14em] text-[#9090A8] mb-6 px-3 py-1 border border-[#ffffff17] rounded-full">
                    <span className="text-[#5a5a72]">//</span> pengalaman_kerja
                </div>
                <h2 className="font-space text-4xl md:text-[3.8rem] font-bold tracking-tight leading-[0.96] text-white mb-4">
                    Rekam Jejak
                </h2>
                <div className="w-10 h-0.5 bg-[#ffffff2e] rounded-full mb-10" />

                <div className="border border-[#ffffff17] rounded-[10px] overflow-hidden bg-[#13131a]">
                    {history.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 p-8 border-b border-[#ffffff17] last:border-0 hover:bg-[#111118] transition-colors"
                        >
                            <div>
                                <div className="font-mono-jb text-[0.68rem] tracking-[0.06em] text-[#9090A8] mb-2">{item.period}</div>
                                {i === 0 && (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#4ade8033] bg-[#4ade800f] text-[#4ade80] text-[0.55rem] font-mono-jb tracking-wide">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                                        Full-time
                                    </span>
                                )}
                            </div>
                            <div>
                                <h3 className="font-space text-[1.3rem] font-bold text-white mb-1">{item.company}</h3>
                                <div className="font-mono-jb text-[0.68rem] tracking-[0.07em] text-[#9090A8] mb-3">{item.role}</div>
                                <p className="text-[0.88rem] text-[#9090A8] leading-relaxed max-w-xl mb-4">
                                    {item.desc}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {item.tags.map(t => (
                                        <span key={t} className="font-mono-jb text-[0.58rem] tracking-[0.05em] px-2.5 py-1 border border-[#ffffff17] rounded-md text-[#9090A8]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReferenceExperience;
