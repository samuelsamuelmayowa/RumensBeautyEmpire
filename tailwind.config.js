/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      dark: "#050505",
      dark2: "#0d0a07",
      gold: "#d4af37",
      cream: "#fff7ea",
      brown: "#6b3f24",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
},
  plugins: [],

}

