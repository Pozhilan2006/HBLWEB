import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

const terminalLines = [
  '> Initializing <HACK BEYOND LIMIT$>',
  '> Loading AI modules...',
  '> Checking Blockchain integrity...',
  '> Allocating RAM...',
  '> Authenticating node access...',
  '> Establishing cyber grid...',
  '> System ready. Launching interface...'
];

const LoadingScreen = ({ onLoadingComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  // Typing effect for each line
  const typeLine = useCallback((line, callback) => {
    let currentIndex = 0;
    setText('');
    
    const interval = setInterval(() => {
      setText(prev => prev + line[currentIndex]);
      currentIndex++;
      
      if (currentIndex === line.length) {
        clearInterval(interval);
        if (callback) setTimeout(callback, 500);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    if (currentLineIndex === terminalLines.length - 1) {
      setShowProgress(true);
      const timer = setTimeout(() => {
        setIsComplete(true);
        if (onLoadingComplete) onLoadingComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, onLoadingComplete]);

  // Handle line progression
  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const cleanup = typeLine(terminalLines[currentLineIndex], () => {
        if (currentLineIndex < terminalLines.length - 1) {
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
          }, 300);
        }
      });
      return cleanup;
    }
  }, [currentLineIndex, typeLine]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="w-full max-w-2xl p-8 relative">
        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="scanline" />
        </div>

        {/* Terminal window */}
        <div className="terminal-window border border-neon-green/30 rounded-lg p-6 bg-black/90 backdrop-blur">
          <div className="space-y-4">
            {/* Previous completed lines */}
            {terminalLines.slice(0, currentLineIndex).map((line, index) => (
              <div key={index} className="terminal-text opacity-60">
                {line}
              </div>
            ))}
            
            {/* Current typing line */}
            <div className="terminal-text flex items-center">
              <span>{text}</span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-1 inline-block w-3 h-5 bg-neon-green"
              />
            </div>

            {/* Progress bar */}
            {showProgress && (
              <motion.div 
                className="mt-6 h-1 bg-neon-green/20 rounded-full overflow-hidden"
                initial={{ width: '0%' }}
              >
                <motion.div
                  className="h-full bg-neon-green"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 