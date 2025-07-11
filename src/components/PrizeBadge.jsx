import React from 'react';

const PrizeBadge = ({ rank }) => {
  // Define the glow effect filter
  const glowFilter = (
    <defs>
      <filter id={`glow-${rank}`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  );

  // Define different colors for each rank
  const colors = {
    1: {
      primary: "#00ff00", // Neon green
      secondary: "#00cc00",
      glow: "#00ff0080"
    },
    2: {
      primary: "#00e5ff", // Cyan
      secondary: "#00b8cc",
      glow: "#00e5ff80"
    },
    3: {
      primary: "#ff00ff", // Magenta
      secondary: "#cc00cc",
      glow: "#ff00ff80"
    }
  };

  const color = colors[rank] || colors[1];

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="prize-badge"
    >
      {glowFilter}
      
      {/* Outer Ring with Glow */}
      <circle
        cx="60"
        cy="60"
        r="55"
        stroke={color.primary}
        strokeWidth="2"
        fill="none"
        filter={`url(#glow-${rank})`}
      />

      {/* Inner Ring */}
      <circle
        cx="60"
        cy="60"
        r="45"
        stroke={color.secondary}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Decorative Lines */}
      <path
        d={`M 60 15 L 60 25`}
        stroke={color.primary}
        strokeWidth="2"
      />
      <path
        d={`M 60 95 L 60 105`}
        stroke={color.primary}
        strokeWidth="2"
      />
      <path
        d={`M 15 60 L 25 60`}
        stroke={color.primary}
        strokeWidth="2"
      />
      <path
        d={`M 95 60 L 105 60`}
        stroke={color.primary}
        strokeWidth="2"
      />

      {/* Rank Number */}
      <text
        x="60"
        y="75"
        textAnchor="middle"
        fill={color.primary}
        style={{
          fontSize: '48px',
          fontFamily: 'Tomorrow, sans-serif',
          fontWeight: 'bold'
        }}
        filter={`url(#glow-${rank})`}
      >
        {rank}
      </text>
    </svg>
  );
};

export default PrizeBadge; 