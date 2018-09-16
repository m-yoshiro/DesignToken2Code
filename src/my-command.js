const sketch = require('sketch/dom');
const { UI } = require('sketch');
const { prefix, artboardName } = require('./config');
const { escapeRegExp } = require('./utils');

const getTokenLayersByPattern = (layers, pattern) => {
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

    const message = tokens.map(elm => `${elm.name}: ${elm.color},\n` ).reduce( (a, b) => a + b );

    // Dialog
    const dialog = NSAlert.alloc().init();
    dialog.messageText = message;
    dialog.runModal();

    // Copy to clipboard
    let pasteBoard = NSPasteboard.generalPasteboard()
    pasteBoard.clearContents()
    pasteBoard.writeObjects([message])
  } else {
    UI.message('Not fond');
  }
}
