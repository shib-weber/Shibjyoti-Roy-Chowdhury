import Pic from '../assets/src.jpg';
import Pic2 from '../assets/yn.jpg';
import Pic3 from '../assets/ynO.jpg';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Header() {
    const rightRef = useRef(null);
    const rightInView = useInView(rightRef, { once: true, margin: "-50px" });

    return (
        <header className="mt-12 flex sm:flex-row flex-col gap-10 items-center justify-center px-6 mb-12">
            
            {/* Text Section */}
            <div className="infos sw:mt-12 mt-12 sm:w-1/2 w-[90%] text-center">
                <h2 className="sm:text-4xl text-3xl font-bold leading-snug">
                    Trust Me{' '}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `url(${Pic3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        !!
                    </span>
                    {' '}I'm a{' '}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `url(${Pic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            fontSize: '80px',
                            fontWeight: 'bold'
                        }}
                    >
                        Soft
                    </span>
                                        <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `url(${Pic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            fontSize: '80px',
                            fontWeight: 'bold'
                        }}
                    >
                        ware
                    </span>
                    <br />
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `url(${Pic})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            fontSize: '80px',
                            fontWeight: 'bold'
                        }}
                    >
                        Engineer
                    </span>
                </h2>
            </div>

            {/* Photo Section */}
            <motion.div
                ref={rightRef}
                initial={{ x: 200, opacity: 0 }}
                animate={rightInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="photo sw:mt-12 mt-12 sm:w-1/2 w-[90%] flex justify-center"
            >
                <img
                    src={Pic}
                    alt="Your Name"
                    className="w-72 h-72  object-cover rounded-xl shadow-lg"
                />
            </motion.div>
        </header>
    );
}
