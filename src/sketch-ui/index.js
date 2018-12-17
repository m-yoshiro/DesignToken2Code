/**
 * Module for SketchUI.
 * @module SketchUI
 */

/**
 * Create Dialog.
 * @param {string} title - the title of the dialog
 * @param {string} message - the message of the dialog by using informativeText.
 * @param {string} contentText - the contentText
 * @param {array} buttons - the buttons of the dialog.
 */
module.exports.createDialog = ({ title, message, contentText, buttons }) => {
  if (
    title === undefined ||
    (message === undefined && contentText === undefined)
  ) {
    throw new Error('"title" or "message" is no arguments.')
  }

  // Content View sizes
  const viewWidth = 350
  const viewHeight = 300

  const dialog = NSAlert.alloc().init()
  dialog.messageText = title

  if (message) {
    dialog.informativeText = message
  }

  if (contentText) {
    const theTextView = NSTextView.alloc().initWithFrame(
      NSMakeRect(0, 0, viewWidth, viewHeight)
    )
    const scrollView = NSScrollView.alloc().initWithFrame(
      NSMakeRect(0, 0, viewWidth, viewHeight - 30)
    )
    const accessoryView = NSView.alloc().init()

    // Insert contentText
    theTextView.setString(contentText)

    // Put contentText into scrollView
    scrollView.setHasVerticalScroller(true)
    scrollView.setBorderType(NSBezelBorder)
    scrollView.setDocumentView(theTextView)

    // Put scrollView into accessoryView
    accessoryView.setFlipped(true)
    accessoryView.setFrame(NSMakeRect(0, 0, viewWidth, viewHeight))
    accessoryView.addSubview(scrollView)

    dialog.setAccessoryView(scrollView)
  }

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

/**
 * Open Panel.
 * @param {function} callback - Callback will run after opening panel.
 */
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
