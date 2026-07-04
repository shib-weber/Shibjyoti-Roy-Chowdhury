import Pic from '../assets/src.jpg';
import Pic3 from '../assets/ynO.jpg';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Header() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10px" });

    return (
        <section 
            ref={containerRef}
            className="relative min-h-[85vh] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 lg:px-16 py-20 gap-12 overflow-hidden"
        >
            {/* Soft Ambient Background Glows */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Left Content Column */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10"
            >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                    Trust Me <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">!!</span> I'm a 
                    <span className="block text-3xl lg:text-6xl  py-2 mt-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
                        Software Engineer
                    </span>
                </h1>
                
                <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-md font-medium leading-relaxed">
                    Crafting elegant digital experiences with high-performance code and pristine engineering precision.
                </p>

            </motion.div>

            {/* Right Photo Column with Tech Framing */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="w-full md:w-1/2 flex justify-center items-center z-10"
            >
                <div className="relative p-6 sm:p-8">
                    
                    {/* Decorative Outer Tech Circuit Lines (Frames) */}
                    <div className="absolute inset-0 border border-cyan-500/20 rounded-[2.5rem] scale-105 pointer-events-none" />
                    <div className="absolute inset-2 border border-purple-500/10 rounded-[2.2rem] scale-100 pointer-events-none" />
                    
                    {/* Glowing Accent Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500 rounded-br-2xl" />
                    
                    {/* Main Shadow Container wrapper */}
                    <div className="relative rounded-2xl bg-slate-900/40 p-3 backdrop-blur-sm border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
                        
                        {/* Inner Frame Container */}
                        <div className="relative overflow-hidden rounded-xl border border-cyan-500/30">
                            <img
                                src={Pic}
                                alt="Shibjyoti Roy Chowdhury"
                                className="w-64 h-64 sm:w-80 sm:h-80 object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Floating Tech Badges (As shown in the image layout) */}
                    {/* Top Left Bracket Badge */}
                    <div className="absolute -top-2 left-10 bg-slate-900/90 border border-cyan-500/40 text-cyan-400 text-xs px-2.5 py-1 rounded-md font-mono backdrop-blur-md shadow-md animate-pulse">
                        {"</>"}
                    </div>

                    {/* Right Verified Badge */}
                    <div className="absolute bottom-20 -right-4 bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 backdrop-blur-md shadow-lg shadow-emerald-950/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                        {}
                    </div>

                    {/* Bottom Left Status Tag */}
                    <div className="absolute -bottom-2 left-6 bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs font-mono px-3 py-1 rounded-lg backdrop-blur-md shadow-md">
                        {"{ }"}
                    </div>

                </div>
            </motion.div>
        </section>
    );
}