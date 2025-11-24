import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1e40ff',
        secondary: '#0fa958',
        muted: '#5b6b85',
        surface: '#f2f4f8',
        deepBlue: '#0b1d3f',
      },
      boxShadow: {
        card: '0 10px 40px rgba(15, 31, 49, 0.08)',
      },
    },
  },
  plugins: [],
};
