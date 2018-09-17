module.exports.escapeRegExp = string =>
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
