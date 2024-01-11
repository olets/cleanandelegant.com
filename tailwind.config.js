const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, addUtilities }) {
      addBase({
        a: {
          '@apply text-link': {},
        },
      });

      addUtilities({
        '.text-link': {
          '@apply underline text-blue-500 transition-colors focus-visible:text-blue-400 hover:text-blue-400': {},
        }
      })
    }),
  ],
}

