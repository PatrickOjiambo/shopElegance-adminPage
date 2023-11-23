/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'hover-yellow': '#FFC42A',
        'sidebar-grey': '#CDCDCD',
        'sidebar-title': '#535353',
      }
    },
  },
  plugins: [],
}