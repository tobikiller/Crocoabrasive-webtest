module.exports = {
  content: ['./index.html','./index.js',
  './Product/product.html', './Product/product.js'
],

  theme: {
    extend: {
      fontFamily:{
        "Bebas": "Bebas Neue",
        "Jetbrain": "JetBrains Mono",
        "Public": "Public Sans",
        "Coda": "Coda",
        "Monument":"Monument Extended",
        "Montserrat":"Montserrat"
      },
      backgroundImage:{
        "abrasive":"url('images/header-bg.png') ",
        "world":"url('images/wordmap.png') ",
        "diy":"url('images/DIY.png') ",
        "hardware":"url('images/Hardware.png') ",
        "industry":"url('images/industry.png') ",
        "automotive":"url('images/automotive.png') ",
        
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
  plugins: [],
}

