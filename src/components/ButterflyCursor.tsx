"use client";

import { useEffect, useRef } from "react";

export default function ButterflyCursor() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursor = useRef({ x: -1000, y: -1000 });
    const isMoving = useRef(false);
    const movementTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let lastMoveTime = 0;

        const createParticle = (x: number, y: number, isTrail = false) => {
            if (!containerRef.current) return;

            const butterfly = document.createElement("div");
            butterfly.className = "butterfly-particle";

            let startX = x;
            let startY = y;

            if (!isTrail) {
                // If ambient background spawn, scatter everywhere
                startX = Math.random() * window.innerWidth;
                startY = Math.random() * window.innerHeight;
            } else {
                // If trailing cursor, subtle offset
                startX += (Math.random() - 0.5) * 40;
                startY += (Math.random() - 0.5) * 40;
            }

            butterfly.style.left = `${startX}px`;
            butterfly.style.top = `${startY}px`;

            // Go completely in random directions everywhere
            const tx = (Math.random() - 0.5) * (window.innerWidth * 0.8);
            const ty = (Math.random() - 0.5) * (window.innerHeight * 0.8);
            const rot = (Math.random() - 0.5) * 360;

            butterfly.style.setProperty('--tx', `${tx}px`);
            butterfly.style.setProperty('--ty', `${ty}px`);
            butterfly.style.setProperty('--rot', `${rot}deg`);

            const colors = ['#ffffff', '#f8fafc', 'var(--color-brand-accent-1)', 'var(--color-brand-accent-2)'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            // Sizes ranging from small dust to massive
            const baseScale = isTrail ? (0.5 + Math.random() * 2) : (0.5 + Math.random() * 4.5);
            butterfly.style.setProperty('--scale', baseScale.toString());

            butterfly.innerHTML = `
        <div class="butterfly-wrapper">
          <svg width="40" height="40" viewBox="0 0 26 26" fill="${color}" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4)); opacity: 0.9;">
              <path d="M 13 13 C 5 13, 2 8, 3 3 C 8 2, 13 5, 13 13 C 9 21, 3 23, 5 16 C 6 13, 11 13, 13 13 Z M 13 13 C 21 13, 24 8, 23 3 C 18 2, 13 5, 13 13 C 17 21, 23 23, 21 16 C 20 13, 15 13, 13 13 Z"/>
          </svg>
        </div>
      `;

            containerRef.current.appendChild(butterfly);

            setTimeout(() => {
                butterfly.remove();
            }, 5000 + Math.random() * 2000);
        };

        const handleMouseMove = (e: MouseEvent) => {
            cursor.current = { x: e.clientX, y: e.clientY };
            isMoving.current = true;

            // Spawn trail vigorously but safely throttled to avoid freezing browser (~30ms)
            const now = Date.now();
            if (now - lastMoveTime > 30) {
                createParticle(e.clientX, e.clientY, true);
                lastMoveTime = now;
            }

            if (movementTimeout.current) clearTimeout(movementTimeout.current);
            movementTimeout.current = setTimeout(() => {
                isMoving.current = false;
            }, 500);
        };

        window.addEventListener("mousemove", handleMouseMove);

        const spawnAmbientBackgroundButterfly = () => {
            createParticle(0, 0, false);
        };

        // Constant flow of ambient background butterflies
        const interval = setInterval(spawnAmbientBackgroundButterfly, 180);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearInterval(interval);
            if (movementTimeout.current) clearTimeout(movementTimeout.current);
        };
    }, []);

    return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden" />;
}
