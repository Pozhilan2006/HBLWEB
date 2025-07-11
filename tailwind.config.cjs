/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0B0B0F',
        'neon-green': '#39FF14',
        'electric-blue': '#00FFFF',
      },
      fontFamily: {
        'tomorrow': ['Tomorrow', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'text-neon-green',
    'text-electric-blue',
    'border-neon-green',
    'border-electric-blue',
  ]
} 