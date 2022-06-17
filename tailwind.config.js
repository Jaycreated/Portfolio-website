module.exports = {
  purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.hmtl"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        DancingScript: ['DancingScript', 'cursive'] 
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
       backgroundImage: {
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
