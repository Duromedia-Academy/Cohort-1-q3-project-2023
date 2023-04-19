/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontFamily:{
      'rubik': ['Rubik', 'sans-serif'],
      
      'noto': ['Noto Serif JP', 'serif'],
    },
   
    extend: {
      colors: {
      'text-ash': '#2E2E2B',
      'bg-white': '#F5F4F0',
      'footer' : '#5C5648',
    },
  },
  },
  plugins: [],
}
