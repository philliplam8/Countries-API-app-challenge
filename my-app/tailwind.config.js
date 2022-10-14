/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#2b3945',
      'very-dark-blue-bg': '#202c37',
      'very-dark-blue-lm': '#111517',
      'dark-gray': '#858585',
      'very-light-gray': '#fafafa',
      'light-gray': '#f3f4f6',
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}
