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
          DEFAULT: '#0a192f', // Deep Navy
          light: '#112240',
          dark: '#020c1b',
          foreground: '#f1f5f9',
        },
        navy: {
          900: '#0a192f',
          800: '#112240',
          700: '#1d2d50',
          600: '#233554',
        },
        gold: {
          DEFAULT: '#D4AF37', // Metalic Gold
          400: '#F5D17E',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#996515',
        },
        dark: {
          DEFAULT: '#020617', // Deepest Navy/Black
          lighter: '#0a192f',
          deep: '#010409',
        },
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0a192f 0%, #020c1b 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F5D17E 0%, #D4AF37 50%, #B8860B 100%)',
        'gold-plate': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'gradient-navy-alt': 'linear-gradient(to bottom right, #112240, #0a192f)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'gradient-glow': 'radial-gradient(circle at top right, rgba(212, 175, 55, 0.05), transparent 40%)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-up': 'scaleUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
