    import "./projects.css";
    import React, { useState } from "react";
    import { FaGithub } from "react-icons/fa";
    import { motion, useInView } from "framer-motion";
    import { useRef } from "react";

        import projects from "../assets/Projectdata"; 

    export default function ProjectRing() {
    const [activeIndex, setActiveIndex] = useState(0);
    const angleStep = 360 / projects.length;

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    const leftInView = useInView(leftRef, { once: true, margin: "-50px" });
    const rightInView = useInView(rightRef, { once: true, margin: "-50px" });

    return (
        <div className="Ring bg-black flex flex-col sm:flex-row items-start justify-center sm:justify-start text-white px-4 sm:px-8 py-4 sm:py-8 gap-10 sm:gap-20">
        
        {/* Left Ring Animation */}
        <motion.div
            ref={leftRef}
            initial={{ x: -200, opacity: 0 }}
            animate={leftInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[300px] sm:max-w-[350px] aspect-square mr-4"
        >
            <div
            className="shadow-fuchsia-400 shadow-lg absolute inset-0 rounded-full border-4 border-purple-300 transition-transform duration-700"
            style={{ transform: `rotate(-${activeIndex * angleStep}deg)` }}
            >
            {projects.map((project, index) => {
                const angle = angleStep * index;
                const radius = 38;
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
                    <div
                    className={`px-2 py-1 rounded-full text-xs sm:text-xs md:text-base font-semibold cursor-pointer text-center transition-all duration-300 w-max ${
                        isActive
                        ? "bg-purple-400 text-black scale-110 font-bold shadow"
                        : "bg-transparent hover:bg-purple-300"
                    }`}
                    style={{
                        transform: `rotate(${activeIndex * angleStep}deg)`,
                        transformOrigin: "center",
                    }}
                    onClick={() => setActiveIndex(index)}
                    >
                    {project.title}
                    </div>
                </div>
                );
            })}
            </div>

            {/* Center Info */}
            <div className="circle absolute inset-[25%] rounded-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                {projects[activeIndex].title}
            </h2>
            <a
                href={projects[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center gap-1 text-sm"
            >
                <FaGithub /> View Project
            </a>
            </div>
        </motion.div>

        {/* Right Info Animation */}
        <motion.div
            ref={rightRef}
            initial={{ x: 200, opacity: 0 }}
            animate={rightInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="right shadow-fuchsia-500 w-full sm:w-[500px] md:w-[500px] lg:w-[100%] min-h-[300px] h-full sm:h-[350px] lg:h-[350px] rounded-lg p-6 text-center text-white shadow-lg overflow-y-auto"
        >
            <h2 className="text-xl font-bold mb-2">{projects[activeIndex].title}</h2>
            <p className="text-sm mb-2">{projects[activeIndex].description}</p>
            <a
            href={projects[activeIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline flex items-center justify-center gap-1 text-sm"
            >
            <FaGithub /> View Project
            </a>
        </motion.div>
        </div>
    );
    }

