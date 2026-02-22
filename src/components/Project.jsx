import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import OptimizedImage from './OptimizedImage';

// Project Data
const projects = [
    {
        id: "mbg",
        cat: "web",
        category: "Industrial Dashboard",
        year: "2024",
        title: "MBG Muhammadiyah",
        desc: "Infrastruktur digital untuk pelacakan aset dan pemantauan sumber daya. Dashboard industri yang dirancang untuk efisiensi tinggi dan akurasi data real-time.",
        tags: ["React", "TypeScript", "PostgreSQL", "Tailwind"],
        image: "https://i.pinimg.com/1200x/9d/ea/ad/9deaadd8955f67bb3fb475b4b37ca1fa.jpg",
        link: "https://scsbanjarnegara.com/"
    },
    {
        id: "lazismu",
        cat: "web",
        category: "Public Portal",
        year: "2024",
        title: "LazisMu Portal",
        desc: "Redesain kehadiran digital untuk kepercayaan publik dan aksesibilitas. Platform donasi yang aman, transparan, dan mudah digunakan oleh semua kalangan.",
        tags: ["Vite", "Tailwind", "GSAP", "React"],
        image: "https://i.pinimg.com/1200x/c0/db/fb/c0dbfbae7ac2592e05a3bfcc6af31bf3.jpg",
        link: "https://lazismubanjarnegara.id/"
    },
    // Adding dummy projects to demonstrate parallax effect better
    {
        id: "fintrac",
        cat: "fintech",
        category: "Finance App",
        year: "2023",
        title: "Chating apps",
        desc: "Aplikasi manajemen keuangan pribadi dengan analisis pengeluaran berbasis AI dan integrasi multi-bank yang aman.",
        tags: ["Next.js", "Prisma", "Chart.js", "Framer Motion"],
        image: "https://i.pinimg.com/1200x/53/7e/9c/537e9c22a28f9e0001b232055a1125a8.jpg",
        link: "https://chat-portofolio.vercel.app/Hi-I-am-Loukas"
    },
    {
        id: "eco",
        cat: "eco",
        category: "E-Commerce",
        year: "2023",
        title: "EcoMarket",
        desc: "Marketplace produk ramah lingkungan dengan fitur jejak karbon calculator setiap pembelian.",
        tags: ["Vue", "Nuxt", "Node.js", "Stripe"],
        image: "https://i.pinimg.com/1200x/9d/ea/ad/9deaadd8955f67bb3fb475b4b37ca1fa.jpg",
        link: "https://jsmastery.com/"
    },
];


const Project = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-36%"]);

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-[#050508]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Background Elements */}
                <div className="absolute top-20 left-10 z-0 max-w-7xl mx-auto">
                    <div className="inline-flex items-center gap-2 font-mono-jb text-xs tracking-[0.2em] text-emerald-500 mb-4 px-4 py-1.5 border border-emerald-500/20 rounded-full bg-emerald-500/5">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        SELECTED WORKS
                    </div>
                    <h2 className="font-space text-5xl md:text-7xl font-bold text-white mb-2">
                        Featured <span className="text-[#333]">Projects</span>
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-12 px-12 md:px-32 relative z-10 pt-24">
                    {projects.map((project) => (
                        <Card project={project} key={project.id} />
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-12 flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-[#ffffff30]"></div>
                    <span className="font-mono-jb text-[10px] uppercase tracking-widest text-[#9090A8]">Scroll to Explore</span>
                </div>
            </div>
        </section>
    );
};

const Card = ({ project }) => {
    return (
        <div
            key={project.id}
            className="group relative h-[450px] w-[350px] md:h-[550px] md:w-[650px] overflow-hidden rounded-3xl bg-[#0c0c12] border border-[#ffffff10]"
        >
            {/* Image Background with Overlay */}
            <div
                style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            ></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 grid place-content-end p-8 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent">

                <div className="mb-4">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-mono-jb text-xs text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                            {project.category}
                        </span>
                        <span className="font-space text-white/50">{project.year}</span>
                    </div>

                    <h3 className="font-space text-3xl md:text-5xl font-bold text-white uppercase leading-none mb-4 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                    </h3>

                    <p className="font-sans text-[#9090A8] text-sm md:text-base leading-relaxed max-w-md line-clamp-3 mb-8">
                        {project.desc}
                    </p>
                </div>


                <div className="flex items-center justify-between border-t border-[#ffffff17] pt-6">
                    <div className="flex gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] font-mono-jb text-[#9090A8] border border-[#ffffff17] px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-emerald-400 hover:scale-110 transition-all duration-300">
                        <ArrowUpRight size={20} strokeWidth={2.5} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
