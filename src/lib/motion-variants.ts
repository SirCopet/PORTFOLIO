import { Variants } from 'framer-motion';

export const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1], // easeOutQuart
    }
  }
};

export const glowVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
