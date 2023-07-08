/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,scss,ts}"
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ["Lato", "Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
};
