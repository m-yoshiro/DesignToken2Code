const Token = require('./token')

module.exports = class DesignTokens {
  constructor(
    data,
    config = {
      outputFormat: 'scss',
    }
  ) {
    this.tokens = []
    this.config = config
    this.initTokens(data)
  }

  initTokens(data) {
    if (!Array.isArray(data)) {
      return new TypeError('"data must be Array"')
    }
    this.tokens = data.map(element => new Token(element))

    return null
  }

  output() {
    const { outputFormat } = this.config
    let outputData

    switch (outputFormat) {
      case 'scss':
        outputData = this.tokens.map(token => token.toScss()).join('\n')
        break
      case 'css':
        outputData = this.tokens.map(token => token.toCss()).join('\n')
        break
      default:
        break
    }

    return outputData
  }
}
