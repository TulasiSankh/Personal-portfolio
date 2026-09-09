"use client";

import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Understand",
        description: "Understand the business problem and user requirements to lay a strong foundation.",
        icon: Search,
    },
    {
        number: "02",
        title: "Design",
        description: "Create clean, intuitive and responsive interfaces considering optimal user journeys.",
        icon: PenTool,
    },
    {
        number: "03",
        title: "Develop",
        description: "Build scalable frontend and backend systems, keeping performance and maintainability in mind.",
        icon: Code2,
    },
    {
        number: "04",
        title: "Improve",
        description: "Test, optimize and continuously improve the product based on feedback and analytics.",
        icon: Rocket,
    },
];

export default function WorkflowSection() {
    return (
        <section className="py-24 relative bg-[var(--color-brand-bg-secondary)] border-y border-[var(--color-brand-border)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

                <div className="flex flex-col mb-20 text-center">
                    <h4 className="text-[var(--color-brand-accent-1)] font-semibold tracking-widest text-sm mb-4 uppercase">
                        How I Build
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        My development workflow.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

                    {/* Animated Connective Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-[var(--color-brand-border)] z-0">
                        <div className="h-full bg-gradient-to-r from-[var(--color-brand-accent-1)] to-[var(--color-brand-accent-2)] w-full opacity-50 animate-pulse"></div>
                    </div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border)] mb-8 flex items-center justify-center relative group-hover:border-[var(--color-brand-accent-1)] transition-colors">

                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-brand-accent-1)] to-[var(--color-brand-accent-2)] opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>

                                <span className="absolute -top-3 bg-[var(--color-brand-accent-1)] text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-[var(--color-brand-bg-primary)] shadow-sm">
                                    {step.number}
                                </span>

                                <step.icon size={32} className="text-[var(--color-brand-text-secondary)] group-hover:text-white transition-colors relative z-10" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--color-brand-accent-1)] transition-colors">{step.title}</h3>
                            <p className="text-[var(--color-brand-text-secondary)] text-sm max-w-[250px] leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
