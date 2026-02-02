import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Swap from './components/Swap'
import Info from './components/Info'
import BackgroundParticles from './components/BackgroundParticles'

function App() {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-red-500 selection:text-white pb-12 overflow-x-hidden">
      <BackgroundParticles />
      <Header />

      {/* Wallet Connect Button - Fixed top right below header */}
      <div className="fixed top-16 right-4 z-40">
        <button 
          onClick={() => setWalletConnected(!walletConnected)}
          className={`
            pixel-btn text-[10px] md:text-xs py-2 px-4 border-2 shadow-[4px_4px_0_#000] 
            ${walletConnected ? 'bg-green-600 hover:bg-green-500' : 'bg-red-600 hover:bg-red-500'}
            transition-all hover:translate-y-[1px] hover:shadow-[3px_3px_0_#000]
          `}
        >
          {walletConnected ? '🟢 0x...DEAD' : '🔌 CONNECT WALLET'}
        </button>
      </div>
      
      <main className="container mx-auto px-4 pt-12">
        <Hero />
        
        <div className="my-12">
          <Swap />
        </div>
        
        <Info />
      </main>

      <footer className="text-center py-8 text-[10px] text-red-900 mt-12 border-t-2 border-red-900/30">
        <p>© 2024 ClawChange. THE DEEP SEA COUNCIL.</p>
      </footer>
    </div>
  )
}

export default App
