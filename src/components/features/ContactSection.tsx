'use client';

import { motion } from 'framer-motion';
import { ContactLinks } from '@/components/ui/ContactLinks';
import { sectionVariants } from '@/lib/motion-variants';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-mono text-white mb-8">Contacta</h2>
        <p className="text-white/60 mb-12 max-w-lg mx-auto">
          Estic obert a noves oportunitats i col·laboracions tècniques. 
          Pots contactar-me a través dels següents canals:
        </p>
        <div className="flex justify-center">
          <ContactLinks />
        </div>
      </motion.div>
    </section>
  );
};
