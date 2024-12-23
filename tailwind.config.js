/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        mainC : "#24f083"
      }
    },
  },
  plugins: [],
}
