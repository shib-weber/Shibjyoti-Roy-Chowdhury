import { useState } from 'react'; 
import Terminal from './terminal'
import Techstack from './techstacks'
import ProjectList from './projects'
import Contacts from "./contact";
import Header from './header';
import Education from './Education';
import About from './about';
import AIStrokes from '../components/Aistroke';
import Pic from '../assets/src.jpg'
import Pic2 from '../assets/yn1.jpg';
import Footer from '../components/Footer'
import CollaborationBanner from './CollaborationBanner'

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close mobile menu
    }
  };

  return (
    <div id="sections" className="relative font-sans bg-[#080710] text-white min-h-screen overflow-x-hidden">
      
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[130px] opacity-35 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-violet-600 rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-pulse pointer-events-none z-0"></div>

<nav className="fixed top-0 left-0 right-0 text-white p-4 z-50 
  /* Glassmorphism Configuration */
  bg-white/5 backdrop-blur-md border-b border-white/10 
  /* Neon Blue Bottom Glow */
  shadow-lg
  shadow-cyan-500/80">
  
  <div className="flex justify-between items-center max-w-6xl mx-auto">
    <div className="flex items-center gap-3 font-bold text-sm sm:text-xl tracking-wide">
        <span className='bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent'>SHIBJYOTI ROY CHOWDHURY</span>
    </div>

    {/* Mobile Burger Trigger */}
    <div className="md:hidden">
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="outline-2 outline-cyan-400  text-cyan-400 text-xl bg-transparent p-1 transition-transform active:scale-95"
      >
        {menuOpen ? '✕' : '☰'}
      </button>
    </div>

    {/* Desktop Nav */}
    <div className="hidden md:flex space-x-6 items-center text-sm sm:text-base">
      <button onClick={() => scrollToSection("aboutt")} className="hover:text-cyan-400 transition-colors bg-transparent text-cyan-400 font-medium">About</button>
      <button onClick={() => scrollToSection("timelinet")} className="hover:text-cyan-400 transition-colors bg-transparent text-cyan-400 font-medium">Education</button>
      <button onClick={() => scrollToSection("projectst")} className="hover:text-cyan-400 transition-colors bg-transparent text-teal-400 font-medium">Projects</button>
      <button onClick={() => scrollToSection("techstackt")} className="hover:text-cyan-400 transition-colors bg-transparent text-emerald-400 font-medium">Tech Stack</button>
      <button onClick={() => scrollToSection("contactt")} className="hover:text-cyan-400 transition-colors bg-transparent text-cyan-400 font-medium">Contact</button>
    </div>
  </div>

  {/* Mobile Nav Menu */}
  {menuOpen && (
    <div className="md:hidden flex flex-col items-start mt-4 px-4 space-y-3 text-sm rounded-xl py-4
      /* Match parental glass styling */
      bg-gray-950/80 backdrop-blur-lg border border-white/10 shadow-[0_10px_20px_rgba(0,191,255,0.15)]">
      <button onClick={() => { scrollToSection("aboutt"); setMenuOpen(false); }} className="hover:text-cyan-400 w-full text-left bg-transparent text-cyan-400 py-1 transition-colors">About</button>
      <button onClick={() => { scrollToSection("timelinet"); setMenuOpen(false); }} className="hover:text-cyan-400 w-full text-left bg-transparent text-cyan-400 py-1 transition-colors">Education</button>
      <button onClick={() => { scrollToSection("projectst"); setMenuOpen(false); }} className="hover:text-cyan-400 w-full text-left bg-transparent text-teal-400 py-1 transition-colors">Projects</button>
      <button onClick={() => { scrollToSection("techstackt"); setMenuOpen(false); }} className="hover:text-cyan-400 w-full text-left bg-transparent text-teal-400 py-1 transition-colors">Tech Stack</button>
      <button onClick={() => { scrollToSection("contactt"); setMenuOpen(false); }} className="hover:text-cyan-400 w-full text-left bg-transparent py-1 text-emerald-400 transition-colors">Contact</button>
    </div>
  )}
</nav>

      <div className="relative z-10 backdrop-blur-xl bg-white/[0.01] min-h-screen pt-24 pb-12 px-4 sm:px-8 max-w-8xl mx-auto space-y-16">
        
        {/* Header Section */}
        <Header />

        {/* About Me */}
          <About />

        <AIStrokes />

        {/* Timeline */}
        <section id="timelinet" className=" rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(147,51,234,0.07)]">        
          <Education />
        </section>
        <AIStrokes />
        <CollaborationBanner />

        <AIStrokes />

        {/* Tech Stack */}
        <section id="techstackt" className=" rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(147,51,234,0.07)]">
          <Techstack />
        </section>
        <AIStrokes />


        {/* Projects */}
        <section id="projectst" className="rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(147,51,234,0.07)]">
          <ProjectList />     
        </section>
        <AIStrokes />

        {/* Terminal Section */}
        <section className="rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl">
          <Terminal />
        </section>

        {/* Contact Section */}
        <div id="contactt" className=" rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(147,51,234,0.07)]">
          <Contacts />
        </div>
      </div>
              <Footer></Footer>
    </div>
  );
}