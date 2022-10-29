/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}','./node_modules/tw-elements/dist/js/**/*.js','./*.html',
    
  ],
  theme: {
    container:{
      padding: '1.4rem',
    },
    extend: {
      spacing:{
        'quarter': '25%',
        'header': '500px'
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
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
