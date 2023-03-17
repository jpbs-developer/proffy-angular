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
        title: "#32264D",
        'ligh-dark': "#E6E6F0",
        'complement-text': '#9C98A6',
        'bg-input': '#FAFAFC',
        'text-base': '#6A6180',


        "purple-200": "#9871F5",
        "purple-300": "#774FD1",
        "green-200": "#04D361",
        "green-300": "#04BF58",
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
