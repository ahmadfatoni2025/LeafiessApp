import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        text: "Ahmad adalah developer terbaik yang pernah kami ajak bekerja sama. Tidak hanya tepat waktu, tapi selalu memberikan masukan desain yang tajam dan berbobot.",
        name: "Raditya Anindito",
        role: "Chief Product Officer",
        co: "Nusantara Digital · Jakarta"
    },
    {
        text: "Conversion rate trial signup kami naik 3x dalam bulan pertama setelah landing page baru live. Ahmad memahami kebutuhan bisnis sebelum membuka Figma.",
        name: "Sinta Maharani",
        role: "Co-founder & CEO",
        co: "Nexora AI · Bandung"
    },
    {
        text: "Ahmad mengerjakan brand identity kami dari nol dalam kurang dari 6 minggu. Kualitasnya setara agency besar, tapi cara berkomunikasinya jauh lebih personal.",
        name: "Budi Hartanto",
        role: "Owner & Founder",
        co: "Sabil Nusantara · Yogyakarta"
    },
    {
        text: "Tim frontend kami meningkat drastis setelah Ahmad bergabung sebagai lead. Ia membangun design system dari nol dan mendokumentasikannya dengan sangat teliti.",
        name: "Mila Kusuma",
        role: "Engineering Manager",
        co: "Pixel Workshop · Jakarta"
    },
    {
        text: "User engagement platform kami meningkat 45% pasca redesign. Dalam 8 minggu, Ahmad mentransformasi antarmuka usang menjadi produk modern yang intuitif.",
        name: "Eko Prasetya",
        role: "CTO",
        co: "PasarLokal · Surabaya"
    },
    {
        text: "Ahmad berpikir seperti designer dan kode seperti engineer senior. UI kit DanaKu langsung production-ready — tim kami bisa pakai tanpa revisi besar.",
        name: "Reza Firmansyah",
        role: "Product Manager",
        co: "DanaKu Fintech · Jakarta"
    }
];

const ReferenceTestimonials = () => {
    return (
        <section id="testimonials-ref" className="py-28 bg-[#050508] border-b border-[#ffffff17]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 font-mono-jb text-[0.63rem] tracking-[0.14em] text-[#9090A8] mb-4 px-3 py-1 border border-[#ffffff17] rounded-full">
                        <span className="text-[#5a5a72]">//</span> kata_klien
                    </div>
                    <h2 className="font-space text-4xl md:text-[3.8rem] font-bold tracking-tight leading-[0.96] text-white mb-6">
                        Apa yang Mereka Bilang
                    </h2>
                    <p className="text-[0.95rem] text-[#9090A8] max-w-[520px] mx-auto leading-relaxed">
                        Dipercaya oleh klien dari startup SaaS, marketplace, hingga brand FMCG nasional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#ffffff17] rounded-[10px] overflow-hidden border border-[#ffffff17]">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#13131a] p-9 hover:bg-[#111118] transition-colors"
                        >
                            <span className="block font-space text-[2.4rem] font-bold text-[#ffffff1a] leading-none mb-2">"</span>
                            <p className="text-[0.9rem] text-[#9090A8] leading-[1.85] mb-7 min-h-[80px]">
                                {t.text}
                            </p>
                            <div>
                                <div className="text-[0.9rem] font-semibold text-white mb-0.5">{t.name}</div>
                                <div className="font-mono-jb text-[0.62rem] tracking-[0.08em] text-[#9090A8]">{t.role}</div>
                                <div className="font-mono-jb text-[0.6rem] tracking-[0.07em] text-[#5a5a72] mt-0.5">{t.co}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReferenceTestimonials;
