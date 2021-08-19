module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        slate: {
          200: "#bbb",
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
