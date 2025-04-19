/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f5',
          100: '#ccefe6',
          200: '#99dfcd',
          300: '#66cfb3',
          400: '#33bf9a',
          500: '#1abc9c', // Primary teal
          600: '#16a085',
          700: '#13856e',
          800: '#0f6a57',
          900: '#0c4f40',
        },
        secondary: {
          50: '#ebeef0',
          100: '#d7dde2',
          200: '#afbbc5',
          300: '#8799a8',
          400: '#5f778b',
          500: '#34495e',
          600: '#2c3e50', // Secondary dark blue
          700: '#243341',
          800: '#1c2833',
          900: '#151e24',
        },
        accent: {
          300: '#f7cc9c',
          400: '#f5bb74',
          500: '#f39c12',
          600: '#d4860f',
        },
        success: '#2ecc71',
        warning: '#f39c12',
        error: '#e74c3c',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};