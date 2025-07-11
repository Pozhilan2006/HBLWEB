import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Domains from './components/Domains';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-space-black text-white font-tomorrow relative">
        <Navbar />
        
        <main className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <Hero />
            <Domains />
            <Timeline />
            <Prizes />
            <Gallery />
            <Team />
            <Contact />
          </motion.div>
        </main>

        {/* Tech Shapes */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          <svg className="absolute top-20 right-10 w-64 h-64 opacity-5" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#39FF14" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="#39FF14" strokeWidth="0.3" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="#39FF14" strokeWidth="0.2" fill="none" />
          </svg>
          <svg className="absolute bottom-20 left-10 w-48 h-48 opacity-5" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" stroke="#39FF14" strokeWidth="0.5" fill="none" />
            <polygon points="50,20 80,80 20,80" stroke="#39FF14" strokeWidth="0.3" fill="none" />
            <polygon points="50,30 70,70 30,70" stroke="#39FF14" strokeWidth="0.2" fill="none" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default App; 