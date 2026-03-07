/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Google Sans', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1A73E8',
          dark: '#1557B0',
          light: '#4285F4',
        },
        surface: '#F8FAFF',
        onSurface: '#1C1B1F',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        orb: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        ripple: 'ripple 1.5s ease-out infinite',
        orb: 'orb 8s ease-in-out infinite',
        'orb-delay': 'orb 10s ease-in-out infinite 2s',
        'orb-slow': 'orb 14s ease-in-out infinite 4s',
      },
    },
  },
  plugins: [],
}
