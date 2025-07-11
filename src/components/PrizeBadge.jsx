import React from 'react';

const PrizeBadge = ({ rank }) => {
  // Define traditional medal colors for each rank
  const colors = {
    1: {
      primary: "#FFD700", // Gold
      secondary: "#DAA520", // Darker gold for contrast
    },
    2: {
      primary: "#C0C0C0", // Silver
      secondary: "#A9A9A9", // Darker silver for contrast
    },
    3: {
      primary: "#CD7F32", // Bronze
      secondary: "#A0522D", // Darker bronze for contrast
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
      {/* Outer Ring */}
      <circle
        cx="60"
        cy="60"
        r="55"
        stroke={color.primary}
        strokeWidth="2.5"
        fill="none"
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
      >
        {rank}
      </text>
    </svg>
  );
};

export default PrizeBadge; 