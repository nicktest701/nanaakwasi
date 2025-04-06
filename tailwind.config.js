/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Inter'],
        'body': ['Inter'],
      },
      colors: {
        primary: {
          100: '#9decf0',
          200: '#8de9ee',
          300: '#7de6eb',
          400: '#6ce3e9',
          500: '#5ce0e6',
          600: '#53cacf',
          700: '#4ab3b8',
          800: '#409da1',
          900: '#37868a',
        },
        secondary: {
          100: '#687285',
          200: '#4f5b71',
          300: '#36435d',
          400: '#1d2c48',
          500: '#041434',
          600: '#04122f',
          700: '#03102a',
          800: '#030e24',
          900: '#020c1f',
        }
      },
      keyframes: {
        borderMove: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 200%' },
        },
        spinBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      marquee: {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(calc(-100% - var(--gap)))' },
      },
    },
    animation: {
      marquee: 'marquee var(--duration) linear infinite',
      borderMove: 'borderMove 4s linear infinite',
      spinBorder: 'spinBorder 2s linear infinite',
      marqueeLeft: 'marqueeLeft 60s linear infinite',
      marqueeRight: 'marqueeRight 60s linear infinite',
    }

  },
  plugins: [],
}