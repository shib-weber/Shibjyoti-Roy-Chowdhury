import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BulbOff from '../components/lightbulb-minimalistic-svgrepo-com.svg';
import BulbOn from '../components/light-bulb-svgrepo-com.svg';
import Pic2 from '../assets/yn1.jpg';


export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="mt-12 sw:mt-12 sw:mb-12 mb-12 bg-transparent flex items-center justify-center px-4">
      <section
        id="about"
        className="flex mb-0 sm:flex-row flex-col pt-16 pb-16 px-6 max-w-5xl w-full bg-transparent  rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)] relative overflow-hidden"
      >
        {/* Bulb & Circuit */}
        <div
          className="flex-1 flex flex-col items-center justify-center relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Caption - fixed height to prevent layout shift */}
          <div className="h-12 flex items-center justify-center mb-4">
            <motion.div
              className={`text-yellow-400 font-semibold text-lg sm:text-xl text-center transition-all duration-500 ${
                hovered ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              initial={false}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              “Ideas are born when circuits complete.”
            </motion.div>
          </div>



          {/* Bulb Switch */}
          <motion.img
            src={hovered ? BulbOn : BulbOff}
            alt="bulb"
            className="w-24 sm:w-32 transition-all duration-300"
            style={{
              filter: hovered
                ? 'drop-shadow(0 0 10px #fde047) drop-shadow(0 0 30px #fde047)'
                : 'drop-shadow(0 0 2px #333)',
            }}
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <p className='font-bold text-amber-400 text-2xl'>Click Me</p>
        </div>

        {/* Info Section */}
        <motion.div
          className="info flex-1 text-white px-6 mt-10 sm:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
        <h1 className="text-4xl font-semibold mb-6 t">
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `url(${Pic2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                            fontWeight: 'bold'
                        }}
                    >
                        About Me
                    </span>
        </h1>          <p className="text-gray-300 leading-relaxed text-justify">
            Meet a full-stack developer passionate about merging creativity with logic. I love
            building immersive experiences using technologies like React, Node.js, and AI. My journey
            is powered by curiosity and innovation — always eager to light up new ideas and bring
            meaningful products to life.
          </p>
        </motion.div>
      </section>
    </div>
  );
}