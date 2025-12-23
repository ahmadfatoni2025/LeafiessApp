import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Monitor, ArrowUpRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const projects = [
    {
        title: "MBG Muhammadiyah",
        headline: "SISTEM MBG",
        category: "Industrial Dashboard",
        tech: ["React", "TS", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        link: "https://scsbanjarnegara.com/",
        description: "Digital infrastructure for asset tracking and resource monitoring."
    },
    {
        title: "LazisMu Portal",
        headline: "LAZISMU WEB",
        category: "Public Portal",
        tech: ["Vite", "Tailwind", "GSAP"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        link: "https://lazismubanjarnegara.org/",
        description: "Redesigning digital presence for public trust and accessibility."
    }
];

const ProjectCard = memo(({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden bg-neutral-900/40 border border-white/5 flex flex-col"
        >
            <div className="absolute inset-0 z-0">
                <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 p-8 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest text-emerald-500">
                        {project.category}
                    </div>
                    <Monitor size={14} className="text-white/20" />
                </div>

                <div>
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-4">
                        {project.headline}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-6 max-w-xs">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map(t => (
                            <span key={t} className="text-[8px] font-black uppercase tracking-tighter text-neutral-500">{t}</span>
                        ))}
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500 hover:text-black transition-all group/btn"
                    >
                        <span className="text-[9px] font-black uppercase tracking-widest">Explore Case Study</span>
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
});

const Project = memo(() => {
    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden bg-black text-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-emerald-500">
                            <Code2 size={18} />
                            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Selected Works</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
                            PROJECTS<span className="text-emerald-500">.</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                        Digital architecture built with global standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
});

Project.displayName = 'Project';

export default Project;
