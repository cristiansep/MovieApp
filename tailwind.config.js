module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'primary': 'rgb(0, 21, 41)',
      'black' : 'black',
      'info': '#2E9AFE',
    }),
    height: {
      sm: '30px',
      md: '480px',
      lg: '50px',
      xl: '600px',
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
