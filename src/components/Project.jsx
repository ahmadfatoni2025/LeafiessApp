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
            className="group relative h-[550px] rounded-[2.5rem] overflow-hidden bg-neutral-900/40 border border-white/5 flex flex-col transform-gpu backdrop-blur-sm"
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
                    <p className={`text-[9px] font-black tracking-[0.5em] mb-4 ${project.accent} uppercase`}>
                        {project.subHeadline}
                    </p>
                    <h3 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase italic mb-6">
                        {project.headline}
                    </h3>
                </motion.div>

                <p className="max-w-sm text-neutral-500 text-sm font-medium leading-relaxed mb-8 group-hover:text-neutral-300 transition-colors duration-500">
                    {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[8px] font-black text-neutral-500 uppercase tracking-widest">
                            {t}
                        </span>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 text-white group/btn w-fit"
                >
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-all group-hover/btn:bg-emerald-500 group-hover/btn:border-emerald-400 group-hover/btn:text-black shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                        <ArrowUpRight size={20} strokeWidth={3} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 group-hover/btn:text-white transition-colors">Kunjungi Situs</span>
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
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 w-[800px] h-[800px] opacity-10 transform-gpu"
                    style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] opacity-5 transform-gpu"
                    style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)' }}
                />
            </div>

            {/* Subtle Grid Decor */}
            <div className="absolute inset-0 bg-size-[40px_40px] bg-[radial-gradient(circle,white_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-[0.03]" />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-auto"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <Code2 size={24} className="text-emerald-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500">Eksposisi Galeri</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic leading-[0.85] select-none">
                            <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-[#cbd5e1] to-[#64748b] drop-shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                                KARYA<span className="text-emerald-500">.</span>KAMI
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

                {/* Section Footer Call To Action */}
                <div className="mt-32 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                        <div className="w-1 h-1 rounded-full bg-emerald-500/40" />
                        <div className="w-1 h-1 rounded-full bg-emerald-500/10" />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex flex-col items-center gap-6"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-neutral-600 group-hover:text-emerald-500 transition-colors duration-500">Jelajahi Arsip Lengkap</span>
                        <div className="w-16 h-16 rounded-full border border-white/5 bg-neutral-900/50 backdrop-blur-3xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/5">
                            <ExternalLink size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Subtle Scanlines Decor */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_3px)]" />
        </section>
    );
});

Project.displayName = 'Project';

export default Project;
