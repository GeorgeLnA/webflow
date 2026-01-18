/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'teal': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#224F5D',
          800: '#173741',
          900: '#134e4a',
        },
        'warm-white': '#F9F9F6',
        'taupe': '#C5BBA3',
        'charcoal': '#1E1E1E',
        'blue-dark': '#0A2239',
        'blue-mid': '#0F3253',
        'blue-light': '#184A7E',
        'sky-300': '#7DD3FC',
        'sky-400': '#38BDF8',
        'sky-500': '#0EA5E9',
        'cream': '#fffefc',
        'beige': '#f7f1e8',
        'pink': '#c769b0',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};