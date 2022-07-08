const colors = require("tailwindcss/colors")

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        accent: colors.sky[600],
      },
    },
  },
}
