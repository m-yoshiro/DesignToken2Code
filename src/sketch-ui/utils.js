/* eslint-disable consistent-return */
const sketch = require('sketch/dom')
// Tokenとして扱うことのできる Layer Typeを指定
const tokenLayerTypes = [`${sketch.Types.ShapePath}`]

module.exports.pasteBoardWrite = ({ data, message = 'Copied' }, context) => {
  if (data === undefined) {
    throw new Error('"data" is not exist')
  }

  if (context.document.type === 'Document') {
    throw new TypeError('"context" must be Sketch/dom')
  }

  const pasteBoard = NSPasteboard.generalPasteboard()
  pasteBoard.clearContents()
  pasteBoard.writeObjects([data])

  context.document.showMessage(message)
}

module.exports.extractTokenLayersByPattern = (object, pattern) => {
  const tokenLayers = []

  // eslint-disable-next-line no-shadow
  const recursiveSearch = object => {
    if (object.layers && object.layers.length) {
      object.layers.forEach(recursiveSearch)
    }

    if (
      pattern.test(object.name) &&
      tokenLayerTypes.some(type => type === object.type) &&
      object.style.fills &&
      object.style.fills.length
    ) {
      tokenLayers.push(object)
    }
  }

  recursiveSearch(object)

  return tokenLayers
}

module.exports.convertLayersToTokenData = layers =>
  layers.map(layer => ({
    type: 'color',
    name: layer.name,
    value: layer.style.fills[0].color,
  }))

module.exports.writeToFile = (path, content) => {
  const file = NSString.stringWithFormat('%@', content)
  return file.writeToFile_atomically(path, true)
}
