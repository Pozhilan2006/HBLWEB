/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tomorrow': ['Tomorrow', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'source-code': ['Source Code Pro', 'monospace'],
        'fira-code': ['Fira Code', 'monospace'],
      },
      colors: {
        'space-black': '#0A0A0A',
        'neon-green': '#39FF14',
        'electric-blue': '#00FFFF',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-left-pause': 'scroll-left 30s linear infinite paused',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
  safelist: [
    'text-neon-green',
    'text-electric-blue',
    'border-neon-green',
    'border-electric-blue',
  ]
} 