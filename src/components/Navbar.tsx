"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll detection for navbar background
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initial check
        handleScroll();

        // Intersection Observer for active section highlighting
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -80% 0px", // Trigger when section passes upper portion of screen
            threshold: 0,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navLinks.forEach((link) => {
            const id = link.href.substring(1);
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    // Handle escape key and click outside for mobile menu
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
                // Also check if they clicked the hamburger toggle so it doesn't immediately reopen
                const isToggle = (e.target as HTMLElement).closest('[aria-label="Toggle navigation"]');
                if (!isToggle) setMobileMenuOpen(false);
            }
        };

        if (mobileMenuOpen) {
            document.addEventListener("keydown", handleEscape);
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileMenuOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.substring(1);
        const element = document.getElementById(id);

        if (element) {
            // Calculate position accounting for navbar height (~76px)
            const navbarHeight = 76;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - navbarHeight,
                behavior: "smooth"
            });
        }

        setMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-300 ease-in-out ${isScrolled
                    ? "bg-[rgba(5,5,10,0.78)] backdrop-blur-[16px] border-b border-[rgba(255,255,255,0.10)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "bg-[#000000] border-b border-[rgba(255,255,255,0.08)]"
                }`}
            style={{ height: "var(--navbar-height, 76px)" }}
        >
            <div className="w-full max-w-[1400px] h-full mx-auto px-[18px] md:px-[32px] flex items-center justify-between">
                {/* LEFT: Logo */}
                <Link
                    href="#home"
                    onClick={(e) => handleNavClick(e, "#home")}
                    className="flex items-center gap-3 z-50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 focus:ring-offset-[#000000]"
                    aria-label="Home"
                >
                    <div className="text-2xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                        TS
                    </div>
                    <div className="text-[13px] font-bold tracking-[0.1em] text-white mt-0.5">
                        TULASI SUGANDHI
                    </div>
                </Link>

                {/* CENTER: Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-[2vw] xl:gap-8 h-full">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-[13px] font-medium transition-colors duration-300 relative group/link h-full flex items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${isActive ? "text-[#ffffff]" : "text-[rgba(255,255,255,0.65)] hover:text-[#ffffff]"
                                    }`}
                            >
                                {link.name}
                                <div
                                    className={`absolute bottom-[24px] left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] rounded-full transition-all duration-300 ease-in-out ${isActive ? "w-[36px] opacity-100" : "w-0 opacity-0"
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* RIGHT: Let's Talk Button */}
                <div className="hidden lg:flex items-center">
                    <Link
                        href="#contact"
                        onClick={(e) => handleNavClick(e, "#contact")}
                        className="group flex items-center gap-1.5 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#000000]"
                    >
                        Let&apos;s Talk
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                    </Link>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="lg:hidden text-white z-50 p-2 -mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-expanded={mobileMenuOpen}
                    aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 bg-[rgba(5,5,10,0.95)] backdrop-blur-[24px] border-b border-[rgba(255,255,255,0.10)] lg:hidden flex flex-col py-4 px-6 shadow-2xl z-40"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`text-[15px] font-medium py-3 px-4 rounded-lg transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] ${isActive
                                                ? "text-[#ffffff] bg-[#ffffff]/5"
                                                : "text-[rgba(255,255,255,0.65)] hover:text-[#ffffff] hover:bg-[#ffffff]/5"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}

                            <div className="pt-4 mt-2 border-t border-[rgba(255,255,255,0.05)]">
                                <Link
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, "#contact")}
                                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white px-6 py-3.5 rounded-xl text-[14px] font-medium transition-transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white"
                                >
                                    Let&apos;s Talk
                                    <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
