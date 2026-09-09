"use client";

import { useEffect, useRef } from "react";

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseSize: number;
    size: number;
    color: string;
    glow: number;
    opacity: number;
    type: 'node' | 'floater';
    angle: number;
    orbitRadius: number;

    constructor(width: number, height: number, type: 'node' | 'floater') {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.type = type;

        // Bias particles towards the right side where the laptop is
        if (Math.random() > 0.3) {
            this.x = (width * 0.5) + (Math.random() * width * 0.5);
        }

        this.baseSize = type === 'node' ? (Math.random() * 1.5 + 0.5) : (Math.random() * 0.5 + 0.2);
        this.size = this.baseSize;

        // Palette: Purples, Blues, occasional Cyans
        const colors = ['139, 92, 246', '59, 130, 246', '96, 165, 250', '167, 139, 250'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.1;
        this.glow = 0;

        this.angle = Math.random() * Math.PI * 2;
        this.orbitRadius = Math.random() * 100;
    }

    update(width: number, height: number, mouseX: number, mouseY: number, isReducedMotion: boolean) {
        if (isReducedMotion) return;

        this.x += this.vx;
        this.y += this.vy;

        // Boundary check
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Parallax & Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
            // Subtle push away from mouse
            const force = (200 - dist) / 200;
            this.x -= (dx / dist) * force * 0.5;
            this.y -= (dy / dist) * force * 0.5;
            this.glow = Math.min(this.glow + 0.1, 1);
        } else {
            this.glow = Math.max(this.glow - 0.02, 0);
        }

        // Occasional brightening
        if (Math.random() < 0.001) this.glow = 1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        const currentOpacity = this.opacity + (this.glow * 0.5);
        const radius = this.size + (this.glow * 1.5);

        if (this.glow > 0) {
            ctx.shadowBlur = 10 * this.glow;
            ctx.shadowColor = `rgba(${this.color}, ${this.glow})`;
        } else {
            ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${currentOpacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

class DataPacket {
    progress: number;
    speed: number;
    start: Particle;
    end: Particle;
    dead: boolean;

    constructor(start: Particle, end: Particle) {
        this.start = start;
        this.end = end;
        this.progress = 0;
        this.speed = Math.random() * 0.01 + 0.005;
        this.dead = false;
    }

    update(isReducedMotion: boolean) {
        if (isReducedMotion) return;
        this.progress += this.speed;
        if (this.progress >= 1) {
            this.dead = true;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.dead) return;
        const x = this.start.x + (this.end.x - this.start.x) * this.progress;
        const y = this.start.y + (this.end.y - this.start.y) * this.progress;

        // The data packet is a brighter dot
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${1 - Math.abs(this.progress - 0.5) * 2})`; // Fade in/out at edges
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(167, 139, 250, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

export default function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let packets: DataPacket[] = [];
        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        // Check user preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const init = () => {
            particles = [];
            const numParticles = Math.min(window.innerWidth / 15, 100);
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle(canvas.width, canvas.height, i % 3 === 0 ? 'node' : 'floater'));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isMobile = canvas.width < 768;
            const connectionDistance = isMobile ? 100 : 150;

            // Update and Draw Particles
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                p1.update(canvas.width, canvas.height, mouseX, mouseY, prefersReducedMotion);

                // Only draw lines if it's a 'node' (to keep line density low and abstract)
                if (p1.type === 'node') {
                    for (let j = i + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        if (p2.type === 'node') {
                            const dx = p1.x - p2.x;
                            const dy = p1.y - p2.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);

                            if (dist < connectionDistance) {
                                const opacity = (1 - dist / connectionDistance) * 0.15;
                                ctx.beginPath();
                                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                                ctx.lineWidth = 0.5;
                                ctx.moveTo(p1.x, p1.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.stroke();

                                // Randomly spawn a data packet
                                if (!prefersReducedMotion && Math.random() < 0.0005 && packets.length < 5) {
                                    packets.push(new DataPacket(p1, p2));
                                }
                            }
                        }
                    }
                }
                p1.draw(ctx);
            }

            // Update & Draw Packets
            for (let i = packets.length - 1; i >= 0; i--) {
                packets[i].update(prefersReducedMotion);
                packets[i].draw(ctx);
                if (packets[i].dead) packets.splice(i, 1);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* 1. Base dark background (already applied generally on body, but we can augment) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#08090D] via-[#0b0c13] to-[#08090D]"></div>

            {/* 2. Atmospheric glow */}
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#3B82F6] rounded-full blur-[160px] opacity-[0.08]"></div>
            <div className="absolute bottom-[20%] right-[25%] w-[500px] h-[500px] bg-[#8B5CF6] rounded-full blur-[180px] opacity-[0.08]"></div>

            {/* 6. Orbital curves */}
            <svg className="absolute top-0 right-0 w-full lg:w-[120%] h-full opacity-20 pointer-events-none transform lg:translate-x-[20%]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                <g className="origin-[70%_50%] animate-[spin_40s_linear_infinite]">
                    <ellipse cx="70" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" className="text-[#8B5CF6]" strokeWidth="0.1" transform="rotate(-30 70 50)" />
                </g>
                <g className="origin-[70%_50%] animate-[spin_60s_reverse_linear_infinite]">
                    <ellipse cx="70" cy="50" rx="45" ry="20" fill="none" stroke="currentColor" className="text-[#3B82F6]" strokeWidth="0.1" transform="rotate(45 70 50)" />
                </g>
                <g className="origin-[70%_50%] animate-[spin_80s_linear_infinite]">
                    <ellipse cx="70" cy="50" rx="25" ry="40" fill="none" stroke="currentColor" className="text-[#7C3AED]" strokeWidth="0.1" transform="rotate(15 70 50)" />
                </g>
            </svg>

            {/* 3, 4, 5. Particles, lines, and data packets via WebGL/Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-screen opacity-70" />
        </div>
    );
}
