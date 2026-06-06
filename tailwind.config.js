/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        cormorant: ["Cormorant", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
        open_sans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        text: "#B68302",
        button: "#B68302",
        text_gold: "#CD9933",
        dark: "#151515",
        dark2: "#212121",
      },
    },
  },
  plugins: [],

}

