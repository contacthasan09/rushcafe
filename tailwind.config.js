/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#236a75',
        gold: '#cfa670',
        highlight: '#958e09',
        ink: '#222222',
        mute: '#777777',
        soft: '#999999',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        script: ['"Herr Von Muellerhoff"', 'cursive'],
        mont: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      maxWidth: { content: '1140px' },
      boxShadow: {
        soft: 'rgba(0, 0, 0, 0.07) 0px 10px 30px 0px',
        deep: 'rgba(0, 0, 0, 0.1) 0px 2px 60px 0px',
      },
    },
  },
  plugins: [],
}
