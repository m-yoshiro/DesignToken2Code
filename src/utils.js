// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
module.exports.escapeRegExp = string =>
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
