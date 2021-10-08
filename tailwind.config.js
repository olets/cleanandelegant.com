const plugin = require('tailwindcss/plugin')

const withUnit = (value, unit) => {
  const obj = {}
  obj[`${value}${unit}`] = `${value}${unit}`
  return obj
}

const s = (value) => {
  return withUnit(value, 's')
}

const simpleUtilities = ([property, config, e]) => {
  return Object.entries(config).map(([name, value]) => {
      const selector = `${property}-${name}`
      const rule = {}
      rule[property] = value

      return {
        [`.${e(selector)}`]: rule,
      }
  })
}

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
    'underline',
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
      property: {
        'animation-duration': {
          ...s(2),
        }
      }
    },
  },
  plugins: [
    plugin(({ addUtilities, e, theme, variants }) => {
      const pluginConfig = theme('property', {})
      const pluginVariants = variants('property', [])

      const utilities = Object.entries(pluginConfig).flatMap(([property, config]) => simpleUtilities([property, config, e]))

      addUtilities(utilities, pluginVariants)
    })
  ]
}
