import { useState } from 'react'; 
import Terminal from './terminal'
import Techstack from './techstacks'
import ProjectList from './projects'
import Contacts from "./contact";
import Header from './header';
import Education from './Education';
import About from './about';
import AIStrokes from '../components/Aistroke';
import AIStroke2 from '../components/Aistroke2'
import { useEffect } from 'react';

import Pic from '../assets/src.jpg'
import Pic2 from '../assets/yn1.jpg';

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    // Clear hash before scroll
    const clearHash = () => {
      if (window.location.hash) {
        // Prevent GitHub from jumping to anchor
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    // Scroll to top with delay to override GitHub behavior
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 200); // Delay to ensure layout is complete
    };

    window.addEventListener("load", () => {
      clearHash();
      scrollToTop();
    });

    return () => {
      // clean up
    };
  }, []);


  return (
    <div id="sections" className=" font-sans light:bg-white light:text-black dark:bg-black dark:text-white min-h-screen">
      {/* Navbar */}
  <nav className="fixed  shadow-amber-400 top-0 left-0 right-0 bg-gray-900 text-white shadow-lg p-4 z-50">
  <div className="flex justify-between items-center max-w-6xl mx-auto">
    {/* Logo + Name */}
    <div className="flex items-center gap-3 font-bold text-sm sm:text-xl">
      <img src={Pic} alt="Profile" className="rounded-full w-8 h-8" />
      Shibjyoti Roy Chowdhury
    </div>

    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="focus:outline-none text-white"
      >
        ☰
      </button>
    </div>

    {/* Navigation Links */}
    <div className="hidden md:flex space-x-4 items-center">
      <a href="#aboutt" className="sw:hover:text-yellow-400">About</a>
      <a href="#timelinet" className="hover:text-yellow-400">Education</a>
      <a href="#projectst" className="hover:text-yellow-400">Projects</a>
      <a href="#techstackt" className="hover:text-yellow-400">Tech Stack</a>
      <a href="#contactt" className="hover:text-yellow-400">Contact</a>
    </div>
  </div>

  {/* Mobile menu */}
  {menuOpen && (
    <div className="md:hidden flex flex-col items-start mt-4 px-4 space-y-2 text-sm">
      <a href="#aboutt" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About</a>
      <a href="#timelinet" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Timeline</a>
      <a href="#projectst" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Projects</a>
      <a href="#techstackt" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Tech Stack</a>
      <a href="#contactt" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Contact</a>
    </div>
  )}
</nav>


      {/* Header Section */}
      <Header></Header>

      {/* About Me */}
      <About></About>

      <AIStrokes></AIStrokes>

      {/* Timeline */}
        <section id="timelinet" className="p-6 ml-5 mr-5 pt-16 mb-10  rounded-lg shadow">        
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
                        Educational Timeline
                    </span>
        </h1>
        <Education></Education>
      </section>
      <AIStroke2></AIStroke2>

      {/* Tech Stack */}
      <section id="techstackt" className="ml-5 mr-5 p-6   mb-16">
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
                        Technical Stack
                    </span>
        </h1>
          <Techstack></Techstack>
      </section>
      <div className="animations shadow-xl rounded-full shadow-amber-400 bg-transparent flex absolute h-[190px] w-[15px] sm:ml-[80%]  ml-[70%] sm:-mt-30 -mt-40"></div>
      <div className="animations shadow-lg rounded-full shadow-amber-800 bg-transparent flex absolute h-[200px] w-[15px] sm:ml-[82%] ml-[75%] sm:-mt-30 -mt-40"></div>
      <div className="animations shadow-lg rounded-full shadow-amber-900 bg-transparent flex absolute h-[210px] w-[15px] sm:ml-[84%] ml-[80%] sm:-mt-30 -mt-40"></div>

      {/* Projects */}
      <section id="projectst" className="p-6 mt-20 ml-5 mr-5 mb-26  ">
        <h1 className="text-4xl font-semibold mb-6 t">
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `url(${Pic2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'left',
                            fontWeight: 'bold'
                        }}
                    >
                        Projects
                    </span>
        </h1>
        <ProjectList></ProjectList>     
            <div className="absolute">
      {/* all your other sections */}
    </div>
      </section>
      <div className="animations shadow-lg rounded-full shadow-amber-900 bg-transparent flex absolute h-[120px] sm:h-[210px] w-[15px] sm:ml-[16%] ml-[16%] -mt-30"></div>
      <div className="animations shadow-lg rounded-full shadow-amber-800 bg-transparent flex absolute h-[110px] sm:h-[200px] w-[15px] sm:ml-[18%] ml-[21%] -mt-30"></div>
      <div className="animations shadow-xl rounded-full shadow-amber-400 bg-transparent flex absolute h-[100px] sm:h-[190px] w-[15px] sm:ml-[20%] ml-[26%] -mt-30"></div>

      {/* Feedback Terminal */}
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
                        Terminal
                    </span>
        </h1>
      <Terminal></Terminal>

      {/* Contact Section */}
      <Contacts></Contacts>

      <section className="ml-15 mr-15 h-30 px-6 pb-3 ">
</section>
    </div>
  );
}