const sketch = require('sketch/dom');
const { prefix, artboardName } = require('./config');

export default function(context) {
  const document = sketch.fromNative(context.document);
  const tokens = document.getLayersNamed(artboardName);

  if (tokens.length > 0 ) {
    context.document.showMessage(tokens[0].name);
  } else {
    context.document.showMessage('not fond');
  }
}
