/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brown:{
          500: '#8B4513',
          700: '#5C3317',
        }
      }
    },
  },
  plugins: [],
}