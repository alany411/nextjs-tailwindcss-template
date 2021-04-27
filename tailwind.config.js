const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const formsPlugin = require('@tailwindcss/forms');
const typographyPlugin = require('@tailwindcss/typography');
const aspectRatioPlugin = require('@tailwindcss/aspect-ratio');

module.exports = {
  darkMode: false,
  mode: 'jit',
  plugins: [formsPlugin, typographyPlugin, aspectRatioPlugin],
  purge: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        blue: colors.blue,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.gray,
        green: colors.green,
        indigo: colors.indigo,
        lightBlue: colors.lightBlue,
        lime: colors.lime,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        rose: colors.rose,
        teal: colors.teal,
        trueGray: colors.trueGray,
        violet: colors.violet,
        warmGray: colors.warmGray,
        yellow: colors.yellow,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
};
