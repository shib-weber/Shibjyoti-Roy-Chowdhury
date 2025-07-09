import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const educationData = [
  {
    title: "B.Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    institution: "Meghnad Saha Institute of Technology",
    year: "2023 - 2027",
    description: `Currently pursuing B.Tech with a specialization in Artificial Intelligence and Machine Learning. 
Actively involved in full-stack web development and AI-based projects. 
Dedicated to building a strong foundation in core CS concepts, data structures, algorithms, and real-world problem solving. 
Demonstrated consistent performance, team collaboration, and active participation in technical events and hackathons.`,
  },
  {
    title: "Higher Secondary (ISC - Class 12)",
    institution: "Orient Day School",
    year: "2021 - 2023",
    description: `Completed ISC with 97% in the Science stream, specializing in Physics, Chemistry, Mathematics, and Computer Science.
Focused on building strong logical and analytical reasoning through programming in Java and solving complex problems.
Recognized as a sincere, punctual, and hardworking student with a strong commitment to academic excellence.`,
  },
  {
    title: "Secondary Education (ICSE - Class 10)",
    institution: "Orient Day School",
    year: "2011 - 2021",
    description: `Completed ICSE with 91% marks, laying the foundation for strong academic and intellectual development.
Began exploring early programming concepts and developed an interest in technology and computing.
Built a disciplined and growth-oriented mindset from a young age, driven by curiosity and determination.`,
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-black sw:-mt-20 text-white py-2 px-4 md:px-16 relative overflow-hidden">
      <div className="relative">
        {/* Vertical timeline line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: inView ? "100%" : "0%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-5 md:left-6 top-0 w-[2.5px] bg-yellow-500 rounded-full"
          style={{ zIndex: 0 }}
        />

        <div className="space-y-10 pl-12 md:pl-16" ref={ref}>
          {educationData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.3,
                type: "spring",
                stiffness: 50,
              }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              {/* Dot */}
              <div className="absolute left-[-1.2rem] md:left-[-1.6rem] top-2 w-3.5 h-3.5 bg-yellow-500 rounded-full shadow-lg shadow-yellow-400 animate-pulse" />

              {/* Card */}
              <div className="bg-black bg-opacity-40 border border-yellow-500 rounded-lg p-5 md:p-6 backdrop-blur-lg shadow-xl transition-transform hover:scale-[1.02] hover:-translate-y-1 hover:rotate-[0.3deg] duration-300 cursor-pointer group">
                <h3 className="text-lg md:text-xl font-semibold text-yellow-400 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs italic text-gray-400">{item.year}</p>
                <h4 className="text-sm md:text-base font-medium mt-1 text-gray-300 group-hover:text-white transition-colors">
                  {item.institution}
                </h4>
                <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
