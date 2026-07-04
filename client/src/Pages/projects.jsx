import React, { useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";
import projects from "../assets/Projectdata";

export default function ProjectRing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const angleStep = 360 / projects.length;

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-50px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-50px" });

  // Reset expansion state when changing between separate active project targets
  const handleIndexChange = (index) => {
    setActiveIndex(index);
    setIsDescExpanded(false);
  };

  const currentDescription = projects[activeIndex].description || "";
  // Check if description qualifies for cutting (longer than ~100 chars)
  const isLongDescription = currentDescription.length > 100;
  const truncatedText = isLongDescription && !isDescExpanded 
    ? `${currentDescription.slice(0, 100)}...` 
    : currentDescription;

  return (
    <section id="projectst" className="relative min-h-screen bg-slate-950/20 text-white py-5 px-4 sm:px-8 md:px-16 overflow-hidden flex-col items-center justify-center">
        
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
              {/* Section Heading Titles */}
        <div className="text-center mb-16">
          <h2 className="text-3xl py-2 sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Project Ring
          </h2>
            <p className="mt-2 text-sm sm:text-base text-cyan-400 font-mono tracking-wider">
            {"[ Documenting_ideas ]"}
          </p>
        </div>
      

      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-12 z-10">
        
        
        {/* Left Side: Orbiting Interactive Ring Container */}
        <motion.div
          ref={leftRef}
          initial={{ x: -60, opacity: 0 }}
          animate={leftInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative  w-full max-w-[280px] sm:max-w-[340px] aspect-square flex items-center justify-center dynamic-ring-box"
        >
          {/* Main Structural Circular Spine */}
          <div
            className="absolute shadow-lg shadow-cyan-400 inset-0 rounded-full border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.05)] transition-transform duration-700 ease-out"
            style={{ transform: `rotate(-${activeIndex * angleStep}deg)` }}
          >
            {projects.map((project, index) => {
              const angle = angleStep * index;
              const radius = 40;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Numerical Orbiting Bubble Badge */}
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-mono font-bold cursor-pointer border select-none transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-500 border-cyan-400 text-slate-950 scale-110 shadow-[0_0_20px_#06b6d4]"
                        : "bg-slate-900/80 border-white/10 text-slate-400 hover:border-cyan-400/40 hover:text-white"
                    }`}
                    style={{
                      transform: `rotate(${activeIndex * angleStep}deg)`,
                    }}
                    onClick={() => handleIndexChange(index)}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Anchor Node */}
          <div className="absolute inset-[22%] bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-inner shadow-black/40">
            <span className="text-[10px] uppercase tracking-widest font-mono text-cyan-400/70 mb-1">Active Core</span>
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse mb-2" />
            <a
              href={projects[activeIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 text-lg"
              title="View Source on GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Glassmorphism Data Output Panel */}
        <motion.div
          ref={rightRef}
          initial={{ x: 60, opacity: 0 }}
          animate={rightInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative w-full lg:flex-1 max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_-10px_rgba(6,182,212,0.1)] group transition-all duration-300 hover:border-cyan-500/20"
        >
          {/* Tech Spec Geometries */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/10 group-hover:border-cyan-400/40 rounded-tr-2xl transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/10 group-hover:border-cyan-400/40 rounded-bl-2xl transition-colors duration-300" />

          {/* Text Streams Container */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-0.5 rounded-md">
                PROJECT_LOG // {String(activeIndex + 1).padStart(2, '0')}
              </span>
            </div>
            
            <h2 className="text-2xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
              {projects[activeIndex].title}
            </h2>
            
            {/* Smooth Dynamic Description Container */}
            <div className="mt-4 text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
              <p className="transition-all duration-300 inline">
                {truncatedText}
              </p>

              {/* Read More Dropdown Switcher */}
              {isLongDescription && (
                <button
                  onClick={() => setIsDescExpanded(!isDescExpanded)}
                  className="inline-flex items-center !bg-transparent gap-1 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 ml-2 focus:outline-none transition-colors border-b border-cyan-500/20 pb-0.5"
                >
                  <span>{isDescExpanded ? "Less" : "More"}</span>
                  <motion.svg
                    animate={{ rotate: isDescExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
              )}
            </div>
          </div>

          {/* Action Call Intersectors */}
          <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <a
              href={projects[activeIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-sm" /> git_repository_src
            </a>

            <button
              onClick={() => window.open(projects[activeIndex].live, "_blank", "noopener,noreferrer")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/30 transform hover:-translate-y-0.5"
            >
              Launch Deployment <FaExternalLinkAlt className="text-[10px]" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}