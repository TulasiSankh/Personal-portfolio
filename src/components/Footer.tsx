"use client";

import Link from "next/link";
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

export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-bg-primary)] py-12 mt-20 relative z-10 w-full overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-accent-1)] to-transparent opacity-20"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h3 className="text-xl font-bold tracking-tight text-white">TULASI SUGANDHI</h3>
                        <p className="text-[var(--color-brand-text-secondary)] text-sm leading-relaxed max-w-sm">
                            Software Engineer &middot; Frontend Developer &middot; Full-Stack Developer
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center gap-4">
                        <h4 className="text-white font-medium text-sm mb-2">QUICK LINKS</h4>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-brand-text-secondary)]">
                            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
                            <Link href="#about" className="hover:text-white transition-colors">About</Link>
                            <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
                            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
                            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
                            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <h4 className="text-white font-medium text-sm mb-2">CONNECT</h4>
                        <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/in/tulasi-sugandhi/" target="_blank" rel="noopener noreferrer" className="p-2 border border-[var(--color-brand-border)] rounded-full text-[var(--color-brand-text-secondary)] hover:text-white hover:border-[var(--color-brand-accent-1)] transition-all">
                                <LinkedinIcon size={18} />
                            </Link>
                            <Link href="mailto:sankhtulasi@gmail.com" className="p-2 border border-[var(--color-brand-border)] rounded-full text-[var(--color-brand-text-secondary)] hover:text-white hover:border-[var(--color-brand-accent-1)] transition-all">
                                <Mail size={18} />
                            </Link>
                            <Link href="tel:+918660026699" className="p-2 border border-[var(--color-brand-border)] rounded-full text-[var(--color-brand-text-secondary)] hover:text-white hover:border-[var(--color-brand-accent-1)] transition-all">
                                <Phone size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-[var(--color-brand-border)] my-8"></div>
                <div className="text-center text-xs text-[var(--color-brand-text-secondary)] flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Tulasi Sugandhi. Built with passion and clean code.</p>
                </div>
            </div>
        </footer>
    );
}
