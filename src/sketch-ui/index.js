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

module.exports.openPanel = callback => {
  const panel = NSOpenPanel.openPanel()
  panel.canChooseDirectories = true
  panel.canCreateDirectories = true
  panel.allowsMultipleSelection = false

  const clicked = panel.runModal()

  if (clicked === NSFileHandlingPanelOKButton) {
    const firstURL = panel.URL().path()
    let filePath = NSString.stringWithFormat('%@', firstURL)

    if (filePath.indexOf('file://') === 0) {
      filePath = filePath.substring(7)
    }

    callback.bind(this, filePath)()
  }
}
