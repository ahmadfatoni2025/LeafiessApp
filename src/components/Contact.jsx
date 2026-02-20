import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Check, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, sent

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('sent');
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-28 bg-[#0c0c12] border-t border-[#ffffff17] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="inline-flex items-center gap-2 font-mono-jb text-[0.63rem] tracking-[0.14em] text-[#9090A8] mb-6 px-3 py-1 border border-[#ffffff17] rounded-full">
                    <span className="text-[#5a5a72]">//</span> hubungi_kami
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-20 items-start">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-space text-4xl md:text-[3.8rem] font-bold tracking-tight leading-[0.96] text-white mb-4">
                            Mulai<br />Kolaborasi.
                        </h2>
                        <div className="w-10 h-0.5 bg-emerald-500 rounded-full mb-10" />

                        <p className="text-[0.95rem] text-[#9090A8] leading-relaxed mb-8">
                            Punya visi produk digital? Butuh transformasi sistem? <strong className="text-white">Leafiess</strong> siap menjadi mitra teknologi strategis Anda.
                        </p>

                        <div className="border border-[#ffffff17] rounded-[10px] overflow-hidden mb-5 bg-[#13131a]">
                            {[
                                { label: "email_bisnis", val: "hello@leafiess.com", href: "mailto:hello@leafiess.com" },
                                { label: "whatsapp_official", val: "+62 857-1441-2716", href: "https://wa.me/6285714412716" },
                                { label: "kantor_pusat", val: "Yogyakarta, Indonesia", href: "#" }
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center justify-between p-4 border-b border-[#ffffff17] last:border-0 hover:bg-[#1c1c24] transition-colors group"
                                >
                                    <div>
                                        <div className="font-mono-jb text-[0.58rem] tracking-[0.1em] text-[#5a5a72] mb-1">{item.label}</div>
                                        <div className="text-[0.88rem] text-[#D8D8E0] font-medium group-hover:text-emerald-400 transition-colors">{item.val}</div>
                                    </div>
                                    <ArrowUpRight size={14} className="text-[#5a5a72] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </a>
                            ))}
                        </div>

                        <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-[10px] p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="font-mono-jb text-[0.62rem] tracking-[0.1em] text-emerald-400">Status Operasional</span>
                            </div>
                            <p className="text-[0.82rem] text-[#9090A8] leading-relaxed">
                                Tim kami tersedia untuk diskusi proyek baru. Respons maksimal 2 jam di jam kerja (09:00 - 17:00 WIB).
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 bg-[#13131a] p-8 rounded-[20px] border border-[#ffffff10]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-mono-jb text-[0.6rem] tracking-[0.1em] text-[#9090A8] mb-2">nama_lengkap</label>
                                    <input type="text" className="w-full bg-[#050508] border border-[#ffffff17] rounded-lg p-3.5 text-[0.9rem] text-white focus:border-emerald-500/50 focus:bg-[#0c0c12] outline-none transition-all font-space" placeholder="Nama Anda" />
                                </div>
                                <div>
                                    <label className="block font-mono-jb text-[0.6rem] tracking-[0.1em] text-[#9090A8] mb-2">email_perusahaan</label>
                                    <input type="email" className="w-full bg-[#050508] border border-[#ffffff17] rounded-lg p-3.5 text-[0.9rem] text-white focus:border-emerald-500/50 focus:bg-[#0c0c12] outline-none transition-all font-space" placeholder="nama@perusahaan.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block font-mono-jb text-[0.6rem] tracking-[0.1em] text-[#9090A8] mb-2">kategori_layanan</label>
                                <select className="w-full bg-[#050508] border border-[#ffffff17] rounded-lg p-3.5 text-[0.9rem] text-white focus:border-emerald-500/50 focus:bg-[#0c0c12] outline-none transition-all font-space appearance-none cursor-pointer">
                                    <option>Custom Web Development</option>
                                    <option>System Architecture</option>
                                    <option>UI/UX Design</option>
                                    <option>Mantainance & Support</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-mono-jb text-[0.6rem] tracking-[0.1em] text-[#9090A8] mb-2">detail_kebutuhan</label>
                                <textarea className="w-full bg-[#050508] border border-[#ffffff17] rounded-lg p-3.5 text-[0.9rem] text-white focus:border-emerald-500/50 focus:bg-[#0c0c12] outline-none transition-all font-space h-[120px] resize-none" placeholder="Jelaskan gambaran proyek Anda..." />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className={`w-full flex items-center justify-center gap-2 p-4 rounded-lg font-space font-semibold text-sm transition-all
                                ${status === 'sent'
                                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                        : 'bg-white text-black hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]'
                                    }`}
                            >
                                {status === 'idle' && (
                                    <>
                                        <Send size={14} /> Kirim Penawaran
                                    </>
                                )}
                                {status === 'sending' && (
                                    <>
                                        <Loader2 size={14} className="animate-spin" /> Mengirim Signal...
                                    </>
                                )}
                                {status === 'sent' && (
                                    <>
                                        <Check size={14} /> Terkirim ke Server!
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

export default Contact;
