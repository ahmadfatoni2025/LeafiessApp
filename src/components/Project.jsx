import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Code2, Monitor, ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
    {
        title: "MBG Muhammadiyah",
        headline: "Sistem MBG Muhammadiyah",
        subHeadline: "MANAGEMENT SYSTEM",
        category: "Industrial Dashboard",
        tech: ["React", "TS", "PostgreSQL"],
        year: "2025",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        accent: "text-emerald-500",
        link: "https://scsbanjarnegara.com/",
        description: "Infrastruktur digital komprehensif untuk pelacakan aset dan pemantauan sumber daya institusi secara real-time."
    },
    {
        title: "LazisMu Company Profile",
        headline: "LazisMu Company Profile",
        subHeadline: "PUBLIC PORTAL",
        category: "Company Profile",
        tech: ["Vite", "Tailwind", "GSAP"],
        year: "2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        accent: "text-emerald-400",
        link: "https://lazismubanjarnegara.org/",
        description: "Mendesain ulang kehadiran digital untuk organisasi amal Islam dengan fokus pada kepercayaan dan aksesibilitas."
    },
    {
        title: "Nova E-com UI",
        headline: "SPATIAL COMMERCE",
        subHeadline: "RETAIL ENGINE",
        category: "E-Commerce",
        tech: ["Next.js", "Three.js", "Stripe"],
        year: "2024",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
        accent: "text-emerald-600",
        link: "https://github.com/ahmadfatoni2025",
        description: "Pengalaman belanja inovatif menggunakan visualisasi produk 3D dan mesin checkout berkecepatan tinggi."
    },
    {
        title: "Kinetix Infrastructure",
        headline: "MODULAR CLOUD",
        subHeadline: "SYSTEM MONITOR",
        category: "DevOps Tool",
        tech: ["Docker", "Go", "InfluxDB"],
        year: "2024",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        accent: "text-teal-500",
        link: "https://github.com/ahmadfatoni2025",
        description: "Dashboard pemantauan untuk arsitektur cloud modular, fokus pada infrastruktur agensi dengan lalu lintas tinggi."
    },
];

const ProjectCard = memo(({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-[450px] md:h-[550px] rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-neutral-900/40 border border-white/5 flex flex-col transform-gpu backdrop-blur-sm"
        >
            {/* Project Background - Website Preview */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000 ease-out transform-gpu"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
            </div>

            {/* Top Bar - Gallery Metadata */}
            <div className="relative z-10 p-8 flex items-center justify-between">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                    <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.4em]">Sistem Online</span>
                </div>
                <div className="flex items-center gap-4 text-white/20">
                    <Monitor size={14} />
                    <div className="w-px h-3 bg-white/10" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em]">{project.year}</span>
                </div>
            </div>

            {/* Content Area - Website Title & Vision */}
            <div className="relative z-10 flex-1 px-10 flex flex-col justify-end pb-12">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className={`text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.5em] mb-3 md:mb-4 ${project.accent} uppercase`}>
                        {project.subHeadline}
                    </p>
                    <h3 className="text-2xl md:text-5xl font-black text-gradient-to-r from-emerald-500 to-emerald-600 leading-none tracking-tighter uppercase italic mb-4 md:mb-6">
                        {project.headline}
                    </h3>
                </motion.div>

                {/* Tech Stack & Description Wrapper for better flow */}
                <div className="mb-10 space-y-6">
                    <p className="max-w-sm text-neutral-500 text-sm font-medium leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                        {project.description}
                    </p>

                    {/* Tech Stack Badges - More Premium */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[8px] font-black text-emerald-400/60 uppercase tracking-widest backdrop-blur-md group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 group-hover:text-emerald-400 transition-all duration-500">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ELITE CTA BUTTON - Redesigned for Clarity & Impact */}
                <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn relative w-full block"
                >
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-px group-hover/btn:border-emerald-500/50 transition-all duration-500 shadow-2xl">
                        {/* Animated Border/Glow effect on Hover */}
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-linear-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />

                        <div className="relative px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-neutral-950/80 backdrop-blur-2xl flex items-center justify-between group-hover/btn:bg-emerald-500/5 transition-colors duration-500">
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-white group-hover/btn:text-emerald-400 transition-colors">
                                Lihat Project Selengkapnya
                            </span>
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-px h-3 md:h-4 bg-white/10" />
                                <ArrowUpRight size={16} className="text-neutral-500 group-hover/btn:text-emerald-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all md:w-[18px] md:h-[18px]" />
                            </div>
                        </div>
                    </div>
                </motion.a>
            </div>

            {/* Liquid Reflective Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-20" />
        </motion.div>
    );
});

ProjectCard.displayName = 'ProjectCard';

const Project = memo(() => {
    return (
        <section id="projects" className="py-32 px-6 relative overflow-hidden bg-black text-white border-t border-white/5">
            {/* Subtle Masked Background - Project Variation (Dot Grid) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                {/* 1. Base Gradient Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#061a12_0%,#000_100%)] opacity-20" />

                {/* 2. Masked Dot Pattern (Small Dots) */}
                <div className="absolute inset-0 opacity-[0.1]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, black 10%, transparent 90%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 90%)'
                    }}
                />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12 mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-auto"
                    >
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <Code2 size={20} className="text-emerald-500 md:w-6 md:h-6" />
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-emerald-500">Eksposisi Galeri</span>
                        </div>
                        <h2 className="text-4xl md:text-8xl font-black mb-4 md:mb-6 tracking-tighter uppercase italic leading-[0.85] select-none">
                            <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-[#cbd5e1] to-[#64748b] drop-shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                                KARYA PROYEK<span className="text-emerald-500">.</span>
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-md hidden lg:block"
                    >
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed mb-8">
                            Pilihan kurasi arsitektur digital tingkat industri dan sistem visual kelas atas yang dibangun dengan standar teknik global.
                        </p>
                        <div className="flex items-center gap-6">
                            <Globe size={18} className="text-emerald-500/20" />
                            <div className="flex-1 h-px bg-white/5" />
                            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em]">Integritas Digital</span>
                        </div>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

            </div>

            {/* Subtle Scanlines Decor */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_3px)]" />
        </section>
    );
});

Project.displayName = 'Project';

export default Project;
