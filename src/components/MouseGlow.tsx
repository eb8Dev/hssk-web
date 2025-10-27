import React, { useEffect, useState } from 'react';

const MouseGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        pointerEvents: 'none',
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.3)', // soft white, 0.3 opacity
        boxShadow: '0 0 60px 30px rgba(255, 255, 255, 0.3)', // bigger and softer blur
        filter: 'blur(15px)', // add additional blur for smoothness
        transform: 'translate(-50%, -50%)',
        transition: 'background 0.2s ease',
        mixBlendMode: 'screen',
        zIndex: 9999,
      }}
    />
  );
};

export default MouseGlow;
