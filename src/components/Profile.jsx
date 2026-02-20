import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, ArrowUpRight, Code2, Database, Users2 } from 'lucide-react';

const teamMembers = [
    {
        id: "AF001",
        name: "Tony",
        fullName: "Tony Fatoni", // Asumsi nama lengkap
        role: "Frontend Lead",
        focus: "UI/UX Architectures",
        status: "ACTIVE",
        color: "#10b981",
        img: "/profile/toni.png",
        skills: [
            { name: "React / Next.js", pct: "95%" },
            { name: "Tailwind CSS", pct: "98%" },
            { name: "Motion", pct: "90%" }
        ],
        link: "https://wa.me/6285714412716"
    },
    {
        id: "MY002",
        name: "Manyu",
        fullName: "Abimanyu",
        role: "Backend Lead",
        focus: "Scalable Systems",
        status: "ACTIVE",
        color: "#059669",
        img: "/profile/manyu.png",
        skills: [
            { name: "Node.js", pct: "92%" },
            { name: "PostgreSQL", pct: "90%" },
            { name: "System Design", pct: "88%" }
        ],
        link: "https://wa.me/6288233078885"
    },
    {
        id: "CD003",
        name: "Candra",
        fullName: "Candra Winata",
        role: "HR & Talent",
        focus: "Talent Acquisition",
        status: "ACTIVE",
        color: "#34d399",
        img: "/profile/candra.png",
        skills: [
            { name: "Recruitment", pct: "94%" },
            { name: "People Ops", pct: "90%" },
            { name: "Culture", pct: "95%" }
        ],
        link: "https://wa.me/6283194785932"
    }
];

const Profile = () => {
    return (
        <section id="profile" className="py-24 relative border-b border-[#ffffff17] bg-[#0c0c12]">
            {/* --- REF: MARQUEE INTEGRATED --- */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden border-b border-t border-[#ffffff17] py-10 bg-[#111118]">
                <div className="flex gap-12 w-max animate-[mq_30s_linear_infinite]">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-12">
                            <span className="flex items-center gap-2.5 font-mono-jb text-[0.65rem] tracking-[0.13em] text-[#9090A8] whitespace-nowrap"><span className="w-1 h-1 bg-[#ffffff2e] rounded-full" />PREMIUM DEVELOPMENT</span>
                            <span className="flex items-center gap-2.5 font-mono-jb text-[0.65rem] tracking-[0.13em] text-[#9090A8] whitespace-nowrap"><span className="w-1 h-1 bg-[#ffffff2e] rounded-full" />SYSTEM ARCHITECTURE</span>
                            <span className="flex items-center gap-2.5 font-mono-jb text-[0.65rem] tracking-[0.13em] text-[#9090A8] whitespace-nowrap"><span className="w-1 h-1 bg-[#ffffff2e] rounded-full" />UI/UX DESIGN</span>
                            <span className="flex items-center gap-2.5 font-mono-jb text-[0.65rem] tracking-[0.13em] text-[#9090A8] whitespace-nowrap"><span className="w-1 h-1 bg-[#ffffff2e] rounded-full" />SCALABLE SOLUTIONS</span>
                            <span className="flex items-center gap-2.5 font-mono-jb text-[0.65rem] tracking-[0.13em] text-[#9090A8] whitespace-nowrap"><span className="w-1 h-1 bg-[#ffffff2e] rounded-full" />LEAFYESS TEAM</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16">
                <div className="inline-flex items-center gap-2 font-mono-jb text-[0.63rem] tracking-[0.14em] text-[#9090A8] mb-6 px-3 py-1 border border-[#ffffff17] rounded-full">
                    <span className="text-[#5a5a72]">//</span> core_team
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-8 items-start">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.75, delay: index * 0.2 }}
                            className="border border-[#ffffff17] bg-[#111118] p-6 rounded-[12px] relative overflow-hidden group hover:border-[#ffffff2e] transition-colors"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffffff24] to-transparent" />

                            <div className="flex items-center justify-between mb-5">
                                <span className="font-mono-jb text-[0.55rem] tracking-[0.16em] text-[#5a5a72]">ID · {member.id}</span>
                                <span className="flex items-center gap-1.5 font-mono-jb text-[0.55rem] tracking-[0.1em] text-[#4ade80] px-2.5 py-1 border border-[#4ade8033] rounded-full bg-[#4ade800f]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                                    {member.status}
                                </span>
                            </div>

                            <div className="w-full aspect-square bg-[#050508] border border-[#ffffff17] rounded-lg overflow-hidden mb-5 relative">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60"></div>
                            </div>

                            <div className="space-y-3 relative z-10">
                                <div>
                                    <div className="text-[1.1rem] text-white font-space font-bold uppercase">{member.fullName}</div>
                                    <div className="font-mono-jb text-[0.6rem] tracking-[0.1em] text-[#4ade80] mb-1">{member.role}</div>
                                </div>
                                <div className="w-full h-px bg-[#ffffff17]" />
                                <div>
                                    <div className="font-mono-jb text-[0.55rem] tracking-[0.12em] text-[#5a5a72] mb-1">spesialisasi</div>
                                    <div className="text-[0.8rem] text-[#D8D8E0] font-medium">{member.focus}</div>
                                </div>

                                <div className="space-y-2 mt-4">
                                    {member.skills.map((skill) => (
                                        <div key={skill.name} className="flex justify-between items-center text-[0.65rem]">
                                            <span className="text-[#9090A8]">{skill.name}</span>
                                            <span className="font-mono-jb text-[#5a5a72]">{skill.pct}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a href={member.link} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center p-3 w-full border border-[#ffffff17] rounded-lg hover:bg-emerald-500/10 hover:text-emerald-400 text-[#9090A8] transition-all gap-2 text-xs font-mono-jb uppercase">
                                <MessageCircle size={14} /> Contact
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Profile;
