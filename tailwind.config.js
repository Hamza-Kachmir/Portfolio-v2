/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#111827',
        card: '#1F2937',
        primary: '#F9FAFB',
        secondary: '#9CA3AF',
        // === NOUVELLES COULEURS ICI ===
        accent: '#F59E0B',      // Ambre / Orange
        'accent-hover': '#D97706', // Une version plus foncée pour le survol
        border: '#374151',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}