import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export default function Navbar() {
  const links = ['Home', 'Work', 'Skills', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
    >
      <div className="flex items-center justify-between px-6 py-3 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-orange-300 flex items-center justify-center text-white">
            <Camera size={16} strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">BACHTIAR ARYANSYAH</span>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -2, color: '#8b5cf6' }}
              className="text-sm font-medium text-gray-600 transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#1a1a1a', color: '#fff' }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-semibold shadow-sm transition-colors"
        >
          Let's Collaborate
        </motion.button>
      </div>
    </motion.nav>
  );
}
