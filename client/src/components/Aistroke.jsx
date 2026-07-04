import React from "react";

export default function GlowingStrokes() {
  return (
    <div className="w-full flex justify-center py-0 relative overflow-hidden pointer-events-none select-none">
      <svg
        viewBox="0 0 200 120"
        width="200"
        height="120"
        className="mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Enhanced Neon Glow Filter */}
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/> {/* Stacked twice for heavy radiance */}
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Flowing Gradients */}
          <linearGradient id="purple-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0" /> {/* Pink-hot injection */}
            <stop offset="60%" stopColor="#d946ef" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="cyan-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
            <stop offset="100%" stopColor="#b446fd" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Outer Left Flowing Energy Stream */}
        <g filter="url(#neon-glow)">
          <path
            d="M70 10 Q60 50 85 110"
            stroke="url(#purple-fade)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="40 120"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              values="0; -160" 
              dur="2.5s" 
              repeatCount="indefinite" 
            />
          </path>
        </g>

        {/* --- CENTER MAIN PLASMA CORE (Fluid & Animated) --- */}
        <g filter="url(#neon-glow)">
          {/* Subtle structural background track */}
          <path
            d="M98 0 Q103 50 102 120"
            stroke=""
            strokeWidth="6"
            strokeOpacity="0.15"
            fill="none"
          />
          
          {/* Thick Glowing Colored Stream */}
          <path
            d="M98 0 Q103 50 102 120"
            stroke="url(#purple-fade)"
            strokeWidth="8" 
            fill="none"
            strokeLinecap="round"
            strokeDasharray="50 100"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              values="0; -150" 
              dur="1.6s" 
              repeatCount="indefinite" 
            />
          </path>

          {/* Hyper-bright White Inner Core Filament */}
          <path
            d="M98 0 Q103 50 102 120"
            stroke="#ffffff"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="50 100"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              values="0; -150" 
              dur="1.6s" 
              repeatCount="indefinite" 
            />
          </path>
          
          {/* Glowing splash point at the bottom center */}
          <circle cx="102" cy="115" r="3.5" fill="#b705f8" filter="url(#neon-glow)">
            <animate attributeName="r" values="4;10;4" dur="0.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="102" cy="115" r="2.5" fill="#ffffff" />
        </g>

        {/* Outer Right Flowing Energy Stream */}
        <g filter="url(#neon-glow)">
          <path
            d="M130 10 Q140 50 115 110"
            stroke="url(#cyan-fade)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="30 130"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              values="0; -160" 
              dur="2.2s" 
              repeatCount="indefinite" 
            />
          </path>
        </g>
      </svg>
    </div>
  );
}