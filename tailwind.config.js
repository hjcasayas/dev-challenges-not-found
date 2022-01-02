/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ...defaultTheme.screens,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
