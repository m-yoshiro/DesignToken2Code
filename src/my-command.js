const sketch = require('sketch/dom')
const { UI } = require('sketch')
const { prefix, artboardName } = require('./config')
const { escapeRegExp } = require('./utils')
const { createDialog, pasteBoardWrite } = require('./ui/index')

const getTokenLayersByPattern = (layers, pattern) =>
  layers.filter(
    elm => elm.type === `${sketch.Types.Shape}` && pattern.test(elm.name)
  )

const generateTokensFromLayers = layers =>
  layers.map(elm => ({
    name: elm.name,
    color: elm.style.fills[0].color,
  }))

export default function(context) {
  const document = sketch.fromNative(context.document)
  const tokensArtboard = document.getLayersNamed(artboardName)[0]
  const tokenNamePattern = new RegExp(`${escapeRegExp(prefix)}`)

  if (!tokensArtboard.layers.length) {
    UI.message('Not found')
    return
  }

  const tokenLayers = getTokenLayersByPattern(
    tokensArtboard.layers,
    tokenNamePattern
  )
  const tokens = generateTokensFromLayers(tokenLayers)

  const outputData = tokens
    .map(elm => `${elm.name}: ${elm.color};\n`)
    .reduce((a, b) => a + b)

  // Dialog
  createDialog({
    title: 'DesignTokens2Code',
    message: outputData,
    buttons: [
      {
        text: 'Copy',
        action: () => {
          pasteBoardWrite(
            {
              data: outputData,
              message: 'Copied',
            },
            context
          )
        },
      },
      {
        text: 'Close',
      },
    ],
  })
}
