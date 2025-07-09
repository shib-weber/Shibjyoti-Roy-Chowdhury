import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";


export default function Contacts () {
    return (
        <div>
            <section id="contactt" className=" ml-5 mr-5 p-6 mb-16">
                <div className="flex justify-center space-x-6 text-5xl">
                <a href="https://github.com/shib-weber" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-violet-800" />
                </a>
                <a href="mailto:shibjyoti252@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="hover:text-red-500" />
                </a>
                <a href="https://linkedin.com/in/shibjyoti-roy-chowdhury-a179b0309" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-500" />
                </a>
                <a href="https://www.instagram.com/the_awful_guy._?igsh=NW16dWIwOW9wMW5n" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-500" />
                </a>
                </div>
            </section>
        </div>
    )
}


