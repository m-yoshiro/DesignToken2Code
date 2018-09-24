const tokenProps = {
  type: {
    type: 'string',
  },
  format: {
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
}
