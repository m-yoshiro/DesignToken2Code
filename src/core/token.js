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

module.exports = class Token {
  constructor(data) {
    this.data = data
    this.validate()

    if (this.data.type === 'color') {
      this.color = new Color(this.data.value)
    }
  }

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

  toScss() {
    let { name, value } = this.data
    const { type } = this.data

    value = type === 'color' ? new Color(value).toHEX() : value
    name = `$${name.replace(/^\$?(.*)/, '$1')}`
    return `${name}: ${value} !default;`
  }

  toCss() {
    let { name, value } = this.data
    const { type } = this.data

    value = type === 'color' ? new Color(value).toHEX() : value
    name = `--${name.replace(/^\$?(.*)/, '$1')}`
    return `${name}: ${value};`
  }
}
