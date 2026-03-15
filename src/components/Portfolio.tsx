import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Sparkle from './Sparkle';

const portfolioData = [
  { id: 1, type: 'Photography', title: 'Urban Echoes', image: 'https://github.com/user-attachments/assets/2ad25e7e-2e9b-4236-96d3-188ae875b9c4', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-2' },
  { id: 2, type: 'Videography', title: 'Neon Nights', image: 'https://github.com/user-attachments/assets/ad1a1012-1c9a-420b-ad0d-1e4d66bd71e9', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 3, type: 'Photography', title: 'Silent Portraits', image: 'https://github.com/user-attachments/assets/e9b7a0a7-d03a-43d4-b9bb-babecdb30e47', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 4, type: 'Videography', title: 'Nature\'s Pulse', image: 'https://github.com/user-attachments/assets/85b41a11-b5cc-4097-ac2e-f6ab92456724', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1' },
  { id: 5, type: 'Photography', title: 'Abstract Forms', image: 'https://github.com/user-attachments/assets/bac80b12-7b44-4348-a301-988b727ca88c', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 6, type: 'Videography', title: 'City Flow', image: 'https://github.com/user-attachments/assets/41974d89-7153-49fb-8a2c-bf73f2899f14', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 7, type: 'Photography', title: 'Golden Hour', image: 'https://github.com/user-attachments/assets/155d74b0-7d44-4804-8f6c-35ad13b239ac', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 8, type: 'Videography', title: 'Ocean Breeze', image: 'https://github.com/user-attachments/assets/ef98552a-f375-4f8d-94f6-bb4761c94d72', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 9, type: 'Photography', title: 'Mountain Peaks', image: 'https://github.com/user-attachments/assets/9bbf3224-9584-4df2-af3d-37417fb085b2', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 10, type: 'Videography', title: 'Street Life', image: 'https://github.com/user-attachments/assets/c62b6e43-ae62-44e4-ac77-feded5de2864', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioData[0] | null>(null);
  const tabs = ['All', 'Photography', 'Videography'];

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  const filteredData = activeTab === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.type === activeTab);

  return (
    <section id="work" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Sparkle className="absolute -top-8 -left-8 w-6 h-6 text-orange-400" color="currentColor" />
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              A curated collection of my favorite projects, spanning across different mediums and styles.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex p-1 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-sm"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeTab === tab ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gray-900 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`
                  ${item.colSpan} ${item.rowSpan}
                  relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] 
                  bg-white/40 backdrop-blur-xl border border-white/60 shadow-sm
                  p-2 cursor-pointer
                `}
                onClick={() => setSelectedItem(item)}
              >
                <div className="w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center text-center px-4"
                    >
                      <span className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-2">
                        {item.type}
                      </span>
                      <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-4">
                        {item.title}
                      </h3>
                      <div className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-sm font-medium">
                        View Project
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Preview Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(null);
                }}
              >
                <X size={24} />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                <div className="mt-8 text-center">
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2 block">
                    {selectedItem.type}
                  </span>
                  <h3 className="text-white font-display text-3xl md:text-5xl font-bold">
                    {selectedItem.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
