const baseConfig = require('./webpack.config.base');

const build = {
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    }
}

module.exports = Object.assign({}, build, baseConfig);
