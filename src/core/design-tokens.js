const Token = require('./token')

/**
 * Class DesignTokens
 */
module.exports = class DesignTokens {
  /**
   * @param {array} data - the data of tokens.
   * @param {object} config - the config like a output format.
   */
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

  /**
   * @param {array} data - the data of tokens.
   * @return {null}
   */
  initTokens(data) {
    if (!Array.isArray(data)) {
      return new TypeError('"data must be Array"')
    }
    this.tokens = data.map(element => new Token(element))

    return null
  }

  /**
   * @param {string} format - the format of output data.
   * @return {array} output data.
   */
  set setOutputFormat(format) {
    this.config.outputFormat = format
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
