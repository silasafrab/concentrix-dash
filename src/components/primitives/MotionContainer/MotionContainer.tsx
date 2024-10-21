"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MotionContainerProps {
  duration?: number;
  delay?: number;
  from?: { opacity?: number; y?: string; scale?: number };
  to?: { opacity?: number; y?: string; scale?: number };
  className?: string;
  children: React.ReactNode;
}

const MotionContainer: React.FC<MotionContainerProps> = ({
  duration = 0.8,
  delay = 0,
  from = { opacity: 0, y: "20%" },
  to = { opacity: 1, y: 0 },
  className = "",
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      gsap.fromTo(element, from, {
        ...to,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }
  }, [from, to, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default MotionContainer;
