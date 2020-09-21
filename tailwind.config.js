const defaultTheme = require('tailwindcss/defaultTheme')

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
  purge: {
    content: [
      './src/**/*.{jsx,tsx}'
    ]
  },
  theme: {
    typography: (theme) => ({
      default: {
        css: {

        },
      },
      dark: {
        css: {

        },
      },
    }),
    extend: {
      screens: {
        'dark': { raw: '(prefers-color-scheme: dark)' },
        'light': { raw: '(prefers-color-scheme: light)' },
      },
      colors: {

      },
      width: {
        '1/7': '14.2857143%',
      },
      boxShadow: {
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.8);',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.8), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.8), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.8), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'dark-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  variants: {

  },
}
