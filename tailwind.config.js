/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f1f1f1',
        'secondary': '#cecece',
        'tertiary': '#bbbbc2',
        'accent': '#FFBA08',
        'light': '#FFD046',
        'background': '#181a1b',
      },
    },
  },
  plugins: [],
}

