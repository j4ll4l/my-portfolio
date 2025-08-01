/** @type {import('tailwindcss').Config} */
import pseudoElements from 'tailwindcss-pseudo-elements'
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#DFD0B8'
      }
    },
  },
  darkMode: 'class',
  mode: 'jit',
  plugins: [
    function({addUtilities,theme}){
      const newUtilities = {
        '.stroke-text':{
          '-webkit-text-fill-color': 'transparent',
          '-webkit-text-stroke-width': '1.4px',
          '-webkit-text-stroke-color': theme('colors.secondary'),
          '--tw-text-opacity': '1',
        },
        '.text-stroke-primary': {
         '-webkit-text-stroke-color': theme('colors.primary'), 
      },
        '.dark .text-stroke-secondary': {
          '-webkit-text-stroke-color': theme('colors.secondary'),
        },
      };
      addUtilities(newUtilities, ['responsive', 'dark']);
    }
  ],
  variants: {
    extend: {
      // Ajoute les variants nécessaires
      borderWidth: ['before', 'after'],
      width: ['before', 'after'],
      height: ['before', 'after'],
      boxShadow: ['before', 'after'],
      backgroundColor: ['before', 'after'],
    }
  }
}

