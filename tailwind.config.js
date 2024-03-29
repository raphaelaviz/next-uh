
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
            darker: '#3c4a5b',
          
          
          lightGray: '#f5f9fc',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
