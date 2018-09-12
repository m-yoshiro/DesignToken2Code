const sketch = require('sketch/dom');
const { prefix, artboardName } = require('./config');

export default function(context) {
  const document = sketch.fromNative(context.document);
  const tokensArtboard = document.getLayersNamed(artboardName)[0];

  if (tokensArtboard.length > 0 ) {
    context.document.showMessage(tokensArtboard.name);
  } else {
    context.document.showMessage('not fond');
  }

  if (tokensArtboard.layers.length > 0) {
    context.document.showMessage(`Tokens artboard has layers.`);
  } else {
    context.document.showMessage('not fond');
  }
}
