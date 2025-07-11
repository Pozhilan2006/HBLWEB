import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MatrixRain = () => {
  return (
    <div className="matrix-rain absolute inset-0 opacity-10 pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="matrix-column"
          style={{
            left: `${i * 2}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

const GlitchOverlay = () => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 150);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`glitch-overlay absolute inset-0 pointer-events-none ${glitchActive ? 'active' : ''}`}>
      <div className="glitch-lines" />
      <div className="glitch-text-shift" />
    </div>
  );
};

const Scanline = () => (
  <div className="scanline absolute top-0 left-0 w-full pointer-events-none">
    <div className="scanline-primary" />
    <div className="scanline-secondary" />
  </div>
);

const CRTEffect = () => (
  <div className="crt-effect absolute inset-0 pointer-events-none">
    <div className="crt-lines" />
    <div className="crt-flicker" />
  </div>
);

const TerminalEffects = ({ enableMatrixRain = true }) => {
  return (
    <>
      {enableMatrixRain && <MatrixRain />}
      <GlitchOverlay />
      <Scanline />
      <CRTEffect />
      <div className="terminal-glow absolute inset-0 pointer-events-none" />
      <motion.div
        className="terminal-pulse absolute inset-0 pointer-events-none bg-neon-green/5"
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
};

export default TerminalEffects; 