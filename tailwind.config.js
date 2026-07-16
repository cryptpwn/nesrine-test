/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8ecdff',
          400: '#59b0ff',
          500: '#2f8eff',
          600: '#1a6df0',
          700: '#1556dc',
          800: '#174bb2',
          900: '#18438d',
          950: '#112a57',
        },
        mint: {
          50: '#effdf6',
          100: '#d8fbe8',
          200: '#b4f4d3',
          300: '#7ee9b6',
          400: '#41d492',
          500: '#1cb874',
          600: '#10955e',
          700: '#0f774e',
          800: '#105e40',
          900: '#0e4d36',
          950: '#022b1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(20, 67, 141, 0.12)',
        card: '0 10px 30px -12px rgba(20, 67, 141, 0.18)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};
