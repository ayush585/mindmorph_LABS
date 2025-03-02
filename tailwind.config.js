/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          purple: '#bc13fe',
          pink: '#ff36ab'
        },
        cyber: {
          black: '#0a0a0a',
          dark: '#121212',
          gray: '#1a1a1a'
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00f3ff' },
          '100%': { textShadow: '0 0 20px #00f3ff, 0 0 30px #00f3ff' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}
