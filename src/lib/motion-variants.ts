import { Variants } from 'framer-motion';

export const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15,
    filter: 'blur(4px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.5, 
      ease: [0.25, 1, 0.5, 1], // Custom ease-out per a precisió
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
