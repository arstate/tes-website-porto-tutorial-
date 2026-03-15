import { motion } from 'motion/react';
import { Instagram, Twitter, Mail, Dribbble } from 'lucide-react';
import Sparkle from './Sparkle';

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[3rem] md:rounded-[4rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-12 md:p-24 text-center overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-purple-100/30 pointer-events-none"></div>
          <Sparkle className="absolute top-12 left-12 w-8 h-8 text-purple-400" color="currentColor" />
          <Sparkle className="absolute bottom-24 right-16 w-10 h-10 text-orange-300" color="currentColor" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm mb-8 relative z-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-gray-600">Available for freelance work</span>
          </motion.div>

          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 relative z-10">
            Let's create <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">something beautiful.</span>
          </h2>

          <motion.a
            href="mailto:hello@bachtiararyansyah.com"
            whileHover={{ scale: 1.05, backgroundColor: '#1a1a1a', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 rounded-full bg-white border border-gray-200 text-lg font-semibold shadow-sm transition-colors relative z-10 mb-16"
          >
            hello@bachtiararyansyah.com
          </motion.a>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12 relative z-10"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <p className="text-sm text-gray-500 font-medium">
              © 2026 BACHTIAR ARYANSYAH. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Dribbble, href: '#' },
                { icon: Mail, href: '#' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -4, color: '#8b5cf6' }}
                  className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-gray-600 shadow-sm transition-colors hover:bg-white"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </footer>
  );
}
