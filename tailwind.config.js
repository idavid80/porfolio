/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores de acento para el tema claro y oscuro
        'primary-accent': 'hsl(210, 70%, 45%)', // Azul marino sutil
        'primary-accent-dark': 'hsl(180, 70%, 50%)', // Turquesa vibrante
      },
    },
  },
  plugins: [],
};