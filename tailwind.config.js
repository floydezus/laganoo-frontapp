/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1270px',
      '2xl': '1600px',
    },
    extend: {
      backgroundPosition: {
        'center-top': 'center top',
      },
      backgroundImage: {
        'modal-desktop': "url('./assets/popups/popup-desktop.png')",
        'modal-mobile': "url('./assets/popups/popup-mobile.png')",
      },
      gap: {
        '6px': '6px',
        '14px': '14px',
        '18px': '18px',
      },
      colors: {
        primary: '#010101', // black
        secondary: '#E2E8ED', // gray
        accent: '#FEC40E', // yellow
      },
      boxShadow: {
        std: '0px 4px 4px rgba(133, 133, 133, 0.45)',
        stdblack: '0 4px 2px -2px rgba(0, 0, 0, 0.25)',
        card: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      height: {
        '350px': '350px',
        big: '412px',
        '450px': '450px',
        '600px': '600px',
      },
      fontSize: {
        '21px': '21px',
      },
      padding: {
        17: '70px',
        18: '78px',
        '432px': '432px',
      },
      minHeight: {
        189: '189px',
      },
      minWidth: {
        480: '480px',
      },
      maxWidth: {
        xxxs: '130px',
        xxs: '256px',
        '4xl': '912px',
        '6xl': '1200px',
      },
      width: {
        '350px': '350px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
