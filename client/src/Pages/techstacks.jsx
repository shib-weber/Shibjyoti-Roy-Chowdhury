import './projects.css'
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

const originalTechStacks = [
  { name: "", shadowColor: "#6463638f" },
  { name: "", shadowColor: "#6463638f" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, shadowColor: "#22c55e" },
  { name: "React", icon: <FaReact className="text-cyan-400" />, shadowColor: "#22d3ee" },
  { name: "Java", icon: <FaJava className="text-red-400" />, shadowColor: "#f87171" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, shadowColor: "#facc15" },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, shadowColor: "#f97316" },
  { name: "", shadowColor: "#a09b9bcb" },
  { name: "", shadowColor: "#a09b9bcb" },
  { name: "", shadowColor: "#a09b9bcb" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" />, shadowColor: "#60a5fa" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" />, shadowColor: "#5eead4" },
  { name: "C", icon: <SiC className="text-blue-600" />, shadowColor: "#2563eb" },
  { name: "Python", icon: <FaPython className="text-yellow-300" />, shadowColor: "#fde047" },
  { name: "NumPy", icon: <SiNumpy className="text-indigo-400" />, shadowColor: "#818cf8" },
  { name: "", shadowColor: "white" },
  { name: "", shadowColor: "white" },
  { name: "", shadowColor: "white" },
  { name: "", shadowColor: "white" },
  { name: "", shadowColor: "white" },
  { name: "Express.js", icon: <SiExpress className="text-white" />, shadowColor: "#ffffff" },
  { name: "EJS", icon: <SiEjs className="text-gray-300" />, shadowColor: "#d1d5db" },
  { name: "Vite", icon: <SiVite className="text-purple-400" />, shadowColor: "#c084fc" },
  { name: "Mongodb", icon: <SiMongodb className="text-green-400" />, shadowColor: "#5eead4" },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" />, shadowColor: "#60a5fa" },
  { name: "", shadowColor: "white" },
  { name: "", shadowColor: "white" },
];

const reorderedSmallScreen = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, shadowColor: "#22c55e" },
  { name: "React", icon: <FaReact className="text-cyan-400" />, shadowColor: "#22d3ee" },
  { name: "Java", icon: <FaJava className="text-red-400" />, shadowColor: "#f87171" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, shadowColor: "#facc15" },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, shadowColor: "#f97316" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" />, shadowColor: "#60a5fa" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" />, shadowColor: "#5eead4" },
  { name: "Python", icon: <FaPython className="text-yellow-300" />, shadowColor: "#fde047" },
  { name: "C", icon: <SiC className="text-blue-600" />, shadowColor: "#2563eb" },
  { name: "NumPy", icon: <SiNumpy className="text-indigo-400" />, shadowColor: "#818cf8" },
  { name: "Express.js", icon: <SiExpress className="text-white" />, shadowColor: "#ffffff" },
  { name: "EJS", icon: <SiEjs className="text-gray-300" />, shadowColor: "#d1d5db" },
  { name: "Vite", icon: <SiVite className="text-purple-400" />, shadowColor: "#c084fc" },
  { name: "Mongodb", icon: <SiMongodb className="text-green-400" />, shadowColor: "#5eead4" },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" />, shadowColor: "#60a5fa" },
];

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
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderStack = (techStacksToUse) =>
    techStacksToUse.map((tech, index) => {
      const shouldFlicker = !tech.name && triggerFlicker;
      const isHovered = hoveredIndex === index;
      return (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-1 gap-1 sm:p-4 bg-[#111111] rounded-md transition-transform duration-300 hover:scale-105 ${
            shouldFlicker ? "flicker-glow" : ""
          }`}
          style={{
            boxShadow:
              !tech.name || isHovered
                ? `0 0 15px ${tech.shadowColor}`
                : "0 0 0 transparent",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {tech.icon ? (
            <div className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2" style={{ backgroundColor: "transparent" }}>
              {tech.icon}
            </div>
          ) : (
            <div className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2"></div>
          )}
          <span className="text-xs sm:text-sm text-center">{tech.name}</span>
        </div>
      );
    });

  return (
    <section ref={sectionRef} className="techno py-10 text-white">
      {/* Show reordered for small, original for medium+ */}
      <div className="grid grid-cols-4 md:hidden gap-2 px-8 sm:px-8 max-w-7xl mx-auto">
        {renderStack(reorderedSmallScreen)}
      </div>

      <div className="hidden md:grid md:grid-cols-9 gap-6 px-6 sm:px-8 max-w-7xl mx-auto">
        {renderStack(originalTechStacks)}
      </div>
    </section>
  );
}
