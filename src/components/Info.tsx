import React from 'react';

const Info: React.FC = () => {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="pixel-card bg-black p-6 hover:translate-y-1 transition-transform">
          <h3 className="text-xl text-red-500 mb-6 border-b-4 border-red-900 pb-2 tracking-widest">
            TOKENOMICS
          </h3>
          <ul className="text-xs md:text-sm space-y-6 text-red-100 font-bold">
            <li className="flex items-center gap-4 group cursor-help">
              <div className="w-8 h-8 bg-red-900 flex items-center justify-center border-2 border-red-500 group-hover:animate-spin">
                💎
              </div>
              <div className="flex flex-col">
                <span className="text-red-500 text-[10px]">SUPPLY</span>
                <span>1,000,000,000</span>
              </div>
            </li>
            <li className="flex items-center gap-4 group cursor-help">
              <div className="w-8 h-8 bg-red-900 flex items-center justify-center border-2 border-red-500 group-hover:animate-pulse">
                🚫
              </div>
              <div className="flex flex-col">
                <span className="text-red-500 text-[10px]">TAXES</span>
                <span>0% BUY / 0% SELL</span>
              </div>
            </li>
            <li className="flex items-center gap-4 group cursor-help">
              <div className="w-8 h-8 bg-red-900 flex items-center justify-center border-2 border-red-500">
                🔥
              </div>
              <div className="flex flex-col">
                <span className="text-red-500 text-[10px]">LIQUIDITY</span>
                <span>BURNT FOREVER</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="pixel-card bg-black p-6 hover:translate-y-1 transition-transform">
          <h3 className="text-xl text-red-500 mb-6 border-b-4 border-red-900 pb-2 tracking-widest">
            THE PLAN
          </h3>
          <ul className="text-xs md:text-sm space-y-4 text-gray-300">
            <li className="flex items-center gap-3 opacity-50">
              <span className="text-red-500">[X]</span>
              <span>Escape the kitchen</span>
            </li>
            <li className="flex items-center gap-3 text-red-400 animate-pulse">
              <span className="text-red-500">[ ]</span>
              <span>Launch on PumpFun</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-900">[ ]</span>
              <span>Pinch the moon</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-900">[ ]</span>
              <span>Establish Lobster World Order</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 text-center relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-4">
           <span className="text-4xl animate-bounce">🦞</span>
        </div>
        <h2 className="text-xl md:text-2xl text-red-500 mb-6 animate-pulse uppercase tracking-widest text-shadow-red">
          WHY $ClawChange?
        </h2>
        <div className="pixel-card p-6 bg-red-950/30 inline-block max-w-2xl">
          <p className="text-xs md:text-sm leading-loose text-red-200">
            WE ARE TIRED OF DOGS. WE ARE TIRED OF CATS. <br/>
            IT IS TIME FOR THE <span className="text-red-500 font-bold bg-black px-1">SHELL REVOLUTION</span>.
            <br/><br/>
            JOIN US OR GET PINCHED.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
