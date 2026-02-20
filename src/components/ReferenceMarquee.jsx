import React from 'react';

const items = [
    "UI Design", "Frontend Development", "React.js", "Next.js 14", "Tailwind CSS",
    "TypeScript", "Figma", "Motion Design", "Web Performance", "Design System",
    "UI Design", "Frontend Development", "React.js", "Next.js 14", "Tailwind CSS",
    "TypeScript", "Figma", "Motion Design", "Web Performance", "Design System"
];

const ReferenceMarquee = () => {
    return (
        <div className="overflow-hidden border-y border-[#ffffff17] py-3 bg-[#0c0c12]">
            <div className="flex gap-12 w-max animate-[mq_30s_linear_infinite]">
                {items.map((item, i) => (
                    <span key={i} className="flex items-center gap-2.5 font-mono-jb text-[0.65rem] tracking-[0.13em] text-[#9090A8] whitespace-nowrap">
                        <span className="w-1 h-1 bg-[#ffffff2e] rounded-full" />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ReferenceMarquee;
