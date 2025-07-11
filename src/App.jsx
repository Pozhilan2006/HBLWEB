import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OrganizedBy from './components/OrganizedBy';
import Partners from './components/Partners';
import Domains from './components/Domains';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalLoader from './components/terminal/TerminalLoader';
import CodeSymbols from './components/CodeSymbols';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoadingComplete = () => {
    // Start fading in the content
    setContentVisible(true);
    // Remove loader after content starts appearing
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <TerminalLoader onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Code Symbols Background Layer - Only symbols, no dark background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <CodeSymbols />
      </div>

      <motion.div 
        className="min-h-screen text-white font-tomorrow relative"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ 
          opacity: contentVisible ? 1 : 0,
          scale: contentVisible ? 1 : 0.98,
          y: contentVisible ? 0 : 20
        }}
        transition={{ 
          duration: 1,
          ease: [0.19, 1, 0.22, 1] // Custom easing for smooth animation
        }}
      >
        <Navbar />
        
        <main className="relative z-20">
          <Hero />
          <OrganizedBy />
          <Domains />
          <Timeline />
          <Prizes />
          <Partners />
          <Gallery />
          <Team />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default App; 