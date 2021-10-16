const plugin = require('tailwindcss/plugin')

const withUnit = (value, unit) => {
  const obj = {}
  obj[`${value}${unit}`] = `${value}${unit}`
  return obj
}

const s = (value) => {
  return withUnit(value, 's')
}

const cssProperty = plugin(({ addUtilities, e, theme, variants }) => {
  const themeKey = 'cssProperty'
  const pluginConfig = theme(themeKey, {})
  const pluginVariants = variants(themeKey, [])

  const utilities = Object.entries(pluginConfig).flatMap(([property, config]) => {
    return Object.entries(config).map(([name, value]) => {
        const selector = `${property}-${name}`
        const rule = {}
        rule[property] = value

        return {
          [`.${e(selector)}`]: rule,
        }
    })
  })

  addUtilities(utilities, pluginVariants)
})

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
    'group-focus:text-blue-400',
    'group-focus:text-blue-600',
    'group-focus:text-green-500',
    'group-focus:text-indigo-500',
    'group-focus:text-maroon-400',
    'group-focus:text-pink-500',
    'group-focus:text-yellow-500',
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
      cssProperty: {
        'animation-duration': {
          ...s(2),
        }
      }
    },
  },
  plugins: [cssProperty]
}
