var that = this
function __skpm_run(key, context) {
  that.context = context

  var exports = /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }) // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ) // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true // Return the exports of the module
      /******/
      /******/ /******/ return module.exports
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        })
        /******/
      }
      /******/
    } // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value)
      /******/ if (mode & 8) return value
      /******/ if (
        mode & 4 &&
        typeof value === 'object' &&
        value &&
        value.__esModule
      )
        return value
      /******/ var ns = Object.create(null)
      /******/ __webpack_require__.r(ns)
      /******/ Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value,
      })
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key]
            }.bind(null, key)
          )
      /******/ return ns
      /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default']
            }
          : /******/ function getModuleExports() {
              return module
            }
      /******/ __webpack_require__.d(getter, 'a', getter)
      /******/ return getter
      /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
      (__webpack_require__.s = './src/my-command.js')
    )
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './src/config.js':
        /*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = {
            prefix: '$color',
            artboardName: 'Tokens',
          }

          /***/
        },

      /***/ './src/core/color.js':
        /*!***************************!*\
  !*** ./src/core/color.js ***!
  \***************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          function _slicedToArray(arr, i) {
            return (
              _arrayWithHoles(arr) ||
              _iterableToArrayLimit(arr, i) ||
              _nonIterableRest()
            )
          }

          function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          }

          function _iterableToArrayLimit(arr, i) {
            var _arr = []
            var _n = true
            var _d = false
            var _e = undefined
            try {
              for (
                var _i = arr[Symbol.iterator](), _s;
                !(_n = (_s = _i.next()).done);
                _n = true
              ) {
                _arr.push(_s.value)
                if (i && _arr.length === i) break
              }
            } catch (err) {
              _d = true
              _e = err
            } finally {
              try {
                if (!_n && _i['return'] != null) _i['return']()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          }

          function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i]
              descriptor.enumerable = descriptor.enumerable || false
              descriptor.configurable = true
              if ('value' in descriptor) descriptor.writable = true
              Object.defineProperty(target, descriptor.key, descriptor)
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps)
            if (staticProps) _defineProperties(Constructor, staticProps)
            return Constructor
          }

          module.exports =
            /*#__PURE__*/
            (function() {
              function Color(value) {
                _classCallCheck(this, Color)

                this.value = value
              }

              _createClass(Color, [
                {
                  key: 'toHEX',
                  value: function toHEX() {
                    // https://gist.github.com/comficker/871d378c535854c1c460f7867a191a5a#gistcomment-2615849
                    var hexPattern = /^#?(?:([0-9a-f]{3})|([0-9a-f]{6})(?:[0-9a-f]{2})?)$/i

                    var _ref = this.value.match(hexPattern) || [],
                      _ref2 = _slicedToArray(_ref, 3),
                      short = _ref2[1],
                      long = _ref2[2]

                    if (long) {
                      return '#'.concat(long)
                    }

                    if (short) {
                      return '#'.concat(short)
                    }

                    return undefined
                  },
                },
              ])

              return Color
            })()

          /***/
        },

      /***/ './src/core/design-tokens.js':
        /*!***********************************!*\
  !*** ./src/core/design-tokens.js ***!
  \***********************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i]
              descriptor.enumerable = descriptor.enumerable || false
              descriptor.configurable = true
              if ('value' in descriptor) descriptor.writable = true
              Object.defineProperty(target, descriptor.key, descriptor)
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps)
            if (staticProps) _defineProperties(Constructor, staticProps)
            return Constructor
          }

          var Token = __webpack_require__(/*! ./token */ './src/core/token.js')

          module.exports =
            /*#__PURE__*/
            (function() {
              function DesignTokens(data) {
                var config =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {
                        outputFormat: 'scss',
                      }

                _classCallCheck(this, DesignTokens)

                this.tokens = []
                this.config = config
                this.initTokens(data)
              }

              _createClass(DesignTokens, [
                {
                  key: 'initTokens',
                  value: function initTokens(data) {
                    if (!Array.isArray(data)) {
                      return new TypeError('"data must be Array"')
                    }

                    this.tokens = data.map(function(element) {
                      return new Token(element)
                    })
                    return null
                  },
                },
                {
                  key: 'output',
                  value: function output() {
                    var outputFormat = this.config.outputFormat
                    var outputData

                    switch (outputFormat) {
                      case 'scss':
                        outputData = this.tokens
                          .map(function(token) {
                            return token.toScss()
                          })
                          .join('\n')
                        break

                      case 'css':
                        outputData = this.tokens
                          .map(function(token) {
                            return token.toCss()
                          })
                          .join('\n')
                        break

                      default:
                        break
                    }

                    return outputData
                  },
                },
                {
                  key: 'setOutputFormat',
                  set: function set(format) {
                    this.config.outputFormat = format
                  },
                },
              ])

              return DesignTokens
            })()

          /***/
        },

      /***/ './src/core/token.js':
        /*!***************************!*\
  !*** ./src/core/token.js ***!
  \***************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i]
              descriptor.enumerable = descriptor.enumerable || false
              descriptor.configurable = true
              if ('value' in descriptor) descriptor.writable = true
              Object.defineProperty(target, descriptor.key, descriptor)
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps)
            if (staticProps) _defineProperties(Constructor, staticProps)
            return Constructor
          }

          var Color = __webpack_require__(/*! ./color */ './src/core/color.js')

          var tokenProps = {
            type: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
          }

          module.exports =
            /*#__PURE__*/
            (function() {
              function Token(data) {
                _classCallCheck(this, Token)

                this.data = data
                this.validate()

                if (this.data.type === 'color') {
                  this.color = new Color(this.data.value)
                }
              }

              _createClass(Token, [
                {
                  key: 'validate',
                  value: function validate() {
                    var _this = this

                    Object.keys(tokenProps).forEach(function(key) {
                      if (!(key in _this.data)) {
                        throw new ReferenceError(
                          'Data must have '.concat(key, ' property.')
                        )
                      }

                      if (typeof _this.data[key] !== 'string') {
                        throw new TypeError(
                          ''
                            .concat(key, ' must be ')
                            .concat(tokenProps[key].type)
                        )
                      }
                    })
                  },
                },
                {
                  key: 'toScss',
                  value: function toScss() {
                    var _this$data = this.data,
                      name = _this$data.name,
                      value = _this$data.value
                    var type = this.data.type
                    value = type === 'color' ? new Color(value).toHEX() : value
                    name = '$'.concat(name.replace(/^\$?(.*)/, '$1'))
                    return ''.concat(name, ': ').concat(value, ' !default;')
                  },
                },
                {
                  key: 'toCss',
                  value: function toCss() {
                    var _this$data2 = this.data,
                      name = _this$data2.name,
                      value = _this$data2.value
                    var type = this.data.type
                    value = type === 'color' ? new Color(value).toHEX() : value
                    name = '--'.concat(name.replace(/^\$?(.*)/, '$1'))
                    return ''.concat(name, ': ').concat(value, ';')
                  },
                },
              ])

              return Token
            })()

          /***/
        },

      /***/ './src/my-command.js':
        /*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          var sketch = __webpack_require__(/*! sketch/dom */ 'sketch/dom')

          var _require = __webpack_require__(/*! sketch */ 'sketch'),
            UI = _require.UI

          var _require2 = __webpack_require__(
              /*! ./config */ './src/config.js'
            ),
            prefix = _require2.prefix,
            artboardName = _require2.artboardName

          var _require3 = __webpack_require__(/*! ./utils */ './src/utils.js'),
            escapeRegExp = _require3.escapeRegExp

          var DesignTokens = __webpack_require__(
            /*! ./core/design-tokens */ './src/core/design-tokens.js'
          )

          var _require4 = __webpack_require__(
              /*! ./sketch-ui/index */ './src/sketch-ui/index.js'
            ),
            createDialog = _require4.createDialog,
            openPanel = _require4.openPanel

          var _require5 = __webpack_require__(
              /*! ./sketch-ui/utils */ './src/sketch-ui/utils.js'
            ),
            pasteBoardWrite = _require5.pasteBoardWrite,
            extractTokenLayersByPattern = _require5.extractTokenLayersByPattern,
            convertLayersToTokenData = _require5.convertLayersToTokenData,
            writeToFile = _require5.writeToFile

          var CONFIG = {
            outputFormat: 'scss',
          }
          /* harmony default export */ __webpack_exports__[
            'default'
          ] = function(context) {
            var document = sketch.fromNative(context.document)
            var tokensArtboard = document.getLayersNamed(artboardName)[0]
            var tokenNamePattern = new RegExp(''.concat(escapeRegExp(prefix)))

            if (!tokensArtboard.layers.length) {
              UI.message('Not found')
              return
            }

            var tokenLayers = extractTokenLayersByPattern(
              tokensArtboard,
              tokenNamePattern
            )
            log(tokenLayers)
            var tokenData = new DesignTokens(
              convertLayersToTokenData(tokenLayers)
            ) // TODO: UI上でformatを変更できるようにする

            tokenData.setOutputFormat = CONFIG.outputFormat
            var outputData = tokenData.output() // Dialog

            var dialogButtons = [
              {
                text: 'Copy',
                action: function action() {
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
                text: 'Save as',
                action: function action() {
                  openPanel(function(filePath) {
                    writeToFile(
                      ''
                        .concat(filePath, '/color.')
                        .concat(CONFIG.outputFormat),
                      ''.concat(outputData)
                    )
                  })
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

          /***/
        },

      /***/ './src/sketch-ui/index.js':
        /*!********************************!*\
  !*** ./src/sketch-ui/index.js ***!
  \********************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          var _this = this

          module.exports.createDialog = function(_ref) {
            var title = _ref.title,
              message = _ref.message,
              buttons = _ref.buttons

            if (title === undefined || message === undefined) {
              throw new Error('"title" or "message" is no arguments.')
            }

            var dialog = NSAlert.alloc().init()
            dialog.messageText = title
            dialog.informativeText = message

            if (buttons !== undefined && !Array.isArray(buttons)) {
              throw new TypeError('"buttons" must be Array.')
            } else if (buttons.length > 0) {
              buttons.forEach(function(button) {
                dialog.addButtonWithTitle(button.text)
              })
            } // https://github.com/skpm/dialog/blob/master/lib/message-box.js#L96

            var response = Number(dialog.runModal()) - 1000

            if (
              buttons[response].action &&
              typeof buttons[response].action === 'function'
            ) {
              buttons[response].action()
            }
          }

          module.exports.openPanel = function(callback) {
            var panel = NSOpenPanel.openPanel()
            panel.canChooseDirectories = true
            panel.canCreateDirectories = true
            panel.allowsMultipleSelection = false
            var clicked = panel.runModal()

            if (clicked === NSFileHandlingPanelOKButton) {
              var firstURL = panel.URL().path()
              var filePath = NSString.stringWithFormat('%@', firstURL)

              if (filePath.indexOf('file://') === 0) {
                filePath = filePath.substring(7)
              }

              callback.bind(_this, filePath)()
            }
          }

          /***/
        },

      /***/ './src/sketch-ui/utils.js':
        /*!********************************!*\
  !*** ./src/sketch-ui/utils.js ***!
  \********************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          /* eslint-disable consistent-return */
          var sketch = __webpack_require__(/*! sketch/dom */ 'sketch/dom') // Tokenとして扱うことのできる Layer Typeを指定

          var tokenLayerTypes = [''.concat(sketch.Types.ShapePath)]

          module.exports.pasteBoardWrite = function(_ref, context) {
            var data = _ref.data,
              _ref$message = _ref.message,
              message = _ref$message === void 0 ? 'Copied' : _ref$message

            if (data === undefined) {
              throw new Error('"data" is not exist')
            }

            if (context.document.type === 'Document') {
              throw new TypeError('"context" must be Sketch/dom')
            }

            var pasteBoard = NSPasteboard.generalPasteboard()
            pasteBoard.clearContents()
            pasteBoard.writeObjects([data])
            context.document.showMessage(message)
          }

          module.exports.extractTokenLayersByPattern = function(
            object,
            pattern
          ) {
            var tokenLayers = [] // eslint-disable-next-line no-shadow

            var recursiveSearch = function recursiveSearch(object) {
              if (object.layers && object.layers.length) {
                object.layers.forEach(recursiveSearch)
              }

              if (
                pattern.test(object.name) &&
                tokenLayerTypes.some(function(type) {
                  return type === object.type
                }) &&
                object.style.fills &&
                object.style.fills.length
              ) {
                tokenLayers.push(object)
              }
            }

            recursiveSearch(object)
            return tokenLayers
          }

          module.exports.convertLayersToTokenData = function(layers) {
            return layers.map(function(layer) {
              return {
                type: 'color',
                name: layer.name,
                value: layer.style.fills[0].color,
              }
            })
          }

          module.exports.writeToFile = function(path, content) {
            var file = NSString.stringWithFormat('%@', content)
            return file.writeToFile_atomically(path, true)
          }

          /***/
        },

      /***/ './src/utils.js':
        /*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
        /*! no static exports found */
        /***/ function(module, exports) {
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
          module.exports.escapeRegExp = function(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          } // $& means the whole matched string

          /***/
        },

      /***/ sketch:
        /*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = require('sketch')

          /***/
        },

      /***/ 'sketch/dom':
        /*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = require('sketch/dom')

          /***/
        },

      /******/
    }
  )
  if (key === 'default' && typeof exports === 'function') {
    exports(context)
  } else {
    exports[key](context)
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=my-command.js.map
