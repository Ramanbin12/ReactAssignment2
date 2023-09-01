/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      backgroundImage:{
        'navimg':"url('/src/common/Images/Rectangle.png')"
      }
    },
  },
  plugins: [],
}

