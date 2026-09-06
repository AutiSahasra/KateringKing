import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 25,
  ...props
}) {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn || window.matchMedia('(hover: none)').matches) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(btn, {
        x: x * (strength / 100),
        y: y * (strength / 100),
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)'
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <button
      ref={btnRef}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
