import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const educationData = [
  {
    title: "B.Tech in Computer Science and Engineering",
    specialization: "Artificial Intelligence and Machine Learning",
    institution: "Meghnad Saha Institute of Technology",
    year: "2023 - 2027",
    description: `Currently pursuing B.Tech with a specialization in Artificial Intelligence and Machine Learning. Actively involved in full-stack web development and AI-based projects. Dedicated to building a strong foundation in core CS concepts, data structures, algorithms, and real-world problem solving. Demonstrated consistent performance, team collaboration, and active participation in technical events and hackathons.`,
  },
  {
    title: "Higher Secondary (ISC - Class 12)",
    specialization: "Science Stream (97%)",
    institution: "Orient Day School",
    year: "2021 - 2023",
    description: `Completed ISC with 97% in the Science stream, specializing in Physics, Chemistry, Mathematics, and Computer Science. Focused on building strong logical and analytical reasoning through programming in Java and solving complex problems. Recognized as a sincere, punctual, and hardworking student with a strong commitment to academic excellence.`,
  },
  {
    title: "Secondary Education (ICSE - Class 10)",
    specialization: "General Science & Computer Application (91%)",
    institution: "Orient Day School",
    year: "2011 - 2021",
    description: `Completed ICSE with 91% marks, laying the foundation for strong academic and intellectual development. Began exploring early programming concepts and developed an interest in technology and computing. Built a disciplined and growth-oriented mindset from a young age, driven by curiosity and determination.`,
  },
];

// Reusable individual card item to manage expanded local state independently
function EducationCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all ml-5 mr-5 duration-300 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] transform hover:-translate-y-1 cursor-pointer selective-user-none"
    >
      {/* Tech Corner Accents */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-cyan-400 rounded-tr-xl transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 group-hover:border-cyan-400 rounded-bl-xl transition-colors" />

      {/* Header Data Track */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-md">
          {item.year}
        </span>

      </div>

      {/* Main Titles */}
      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
        {item.title}
      </h3>
      
      {item.specialization && (
        <p className="text-xs font-medium text-slate-300 mt-1.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          {item.specialization}
        </p>
      )}

      <h4 className="text-sm font-semibold text-slate-400 mt-2">
        {item.institution}
      </h4>

      {/* Mobile Toggle Trigger indicator arrow */}
      <div className="flex sm:hidden items-center justify-center gap-1 mt-3 pt-2 border-t border-white/5 text-cyan-400/80 group-hover:text-cyan-400 text-xs font-medium">
        <span>{isExpanded ? "Show less" : "Read description"}</span>
        <motion.svg 
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </div>

      {/* Collapsible Content Block */}
      <div className={`sm:block ${isExpanded ? "block" : "hidden"} mt-4 sm:mt-4 border-t border-white/5 pt-3`}>
        <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Education() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="timelinet" className="relative min-h-screen bg-transparent text-white py-5 w-full px-4 sm:px-0 md:px-16 overflow-hidden">
      {/* Background Neon Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-8xl sm:-full mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Education Timeline
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cyan-400 font-mono tracking-wider">
            {"[ academic_history_log ]"}
          </p>
        </div>

        {/* Timeline Structure Wrapper */}
        <div className="relative" ref={containerRef}>
          {/* Neon Animated Timeline spine line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 sm:left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800 -translate-x-1/2 origin-top hidden sm:block"
          />
          {/* Mobile alternative line alignment anchor */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 top-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800 origin-top sm:hidden"
          />

          <div className="space-y-12 sm:space-y-16">
            {educationData.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center w-full ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left / Right Card spacing block for desktop centering */}
                  <div className="w-full sm:w-1/2 hidden sm:block" />

                  {/* Central Node Dot placement */}
                  <div className="absolute left-4 sm:left-1/2 top-3 sm:top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee] animate-pulse" />
                    <div className="absolute w-6 h-6 border border-cyan-500/30 rounded-full animate-ping [animation-duration:3s]" />
                  </div>

                  {/* Content Glass Box Container */}
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0 z-10">
                    <EducationCard item={item} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}