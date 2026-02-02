import React from 'react';
import Lobster from './Lobster';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-12 px-4 text-center relative overflow-hidden">
      {/* Background Particles (Simulated) */}
      <div className="absolute top-20 left-10 text-red-900 opacity-20 text-6xl animate-bounce duration-[3000ms]">○</div>
      <div className="absolute top-40 right-20 text-red-900 opacity-20 text-4xl animate-bounce duration-[2000ms]">○</div>
      
      <div className="mb-8 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
        <Lobster className="w-64 h-64 md:w-80 md:h-80" />
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-6 text-shadow-red uppercase tracking-tighter">
        $ClawChange
      </h1>
      
      <div className="flex gap-4 mb-10">
        <span className="bg-red-900/50 border-2 border-red-600 px-3 py-1 text-xs text-red-300 rotate-[-2deg]">
          #1 SEAFOOD COIN
        </span>
        <span className="bg-red-900/50 border-2 border-red-600 px-3 py-1 text-xs text-red-300 rotate-[2deg]">
          PINCH PROOF
        </span>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <button className="pixel-btn text-sm">
          BUY ON PUMPFUN
        </button>
        <button className="pixel-btn-secondary px-6 py-3 font-bold text-sm bg-black">
          TELEGRAM
        </button>
        <button className="pixel-btn-secondary px-6 py-3 font-bold text-sm bg-black">
          TWITTER
        </button>
      </div>
    </div>
  );
};

export default Hero;
