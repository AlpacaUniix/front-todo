/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          '100': '#E97171',
          '200': '#810000',
          '300' : '#E2C2B9',
          '500' : '#B25068',
          '600' : '#ff758f'
          

        },
        red: {
          '100': '#FF9898',
          '200': '#CF455C',
          '300': '#9E7676',
          '400' : '#594545',
          '700' : '#FF2E63'
        },
        yellow: {
          '100': '#FFF1AC',
          '200': '#E6B566',

        },
        blue : {
          '100' : '#B2C8DF',
          '200' : '#6E85B7',
          '600' : '#84a59d',
          '800' : '#2B3A55'
        },
        purple : {
          '300': '#80558C',
          '700' : '#C06C84',
          '800' : '#6C5B7B',
          '900' : '#9d8189'
        }
        ,
        teal: {
          '300' : '#A4BE7B',
          '400' : '#5F8D4E'
        },
        orange: '#f7ede2'
      },
    },
  },
  plugins: [],
}
