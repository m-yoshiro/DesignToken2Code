const sketch = require('sketch/dom')

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
  layers.filter(
    elm => elm.type === `${sketch.Types.ShapePath}` && pattern.test(elm.name)
  )

module.exports.convertLayersToTokenData = layers =>
  layers.map(elm => ({
    type: 'color',
    name: elm.name,
    value: elm.style.fills[0].color,
  }))

module.exports.writeToFile = (path, content) => {
  const file = NSString.stringWithFormat('%@', content)
  return file.writeToFile_atomically(path, true)
}
