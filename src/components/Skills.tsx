"use client";

import { motion } from "framer-motion";

const skillsCategories = [
    {
        title: "Frontend",
        skills: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    },
    {
        title: "Backend",
        skills: ["Java", "Spring Boot", "Node.js", "REST APIs"],
    },
    {
        title: "Databases",
        skills: ["MySQL", "MongoDB", "SQL Server", "JSON"],
    },
    {
        title: "Programming & Concepts",
        skills: ["Java", "Object-Oriented Programming", "OOP"],
    },
    {
        title: "Tools & Development",
        skills: ["Git", "REST APIs", "API Integration", "Responsive Design", "Agile Development"],
    },
    {
        title: "Additional",
        skills: ["Tkinter"],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
            {/* Background radial soft light */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-brand-accent-2)]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="flex flex-col mb-16 text-center sm:text-left">
                <h4 className="text-[var(--color-brand-accent-1)] font-semibold tracking-widest text-sm mb-4 uppercase">
                    Tech Stack
                </h4>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                    Tools I use to build scalable products.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsCategories.map((category, idx) => (
                    <div key={idx} className="bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border)] p-6 rounded-2xl flex flex-col hover:border-[var(--color-brand-accent-1)]/50 transition-colors group relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-brand-accent-1)]/10 to-transparent rounded-bl-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[var(--color-brand-accent-1)] transition-colors">{category.title}</h3>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="px-3 py-1.5 border border-[var(--color-brand-border)] rounded-lg text-sm text-[var(--color-brand-text-secondary)] font-medium 
                               hover:bg-[var(--color-brand-accent-1)]/10 hover:text-white hover:border-[var(--color-brand-accent-1)] transition-all cursor-default shadow-sm hover:shadow-[0_0_12px_rgba(124,58,237,0.3)] hover:-translate-y-0.5 relative group/tooltip"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
