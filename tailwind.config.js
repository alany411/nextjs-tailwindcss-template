const defaultTheme = require('tailwindcss/defaultTheme');
const formsPlugin = require('@tailwindcss/forms');
const typographyPlugin = require('@tailwindcss/typography');
const aspectRatioPlugin = require('@tailwindcss/aspect-ratio');

module.exports = {
  darkMode: false,
  plugins: [formsPlugin, typographyPlugin, aspectRatioPlugin],
  purge: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
};
