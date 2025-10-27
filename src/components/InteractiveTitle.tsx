import React, { useState, useRef } from "react";

const InteractiveTitle: React.FC<{ text: string }> = ({ text }) => {
  const [style, setStyle] = useState({});
  const ref = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation degrees (-15 to 15 max)
    const rotateX = ((y - centerY) / centerY) * 10; // tilt up/down
    const rotateY = ((x - centerX) / centerX) * 15; // tilt left/right

    setStyle({
      transform: `perspective(500px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: 'transform 0.1s ease-out',
      cursor: 'pointer',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(500px) rotateX(0) rotateY(0) scale(1)",
      transition: "transform 0.5s ease",
      cursor: 'default',
    });
  };

  return (
    <h1
      ref={ref}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </h1>
  );
};

export default InteractiveTitle;
