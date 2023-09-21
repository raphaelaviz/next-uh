/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx, css}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['proxima_nova', 'sans'],
        proximaBold: ['proxima_nova_bold', 'sans'], 
      },
      colors: {
        uphold: {
          
            title: '#091135',
            lighter: '#8494a5',
            darker: '#3c4a5b', ////e valor das moedas. ALTERNATIVA: 9aa7b5
          
          
          lightGray: '#f5f9fc',  // INPUT FIELD BG
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
