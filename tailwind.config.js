/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      width: {
        '100': '30.2rem',
        '110': '32rem',
        '30': '7.4rem'
      }
    },
  },
  plugins: [],
}