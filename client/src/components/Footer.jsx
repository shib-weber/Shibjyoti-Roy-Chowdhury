import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaTerminal } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <SiLeetcode />, href: "https://leetcode.com", label: "LeetCode" },
  ];

  return (
    <footer className="relative w-full shadow-[0_-4px_20px_-5px_rgba(34,211,238,0.15)] bg-slate-950 text-white border-t border-white/5 pt-12 pb-6 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      {/* Background Matrix Ambient Glows */}
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Bottom Tier: Sub-System Metrics & Copyright Manifest */}
        <div className="mt-6 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] sm:text-xs text-slate-500">
          
          {/* Copyright System Stamp */}
          <div className="text-left flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span>&copy; {currentYear}</span>
            <span className="text-slate-400 font-semibold">Shibjyoti Roy Chowdhury</span>
            <span className="text-slate-600 hidden xs:inline">|</span>
            <span className="text-slate-500">All rights reserved.</span>
          </div>

          {/* System Status Array Manifest */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 w-full md:w-auto border-b border-white/5 md:border-none pb-3 md:pb-0">
            <span className="flex items-center gap-1.5 text-emerald-500/80 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              ALL_SYSTEMS_OPERATIONAL
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}