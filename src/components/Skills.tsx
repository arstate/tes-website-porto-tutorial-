import { motion } from 'motion/react';
import Sparkle from './Sparkle';

const skills = [
  { name: 'Adobe Lightroom', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg' },
  { name: 'Adobe Premiere Pro', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
  { name: 'Canva', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png' },
  { name: 'Adobe Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
  { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 relative"
        >
          <Sparkle className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 text-teal-400" color="currentColor" />
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            My Toolkit
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The software and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Simplified Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="
                relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] 
                bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]
                flex flex-col items-center justify-center p-8 text-center transition-all
                hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:bg-white/60 aspect-square md:aspect-auto md:h-[240px]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-6 filter drop-shadow-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                referrerPolicy="no-referrer"
              />
              
              <h3 className="font-display font-semibold text-gray-800 text-lg md:text-xl tracking-tight z-10">
                {skill.name}
              </h3>
            </motion.div>
          ))}
          
          {/* Extra decorative box - simplified */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 p-1 aspect-square md:aspect-auto md:h-[240px]"
          >
            <div className="w-full h-full rounded-[1.8rem] md:rounded-[2.8rem] bg-white/20 backdrop-blur-md flex items-center justify-center p-6 text-center">
              <p className="font-display font-bold text-white text-2xl md:text-3xl leading-tight">
                Always <br/> Learning.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
