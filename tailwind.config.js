/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'fuchsia-pink': {
          '50': '#fef3ff',
          '100': '#fce6ff',
          '200': '#f9ccff',
          '300': '#f7a4ff',
          '400': '#f56dff',
          '500': '#ea36ff',
          '600': '#d216e3',
          '700': '#b20ebd',
          '800': '#930e9a',
          '900': '#7a127d',
          '950': '#520055',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    addDynamicIconSelectors(),
],
}
