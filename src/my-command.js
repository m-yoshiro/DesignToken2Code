const sketch = require('sketch/dom');
const { prefix, artboardName } = require('./config');

export default function(context) {
  const document = sketch.fromNative(context.document);
  const tokensArtboard = document.getLayersNamed(artboardName);

  if (tokensArtboard.length > 0 ) {
    context.document.showMessage(tokensArtboard[0].name);
  } else {
    context.document.showMessage('not fond');
  }
}
