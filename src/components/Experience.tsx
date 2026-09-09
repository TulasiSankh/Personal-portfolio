"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "ClickCrawl Media Pvt. Ltd.",
        role: "Software Engineer",
        duration: "April 2024 – Present",
        location: "Hubli / Karnataka",
        description: "As a Software Engineer, I develop and maintain scalable web applications using Java, Spring Boot, React.js, Next.js, HTML5, CSS3, JavaScript and SQL Server.",
        responsibilities: [
            "Develop responsive web applications using React.js and Next.js",
            "Build backend services and REST APIs using Java and Spring Boot",
            "Develop HRMS modules and business features",
            "Integrate frontend applications with backend services and databases",
            "Implement authentication and secure application flows",
            "Build dashboards and reporting interfaces",
            "Optimize application performance",
            "Improve accessibility and cross-browser compatibility",
            "Collaborate with developers, designers and QA teams",
            "Work using Git and Agile methodologies",
        ],
        highlight: "HRMS — Human Resource Management System",
        modules: ["Employee Management", "Authentication", "Dashboard", "Leave Management", "Performance Tracking", "Reporting"],
        current: true,
    },
    {
        company: "Prodigy InfoTech",
        role: "Web Development Intern",
        duration: "July 2024 – October 2024",
        location: "Mumbai, Maharashtra, India",
        description: "Contributed to web development projects and enriched core frontend skills through hands-on implementation and responsive design tasks.",
        current: false,
    },
    {
        company: "Cognifyz Technologies",
        role: "Full Stack Development Intern",
        duration: "April 2024 – July 2024",
        location: "Remote",
        description: "Actively participated in full-stack feature development and API integrations to improve overall application functionality.",
        current: false,
    },
    {
        company: "Oasis Infobyte",
        role: "Java Developer",
        duration: "February 2024 – March 2024",
        location: "Hubli, Karnataka, India",
        description: "Developed core Java modules and improved understanding of Object-Oriented Programming and Backend architectures.",
        current: false,
    },
    {
        company: "OctaNet Services Pvt Ltd.",
        role: "Web Development Intern",
        duration: "December 2023 – February 2024",
        location: "Remote",
        description: "Built responsive user interfaces and implemented modern web design practices for initial intern projects.",
        current: false,
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 relative bg-[var(--color-brand-bg-secondary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <div className="mb-16">
                    <h4 className="text-[var(--color-brand-accent-1)] font-semibold tracking-widest text-sm mb-4 uppercase">
                        Experience
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        My journey from learning to <br className="hidden md:block" /> building production software.
                    </h2>
                </div>

                <div className="relative border-l border-[var(--color-brand-border)] ml-6 md:ml-10 lg:ml-20">

                    <div className="absolute top-0 -left-px w-px h-full bg-gradient-to-b from-[var(--color-brand-accent-1)] via-[var(--color-brand-border)] to-transparent"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-16 relative pl-10 md:pl-16 last:mb-0 group">

                            {/* Timeline dot */}
                            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-[var(--color-brand-bg-secondary)] transition-colors duration-300 ${exp.current ? 'border-[var(--color-brand-accent-1)] shadow-[0_0_12px_rgba(124,58,237,0.8)]' : 'border-[var(--color-brand-border)] group-hover:border-white/50'}`}></div>

                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[var(--color-brand-accent-1)] transition-colors">{exp.company}</h3>
                                    <div className="text-[var(--color-brand-text-secondary)] font-medium flex items-center gap-3">
                                        <span className="text-white">{exp.role}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-border)]"></span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                                <div className="inline-block bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border)] px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-brand-text-secondary)] whitespace-nowrap self-start">
                                    {exp.duration}
                                </div>
                            </div>

                            <div className="text-[var(--color-brand-text-secondary)] leading-relaxed bg-[var(--color-brand-bg-card)]/50 border border-[var(--color-brand-border)] p-6 rounded-2xl hover:border-[var(--color-brand-border)]/80 transition-colors">
                                <p className="mb-4">{exp.description}</p>

                                {exp.responsibilities && (
                                    <ul className="list-disc list-inside space-y-2 mb-6 ml-2 text-sm">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                )}

                                {exp.highlight && (
                                    <div className="bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-accent-1)]/30 rounded-xl p-4 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-accent-1)]/5 rounded-bl-[100px] pointer-events-none"></div>
                                        <p className="text-xs font-bold text-[var(--color-brand-accent-1)] uppercase tracking-wider mb-2">Project Highlight</p>
                                        <p className="text-white font-semibold mb-3">{exp.highlight}</p>
                                        {exp.modules && (
                                            <div className="flex flex-wrap gap-2">
                                                {exp.modules.map((mod, idx) => (
                                                    <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-[var(--color-brand-border)] text-[var(--color-brand-text-secondary)]">
                                                        {mod}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
