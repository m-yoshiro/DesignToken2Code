const Token = require('./token')

export default class DesignTokens {
  constructor() {
    this.tokens = []
  }

  createTokens(data) {
    if (!Array.isArray(data)) {
      return new TypeError('"data must be Array"')
    }
    this.tokens = data.map(element => new Token(element))

    return null
  }
}
