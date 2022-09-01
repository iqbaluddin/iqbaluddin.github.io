/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      OK: 'comic sans ms'
    },
    extend: {
      lineHeight: {
        extraloose: '2.5',
        12: '3rem',
        16: '4rem',
      },
    },
  },
  plugins: [],
}
