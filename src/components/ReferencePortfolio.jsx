import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const projects = [
    {
        id: "taskboard",
        cat: "web",
        category: "Web App · SaaS · Jan–Mar 2024",
        title: "TaskBoard Pro — Platform Manajemen Tim",
        meta: "80.000+ pengguna aktif",
        desc: "Platform manajemen tim dan tugas berbasis kanban dengan kolaborasi real-time. Digunakan oleh 3 klien enterprise Pixel Workshop dengan total 80.000+ pengguna aktif.",
        outcome: "Waktu onboarding tim baru berkurang 40%. NPS pengguna: 72. Churn rate bulan ke-3: hanya 4.2%.",
        tech: ['Next.js 14', 'TypeScript', 'Socket.io', 'Prisma', 'Tailwind']
    },
    {
        id: "nexus",
        cat: "ui",
        category: "UI Design · Prototype · Nov–Des 2023",
        title: "Nexora — Landing Page SaaS AI",
        meta: "CR 8.4%",
        desc: "Desain landing page premium untuk produk AI writing assistant dalam tahap fundraising Series A.",
        outcome: "Conversion rate trial signup: 8.4% (rata-rata industri SaaS: 3.2%).",
        tech: ['Figma', 'Framer', 'Interactive Prototype']
    },
    {
        id: "ecom",
        cat: "web",
        category: "Fullstack · E-Commerce",
        title: "PasarLokal — Marketplace UMKM",
        meta: "GMV Rp 420 juta",
        desc: "Platform marketplace digital khusus produk UMKM Indonesia dengan 15.000+ SKU terdaftar.",
        outcome: "GMV bulan pertama: Rp 420 juta. Return rate penjual setelah 3 bulan: 78%.",
        tech: ['Next.js 14', 'Prisma', 'Stripe', 'Algolia', 'Redis']
    },
    {
        id: "brand",
        cat: "brand",
        category: "Branding · Strategy",
        title: "Sabil Nusantara — Brand Identity",
        meta: "Revenue +38%",
        desc: "Sistem identitas visual komprehensif untuk brand herbal premium.",
        outcome: "Brand recognition meningkat 2.3x. Revenue naik 38% di kuartal pertama.",
        tech: ['Figma', 'Illustrator', 'Packaging', 'Brand Strategy']
    },
];

const ReferencePortfolio = () => {
    const [filter, setFilter] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projects.filter(p => filter === "all" || p.cat === filter);

    return (
        <section id="portfolio-ref" className="py-28 bg-black border-b border-[#ffffff17]">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-3">
                    <div>
                        <div className="inline-flex items-center gap-2 font-mono-jb text-[0.63rem] tracking-[0.14em] text-[#9090A8] mb-4 px-3 py-1 border border-[#ffffff17] rounded-full">
                            <span className="text-[#5a5a72]">//</span> portofolio
                        </div>
                        <h2 className="font-space text-4xl md:text-[3.8rem] font-bold tracking-tight leading-[0.96] text-white">
                            Proyek Pilihan
                        </h2>
                    </div>
                    <div className="hidden md:block font-space text-[4.5rem] font-bold text-[#ffffff0a] leading-none select-none">
                        0{filteredProjects.length}
                    </div>
                </div>

                <div className="w-10 h-0.5 bg-[#ffffff2e] rounded-full mb-10" />

                {/* Filter */}
                <div className="flex gap-1.5 flex-wrap mb-10">
                    {['all', 'ui', 'web', 'brand'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-1.5 font-mono-jb text-[0.65rem] tracking-[0.07em] border rounded-lg transition-all
                            ${filter === f
                                    ? 'border-[#ffffff17] text-white bg-[#ffffff0d]'
                                    : 'border-[#ffffff17] text-[#9090A8] bg-transparent hover:bg-[#ffffff08]'
                                }`}
                        >
                            {f === 'all' ? 'Semua' : f === 'ui' ? 'UI Design' : f === 'web' ? 'Web App' : 'Branding'}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="border border-[#ffffff17] rounded-[10px] overflow-hidden">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((proj, idx) => (
                            <motion.div
                                key={proj.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(proj)}
                                className="grid grid-cols-[52px_1fr] md:grid-cols-[70px_1fr_auto] items-center gap-5 md:gap-8 p-7 md:px-8 border-b border-[#ffffff17] bg-[#13131a] hover:bg-[#1c1c24] cursor-pointer transition-colors group last:border-0"
                            >
                                <div className="font-mono-jb text-2xl text-[#ffffff0f] group-hover:text-[#ffffff29] transition-colors">
                                    0{idx + 1}
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-space font-semibold text-white mb-1">
                                        {proj.title}
                                    </h3>
                                    <div className="font-mono-jb text-[0.63rem] tracking-[0.05em] text-[#9090A8]">
                                        {proj.category}
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 mt-2 md:hidden">
                                        {proj.tech.slice(0, 3).map(t => (
                                            <span key={t} className="text-[0.55rem] font-mono-jb px-1.5 py-0.5 border border-[#ffffff17] rounded text-[#9090A8]">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="hidden md:flex w-[34px] h-[34px] border border-[#ffffff17] rounded-lg items-center justify-center text-[#5a5a72] opacity-0 group-hover:opacity-100 group-hover:border-[#ffffff2e] group-hover:text-white transition-all">
                                    <ArrowUpRight size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[800] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-[520px] bg-[#111118] border border-[#ffffff17] rounded-[10px] p-10 z-[801]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-1 text-[#5a5a72] hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="font-mono-jb text-[0.58rem] tracking-[0.12em] text-[#5a5a72] mb-2">
                                {selectedProject.category}
                            </div>
                            <h3 className="font-space text-2xl md:text-[1.6rem] font-bold tracking-tight text-white leading-tight mb-3">
                                {selectedProject.title}
                            </h3>
                            <div className="w-8 h-0.5 bg-[#ffffff2e] rounded-full mb-6" />

                            <p className="text-[0.88rem] text-[#9090A8] leading-relaxed mb-4">
                                {selectedProject.desc}
                            </p>

                            <div className="p-4 bg-[#ffffff08] border-l-2 border-[#ffffff26] rounded-r-lg mb-6">
                                <div className="font-mono-jb text-[0.58rem] tracking-[0.12em] text-[#5a5a72] mb-1">
                                    hasil_terukur
                                </div>
                                <p className="text-[0.88rem] text-[#D8D8E0] font-medium leading-relaxed">
                                    {selectedProject.outcome}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 mb-8">
                                {selectedProject.tech.map(t => (
                                    <span key={t} className="font-mono-jb text-[0.58rem] tracking-[0.05em] px-2.5 py-1 border border-[#ffffff17] rounded-md text-[#9090A8]">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <button className="ref-btn-primary w-full justify-center">
                                    Live Demo
                                </button>
                                <button className="ref-btn-outline w-full justify-center">
                                    Source Code
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ReferencePortfolio;
