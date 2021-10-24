const plugin = require('tailwindcss/plugin')
// Nuxt can't find 'tailwindcss/lib/util/flattenColorPalette'
const flattenColorPalette = (colors) =>
    Object.assign(
        {},
        ...Object.entries(colors).flatMap(([color, values]) =>
            typeof values === 'object'
                ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
                    [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
                }))
                : [{ [`${color}`]: values }]
        )
    )

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

const textDecorationColor = plugin(({ addUtilities, e, theme, variants }) => {
  const pluginConfig = theme('textDecorationColor', {})
  const pluginVariants = variants('textDecorationColor', [])
  const colors = flattenColorPalette(pluginConfig)

  const utilities = Object.entries(colors).map(([name, value]) => {
      return {
          [`.${e(`underline-${name}`)}`]: {
              textDecorationColor: value,
          }
      }
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
    safelist: [
      {
        pattern: /bg-.+-(50|200|700)/
      }
    ]
  },
  theme: {
    extend: {
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.500'),
      }),
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
      minHeight: {
        60: `${60/4}rem`,
      },

      /**
       * Plugins
       */
      cssProperty: {
        'animation-duration': {
          ...s(2),
        }
      },
      textDecorationColor: (theme) => theme('colors'),
    },
  },
  plugins: [cssProperty, textDecorationColor]
}
