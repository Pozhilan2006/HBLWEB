import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TerminalText = ({ text, onComplete, speed = 30, showCursor = true, isGlitched = false }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayText('');
    setIsTyping(true);

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        currentIndex++;
        
        // Random delay for more realistic typing
        const randomDelay = speed + (Math.random() * 20 - 10);
        setTimeout(typeText, randomDelay);
      } else {
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    };

    typeText();
  }, [text, speed, onComplete]);

  return (
    <div className="flex items-center">
      <span className={`terminal-text ${isGlitched ? 'glitch-text' : ''}`}>
        {displayText}
      </span>
      {showCursor && (
        <motion.span
          animate={{ opacity: isTyping ? [1, 1, 0] : [1, 0] }}
          transition={{ 
            duration: isTyping ? 0.5 : 1,
            repeat: Infinity,
            ease: "steps(1)"
          }}
          className="ml-1 inline-block w-3 h-5 bg-neon-green terminal-cursor"
        />
      )}
    </div>
  );
};

export default TerminalText; 