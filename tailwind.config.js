module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'poppins' :['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#F7FAFC',
        'light': '#D5D5DC',
        'dark': '#17171B',
        'shade': '#1F1F35',
        'gradient-primary' : 'linear-gradient(133.47deg, #2E59DA 11.26%, #7E4CE3 89.23%)'

      }
    },
  },
  plugins: [],
}
