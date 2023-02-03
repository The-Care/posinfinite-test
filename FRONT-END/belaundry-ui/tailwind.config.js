/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '36px',
    },
    extend: {
      colors: {
        primary: '#0099EE',
        secondary: '#F36868',
        third: '#56E4A0',
        title: ' #3B97CB',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
