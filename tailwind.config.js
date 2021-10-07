module.exports = {
  content: {
    files: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  safelist: [
    // for components/SectionHeading.vue
    'bg-red-700',
    'bg-green-700',
    // for constants/links.js
    'group-hover:text-blue-400',
    'group-hover:text-blue-600',
    'group-hover:text-green-500',
    'group-hover:text-indigo-500',
    'group-hover:text-maroon-400',
    'group-hover:text-pink-500',
    'group-hover:text-yellow-500',
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        slate: {
          300: "#7a7a7a",
          400: "#555",
          500: "#002a3a",
        },
        maroon: {
          400: "#74140c",
          500: "#400000",
        },
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'serif': ['Alegreya Sans SC', 'serif'],
        'icon': ['Material Icons']
      },
    },
  },
}
