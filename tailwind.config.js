/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

    darkMode: 'class', // This enables dark mode with class strategy
    theme: {
      extend: {
         fontFamily: {
          sans: ['Poppins', 'sans-serif'], // Override default sans font family with Poppins
        },
        keyframes: {
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
         shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-6px)' },
          '40%, 80%': { transform: 'translateX(6px)' },
        },

          slideFadeInOut: {
          '0%': { opacity: 0, transform: 'translateX(50%)' },
          '10%, 90%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(50%)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '60%': { transform: 'scale(1.1)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        scaleIn: 'scaleIn 150ms ease-out forwards',
         shake: 'shake 0.5s ease-in-out',

           'slide-fade-in-out': 'slideFadeInOut 3s ease forwards',
        pop: 'pop 0.3s ease',
      },
    
        colors: {
          // Light mode colors
          light: {
            primary: '#3b82f6',
            secondary: '#64748b',
            background: '#ffffff',
            text: '#1e293b',
            accent: '#f59e0b',
          },
          // Dark mode colors
          dark: {
            primary: '#60a5fa',
            secondary: '#94a3b8', 
            background: '#0f172a',
            text: '#e2e8f0',
            accent: '#fbbf24',
          }
        }
      },
    },
      plugins: [
           require('@tailwindcss/forms'),
         ],
  }