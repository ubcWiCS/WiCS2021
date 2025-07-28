module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        'pt-mono': ['"PT Mono"']
      },
      colors: {
        'baby-blue': '#A4CFEB',
        'baby-purple': '#CCBEE2',
        'light-purple': '#D2D1F9',
        'wicsPink': '#FDE5F6',
        'wicsIndigo': '#B8C3FB',
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
