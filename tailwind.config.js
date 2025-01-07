/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'Nunito',
      },
      colors: {
        brand: '#f84072',
        'brand-dark': '#c6335b',
      },
    },
  },
  plugins: [require('daisyui')],
};
