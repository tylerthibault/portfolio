/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#FFFCFF',
        'secondary-light': '#247BA0',
        'accent': '#FF7F06',
        'danger': '#BA1D1D',
      }
    },
  },
  plugins: [],
}
