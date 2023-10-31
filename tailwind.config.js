const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,scss,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "fade-up": {
          from: {
            opacity: "0",
            transform: "translateY(100%)",
          },
          to: {
            opacity: "1",
          },
        },
        ripple: {
          from: {
            transform: "scale(0)",
            opacity: "0.4",
          },
          to: {
            transform: "scale(4)",
            opacity: "0",
          },
        },
      },
      animation: {
        ripple: "ripple 600ms linear",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin")
  ],
};
