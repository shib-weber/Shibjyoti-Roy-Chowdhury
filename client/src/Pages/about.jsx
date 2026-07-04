import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BulbOff from '../components/lightbulb-minimalistic-svgrepo-com.svg';
import BulbOn from '../components/light-bulb-svgrepo-com.svg';

export default function About() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mt-16 mb-16 bg-transparent flex items-center justify-center px-4 sm:px-6 md:px-8">
      <section
        id="aboutt"
        className="flex flex-col md:flex-row gap-12 items-center justify-center py-12 md:py-16 px-6 md:px-12 max-w-5xl w-full 
          /* Glassmorphism Styling matching site theme */
          bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl 
          /* Deep Ambient Bottom Shadow Glow */
          shadow-[0_20px_50px_-10px_rgba(6,182,212,0.15)] relative overflow-hidden"
      >
        {/* Decorative Tech Corner Line Accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20 rounded-tl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20 rounded-br-3xl pointer-events-none" />

        {/* Left Side: Bulb Interactive Circuit Wrapper */}
        <div
          className="flex-1 flex flex-col items-center justify-center relative select-none w-full cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          {/* Dynamic Technical Circuit Caption Area */}
          <div className="h-10 flex items-center justify-center mb-6">
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.div
                  key="active-caption"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-yellow-400 font-mono text-xs sm:text-sm tracking-wider bg-transparent border border-yellow-500/30 px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                >
                  “Ideas are born when circuits complete.”
                </motion.div>
              ) : (
                <motion.div
                  key="inactive-caption"
                  className="text-slate-500 font-mono text-xs  tracking-widest uppercase"
                >
                  [Status: Circuit Disconnected]
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Lightbulb Hardware Render Module */}
          <div className="relative group p-4">
            {/* Background Aura Glow when turned on */}
            <div 
              className={`absolute inset-0 bg-yellow-500 rounded-full blur-3xl opacity-0 transition-opacity duration-500 pointer-events-none ${
                isActive ? 'opacity-25' : 'group-hover:opacity-5'
              }`} 
            />
            
            <motion.img
              src={isActive ? BulbOn : BulbOff}
              alt="interactive circuit switch"
              className="w-24 sm:w-28 relative z-10 transition-all duration-300"
              style={{
                filter: isActive
                  ? 'drop-shadow(0 0 15px rgba(236, 243, 24, 0.6)) drop-shadow(0 0 35px rgba(171, 212, 6, 0.4))'
                  : 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.1)) invert(0.2)',
              }}
              animate={{ scale: isActive ? 1.08 : 1 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <p className={`mt-4 font-mono font-bold tracking-widest text-xs uppercase px-4 py-1 rounded-full border transition-all duration-300 ${
            isActive 
              ? 'bg-transparent border-yellow-500/40 text-yellow-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
              : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
          }`}>
            {isActive ? "System Online" : "Click to Connect"}
          </p>
        </div>

        {/* Right Side: Informative Text Column */}
        <motion.div
          className="info flex-1 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left z-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5 pb-1 inline-block bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base text-justify font-medium">
            Meet a full-stack developer passionate about merging creativity with strict functional logic. 
            I love designing high-performance, immersive experiences using technologies like React, Node.js, 
            and modern AI integrations. My engineering journey is powered by continuous curiosity and agile innovation 
            — always eager to link modules together to bring meaningful digital architecture to life.
          </p>
        </motion.div>
      </section>
    </div>
  );
}