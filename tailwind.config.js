/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          bg: '#0b0620',
          surface: '#160c33',
          card: '#1d1240',
          border: '#2d1e5c',
          gold: '#f4c430',
          purple: '#8b5cf6',
          pink: '#ec4899',
          text: '#e8e3ff',
          muted: '#a89dd6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0b0620 0%, #160c33 50%, #1d1240 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f4c430 0%, #ec4899 100%)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(139, 92, 246, 0.3)',
      },
    },
  },
  plugins: [],
}