module.exports = class Color {
  constructor(colorData) {
    this.data = colorData
  }

  toHEX() {
    // https://gist.github.com/comficker/871d378c535854c1c460f7867a191a5a#gistcomment-2615849
    const hexPattern = /^#?(?:([0-9a-f]{3})|([0-9a-f]{6})(?:[0-9a-f]{2})?)$/i
    const [, short, long] = this.data.match(hexPattern) || []

    if (long) {
      return long
    }

    if (short) {
      return short
    }

    return undefined
  }
}
