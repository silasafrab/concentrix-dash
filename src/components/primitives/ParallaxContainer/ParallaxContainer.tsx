"use client";
import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";

interface ParallaxContainerProps {
  children: ReactNode; // Define que children pode ser qualquer nó React
  xFactor?: number; // Define um tipo opcional para o fator X
  yFactor?: number; // Define um tipo opcional para o fator Y
  className?: string; // Define que className é uma string opcional
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  xFactor = 15,
  yFactor = 15,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (clientX - centerX) / xFactor;
      const offsetY = (clientY - centerY) / yFactor;

      if (containerRef.current) {
        gsap.to(containerRef.current, {
          x: offsetX,
          y: offsetY,
          ease: "power2.out",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [xFactor, yFactor]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxContainer;
