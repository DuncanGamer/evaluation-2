/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    container:{
      padding: '1.4rem',
    },
    extend: {
      spacing:{
        'quarter': '25%'
      },
      fontFamily:{
        'sans': "'Roboto', sans-serif",
        'cascadia': "'CascadiaCode",
      },
      colors:{
        'do-blue-dark': '#080c2d',
        'do-blue-ligth': 'rgb(0, 105, 255)',
        'do-blue-medium': 'rgb(20, 86, 255',
        'do-blue-mediumdark': '#1d274c',
      }
    
    },
  },
  plugins: [],
}
