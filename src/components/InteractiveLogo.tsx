import React, { useState, useEffect, useRef } from "react";

const InteractiveLogo: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => {
  const [transform, setTransform] = useState<string>("rotateX(0) rotateY(0) scale(1)");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const rotateX = (-y / (rect.height / 2)) * 10;
      const rotateY = (x / (rect.width / 2)) * 10;

      setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        perspective: "1000px",
        display: "inline-block",
        zIndex: 1,
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={{
          width: "350px",
          height: "250px",
          cursor: "pointer",
          transformStyle: "preserve-3d",
          transform,
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
};

export default InteractiveLogo;
