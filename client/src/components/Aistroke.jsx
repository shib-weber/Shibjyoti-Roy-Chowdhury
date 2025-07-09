import React from "react";

export default function GlowingStrokes() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      className="mx-auto rotate-180"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="glow" r="50%" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Left curved stroke - glowing */}
      <g>
        <path
          d="M35 85 Q30 50 45 15"
          stroke="#00f0ff"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="35" cy="60" r="3" fill="url(#glow)">
          <animate attributeName="r" values="3;4.5;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Center stroke - glowing */}
      <g>
        <path
          d="M50 85 Q50 50 50 15"
          stroke="#00f0ff"
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="50" cy="50" r="6" fill="url(#glow)">
          <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      <g>
        <path
          d="M65 85 Q70 50 55 15"
          stroke="#b446fd"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="65" cy="60" r="3" fill="url(#glow)">
          <animate attributeName="r" values="3;4.5;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}
