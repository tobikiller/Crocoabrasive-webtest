module.exports = {
  content: ['./index.html','./index.js',
  './Product/**/*.{html,js}',
  './Terms/**/*.{html,js}',
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
      },
      backgroundImage:{
        "abrasive":"url('images/header-bg.png') ",
        "world":"url('images/wordmap.png') ",
        "diy":"url('images/DIY.png') ",
        "hardware":"url('images/Hardware.png') ",
        "industry":"url('images/industry.png') ",
        "automotive":"url('images/automotive.png')",
        "bg-footer":"url('images/footer-bg.jpg')",
        
      },
      backgroundSize:{
       
      },
      colors:{
        "PrimaryYellow":"#FCC006",
        "PrimaryDark":"#0A0909",
        "PrimaryOrange": "#FF6F07",
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

