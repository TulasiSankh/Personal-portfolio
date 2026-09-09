"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
            {/* Background decoration */}
            <div className="absolute left-0 top-32 w-64 h-64 bg-[var(--color-brand-accent-1)]/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex flex-col mb-16">
                <h4 className="text-[var(--color-brand-accent-1)] font-semibold tracking-[0.2em] text-sm mb-4 uppercase">
                    About Me
                </h4>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl text-balance">
                    I BUILD WITH PURPOSE, <br /> NOT JUST CODE.
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left: Text Content */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-[var(--color-brand-text-secondary)] text-lg leading-relaxed font-medium">
                    <p>
                        Software Developer with 2+ years of experience in designing, developing, and maintaining scalable web applications and enterprise solutions. I specialize in creating efficient, user-friendly and high-performance applications across frontend and backend technologies.
                    </p>
                    <p>
                        Currently working at <span className="text-white">ClickCrawl Media Pvt. Ltd.</span>, where I contribute to enterprise applications including HRMS and AMC systems. My work involves building responsive interfaces, authentication modules, employee management features, dashboards, performance tracking systems and REST API integrations.
                    </p>
                    <p>
                        I enjoy solving real-world problems through technology, writing clean and maintainable code, collaborating with teams and continuously improving my technical skills.
                    </p>

                    {/* Small timeline */}
                    <div className="mt-8 border-l-2 border-[var(--color-brand-border)] ml-2 pl-6 flex flex-col gap-6">
                        <div className="relative">
                            <div className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-[var(--color-brand-bg-primary)] border-2 border-[var(--color-brand-border)]"></div>
                            <p className="text-sm font-bold text-[var(--color-brand-accent-1)] mb-1">2023</p>
                            <p className="text-white text-base">Started professional development journey</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-[var(--color-brand-bg-primary)] border-2 border-[var(--color-brand-border)]"></div>
                            <p className="text-sm font-bold text-[var(--color-brand-accent-1)] mb-1">2024</p>
                            <p className="text-white text-base">Joined ClickCrawl Media</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-gradient-to-r from-[var(--color-brand-accent-1)] to-[var(--color-brand-accent-2)] border-2 border-transparent shadow-[0_0_10px_rgba(124,58,237,0.5)]"></div>
                            <p className="text-sm font-bold text-[var(--color-brand-accent-1)] mb-1">2024–Present</p>
                            <p className="text-white text-base">Software Engineer</p>
                        </div>
                    </div>
                </div>

                {/* Right: Stats Grid */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 auto-rows-min gap-4">
                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-center transition-all duration-500 hover:bg-white/[0.05] hover:border-[var(--color-brand-accent-1)] hover:-translate-y-2">
                        <h3 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-accent-1)] to-[var(--color-brand-accent-2)] font-bold mb-2">2+</h3>
                        <p className="text-[var(--color-brand-text-secondary)] font-medium">Years Experience</p>
                    </div>
                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-center transition-all duration-500 hover:bg-white/[0.05] hover:border-[var(--color-brand-accent-2)] hover:-translate-y-2">
                        <h3 className="text-4xl text-white font-bold mb-2">5+</h3>
                        <p className="text-[var(--color-brand-text-secondary)] font-medium">Roles &amp; Internships</p>
                    </div>
                    <div className="sm:col-span-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-center transition-all duration-500 hover:bg-white/[0.05] hover:border-[var(--color-brand-accent-1)] hover:-translate-y-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-accent-1)]/5 to-[var(--color-brand-accent-2)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-xl text-white font-bold mb-2 relative z-10">Full-Stack Development</h3>
                        <p className="text-[var(--color-brand-text-secondary)] text-sm relative z-10">End-to-end applications from API to UI.</p>
                    </div>
                    <div className="sm:col-span-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-center transition-all duration-500 hover:bg-white/[0.05] hover:border-[var(--color-brand-accent-2)] hover:-translate-y-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-accent-2)]/5 to-[var(--color-brand-accent-1)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-xl text-white font-bold mb-2 relative z-10">Enterprise Application Development</h3>
                        <p className="text-[var(--color-brand-text-secondary)] text-sm relative z-10">Building scalable systems for large businesses.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
