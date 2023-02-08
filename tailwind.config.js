/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: '#E96264',
        deepred: '#B74846',
        beige: '#FFD5C0',
        deepsea: '#1F253D',
        lightsea: '#363d59',
      },
      textShadow: {
        hard: '5px 5px 20px #000'
      },
      screens: {
        smd: "704px"
      }
    },
  },
  plugins: [],
}
