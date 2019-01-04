const Color = require('./color')

const tokenProps = {
  type: {
    type: 'string',
  },
  name: {
    type: 'string',
  },
  value: {
    type: 'string',
  },
}

/**
 * Class Token
 */
module.exports = class Token {
  /**
   * @param {array} data - the data of tokens.
   */
  constructor(data) {
    this.data = data
    this.validate()

    if (this.data.type === 'color') {
      this.color = new Color(this.data.value)
    }
  }

  /**
   * Validate this.data.
   */
  validate() {
    Object.keys(tokenProps).forEach(key => {
      if (!(key in this.data)) {
        throw new ReferenceError(`Data must have ${key} property.`)
      }

      if (typeof this.data[key] !== 'string') {
        throw new TypeError(`${key} must be ${tokenProps[key].type}`)
      }
    })
  }

  /**
   * Convert to SCSS variables.
   * @return {string} HEX Color.
   */
  toScss() {
    let { name, value } = this.data
    const { type } = this.data

    value = type === 'color' ? new Color(value).toHEX() : value
    name = `$${name.replace(/^\$?(.*)/, '$1')}`
    return `${name}: ${value} !default;`
  }

  /**
   * Convert to CSS variables.
   * @return {string} HEX Color.
   */
  toCss() {
    let { name, value } = this.data
    const { type } = this.data

    value = type === 'color' ? new Color(value).toHEX() : value
    name = `--${name.replace(/^\$?(.*)/, '$1')}`
    return `${name}: ${value};`
  }
}
