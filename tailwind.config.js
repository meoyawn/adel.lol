const colors = require("tailwindcss/colors")

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        accent: colors.sky[700],
      },
    },
  },
}
