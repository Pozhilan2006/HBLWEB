import { motion } from 'framer-motion';

const CodeSymbols = () => {
  // Array of code symbols with their positions and animations
  const codeSymbols = [
    // Symbol 1 - Top left area
    {
      symbol: '{',
      position: 'top-[15%] left-[18%]',
      size: 'text-5xl md:text-6xl',
      rotation: 'rotate-[12deg]',
      animation: {
        y: [0, -8, 0],
        opacity: [0.2, 0.3, 0.2],
        transition: { repeat: Infinity, duration: 8, ease: 'easeInOut' }
      }
    },
    // Symbol 2 - Top right area
    {
      symbol: '}',
      position: 'top-[22%] right-[15%]',
      size: 'text-4xl md:text-5xl',
      rotation: 'rotate-[-8deg]',
      animation: {
        y: [0, -5, 0],
        opacity: [0.2, 0.3, 0.2],
        transition: { repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1.2 }
      }
    },
    // Symbol 3 - Middle left area
    {
      symbol: '<',
      position: 'top-[40%] left-[12%]',
      size: 'text-4xl md:text-5xl',
      rotation: 'rotate-[5deg]',
      animation: {
        y: [0, -6, 0],
        opacity: [0.2, 0.35, 0.2],
        transition: { repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 0.5 }
      }
    },
    // Symbol 4 - Middle right area
    {
      symbol: '/>',
      position: 'top-[45%] right-[10%]',
      size: 'text-3xl md:text-4xl',
      rotation: 'rotate-[-5deg]',
      animation: {
        y: [0, -7, 0],
        opacity: [0.2, 0.3, 0.2],
        transition: { repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 2 }
      }
    },
    // Symbol 5 - Bottom left area
    {
      symbol: '#',
      position: 'bottom-[20%] left-[20%]',
      size: 'text-5xl md:text-6xl',
      rotation: 'rotate-[0deg]',
      animation: {
        y: [0, -5, 0],
        opacity: [0.2, 0.3, 0.2],
        transition: { repeat: Infinity, duration: 8.5, ease: 'easeInOut', delay: 1.5 }
      }
    },
    // Symbol 6 - Bottom right area
    {
      symbol: '$',
      position: 'bottom-[25%] right-[18%]',
      size: 'text-4xl md:text-5xl',
      rotation: 'rotate-[10deg]',
      animation: {
        y: [0, -6, 0],
        opacity: [0.2, 0.35, 0.2],
        transition: { repeat: Infinity, duration: 9.5, ease: 'easeInOut', delay: 0.8 }
      }
    },
    // Symbol 7 - Center top area
    {
      symbol: ';',
      position: 'top-[30%] left-[48%]',
      size: 'text-3xl md:text-4xl',
      rotation: 'rotate-[0deg]',
      animation: {
        y: [0, -4, 0],
        opacity: [0.2, 0.3, 0.2],
        transition: { repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 2.2 }
      }
    },
    // Symbol 8 - Center bottom area
    {
      symbol: '_',
      position: 'bottom-[15%] left-[45%]',
      size: 'text-5xl md:text-6xl',
      rotation: 'rotate-[0deg]',
      animation: {
        y: [0, -5, 0],
        opacity: [0.2, 0.3, 0.2],
        transition: { repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }
      }
    }
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {codeSymbols.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} ${item.size} ${item.rotation} text-neon-green opacity-30 font-mono`}
          animate={item.animation}
          style={{
            textShadow: '0 0 5px rgba(57, 255, 20, 0.8), 0 0 15px rgba(57, 255, 20, 0.6), 0 0 25px rgba(57, 255, 20, 0.4)',
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default CodeSymbols;