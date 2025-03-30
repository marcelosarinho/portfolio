/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#F33',
        'gray': '#EFEFEF',
        'yellow': '#FFDE5A',
        'blue': '#33BFFF',
      },
      boxShadow: {
        'custom': '7px 7px 0 1px rgba(0,0,0,1)'
      }
    },
  },
  plugins: [],
}
