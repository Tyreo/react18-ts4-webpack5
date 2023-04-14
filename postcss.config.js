const autoprefixer = require('autoprefixer');
const postcssFixFlexbugs = require('postcss-flexbugs-fixes');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  ident: 'postcss',
  plugins: [
    autoprefixer(),
    pxtorem({
      rootValue: 37.5,
      propList: ['*']
    }),
    postcssFixFlexbugs
  ]
};
