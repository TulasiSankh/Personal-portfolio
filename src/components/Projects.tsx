"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "HRMS",
        fullName: "Human Resource Management System",
        category: "Enterprise Software",
        description: "Enterprise HRMS platform with employee management, authentication, dashboards, leave management, performance tracking and reporting.",
        tags: ["React.js", "Next.js", "Java", "Spring Boot", "REST APIs", "SQL Server"],
        highlightColor: "from-blue-500/20 to-purple-500/20",
        accentColor: "group-hover:border-blue-500/50",
    },
    {
        title: "AMC Management System",
        fullName: "Service & Maintenance Workflows",
        category: "Business Operations",
        description: "Comprehensive management system for business workflows, responsive UI, robust API integration, and enterprise data management.",
        tags: ["React.js", "Java", "Spring Boot", "SQL Server"],
        highlightColor: "from-emerald-500/20 to-teal-500/20",
        accentColor: "group-hover:border-emerald-500/50",
    },
    {
        title: "MatchAI",
        fullName: "AI Resume Analyzer",
        category: "Personal Project",
        description: "AI-powered resume analysis application that compares a resume against job requirements and generates structured match insights.",
        tags: ["Next.js", "React.js", "Ollama", "Local LLM", "JavaScript"],
        highlightColor: "from-orange-500/20 to-red-500/20",
        accentColor: "group-hover:border-orange-500/50",
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
            <div className="flex flex-col mb-16">
                <h4 className="text-[var(--color-brand-accent-1)] font-semibold tracking-widest text-sm mb-4 uppercase">
                    Selected Work
                </h4>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl">
                    A collection of products, systems and technical work I&apos;ve contributed to.
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {projects.map((project, idx) => (
                    <div key={idx} className={`group relative bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border)] rounded-3xl overflow-hidden transition-all duration-500 ${project.accentColor}`}>

                        {/* Background Gradient Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.highlightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">

                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-3 py-1 bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-border)] rounded-full text-xs font-semibold text-[var(--color-brand-text-secondary)] tracking-wider uppercase">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                    <h4 className="text-lg text-[var(--color-brand-text-secondary)] font-medium mb-6">{project.fullName}</h4>

                                    <p className="text-[var(--color-brand-text-secondary)] leading-relaxed mb-8">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-12 lg:mb-0">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-white/80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 lg:mt-12">
                                    <Link href="#" className="inline-flex items-center gap-2 text-white font-semibold group/btn">
                                        View Details
                                        <div className="w-8 h-8 rounded-full bg-[var(--color-brand-border)] flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
                                            <ArrowUpRight size={16} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Side (Abstract Mockups) */}
                            <div className="bg-[var(--color-brand-bg-primary)]/50 border-l border-[var(--color-brand-border)] min-h-[300px] lg:min-h-full flex items-center justify-center p-8 relative overflow-hidden group-hover:bg-[var(--color-brand-bg-primary)]/80 transition-colors">

                                {project.title === 'HRMS' && (
                                    <div className="w-full max-w-sm h-64 bg-[#1e2335] rounded-xl border border-blue-500/20 shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500">
                                        <div className="h-10 bg-[#161a29] border-b border-blue-500/10 flex items-center px-4 gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                            <div className="ml-4 w-32 h-3 bg-blue-500/20 rounded"></div>
                                        </div>
                                        <div className="flex-1 p-4 flex gap-4">
                                            <div className="w-1/4 h-full bg-blue-500/10 rounded-lg"></div>
                                            <div className="w-3/4 flex flex-col gap-4">
                                                <div className="h-1/3 bg-blue-500/10 rounded-lg"></div>
                                                <div className="flex-1 bg-blue-500/10 rounded-lg"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {project.title === 'AMC Management System' && (
                                    <div className="w-full max-w-sm h-64 bg-[#1a2920] rounded-xl border border-emerald-500/20 shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500">
                                        <div className="h-12 bg-[#121c16] border-b border-emerald-500/10 flex items-center px-6 justify-between">
                                            <div className="w-24 h-4 bg-emerald-500/20 rounded"></div>
                                            <div className="w-8 h-8 rounded-full bg-emerald-500/20"></div>
                                        </div>
                                        <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                                            <div className="bg-emerald-500/10 rounded-xl"></div>
                                            <div className="bg-emerald-500/10 rounded-xl"></div>
                                            <div className="col-span-2 bg-emerald-500/10 rounded-xl"></div>
                                        </div>
                                    </div>
                                )}

                                {project.title === 'MatchAI' && (
                                    <div className="w-full max-w-sm h-64 bg-[#2b1b19] rounded-xl border border-orange-500/20 shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                                        <div className="h-12 border-b border-orange-500/10 flex items-center px-4">
                                            <div className="font-mono text-xs text-orange-400">AI MATCH ANALYSIS</div>
                                        </div>
                                        <div className="flex-1 p-5 flex flex-col gap-4">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-16 h-16 rounded-full border-4 border-orange-500/30 border-t-orange-500 flex items-center justify-center font-bold text-orange-400">
                                                    94%
                                                </div>
                                                <div className="flex-1 h-3 bg-orange-500/20 rounded-full"></div>
                                            </div>
                                            <div className="h-8 bg-orange-500/10 rounded w-3/4"></div>
                                            <div className="h-8 bg-orange-500/10 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
