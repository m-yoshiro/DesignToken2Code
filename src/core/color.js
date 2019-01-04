/**
 * Module for SketchUI.
 * @module Color
 */

/**
 * Class Color.
 */
module.exports = class Color {
  /**
   * @param {string} value - the value of color.
   */
  constructor(value) {
    this.value = value
  }

  /**
   * @return {string} The Hex color value.
   */
  toHEX() {
    // https://gist.github.com/comficker/871d378c535854c1c460f7867a191a5a#gistcomment-2615849
    const hexPattern = /^#?(?:([0-9a-f]{3})|([0-9a-f]{6})(?:[0-9a-f]{2})?)$/i
    const [, short, long] = this.value.match(hexPattern) || []

    if (long) {
      return `#${long}`
    }

    if (short) {
      return `#${short}`
    }

    return undefined
  }
}
