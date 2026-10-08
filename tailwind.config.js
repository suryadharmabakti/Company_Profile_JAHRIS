module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-dm-sans)', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'Inter', 'Arial', 'sans-serif'],
      },
      colors: {
        ink: '#15092e',
        muted: '#C4B5FD',
        line: '#4C1D95',
        accent: '#D946EF',
        dark: '#15092e',
        fuchsia: { 500:'#D946EF', 400:'#E879F9', 300:'#F0ABFC' },
        pink: { 500:'#EC4899', 400:'#F472B6', 300:'#F9A8D4' },
        sky: { 500:'#60A5FA', 400:'#93C5FD' },
        violet: {
          950: '#15092e',
          900: '#1E0F45',
          800: '#2D1B69',
          700: '#4C1D95',
          600: '#6D28D9',
          500: '#7C3AED',
          400: '#A78BFA',
          300: '#C4B5FD',
          200: '#DDD6FE',
          100: '#FAF5FF',
        }
      },
      backgroundImage: {
        'gradient-aurora-1': 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 30%, #D946EF 60%, #F472B6 100%)',
        'gradient-aurora-2': 'linear-gradient(135deg, #D946EF 0%, #7C3AED 35%, #60A5FA 70%, #2DD4BF 100%)',
        'gradient-dark-violet': 'linear-gradient(135deg, #15092e 0%, #2D1B69 30%, #4C1D95 60%, #7C3AED 100%)',
        'gradient-violet-white': 'linear-gradient(135deg, #2D1B69 0%, #A78BFA 35%, #D946EF 70%, #FFFFFF 100%)',
        'gradient-white-violet': 'linear-gradient(180deg, #FFFFFF 0%, #FAF5FF 40%, #E9D5FF 70%, #2D1B69 100%)',
        'gradient-navy-violet': 'linear-gradient(180deg, #15092e 0%, #4C1D95 55%, #D946EF 100%)',
      }
    }
  },
  plugins: []
}
