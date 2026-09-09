"use client";

import { Award, GraduationCap } from "lucide-react";

const education = [
    {
        degree: "Master of Computer Applications",
        specialization: "Computer Programming / Specific Applications",
        university: "Dr. Babasaheb Ambedkar Marathwada University (BAMU)",
        location: "Aurangabad",
        duration: "2021 – 2023",
    },
    {
        degree: "Bachelor of Computer Science",
        specialization: "",
        university: "Dr. Babasaheb Ambedkar Marathwada University (BAMU)",
        location: "Aurangabad",
        duration: "",
    }
];

const certifications = [
    "Octanet Software Services Certified",
    "Web Development Internship Completion Certificate",
    "Build Your First Android App",
    "Introduction to Agent Skills",
    "Effective Business Website",
    "Frontend Developer (React) Certificate"
];

export default function EducationCertificationsSection() {
    return (
        <section id="certifications" className="py-24 relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Education Side */}
                <div>
                    <div className="flex items-center gap-3 mb-10">
                        <GraduationCap className="text-[var(--color-brand-accent-1)]" size={32} />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
                    </div>

                    <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-brand-border)] before:to-transparent">
                        {education.map((edu, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                {/* Timeline icon */}
                                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[var(--color-brand-accent-1)] bg-[var(--color-brand-bg-primary)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                                    <div className="w-1.5 h-1.5 bg-[var(--color-brand-accent-1)] rounded-full group-hover:bg-[var(--color-brand-accent-2)] transition-colors"></div>
                                </div>

                                {/* Card */}
                                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border)] p-6 rounded-2xl group-hover:border-[var(--color-brand-accent-1)]/40 transition-colors">
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--color-brand-accent-1)] transition-colors">{edu.degree}</h3>
                                    {edu.specialization && <p className="text-sm font-medium text-[var(--color-brand-accent-2)] mb-3">{edu.specialization}</p>}
                                    <div className="text-[var(--color-brand-text-secondary)] text-sm mb-4">
                                        <p>{edu.university}</p>
                                        {edu.location && <p>{edu.location}</p>}
                                    </div>
                                    {edu.duration && (
                                        <div className="inline-block px-3 py-1 rounded bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-border)] text-xs font-semibold text-[var(--color-brand-text-secondary)]">
                                            {edu.duration}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Side */}
                <div>
                    <div className="flex items-center gap-3 mb-10">
                        <Award className="text-[var(--color-brand-accent-2)]" size={32} />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Certifications</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border)] p-5 rounded-2xl flex items-start gap-4 hover:border-[var(--color-brand-accent-2)]/40 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-border)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-accent-2)]/10 group-hover:border-[var(--color-brand-accent-2)]/30 transition-all">
                                    <Award size={18} className="text-[var(--color-brand-text-secondary)] group-hover:text-[var(--color-brand-accent-2)]" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-[var(--color-brand-accent-2)] transition-colors">{cert}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
