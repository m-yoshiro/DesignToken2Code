const sketch = require('sketch/dom');
const { prefix, artboardName } = require('./config');
const { escapeRegExp } = require('./utils');

export default function(context) {
  const document = sketch.fromNative(context.document);
  const tokensArtboard = document.getLayersNamed(artboardName)[0];
  const tokenNamePattern = new RegExp('^' + escapeRegExp(prefix));

  if (tokensArtboard.layers) {
    const tokens = tokensArtboard.layers
      .filter( elm => tokenNamePattern.test(elm.name) )
      .map( elm => {
        return {
          name: elm.name,
          color: elm.style.fills[0].color,
        };
      });

    const message = tokens.map(elm => `${elm.name}: ${elm.color}, ` ).reduce( (a, b) => a + b );

    context.document.showMessage(message);
  } else {
    context.document.showMessage('not fond');
  }
}
