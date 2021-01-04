const path = require('path')

module.exports = function (_moduleOpts) {
  const moduleOptions = Object.assign({}, this.options.log, _moduleOpts)

  this.addPlugin({
    src: path.resolve(__dirname, 'logs.template.js'),
    moduleOptions,
  })
}

module.exports.meta = require('../../package.json')
