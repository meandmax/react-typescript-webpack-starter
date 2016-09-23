const baseConfig = require('./webpack.config.base.js');

const dev = {
   devServer: {
    colors: true,
    inline: true,
    progress: true,
  },
}

console.log(baseConfig);

module.exports = Object.assign({}, dev, baseConfig);
