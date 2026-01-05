/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // blue-900
          light: '#3b82f6', // blue-500
          dark: '#172554', // blue-950
        },
        accent: {
          DEFAULT: '#fbbf24', // amber-400
          hover: '#f59e0b', // amber-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
