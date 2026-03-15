import { motion } from 'motion/react';
import Sparkle from './Sparkle';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Sparkles */}
      <Sparkle className="absolute top-40 left-[15%] w-8 h-8 text-purple-400" color="currentColor" />
      <Sparkle className="absolute bottom-40 right-[20%] w-12 h-12 text-orange-300" color="currentColor" />
      <Sparkle className="absolute top-60 right-[10%] w-6 h-6 text-teal-300" color="currentColor" />
      
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide uppercase text-gray-600">Available for freelance work</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 leading-[1.1] mb-6"
        >
          Capturing Moments, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400">
            Creating Masterpieces.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12"
        >
          I am a Freelance Photographer & Videographer building visual stories with a modern, elegant touch.
        </motion.p>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/50 shadow-2xl p-2 md:p-4"
        >
          <div className="w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative bg-gray-100">
            {/* Placeholder for Video */}
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" 
              alt="Cinematic reel" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20 group cursor-pointer">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 text-white shadow-xl"
              >
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
