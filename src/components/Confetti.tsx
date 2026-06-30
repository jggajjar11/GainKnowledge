import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  shape: "circle" | "square" | "triangle";
  delay: number;
}

const COLORS = ["#10B981", "#3B82F6", "#8B5CF6", "#F59E0B", "#EF4444", "#EC4899", "#06B6D4"];

export const Confetti: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const freshParticles: Particle[] = Array.from({ length: 60 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 20 + Math.random() * 40;
      return {
        id: i,
        // Start from center bottom
        x: 50 + (Math.random() * 10 - 5),
        y: 100,
        rotation: Math.random() * 360,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 6 + Math.random() * 10,
        shape: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as any,
        delay: Math.random() * 0.3,
      };
    });

    setParticles(freshParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
      {particles.map((p) => {
        const destX = (Math.random() - 0.5) * 400; // Explode outward
        const destY = -150 - Math.random() * 250; // Explode upward

        return (
          <motion.div
            key={p.id}
            initial={{
              opacity: 1,
              scale: 0,
              x: `${p.x}vw`,
              y: "90vh",
              rotate: 0,
            }}
            animate={{
              opacity: [1, 1, 0.6, 0],
              scale: [0, 1, 1, 0.4],
              x: `calc(${p.x}vw + ${destX}px)`,
              y: `calc(90vh + ${destY}px)`,
              rotate: p.rotation + 360,
            }}
            transition={{
              duration: 2 + Math.random() * 1.5,
              delay: p.delay,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              backgroundColor: p.shape !== "triangle" ? p.color : "transparent",
              borderLeft: p.shape === "triangle" ? `${p.size}px solid transparent` : "none",
              borderRight: p.shape === "triangle" ? `${p.size}px solid transparent` : "none",
              borderBottom: p.shape === "triangle" ? `${p.size * 1.5}px solid ${p.color}` : "none",
              width: p.shape === "triangle" ? 0 : p.size,
              height: p.shape === "triangle" ? 0 : p.size,
              borderRadius: p.shape === "circle" ? "50%" : "2px",
            }}
          />
        );
      })}
    </div>
  );
};
