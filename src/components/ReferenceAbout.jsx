import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Dribbble, ArrowUpRight } from 'lucide-react';

const ReferenceAbout = () => {
    return (
        <section id="about-ref" className="py-28 relative border-y border-[#ffffff17] bg-[#0c0c12]">
            <div className="container mx-auto px-6">
                <div className="inline-flex items-center gap-2 font-mono-jb text-[0.63rem] tracking-[0.14em] text-[#9090A8] mb-6 px-3 py-1 border border-[#ffffff17] rounded-full">
                    <span className="text-[#5a5a72]">//</span> tentang_saya
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-start">
                    {/* ID Card Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75 }}
                    >
                        {/* ID Card */}
                        <div className="border border-[#ffffff17] bg-[#111118] p-7 rounded-[10px] relative overflow-hidden mb-3">
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffffff24] to-transparent" />
                            
                            <div className="flex items-center justify-between mb-5">
                                <span className="font-mono-jb text-[0.55rem] tracking-[0.16em] text-[#5a5a72]">ID · AF·001</span>
                                <span className="flex items-center gap-1.5 font-mono-jb text-[0.55rem] tracking-[0.1em] text-[#4ade80] px-2.5 py-1 border border-[#4ade8033] rounded-full bg-[#4ade800f]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                                    ACTIVE
                                </span>
                            </div>

                            <div className="w-full aspect-square bg-[#050508] border border-[#ffffff17] rounded-lg flex items-center justify-center mb-5">
                                <span className="font-space text-6xl font-bold tracking-tighter text-[#ffffff0f]">AF</span>
                            </div>

                            <div className="w-full h-px bg-[#ffffff17] my-4" />

                            <div className="space-y-3">
                                <div>
                                    <div className="font-mono-jb text-[0.55rem] tracking-[0.12em] text-[#5a5a72] mb-1">nama_lengkap</div>
                                    <div className="text-[0.85rem] text-[#D8D8E0] font-medium">Ahmad Fatoni</div>
                                </div>
                                <div>
                                    <div className="font-mono-jb text-[0.55rem] tracking-[0.12em] text-[#5a5a72] mb-1">role</div>
                                    <div className="text-[0.85rem] text-[#D8D8E0] font-medium">Frontend Developer</div>
                                </div>
                                <div>
                                    <div className="font-mono-jb text-[0.55rem] tracking-[0.12em] text-[#5a5a72] mb-1">lokasi</div>
                                    <div className="text-[0.85rem] text-[#D8D8E0] font-medium">Yogyakarta, ID</div>
                                </div>
                            </div>
                            
                            <div className="w-full h-px bg-[#ffffff17] my-4" />

                            <div className="flex justify-between items-center">
                                <span className="font-mono-jb text-[0.55rem] tracking-[0.1em] text-[#5a5a72]">ver. 2025.1</span>
                                <span className="font-mono-jb text-[0.55rem] text-[#4ade80]">● active</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="border border-[#ffffff17] rounded-[10px] overflow-hidden">
                            {[
                                { name: "github.com/ahmadfatoni", icon: Github, link: "https://github.com/ahmadfatoni" },
                                { name: "linkedin.com/in/ahmadfatoni", icon: Linkedin, link: "https://linkedin.com/in/ahmadfatoni" },
                                { name: "dribbble.com/ahmadfatoni", icon: Dribbble, link: "https://dribbble.com/ahmadfatoni" }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between p-4 bg-[#111118] border-b border-[#ffffff17] last:border-0 hover:bg-[#ffffff08] transition-colors group"
                                >
                                    <div>
                                        <div className="font-mono-jb text-[0.55rem] tracking-[0.1em] text-[#5a5a72] mb-0.5">{social.name.split('.')[0]}</div>
                                        <div className="text-[0.82rem] text-[#9090A8] group-hover:text-white transition-colors">{social.name}</div>
                                    </div>
                                    <ArrowUpRight size={14} className="text-[#5a5a72] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75 }}
                    >
                        <h2 className="font-space text-4xl md:text-6xl font-bold tracking-tight leading-[0.96] text-white mb-4">
                            Tentang<br />Ahmad Fatoni
                        </h2>
                        <div className="w-10 h-0.5 bg-[#ffffff2e] rounded-full mb-10" />

                        <p className="text-[0.98rem] text-[#9090A8] leading-[1.88] mb-5">
                            Saya seorang <span className="text-white font-semibold">Frontend Developer dan UI Designer</span> dengan pengalaman lebih dari 4 tahun membangun produk digital dari nol hingga skala produksi. Lulus <em>cumlaude</em> dari Universitas Gadjah Mada jurusan Teknik Informatika pada 2021.
                        </p>
                        <p className="text-[0.98rem] text-[#9090A8] leading-[1.88] mb-10">
                            Spesialisasi mencakup <span className="text-white font-semibold">React.js, Next.js 14, dan Tailwind CSS</span> di sisi frontend, serta desain antarmuka berbasis riset pengguna menggunakan Figma.
                        </p>

                        {/* Skills */}
                        <div className="space-y-0">
                            {[
                                { name: "UI / UX Design", pct: "92%", w: "92%" },
                                { name: "React / Next.js", pct: "88%", w: "88%" },
                                { name: "Tailwind CSS", pct: "95%", w: "95%" },
                                { name: "TypeScript", pct: "82%", w: "82%" },
                                { name: "Figma & Design System", pct: "91%", w: "91%" },
                            ].map((skill, i) => (
                                <div key={skill.name} className="flex justify-between items-center py-3.5 border-t border-[#ffffff17] last:border-b">
                                    <span className="text-[0.9rem] text-[#D8D8E0] font-medium">{skill.name}</span>
                                    <div className="flex items-center gap-4">
                                        <div className="w-[120px] h-0.5 bg-[#ffffff12] rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                                                className="h-full bg-[#ffffffb3] rounded-full origin-left"
                                                style={{ width: skill.w }}
                                            />
                                        </div>
                                        <span className="font-mono-jb text-[0.62rem] text-[#9090A8] w-8 text-right">{skill.pct}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex gap-3 flex-wrap">
                            <button className="ref-btn-primary">
                                Download CV
                            </button>
                            <a href="#contact-ref" className="ref-btn-outline">
                                Diskusi Proyek
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ReferenceAbout;
