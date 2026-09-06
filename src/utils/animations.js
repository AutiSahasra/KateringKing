import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isReducedMotion = () => 
  typeof window !== 'undefined' && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Animate elements into view with a smooth upward slide & fade
 */
export const animateFadeUp = (elements, options = {}) => {
  if (isReducedMotion() || !elements) return;

  const {
    delay = 0,
    stagger = 0.15,
    duration = 0.9,
    yOffset = 40,
    trigger = elements,
    start = 'top 85%'
  } = options;

  gsap.fromTo(
    elements,
    { opacity: 0, y: yOffset },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none none',
        once: true
      }
    }
  );
};

/**
 * Animate number count-up for legacy trust stats
 */
export const animateCounter = (element, targetValue, suffixOrOptions = '', duration = 2) => {
  let suffix = '';
  let dur = duration;
  let decimals = targetValue % 1 !== 0 ? 1 : 0;

  if (typeof suffixOrOptions === 'object' && suffixOrOptions !== null) {
    suffix = suffixOrOptions.suffix || '';
    dur = suffixOrOptions.duration || duration;
    if (suffixOrOptions.decimals !== undefined) decimals = suffixOrOptions.decimals;
  } else {
    suffix = suffixOrOptions || '';
  }

  if (isReducedMotion() || !element) {
    if (element) element.textContent = `${targetValue}${suffix}`;
    return;
  }

  const obj = { val: 0 };
  gsap.to(obj, {
    val: targetValue,
    duration: dur,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      once: true
    },
    onUpdate: () => {
      const displayVal = decimals > 0 ? obj.val.toFixed(decimals) : Math.floor(obj.val);
      element.textContent = `${displayVal}${suffix}`;
    }
  });
};

/**
 * Subtle parallax scrub on scroll
 */
export const animateParallax = (element, speed = 0.15) => {
  if (isReducedMotion() || !element) return;

  gsap.to(element, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
};

export default gsap;
