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
      },
      animation: {
        scaleIn: 'scaleIn 150ms ease-out forwards',
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