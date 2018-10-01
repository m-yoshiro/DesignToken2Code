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

          var _require4 = __webpack_require__(
              /*! ./ui/index */ './src/ui/index.js'
            ),
            createDialog = _require4.createDialog,
            pasteBoardWrite = _require4.pasteBoardWrite

          var getTokenLayersByPattern = function getTokenLayersByPattern(
            layers,
            pattern
          ) {
            return layers.filter(function(elm) {
              return (
                elm.type === ''.concat(sketch.Types.Shape) &&
                pattern.test(elm.name)
              )
            })
          }

          var generateTokensFromLayers = function generateTokensFromLayers(
            layers
          ) {
            return layers.map(function(elm) {
              return {
                name: elm.name,
                color: elm.style.fills[0].color,
              }
            })
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

            var tokenLayers = getTokenLayersByPattern(
              tokensArtboard.layers,
              tokenNamePattern
            )
            var tokens = generateTokensFromLayers(tokenLayers)
            var outputData = tokens
              .map(function(elm) {
                return ''.concat(elm.name, ': ').concat(elm.color, ';\n')
              })
              .reduce(function(a, b) {
                return a + b
              }) // Dialog

            createDialog({
              title: 'DesignTokens2Code',
              message: outputData,
              buttons: [
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
                  text: 'Close',
                },
              ],
            })
          }

          /***/
        },

      /***/ './src/ui/index.js':
        /*!*************************!*\
  !*** ./src/ui/index.js ***!
  \*************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports.createDialog = function(_ref) {
            var title = _ref.title,
              message = _ref.message,
              buttons = _ref.buttons
            var dialog = NSAlert.alloc().init()
            dialog.messageText = title
            dialog.informativeText = message

            if (Array.isArray(buttons) && buttons.length > 0) {
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

          module.exports.pasteBoardWrite = function(_ref2, context) {
            var data = _ref2.data,
              _ref2$message = _ref2.message,
              message = _ref2$message === void 0 ? 'Copied' : _ref2$message
            var pasteBoard = NSPasteboard.generalPasteboard()
            pasteBoard.clearContents()
            pasteBoard.writeObjects([data])
            context.document.showMessage(message)
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
