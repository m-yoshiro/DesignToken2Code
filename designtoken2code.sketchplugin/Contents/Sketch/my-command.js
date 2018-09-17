const that = this
function __skpm_run(key, context) {
  that.context = context

  const exports = /** *** */ (function(modules) {
    // webpackBootstrap
    /** *** */ // The module cache
    /** *** */ const installedModules = {} // The require function
    /** *** */
    /** *** */ /** *** */ function __webpack_require__(moduleId) {
      /** *** */
      /** *** */ // Check if module is in cache
      /** *** */ if (installedModules[moduleId]) {
        /** *** */ return installedModules[moduleId].exports
        /** *** */
      } // Create a new module (and put it into the cache)
      /** *** */ /** *** */ const module = (installedModules[moduleId] = {
        /** *** */ i: moduleId,
        /** *** */ l: false,
        /** *** */ exports: {},
        /** *** */
      }) // Execute the module function
      /** *** */
      /** *** */ /** *** */ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ) // Flag the module as loaded
      /** *** */
      /** *** */ /** *** */ module.l = true // Return the exports of the module
      /** *** */
      /** *** */ /** *** */ return module.exports
      /** *** */
    } // expose the modules object (__webpack_modules__)
    /** *** */
    /** *** */
    /** *** */ /** *** */ __webpack_require__.m = modules // expose the module cache
    /** *** */
    /** *** */ /** *** */ __webpack_require__.c = installedModules // define getter function for harmony exports
    /** *** */
    /** *** */ /** *** */ __webpack_require__.d = function(
      exports,
      name,
      getter
    ) {
      /** *** */ if (!__webpack_require__.o(exports, name)) {
        /** *** */ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        })
        /** *** */
      }
      /** *** */
    } // define __esModule on exports
    /** *** */
    /** *** */ /** *** */ __webpack_require__.r = function(exports) {
      /** *** */ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        })
        /** *** */
      }
      /** *** */ Object.defineProperty(exports, '__esModule', { value: true })
      /** *** */
    } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /** *** */
    /** *** */ /** *** */ /** *** */ /** *** */ /** *** */ /** *** */ __webpack_require__.t = function(
      value,
      mode
    ) {
      /** *** */ if (mode & 1) value = __webpack_require__(value)
      /** *** */ if (mode & 8) return value
      /** *** */ if (
        mode & 4 &&
        typeof value === 'object' &&
        value &&
        value.__esModule
      )
        return value
      /** *** */ const ns = Object.create(null)
      /** *** */ __webpack_require__.r(ns)
      /** *** */ Object.defineProperty(ns, 'default', {
        enumerable: true,
        value,
      })
      /** *** */ if (mode & 2 && typeof value !== 'string')
        for (const key in value)
          __webpack_require__.d(ns, key, (key => value[key]).bind(null, key))
      /** *** */ return ns
      /** *** */
    } // getDefaultExport function for compatibility with non-harmony modules
    /** *** */
    /** *** */ /** *** */ __webpack_require__.n = function(module) {
      /** *** */ const getter =
        module && module.__esModule
          ? /** *** */ function getDefault() {
              return module.default
            }
          : /** *** */ function getModuleExports() {
              return module
            }
      /** *** */ __webpack_require__.d(getter, 'a', getter)
      /** *** */ return getter
      /** *** */
    } // Object.prototype.hasOwnProperty.call
    /** *** */
    /** *** */ /** *** */ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /** *** */
    /** *** */ /** *** */ __webpack_require__.p = '' // Load entry module and return exports
    /** *** */
    /** *** */
    /** *** */ /** *** */ return __webpack_require__(
      (__webpack_require__.s = './src/my-command.js')
    )
    /** *** */
  })(
    /** ********************************************************************* */
    /** *** */ {
      /** */ './src/config.js':
        /*! ***********************!*\
  !*** ./src/config.js ***!
  \********************** */
        /*! no static exports found */
        /** */ function(module, exports) {
          module.exports = {
            prefix: '$color',
            artboardName: 'Tokens',
          }

          /** */
        },

      /** */ './src/my-command.js':
        /*! ***************************!*\
  !*** ./src/my-command.js ***!
  \************************** */
        /*! exports provided: default */
        /** */ function(module, __webpack_exports__, __webpack_require__) {
          __webpack_require__.r(__webpack_exports__)
          const sketch = __webpack_require__(/*! sketch/dom */ 'sketch/dom')

          const _require = __webpack_require__(/*! sketch */ 'sketch')

          const UI = _require.UI

          const _require2 = __webpack_require__(
            /*! ./config */ './src/config.js'
          )

          const prefix = _require2.prefix

          const artboardName = _require2.artboardName

          const _require3 = __webpack_require__(/*! ./utils */ './src/utils.js')

          const escapeRegExp = _require3.escapeRegExp

          const getTokenLayersByPattern = function getTokenLayersByPattern(
            layers,
            pattern
          ) {
            return layers.filter(
              elm =>
                elm.type === ''.concat(sketch.Types.Shape) &&
                pattern.test(elm.name)
            )
          }

          const generateTokensFromLayers = function generateTokensFromLayers(
            layers
          ) {
            return layers.map(elm => ({
              name: elm.name,
              color: elm.style.fills[0].color,
            }))
          }

          /* harmony default export */ __webpack_exports__.default = function(
            context
          ) {
            const document = sketch.fromNative(context.document)
            const tokensArtboard = document.getLayersNamed(artboardName)[0]
            const tokenNamePattern = new RegExp(
              '^'.concat(escapeRegExp(prefix))
            )

            if (!tokensArtboard.layers.length) {
              UI.message('Not found')
              return
            }

            const tokenLayers = getTokenLayersByPattern(
              tokensArtboard.layers,
              tokenNamePattern
            )
            const tokens = generateTokensFromLayers(tokenLayers)
            const message = tokens
              .map(elm => ''.concat(elm.name, ': ').concat(elm.color, ';\n'))
              .reduce((a, b) => a + b) // Dialog

            const dialog = NSAlert.alloc().init()
            dialog.messageText = 'DesignTokens2Code'
            dialog.informativeText = message
            dialog.addButtonWithTitle('Copy')
            dialog.addButtonWithTitle('Close')
            const buttons = dialog.buttons() // https://github.com/skpm/dialog/blob/master/lib/message-box.js#L96

            const response = Number(dialog.runModal()) - 1000

            if (response === 0) {
              // Copy to clipboard
              const pasteBoard = NSPasteboard.generalPasteboard()
              pasteBoard.clearContents()
              pasteBoard.writeObjects([message])
              context.document.showMessage('Copied!')
            }
          }

          /** */
        },

      /** */ './src/utils.js':
        /*! **********************!*\
  !*** ./src/utils.js ***!
  \********************* */
        /*! no static exports found */
        /** */ function(module, exports) {
          module.exports.escapeRegExp = function(string) {
            return (
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
              string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            )
          } // $& means the whole matched string

          /** */
        },

      /** */ sketch:
        /*! *************************!*\
  !*** external "sketch" ***!
  \************************ */
        /*! no static exports found */
        /** */ function(module, exports) {
          module.exports = require('sketch')

          /** */
        },

      /** */ 'sketch/dom':
        /*! *****************************!*\
  !*** external "sketch/dom" ***!
  \**************************** */
        /*! no static exports found */
        /** */ function(module, exports) {
          module.exports = require('sketch/dom')

          /** */
        },

      /** *** */
    }
  )
  if (key === 'default' && typeof exports === 'function') {
    exports(context)
  } else {
    exports[key](context)
  }
}
that.onRun = __skpm_run.bind(this, 'default')

// # sourceMappingURL=my-command.js.map
