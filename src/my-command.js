const sketch = require('sketch/dom');
const { prefix } = require('config');

export default function(context) {
  const document = sketch.fromNative(context.document)
  const selectedLayers = context.selection;
  const selectedCount = selectedLayers.length;

  if (selectedCount === 0) {
    context.document.showMessage('No layers are selected.');
  } else {
    context.document.showMessage(`${selectedCount} layers selected.`);
  }
}
