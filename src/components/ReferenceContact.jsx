import React, { useState } from 'react';
import { ArrowUpRight, Send, Loader2, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ReferenceContact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, sent

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact-ref" className="py-28 bg-[#0c0c12] border-t border-[#ffffff17]">
            <div className="container mx-auto px-6">
                <div className="inline-flex items-center gap-2 font-mono-jb text-[0.63rem] tracking-[0.14em] text-[#9090A8] mb-6 px-3 py-1 border border-[#ffffff17] rounded-full">
                    <span className="text-[#5a5a72]">//</span> kontak
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-20 items-start">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-space text-4xl md:text-[3.8rem] font-bold tracking-tight leading-[0.96] text-white mb-4">
                            Mari<br />Ngobrol.
                        </h2>
                        <div className="w-10 h-0.5 bg-[#ffffff2e] rounded-full mb-10" />

                        <p className="text-[0.95rem] text-[#9090A8] leading-relaxed mb-8">
                            Punya proyek menarik? Butuh developer yang bisa sekaligus desain? Pintu saya selalu terbuka untuk percakapan yang bermakna.
                        </p>

                        <div className="border border-[#ffffff17] rounded-[10px] overflow-hidden mb-5">
                            {[
                                { label: "email_utama", val: "hello@ahmadfatoni.dev", href: "mailto:hello@ahmadfatoni.dev" },
                                { label: "whatsapp", val: "+62 812-3456-7890", href: "https://wa.me/6281234567890" },
                                { label: "linkedin", val: "linkedin.com/in/ahmadfatoni", href: "https://linkedin.com/in/ahmadfatoni" }
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center justify-between p-4 bg-[#13131a] border-b border-[#ffffff17] last:border-0 hover:bg-[#1c1c24] transition-colors group"
                                >
                                    <div>
                                        <div className="font-mono-jb text-[0.58rem] tracking-[0.1em] text-[#5a5a72] mb-1">{item.label}</div>
                                        <div className="text-[0.88rem] text-[#D8D8E0] font-medium group-hover:text-white transition-colors">{item.val}</div>
                                    </div>
                                    <ArrowUpRight size={14} className="text-[#5a5a72] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </a>
                            ))}
                        </div>

                        <div className="border border-[#4ade8026] bg-[#4ade800a] rounded-[10px] p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                                <span className="font-mono-jb text-[0.62rem] tracking-[0.1em] text-[#4ade80]">Tersedia untuk Proyek Baru</span>
                            </div>
                            <p className="text-[0.82rem] text-[#9090A8] leading-relaxed">
                                Biasanya merespons dalam 12–24 jam di hari kerja. Terbuka untuk freelance, retainer, maupun full-time remote.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-mono-jb text-[0.6rem] tracking-[0.1em] text-[#9090A8] mb-2">nama_lengkap</label>
                                    <input type="text" className="w-full bg-[#13131a] border border-[#ffffff17] rounded-lg p-3.5 text-[0.9rem] text-white focus:border-[#ffffff2e] focus:bg-[#1c1c24] outline-none transition-all font-space" placeholder="Budi Santoso" />
                                </div>
                                <div>
                                    <label className="block font-mono-jb text-[0.6rem] tracking-[0.1em] text-[#9090A8] mb-2">email_aktif</label>
                                    <input type="email" className="w-full bg-[#13131a] border border-[#ffffff17] rounded-lg p-3.5 text-[0.9rem] text-white focus:border-[#ffffff2e] focus:bg-[#1c1c24] outline-none transition-all font-space" placeholder="budi@email.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block font-mono-jb text-[0.6rem] tracking-[0.1em] text-[#9090A8] mb-2">jenis_proyek</label>
                                <input type="text" className="w-full bg-[#13131a] border border-[#ffffff17] rounded-lg p-3.5 text-[0.9rem] text-white focus:border-[#ffffff2e] focus:bg-[#1c1c24] outline-none transition-all font-space" placeholder="Landing Page, Web App, UI Design..." />
                            </div>
                            <div>
                                <label className="block font-mono-jb text-[0.6rem] tracking-[0.1em] text-[#9090A8] mb-2">pesan</label>
                                <textarea className="w-full bg-[#13131a] border border-[#ffffff17] rounded-lg p-3.5 text-[0.9rem] text-white focus:border-[#ffffff2e] focus:bg-[#1c1c24] outline-none transition-all font-space h-[120px] resize-none" placeholder="Ceritakan detail proyek..." />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className={`w-full flex items-center justify-center gap-2 p-4 rounded-lg font-space font-semibold text-sm transition-all
                                ${status === 'sent'
                                        ? 'bg-[#4ade8026] text-[#4ade80]'
                                        : 'bg-white text-black hover:bg-white/90'
                                    }`}
                            >
                                {status === 'idle' && (
                                    <>
                                        <Send size={14} /> Kirim Pesan
                                    </>
                                )}
                                {status === 'sending' && (
                                    <>
                                        <Loader2 size={14} className="animate-spin" /> Mengirim...
                                    </>
                                )}
                                {status === 'sent' && (
                                    <>
                                        <Check size={14} /> Pesan Terkirim!
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ReferenceContact;
