module.exports = (context, title, message, buttons = []) => {
  const dialog = NSAlert.alloc().init()
  dialog.messageText = title
  dialog.informativeText = message

  if (Array.isArray(buttons) && buttons.length > 0) {
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
