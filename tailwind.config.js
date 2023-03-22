/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      
      'sm' : {'min': '425px', 'max': '767px'},
      'md' : {'min': '768px', 'max': '1023px'},
      'lg' : '1024px',
      'xl' : '1440px',
    },
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
