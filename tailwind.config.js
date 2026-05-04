/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        lavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf8f0',
          200: '#f9edd9',
          300: '#f3dfb8',
          400: '#e8c88e',
          500: '#d4a96a',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e8ebe2',
          200: '#d3d9c8',
          300: '#b3bea1',
          400: '#95a37e',
          500: '#7a8963',
        },
      },
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
        latin: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
