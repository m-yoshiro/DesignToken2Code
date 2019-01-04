/**
 * Utilities.
 * @module Utils
 */

/**
 * Escape special characters in a variable for using RegExp.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions}
 * @param {string} pattern - the pattern of RegExp.
 * @return {regexp} regexp escaped special characters.
 */
module.exports.escapeRegExp = pattern =>
  pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
