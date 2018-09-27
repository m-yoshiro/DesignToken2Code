const Token = require('./token')

module.exports = class DesignTokens {
  constructor(data, ...options) {
    this.tokens = []
    this.options = options
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
    return this.tokens.map(token => token.toScss()).join('\n')
  }
}
