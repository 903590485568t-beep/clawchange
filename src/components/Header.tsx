import React from 'react';

const Header: React.FC = () => {
  const content = (
    <>
      <span className="text-xs md:text-sm font-bold tracking-widest uppercase mx-8 text-yellow-400">
        ⚠ $ClawChange CA: SOON... ⚠
      </span>
      <span className="text-xs md:text-sm font-bold tracking-widest uppercase mx-8 text-white">
        🦞 THE LOBSTER IS COMING 🦞
      </span>
      <span className="text-xs md:text-sm font-bold tracking-widest uppercase mx-8 text-yellow-400">
        ⚠ PINCHING THE CHART ⚠
      </span>
      <span className="text-xs md:text-sm font-bold tracking-widest uppercase mx-8 text-white">
        $CLAW SOON ON PUMPFUN
      </span>
    </>
  );

  return (
    <div className="w-full bg-red-900/90 text-black py-3 fixed top-0 z-50 border-b-4 border-black shadow-[0_4px_0_rgba(50,0,0,1)] overflow-hidden flex">
      {/* Container for seamless scrolling */}
      <div className="animate-marquee-seamless flex whitespace-nowrap min-w-full">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};

export default Header;
