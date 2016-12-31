/* global module */
module.exports = {
  input: 'index.css',
  output: 'build/ticketfly-css-color-garnishes.css',

  use: [
    'postcss-import',
    'postcss-for',
    'postcss-cssnext'
  ]
};
