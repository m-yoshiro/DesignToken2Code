export default function(context) {
  const selectedLayers = context.selection
  const selectedCount = selectedLayers.length

  if (selectedCount === 0) {
    context.document.showMessage('No layers are selected.')
  } else {
    context.document.showMessage(`${selectedCount} layers selected.`)
  }
}
