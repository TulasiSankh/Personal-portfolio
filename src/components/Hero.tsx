"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, ExternalLink } from "lucide-react";
import NetworkBackground from "./NetworkBackground";

export default function HeroSection() {
    return (
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden min-h-screen border-b border-white/5 flex flex-col justify-center w-full">

            {/* Animated Network Background */}
            <NetworkBackground />

            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

                    {/* Left Text Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-6 relative z-20"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-8 bg-gradient-to-r from-[#7C3AED] to-[#2563EB]"></div>
                            <span className="text-[14px] sm:text-[16px] font-bold tracking-[0.2em] text-[#D1D5DB] uppercase">
                                HELLO, I&apos;M TULASI 👋
                            </span>
                        </div>

                        <h1 className="text-[36px] sm:text-[46px] lg:text-[60px] font-black tracking-tighter text-white leading-[1.05] mt-2 font-sans uppercase">
                            SOFTWARE DEVELOPER<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]">
                                BUILDING MODERN<br />
                                WEB EXPERIENCES.
                            </span>
                        </h1>

                        <p className="text-[17px] text-[#D1D5DB] max-w-xl font-semibold mt-2 leading-relaxed tracking-wide">
                            ReactJS &bull; Java &bull; REST APIs &bull; Next.js &bull; SQL
                        </p>

                        <p className="text-[15px] text-[#9CA3AF] max-w-xl leading-relaxed">
                            2+ years of experience building enterprise web applications, business systems, and user-focused digital solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 mt-6 items-start sm:items-center">
                            <a href="#projects" className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-0.5">
                                View My Work
                                <ArrowRight size={16} />
                            </a>
                            <a href="#contact" className="px-8 py-3.5 rounded-full text-sm font-semibold border border-[#374151] bg-transparent text-white hover:bg-white/5 transition-colors flex items-center gap-2">
                                Let&apos;s Connect
                                <ArrowUpRight size={16} className="text-[#9CA3AF]" />
                            </a>
                        </div>

                        <div className="mt-8 flex items-center gap-5 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/20 px-5 py-3 rounded-xl w-fit relative overflow-hidden group/resume">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#8B5CF6]"></div>
                            <a href="/Tulasi Sugandhi CV.pdf" download className="inline-flex items-center gap-2 text-[14px] font-bold text-white hover:text-[#A78BFA] transition-colors relative group">
                                <Download size={16} className="text-[#A78BFA] group-hover:-translate-y-0.5 transition-transform" />
                                Download Resume
                            </a>
                            <span className="text-[#374151]">|</span>
                            <a href="/Tulasi Sugandhi CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#D1D5DB] hover:text-white transition-colors group">
                                View Resume
                                <ExternalLink size={16} className="text-[#9CA3AF] group-hover:text-white transition-colors" />
                            </a>
                        </div>

                        {/* Status Indicator */}
                        <a href="https://clickcrawl.net/" target="_blank" rel="noopener noreferrer" className="mt-8 group flex items-center justify-between gap-6 border border-[#222] hover:border-[#333] rounded-xl px-5 py-4 w-fit bg-[#0B0C10] shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute w-4 h-4 bg-[#22C55E] rounded-full opacity-20 blur-sm"></div>
                                    <div className="w-2.5 h-2.5 bg-[#22C55E] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)] z-10 animate-pulse"></div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-extrabold tracking-widest text-[#22C55E] uppercase mb-0.5">Currently Building</span>
                                    <span className="text-[13px] text-[#9CA3AF]">
                                        Enterprise web applications at <span className="text-white font-bold tracking-wide">ClickCrawl Media</span>
                                    </span>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-[#222] group-hover:border-[#444] bg-[#1a1a24] flex items-center justify-center transition-colors">
                                <ArrowUpRight size={14} className="text-[#9CA3AF] group-hover:text-white transition-colors" />
                            </div>
                        </a>
                    </motion.div>

                    {/* Right Visual Side - Laptop Image provided by User */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative w-full h-[400px] lg:h-[700px] flex items-center justify-center lg:justify-end pointer-events-none mt-4 lg:-mt-16 xl:-mt-24"
                    >
                        <div className="relative w-full max-w-[800px] flex items-center justify-center animate-[float_8s_ease-in-out_infinite] -translate-y-8 lg:-translate-y-12">
                            {/* Decorative background glow for the image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B5CF6]/10 to-transparent blur-3xl rounded-full mix-blend-screen -z-10"></div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/laptop.png"
                                alt="Tulasi Sugandhi Tech Stack Mockup"
                                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(139,92,246,0.25)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
