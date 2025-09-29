module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15%)" },
        },
      },
      animation: {
        bounceY: "bounceY 0.6s ease-in-out both",
        "bounceY-120": "bounceY 0.6s ease-in-out 120ms both",
        "bounceY-240": "bounceY 0.6s ease-in-out 240ms both",
        "bounceY-360": "bounceY 0.6s ease-in-out 360ms both",
      },
      boxShadow: {
        'custom-purple': '8px 8px 15px rgba(73, 50, 107, 0.8)',
      },
      backgroundImage: {
        'hero': "url('../img/Background.png')",
      },
      backgroundPosition: {
        'custom-up': 'center -200px',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"'], 
        'coiny': ['"Coiny"'],
        'pt-mono': ['"PT Mono"'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'baby-blue': '#A4CFEB',
        'baby-purple': '#CCBEE2',
        'light-purple': '#D2D1F9',
        'wicsPink': '#FDE5F6',
        'wicsbg-pink': '#EFDCE8',
        'wicsIndigo': '#B8C3FB',
        'wicsPurple': '#B089DD',
        'wics-lightPurple': '#DCD2FD', 
        'textboxColor': '#90868D94',
        'placeholder-light': 'rgba(255,255,255,0.7)',
      }
    },
    screens: {
      sm: '0px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
