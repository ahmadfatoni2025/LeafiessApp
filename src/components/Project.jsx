import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Globe, Cpu, Smartphone, Layout } from 'lucide-react';

const projects = [
    {
        title: "Lumina CRM",
        category: "Enterprise Management",
        year: "2024",
        intensity: "high",
        icon: <Cpu className="w-5 h-5" />,
        description: "High-performance customer management system with AI insights."
    },
    {
        title: "Zenith Portfolio",
        category: "Digital Showcase",
        year: "2024",
        intensity: "medium",
        icon: <Layout className="w-5 h-5" />,
        description: "A minimalist, high-end portfolio for luxury automotive brands."
    },
    {
        title: "Nexus Pay",
        category: "Fintech Solution",
        year: "2023",
        intensity: "vibrant",
        icon: <Globe className="w-5 h-5" />,
        description: "Secure, global payment gateway with sub-second latency."
    },
    {
        title: "Aura Health",
        category: "Wellness Platform",
        year: "2023",
        intensity: "soft",
        icon: <Smartphone className="w-5 h-5" />,
        description: "Mobile-first wellness app with real-time biometric tracking."
    },
    {
        title: "Nova E-com",
        category: "Retail Tech",
        year: "2024",
        intensity: "soft",
        icon: <Layout className="w-5 h-5" />,
        description: "Next-gen e-commerce engine with spatial product previews."
    },
    {
        title: "Kinetix Cloud",
        category: "Infrastructure",
        year: "2024",
        intensity: "medium",
        icon: <Cpu className="w-5 h-5" />,
        description: "Modular cloud architecture for high-traffic media agencies."
    },
    {
        title: "Orbit Social",
        category: "Social Network",
        year: "2023",
        intensity: "high",
        icon: <Globe className="w-5 h-5" />,
        description: "Decentralized social platform focused on privacy and speed."
    },
    {
        title: "Titan CMS",
        category: "Content Management",
        year: "2023",
        intensity: "vibrant",
        icon: <Layout className="w-5 h-5" />,
        description: "Headless CMS designed for multi-channel digital experiences."
    }
];

const ProjectCard = ({ project, index }) => {
    const getIntensityStyles = (intensity) => {
        switch (intensity) {
            case 'high': return 'from-emerald-900/40 via-emerald-500/20 to-emerald-900/40 opacity-90';
            case 'vibrant': return 'from-emerald-500/40 via-teal-400/30 to-emerald-500/40 opacity-100';
            case 'medium': return 'from-emerald-900/60 via-emerald-600/10 to-emerald-950 opacity-80';
            case 'soft': return 'from-emerald-950 via-emerald-900/20 to-black opacity-70';
            default: return 'from-emerald-900 via-black to-black opacity-60';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-[220px] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-black"
        >
            {/* Mesh Gradient Background */}
            <div className={`absolute inset-0 bg-linear-to-br transition-all duration-700 group-hover:scale-110 ${getIntensityStyles(project.intensity)}`} />

            {/* Grain Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Card Glass Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all group-hover:backdrop-blur-none group-hover:bg-transparent duration-500" />

            <div className="relative h-full p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500">
                        {project.icon}
                    </div>
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border border-black bg-emerald-500 flex items-center justify-center">
                            <CheckCircle2 size={14} className="text-black" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black text-white/40 tracking-[0.2em] uppercase leading-none">·· {project.year}</span>
                        <div className="h-px flex-1 bg-white/10 group-hover:bg-emerald-500/20 transition-all" />
                    </div>
                    <h3 className="text-xl font-black text-white tracking-tighter uppercase group-hover:text-emerald-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase mt-1 line-clamp-1 opacity-60 group-hover:opacity-100 transition-all">
                        {project.category}
                    </p>
                </div>
            </div>

            {/* Hover Shine */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
        </motion.div>
    );
};

const Project = () => {
    return (
        <section id="projects" className="py-32 px-6 relative overflow-hidden bg-black text-white">
            {/* Ambient background glow consistent with Hero */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Header Section from Image */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex gap-1">
                                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                                <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                                <span className="w-3 h-3 rounded-full bg-emerald-500/20" />
                            </div>
                        </div>
                        <h2 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.85] text-white uppercase italic">
                            Projects<span className="text-emerald-500">.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-md"
                    >
                        <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed mb-6 opacity-80">
                            Portofolio ini merepresentasikan standar keunggulan digital kami. Setiap proyek dikembangkan dengan fokus pada performa, ketelitian teknis, dan kesiapan untuk beradaptasi dengan perkembangan inovasi global.
                            <span className="block mt-4 text-emerald-400/60 text-xs font-black uppercase tracking-widest italic">
                                Design warm, soft, natural
                            </span>
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Intensity Scale</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-16 flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 hover:border-emerald-500/50 bg-white/5 backdrop-blur-md transition-all duration-500"
                    >
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 group-hover:text-white transition-colors">Explorer History</span>
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                            <ExternalLink size={14} />
                        </div>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Project;
