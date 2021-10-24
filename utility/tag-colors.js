const tailwindcssColors = require('tailwindcss/colors')

export const tagColorKey = '200'

export const tagColors = Object.entries(tailwindcssColors)
  .map(([name, value]) => value[tagColorKey] ? name : null)
  .filter(i => i)
