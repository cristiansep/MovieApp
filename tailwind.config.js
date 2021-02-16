module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'primary': 'rgb(0, 21, 41)',
      'black' : 'black',
      'info': '#2E9AFE',
      'infoHover': '#3498DB'
    }),
    height: {
      sm: '30px',
      movie: '450px',
      md: '500px',
      lg: '50px',
      xl: '600px',
      calc: 'calc(100vh - 64px)',
      h100: '100%',
      mvp: '70%',
      mvp100: '100%',
      h100vh: '100vh'
     },
     screens: {
       'xs': '400px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
