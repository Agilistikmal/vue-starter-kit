/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
      colors: {
        brand: '#09814A',
        accent: '#BCB382',
        black: '#121619',
      },
    },
  },
  plugins: [],
}
