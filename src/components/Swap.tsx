import React, { useState } from 'react';

const Swap: React.FC = () => {
  const [amount, setAmount] = useState('');

  return (
    <div className="w-full max-w-lg mx-auto p-6 relative">
      <div className="pixel-card p-8 bg-black border-4 border-red-600 shadow-[8px_8px_0_#330000]">
        
        {/* INPUT SECTION */}
        <div className="mb-4 relative group">
          <div className="relative flex items-center">
            <input 
              type="number" 
              placeholder="0.0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full h-20 p-4 pr-24 text-2xl pixel-input bg-red-950/30 text-white placeholder-red-800"
            />
            <div className="absolute right-4 px-3 py-1 bg-red-600 border-2 border-black text-black font-bold text-xs tracking-widest pointer-events-none shadow-[2px_2px_0_#000]">
              SOL
            </div>
          </div>
        </div>

        {/* ARROW */}
        <div className="flex justify-center mb-4 -my-3 relative z-10">
          <div className="bg-black p-2 border-2 border-red-600 cursor-pointer hover:rotate-180 transition-transform duration-300 text-red-500">
            ▼
          </div>
        </div>

        {/* OUTPUT SECTION */}
        <div className="mb-8">
          <div className="relative flex items-center">
            <input 
              type="text" 
              readOnly
              value={amount ? (parseFloat(amount) * 666666).toLocaleString() : '0'}
              className="w-full h-20 p-4 pr-24 text-2xl pixel-input bg-red-950/30 text-green-400 cursor-not-allowed"
            />
             <div className="absolute right-4 px-3 py-1 bg-yellow-500 border-2 border-black text-black font-bold text-xs tracking-widest pointer-events-none shadow-[2px_2px_0_#000]">
              $CLAW
            </div>
          </div>
        </div>

        {/* MAIN ACTION BUTTON */}
        <button className="w-full pixel-btn text-xl tracking-wider py-6 uppercase hover:brightness-110 active:translate-y-1 active:shadow-none transition-all border-4">
          SWAP
        </button>
        
        <div className="mt-4 text-center">
           <p className="text-[10px] text-red-800 uppercase animate-pulse">
             Gas: 0.0000001 (Paid in bubbles)
           </p>
        </div>
      </div>
    </div>
  );
};

export default Swap;
