/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './templates/**/*.html',
    './static/src/**/*.js',
      // Añade más rutas según sea necesario
    ],
    theme: {
    extend: {},
    },
    plugins: [require('daisyui')],
}
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        titulo: ['Poppins', 'sans-serif'],
        cuerpo: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

