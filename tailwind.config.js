/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { navy: '#0A1172', royal: '#1E2EDB', mist: '#E8ECFF', orange: '#F28C28' },
      boxShadow: { soft: '0 18px 45px rgba(10,17,114,.12)' },
    },
  },
  plugins: [],
}
