import React, { useEffect, useRef } from "react";

// South Indian breakfast emojis
const items = ["🍛", "🥞", "🥯", "🍲", "🥥", "🍢"];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  emoji: string;
  rotation: number;
  rotationSpeed: number;
}

const InteractiveParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 15; // more particles
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 10 + Math.random() * 20, // bigger emojis
      speed: 0.1 + Math.random() * 0.5,
      emoji: items[Math.floor(Math.random() * items.length)],
      rotation: Math.random() * 180,
      rotationSpeed: (Math.random() - 0.1) * 2,
    }));

    particlesRef.current = newParticles;

    let animationFrame: number;

    const animate = () => {
      particlesRef.current.forEach(p => {
        p.y -= p.speed;
        p.rotation += p.rotationSpeed;
        if (p.y + p.size < 0) {
          p.y = window.innerHeight;
          p.x = Math.random() * window.innerWidth;
        }
      });
      renderParticles();
      animationFrame = requestAnimationFrame(animate);
    };

    const renderParticles = () => {
      if (!container) return;
      container.innerHTML = "";
      particlesRef.current.forEach(p => {
        const spanEl = document.createElement("span");
        spanEl.textContent = p.emoji;
        spanEl.style.position = "absolute";
        spanEl.style.left = `${p.x}px`;
        spanEl.style.top = `${p.y}px`;
        spanEl.style.fontSize = `${p.size}px`;
        spanEl.style.pointerEvents = "none";
        spanEl.style.userSelect = "none";
        spanEl.style.opacity = "0.7";
        spanEl.style.transform = `rotate(${p.rotation}deg)`;
        container.appendChild(spanEl);
      });
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed", // fix over entire viewport
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        overflow: "hidden",
        zIndex: 0, // behind everything
        pointerEvents: "none", // allow clicks through
      }}
    />
  );
};

export default InteractiveParticles;
