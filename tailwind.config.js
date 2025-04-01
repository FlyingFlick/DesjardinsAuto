/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-500': 'rgb(59, 130, 246)',
        'slate-925': 'rgb(11, 15, 25)',
      },
    },
  },
  plugins: [],
};
