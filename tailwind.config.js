const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  experimental: 'all',
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    mode: 'all',
    content: ['./**/*.{js,mdx}'],
    options: {},
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        default: {
          css: {},
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
    function ({ addBase, addComponents, addUtilities, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
          },
        },
      ]);
    },
  ],
};
