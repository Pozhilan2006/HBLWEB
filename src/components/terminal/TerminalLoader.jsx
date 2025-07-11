import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const TerminalLoader = ({ onLoadingComplete }) => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const fullText = '> Initialising <Hack Beyond Limit$> ;';

  // Typing animation
  useEffect(() => {
    let currentIndex = 0;
    let typingDelay = 70; // Base typing delay

    const typeText = () => {
      if (currentIndex < fullText.length) {
        // Random delay variation for realistic typing
        const randomDelay = typingDelay + (Math.random() * 30 - 15);
        
        setTimeout(() => {
          setText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
          typeText();
        }, randomDelay);
      } else {
        setIsTypingComplete(true);
        // Wait before starting exit animation
        setTimeout(() => {
          setIsExiting(true);
          // Wait for exit animation before completing
          setTimeout(onLoadingComplete, 1000);
        }, 1500);
      }
    };

    // Start typing after a brief initial delay
    setTimeout(typeText, 800);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Scanline effect */}
        <div className="scanline-overlay" />
        
        {/* Terminal glow */}
        <div className="terminal-glow" />
        
        {/* CRT flicker */}
        <motion.div
          className="crt-flicker"
          animate={{ opacity: [0.03, 0.02, 0.03] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Terminal Content */}
      <motion.div
        className="relative z-10"
        animate={isExiting ? {
          opacity: 0,
          y: -20,
          scale: 0.98
        } : {
          opacity: 1,
          y: 0,
          scale: 1
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div className="terminal-text-container">
          <span className="terminal-text">{text}</span>
          <motion.span
            className="terminal-cursor"
            animate={{ opacity: isTypingComplete ? 0 : [1, 1, 0] }}
            transition={{
              duration: 0.8,
              repeat: isTypingComplete ? 0 : Infinity,
              ease: 'steps(1)'
            }}
          >_</motion.span>
        </div>

        {/* Ripple effect on completion */}
        <AnimatePresence>
          {isTypingComplete && !isExiting && (
            <motion.div
              className="absolute inset-0 border border-neon-green/30 rounded"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default TerminalLoader; 