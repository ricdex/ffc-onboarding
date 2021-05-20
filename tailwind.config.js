const colors = require('tailwindcss/colors');
module.exports = {
     purge: {
      
      content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mapah': '#0BAAF7',
        'mapahb': '#0C9CE2',
        'azul-mh': '#113F67',
        'warm-gray': colors.warmGray,
        teal: colors.teal,
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
