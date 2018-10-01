const sketch = require('sketch/dom')
const { UI } = require('sketch')
const { prefix, artboardName } = require('./config')
const { escapeRegExp } = require('./utils')
const { createDialog, pasteBoardWrite } = require('./sketch-ui/index')
const DesignTokens = require('./core/design-tokens')

// TODO: 外部ファイルに切り出す
const getTokenLayersByPattern = (layers, pattern) =>
  layers.filter(
    elm => elm.type === `${sketch.Types.Shape}` && pattern.test(elm.name)
  )

// TODO: 外部ファイルに切り出す
const convertLayersToTokenData = layers =>
  layers.map(elm => ({
    type: 'color',
    name: elm.name,
    value: elm.style.fills[0].color,
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

  const tokenData = new DesignTokens(convertLayersToTokenData(tokenLayers))
  // TODO: UI上でformatを変更できるようにする
  tokenData.setOutputFormat = 'css'
  const outputData = tokenData.output()

  // Dialog
  const dialogButtons = [
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
  ]

  createDialog({
    title: 'DesignTokens2Code',
    message: outputData,
    buttons: dialogButtons,
  })
}
