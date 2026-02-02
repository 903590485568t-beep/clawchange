import React, { useEffect, useState } from 'react';

const BackgroundParticles: React.FC = () => {
  const [particles, setParticles] = useState<{ 
    id: number; 
    left: number; 
    delay: number; 
    duration: number;
    emoji: string;
    size: number;
    rotation: number;
  }[]>([]);

  const emojis = ['🦞', '🦀', '🥩', '💰', '💸', '💎', '🌊', '🦴'];

  useEffect(() => {
    const particleCount = 40;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => {
      return {
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 20,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        size: Math.random() * 20 + 10, // 10px to 30px
        rotation: Math.random() * 360,
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute select-none filter blur-[1px]"
          style={{
            left: `${p.left}%`,
            top: 0,
            fontSize: `${p.size}px`,
            animation: `float-down ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            // Opacity is handled by keyframes (max 0.4)
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
};

export default BackgroundParticles;
