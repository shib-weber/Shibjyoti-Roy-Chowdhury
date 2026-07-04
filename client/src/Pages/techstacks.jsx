import { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiC,
  SiNumpy,
  SiExpress,
  SiEjs,
  SiVite,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

// Exact 27-element architectural grid matching your structural layout specification
const originalTechStacks = [
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  { name: "Python", icon: <FaPython />, colorClass: "text-yellow-300", shadowColor: "#fde047" },
  { name: "Node.js", icon: <FaNodeJs />, colorClass: "text-green-500", shadowColor: "#22c55e" },
  { name: "React", icon: <FaReact />, colorClass: "text-cyan-400", shadowColor: "#22d3ee" },
  { name: "Java", icon: <FaJava />, colorClass: "text-red-400", shadowColor: "#f87171" },
  { name: "JavaScript", icon: <SiJavascript />, colorClass: "text-yellow-400", shadowColor: "#facc15" },
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  { name: "CSS", icon: <FaCss3Alt />, colorClass: "text-blue-400", shadowColor: "#60a5fa" },
  { name: "HTML", icon: <FaHtml5 />, colorClass: "text-orange-500", shadowColor: "#f97316" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, colorClass: "text-teal-300", shadowColor: "#5eead4" },
  { name: "C", icon: <SiC />, colorClass: "text-blue-600", shadowColor: "#2563eb" },
  { name: "NumPy", icon: <SiNumpy />, colorClass: "text-indigo-400", shadowColor: "#818cf8" },
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  { name: "Express.js", icon: <SiExpress />, colorClass: "text-white", shadowColor: "#ffffff" },
  { name: "EJS", icon: <SiEjs />, colorClass: "text-slate-300", shadowColor: "#d1d5db" },
  { name: "Vite", icon: <SiVite />, colorClass: "text-purple-400", shadowColor: "#c084fc" },
  { name: "Mongodb", icon: <SiMongodb />, colorClass: "text-green-400", shadowColor: "#5eead4" },
  { name: "MySQL", icon: <SiMysql />, colorClass: "text-blue-400", shadowColor: "#60a5fa" },
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
  { name: "", shadowColor: "rgba(255, 255, 255, 0.08)" },
];

// Reordered condensed data arrays tracking only meaningful active cards for mobile viewports
const reorderedSmallScreen = originalTechStacks.filter(item => item.name !== "");

export default function TechStackGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [triggerFlicker, setTriggerFlicker] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggerFlicker(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderStack = (techStacksToUse, isMobileLayout) =>
    techStacksToUse.map((tech, index) => {
      const isEmpty = !tech.name;
      const isHovered = hoveredIndex === index;
      
      // Compute precise box-shadow layouts based on state variables
      let currentBoxShadow = "0 0 0 transparent";
      if (isEmpty && !isMobileLayout) {
        // Persistent subtle white glow layout for blank structural cells
        currentBoxShadow = `0 0 12px ${tech.shadowColor}`;
      } else if (isHovered) {
        // Highly vibrant glowing drop shadow using specific node color variables
        currentBoxShadow = `0 0 25px ${tech.shadowColor}`;
      } else if (isMobileLayout) {
        // Safe standard ambient glow matching active profile rules on tiny devices
        currentBoxShadow = `0 4px 12px rgba(0, 0, 0, 0.5), 0 0 10px ${tech.shadowColor}15`;
      }

      return (
        <div
          key={index}
          className={`flex flex-col items-center justify-center h-24 sm:h-28 p-2 rounded-xl border
            /* Layout states and interactive micro-animations */
            transition-all duration-300
            ${isEmpty ? 'border-white/5 opacity-25 hidden md:flex' : 'border-white/10 hover:scale-105 hover:-translate-y-1 hover:border-white/20 cursor-pointer'}`}
          style={{
            boxShadow: currentBoxShadow,
          }}
          onMouseEnter={() => !isEmpty && setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {tech.icon ? (
            <div className={`text-3xl sm:text-4xl mb-1.5 transition-transform duration-300 ${isHovered ? 'scale-110' : ''} ${tech.colorClass}`}>
              {tech.icon}
            </div>
          ) : (
            /* Micro tech-crosshair dot inside empty blueprint modules */
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          )}
          
          {tech.name && (
            <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-slate-300 text-center truncate w-full px-1">
              {tech.name}
            </span>
          )}
        </div>
      );
    });

  return (
    <section id="techstackt" ref={sectionRef} className="relative py-5 bg-transparent text-white overflow-hidden">
      {/* Background Deep Cyber-Glow Fields */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto sm:px-8">
        
        {/* Section Heading Titles */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Technical Ecosystem
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cyan-400 font-mono tracking-wider">
            {"[ tech_stack_inventory ]"}
          </p>
        </div>

        {/* 1. Small Screens: Dense Active Grid Layout (No Dead Spaces)
        */}
        <div className="grid grid-cols-4 xs:grid-cols-3 sm:grid-cols-4 md:hidden gap-4 p-2">
          {renderStack(reorderedSmallScreen, true)}
        </div>

        {/* 2. Desktop Screens: 9-Column Blueprint Matrix with White-Glow Blocky Placeholders
        */}
        <div className="hidden md:grid md:grid-cols-9 gap-5 p-4">
          {renderStack(originalTechStacks, false)}
        </div>

      </div>
    </section>
  );
}