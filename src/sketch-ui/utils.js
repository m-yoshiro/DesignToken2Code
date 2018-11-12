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

module.exports.getTokenLayersByPattern = (layers, pattern) =>
  // TODO: layerのtypeが正しいかtest追加する
  layers.filter(elm => {
    if (!pattern.test(elm.name)) {
      return false
    }

    return tokenLayerTypes.some(type => type === elm.type)
  })

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
