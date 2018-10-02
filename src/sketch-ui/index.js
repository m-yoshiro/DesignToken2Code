const sketch = require('sketch/dom')

module.exports.createDialog = ({ title, message, buttons }) => {
  if (title === undefined || message === undefined) {
    throw new Error('"title" or "message" is no arguments.')
  }

  const dialog = NSAlert.alloc().init()
  dialog.messageText = title
  dialog.informativeText = message

  if (buttons !== undefined && !Array.isArray(buttons)) {
    throw new TypeError('"buttons" must be Array.')
  } else if (buttons.length > 0) {
    buttons.forEach(button => {
      dialog.addButtonWithTitle(button.text)
    })
  }

  // https://github.com/skpm/dialog/blob/master/lib/message-box.js#L96
  const response = Number(dialog.runModal()) - 1000

  if (
    buttons[response].action &&
    typeof buttons[response].action === 'function'
  ) {
    buttons[response].action()
  }
}

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
  layers.filter(
    elm => elm.type === `${sketch.Types.Shape}` && pattern.test(elm.name)
  )

module.exports.convertLayersToTokenData = layers =>
  layers.map(elm => ({
    type: 'color',
    name: elm.name,
    value: elm.style.fills[0].color,
  }))

module.exports.writeToFile = (data, path) => {
  const file = NSString.stringWithString(data)
  file.writeToFile(path)
  file.automatically(true)
  file.encoding(NSUTF8StringEncoding)
}
