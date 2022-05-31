module.exports = {
  content: ['./index.html','./index.js',
  './Product/**/*.{html,js}',
  './Product/flapwheels/**/*.{html,js} ',
  './Terms/**/*.{html,js}',
  './where-to-buy/**/*.{html,js}',
],

  theme: {
    extend: {
      fontFamily:{
        "Bebas": "Bebas Neue",
        "Jetbrain": "JetBrains Mono",
        "Public": "Public Sans",
        "Coda": "Coda",
        "Monument":"Monument Extended",
        "Montserrat":"Montserrat",
        "Inter": "Inter",
        "Michroma": "Michroma",
        "Khula":"Khula",
        "Share":"Share Tech",
        
        
        
      },
      backgroundImage:{
        "abrasive":"url('images/header-bg.png') ",
        "world":"url('images/wordmap.png') ",
        "diy":"url('images/DIY.png') ",
        "hardware":"url('images/Hardware.png') ",
        "industry":"url('images/industry.png') ",
        "automotive":"url('images/automotive.png')",
        "bg-footer":"url('images/footer-bg.jpg')",
        "bg-footer-pd":"url('/Product/images/footer-bg.jpg')",
        "Cutting-stone":"url('/Product/diamond/images/Cutting-stone.jpg')",
        "cutting-stone-mb":"url('/Product/diamond/images/cutting-stone-mb.jpg')",
        "welding":"url('/Product/images/welding.jpg')",
        "earth-pin":"url('/images/Earth.svg')",
        

        
       
        

        
      },




      backgroundSize:{
           '100%': "110%",
      },
      colors:{
        "PrimaryYellow":"#FCC006",
        "PrimaryDark":"#0A0909",
        "PrimaryOrange": "#FF6F07",
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),
  ('@tailwindcss/forms')],
}

