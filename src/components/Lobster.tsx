import React from 'react';

const Lobster: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative ${className} animate-float`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full pixel-art-svg drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]"
      >
        {/* 
          Pixel Grid System: 
          Refined diagonal lobster based on the user's request.
          Main colors: #FF0000 (Bright Red), #8B0000 (Dark Red/Shadow), #FF6347 (Highlight)
        */}
        
        {/* TAIL SECTION (Bottom Left) */}
        <rect x="20" y="80" width="10" height="10" fill="#8B0000" /> {/* Tail Tip */}
        <rect x="25" y="75" width="15" height="10" fill="#FF0000" />
        <rect x="30" y="70" width="15" height="10" fill="#8B0000" />
        <rect x="35" y="65" width="15" height="10" fill="#FF0000" />
        
        {/* MAIN BODY (Diagonal) */}
        <rect x="40" y="50" width="25" height="25" fill="#FF0000" /> {/* Body Main */}
        <rect x="45" y="55" width="5" height="5" fill="#FF6347" /> {/* Highlight */}
        <rect x="40" y="50" width="5" height="25" fill="#8B0000" /> {/* Body Shadow Left */}

        {/* HEAD */}
        <rect x="55" y="35" width="15" height="20" fill="#FF0000" />
        
        {/* EYES */}
        <rect x="65" y="30" width="5" height="5" fill="black" /> {/* Eye Right stalk */}
        <rect x="65" y="25" width="5" height="5" fill="white" /> {/* Eye Right */}
        <rect x="67" y="27" width="2" height="2" fill="black" /> {/* Pupil */}
        
        <rect x="50" y="30" width="5" height="5" fill="black" /> {/* Eye Left stalk */}
        <rect x="50" y="25" width="5" height="5" fill="white" /> {/* Eye Left */}
        <rect x="52" y="27" width="2" height="2" fill="black" /> {/* Pupil */}

        {/* ANTENNAE */}
        <rect x="55" y="10" width="2" height="20" fill="#FF0000" />
        <rect x="70" y="15" width="2" height="15" fill="#FF0000" />

        {/* LEFT CLAW (Small) */}
        <rect x="25" y="45" width="5" height="10" fill="#8B0000" /> {/* Arm */}
        <rect x="15" y="35" width="15" height="15" fill="#FF0000" /> {/* Claw */}
        <rect x="15" y="35" width="5" height="5" fill="#8B0000" /> {/* Tip */}

        {/* RIGHT CLAW (BIG ONE) */}
        <rect x="70" y="50" width="10" height="5" fill="#8B0000" /> {/* Arm Segment 1 */}
        <rect x="80" y="45" width="5" height="10" fill="#8B0000" /> {/* Arm Segment 2 */}
        
        {/* The Big Claw Pincer */}
        <rect x="75" y="20" width="20" height="25" fill="#FF0000" /> {/* Main Claw Mass */}
        <rect x="75" y="20" width="5" height="15" fill="#8B0000" /> {/* Shadow/Detail */}
        <rect x="90" y="15" width="5" height="10" fill="#FF0000" /> {/* Upper Pincer Tip */}
        <rect x="85" y="35" width="15" height="5" fill="#FF0000" /> {/* Lower Pincer Connection */}
        <rect x="95" y="30" width="5" height="10" fill="#FF0000" /> {/* Lower Pincer Tip */}
        
        {/* LEGS */}
        <rect x="60" y="60" width="10" height="2" fill="#8B0000" />
        <rect x="65" y="65" width="10" height="2" fill="#8B0000" />
        <rect x="70" y="70" width="10" height="2" fill="#8B0000" />

      </svg>
      <style>{`
        .pixel-art-svg rect {
          shape-rendering: crispEdges;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Lobster;
