"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

function LinkedinIcon({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
        </svg>
    );
}

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 relative bg-[var(--color-brand-bg-secondary)] border-t border-[var(--color-brand-border)]">

            <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center text-white mb-20">
                <h4 className="text-[var(--color-brand-accent-1)] font-semibold tracking-widest text-sm mb-4 uppercase">
                    What I&apos;m Open To
                </h4>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {['Software Developer', 'Software Engineer', 'Frontend Developer', 'React Developer', 'Full-Stack Developer'].map((role, idx) => (
                        <span key={idx} className="px-4 py-2 border border-[var(--color-brand-border)] bg-[var(--color-brand-bg-card)] rounded-full text-sm font-medium text-white shadow-sm">
                            {role}
                        </span>
                    ))}
                </div>
                <p className="text-lg text-[var(--color-brand-text-secondary)] max-w-2xl mx-auto">
                    Open to opportunities where I can build impactful software, work with modern technologies and grow alongside strong engineering teams.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center bg-[var(--color-brand-bg-primary)] p-8 sm:p-12 rounded-3xl border border-[var(--color-brand-border)] relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[var(--color-brand-accent-1)] to-transparent rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

                    {/* Left: Info */}
                    <div className="flex flex-col gap-8 relative z-10">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            HAVE AN IDEA? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-accent-1)] to-[var(--color-brand-accent-2)]">LET&apos;S BUILD IT.</span>
                        </h2>
                        <p className="text-[var(--color-brand-text-secondary)] text-lg max-w-md">
                            Whether you&apos;re looking to build a product, improve an existing application, or simply connect about technology, I&apos;d love to hear from you.
                        </p>

                        <div className="flex flex-col gap-4 mt-4">
                            <a href="mailto:sankhtulasi@gmail.com" className="flex items-center gap-4 p-4 border border-[var(--color-brand-border)] rounded-2xl hover:border-[var(--color-brand-accent-1)]/50 bg-[var(--color-brand-bg-card)] transition-colors group w-fit pr-10">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-border)] flex items-center justify-center group-hover:bg-[var(--color-brand-accent-1)]/10 transition-colors">
                                    <Mail size={20} className="text-white group-hover:text-[var(--color-brand-accent-1)]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--color-brand-text-secondary)] font-semibold uppercase tracking-wider mb-1">Email Me</p>
                                    <p className="text-white font-medium">sankhtulasi@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+918660026699" className="flex items-center gap-4 p-4 border border-[var(--color-brand-border)] rounded-2xl hover:border-[var(--color-brand-accent-1)]/50 bg-[var(--color-brand-bg-card)] transition-colors group w-fit pr-10">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-border)] flex items-center justify-center group-hover:bg-[var(--color-brand-accent-1)]/10 transition-colors">
                                    <Phone size={20} className="text-white group-hover:text-[var(--color-brand-accent-1)]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--color-brand-text-secondary)] font-semibold uppercase tracking-wider mb-1">Call Me</p>
                                    <p className="text-white font-medium">8660026699</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/tulasi-sugandhi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-[var(--color-brand-border)] rounded-2xl hover:border-blue-500/50 bg-[var(--color-brand-bg-card)] transition-colors group w-fit pr-10">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-border)] flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                    <LinkedinIcon size={20} className="text-white group-hover:text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--color-brand-text-secondary)] font-semibold uppercase tracking-wider mb-1">LinkedIn</p>
                                    <p className="text-white font-medium">Connect Automatically</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border)] rounded-2xl p-8 shadow-xl relative z-10">
                        <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); alert("Form configuration required for email delivery."); }}>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-xs font-semibold text-[var(--color-brand-text-secondary)] uppercase tracking-wider">Name</label>
                                <input suppressHydrationWarning required type="text" id="name" className="w-full bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-border)] rounded-xl p-3 text-white focus:outline-none focus:border-[var(--color-brand-accent-1)] transition-colors text-sm" placeholder="John Doe" />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-xs font-semibold text-[var(--color-brand-text-secondary)] uppercase tracking-wider">Email</label>
                                <input suppressHydrationWarning required type="email" id="email" className="w-full bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-border)] rounded-xl p-3 text-white focus:outline-none focus:border-[var(--color-brand-accent-1)] transition-colors text-sm" placeholder="john@example.com" />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="subject" className="text-xs font-semibold text-[var(--color-brand-text-secondary)] uppercase tracking-wider">Subject</label>
                                <input suppressHydrationWarning required type="text" id="subject" className="w-full bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-border)] rounded-xl p-3 text-white focus:outline-none focus:border-[var(--color-brand-accent-1)] transition-colors text-sm" placeholder="Project Inquiry" />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-xs font-semibold text-[var(--color-brand-text-secondary)] uppercase tracking-wider">Message</label>
                                <textarea suppressHydrationWarning required id="message" rows={4} className="w-full bg-[var(--color-brand-bg-primary)] border border-[var(--color-brand-border)] rounded-xl p-3 text-white focus:outline-none focus:border-[var(--color-brand-accent-1)] transition-colors text-sm resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button suppressHydrationWarning type="submit" className="mt-2 w-full bg-gradient-to-r from-[var(--color-brand-accent-1)] to-[var(--color-brand-accent-2)] text-white font-medium py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(124,58,237,0.4)]">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
