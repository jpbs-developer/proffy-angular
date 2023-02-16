/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors");
module.exports = {
  content: ["./src/**/*.{html,ts}"],

  theme: {
    extend: {},
  },

  plugins: [
    createThemes({
      default: {
        primary: "#8257E5",
        secondary: "#D4C2FF",
        "purple-200": "#9871F5"
      },
      dark: {
        primary: "pink",
        secondary: "red",
      },
      winter: {
        primary: "blue",
        secondary: "green",
      },
      party: {
        primary: "steelblue",
        secondary: "darkblue",
      },
    }),
  ],
};
