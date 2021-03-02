const defaultTheme = require('tailwindcss/defaultTheme');
const formsPlugin = require('@tailwindcss/forms');
const typographyPlugin = require('@tailwindcss/typography');
const aspectRatioPlugin = require('@tailwindcss/aspect-ratio');

module.exports = {
  plugins: [formsPlugin, typographyPlugin, aspectRatioPlugin],
  purge: {
    content: ['./**/*.{js,jsx}'],
    mode: 'all',
    options: {},
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
};
