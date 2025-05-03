import React, { useEffect, useRef } from 'react';
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: string;
  once?: boolean;
}
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = '20px',
  once = true
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    // Initial styles
    let translateX = '0';
    let translateY = '0';
    switch (direction) {
      case 'up':
        translateY = distance;
        break;
      case 'down':
        translateY = `-${distance}`;
        break;
      case 'left':
        translateX = distance;
        break;
      case 'right':
        translateX = `-${distance}`;
        break;
      default:
        break;
    }
    section.style.transform = `translate(${translateX}, ${translateY})`;
    section.style.opacity = '0';
    section.style.transition = `transform 0.8s ease ${delay}ms, opacity 0.8s ease ${delay}ms`;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.style.transform = 'translate(0, 0)';
          section.style.opacity = '1';
          if (once) {
            observer.unobserve(section);
          }
        } else if (!once) {
          section.style.transform = `translate(${translateX}, ${translateY})`;
          section.style.opacity = '0';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    observer.observe(section);
    return () => {
      observer.unobserve(section);
    };
  }, [delay, direction, distance, once]);
  return <div ref={sectionRef} className={className}>
      {children}
    </div>;
};