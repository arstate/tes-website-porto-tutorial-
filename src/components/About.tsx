import { motion } from 'motion/react';
import Sparkle from './Sparkle';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative z-10"
        >
          <Sparkle className="absolute -top-12 -left-8 w-10 h-10 text-pink-300" color="currentColor" />
          
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">BACHTIAR ARYANSYAH</span>
          </h2>
          
          <div className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm mb-8">
            <span className="text-sm font-semibold tracking-wide text-purple-600">Established in 2020</span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            What started as a passion for capturing fleeting moments has evolved into a full-fledged creative studio. I specialize in crafting visual narratives that are not just seen, but felt. With a blend of modern aesthetics and timeless storytelling, aarstate cinema brings your vision to life.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#1a1a1a', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-4 rounded-full bg-white border border-gray-200 text-base font-semibold shadow-sm transition-colors"
          >
            Read My Story
          </motion.button>
        </motion.div>

        {/* Right Side: Image Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative w-full aspect-[4/5] md:aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-orange-100 rounded-[3rem] rotate-[-6deg] scale-105 blur-xl opacity-50"></div>
          
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl p-3">
            <img 
              src="https://images.unsplash.com/photo-1554046920-90dcac023691?q=80&w=2069&auto=format&fit=crop" 
              alt="Photographer at work" 
              className="w-full h-full object-cover rounded-[2.5rem]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-32 h-32 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl p-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" 
              alt="Camera detail" 
              className="w-full h-full object-cover rounded-[1.5rem]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
