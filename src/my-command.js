const sketch = require('sketch/dom');
const { prefix, artboardName } = require('./config');
const { escapeRegExp } = require('./utils');

const getTokenLayersByPattern = (layers, pattern) => {
  return layers.filter( elm => ('style' in elm) && pattern.test(elm.name) );
  return layers.filter( elm => (elm.type === `${sketch.Types.Shape}`) && pattern.test(elm.name) );
};

const generateTokensFromLayers = (layers) => {
  return layers.map( elm => {
    return {
      name: elm.name,
      color: elm.style.fills[0].color,
    };
  });
};

export default function(context) {
  const document = sketch.fromNative(context.document);
  const tokensArtboard = document.getLayersNamed(artboardName)[0];
  const tokenNamePattern = new RegExp(`^${escapeRegExp(prefix)}`);

  if (tokensArtboard.layers) {
    const tokenLayers = getTokenLayersByPattern(tokensArtboard.layers, tokenNamePattern);
    const tokens = generateTokensFromLayers(tokenLayers);

    const message = tokens.map(elm => `${elm.name}: ${elm.color}, ` ).reduce( (a, b) => a + b );
    context.document.showMessage(message);
  } else {
    context.document.showMessage('not fond');
  }
}
