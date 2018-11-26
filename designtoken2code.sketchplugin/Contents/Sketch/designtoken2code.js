var that = this
function __skpm_run(t, e) {
  that.context = e
  var n = (function(t) {
    var e = {}
    function n(r) {
      if (e[r]) return e[r].exports
      var o = (e[r] = { i: r, l: !1, exports: {} })
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function(e) {
                return t[e]
              }.bind(null, o)
            )
        return r
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = ''),
      n((n.s = './src/designtoken2code.js'))
    )
  })({
    './src/config.js':
      /*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
      /*! no static exports found */ function(t, e) {
        t.exports = { prefix: '$color', artboardName: 'Tokens' }
      },
    './src/core/color.js':
      /*!***************************!*\
  !*** ./src/core/color.js ***!
  \***************************/
      /*! no static exports found */ function(t, e) {
        function n(t, e) {
          return (
            (function(t) {
              if (Array.isArray(t)) return t
            })(t) ||
            (function(t, e) {
              var n = [],
                r = !0,
                o = !1,
                a = void 0
              try {
                for (
                  var i, c = t[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (n.push(i.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                ;(o = !0), (a = t)
              } finally {
                try {
                  r || null == c.return || c.return()
                } finally {
                  if (o) throw a
                }
              }
              return n
            })(t, e) ||
            (function() {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            })()
          )
        }
        function r(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r)
          }
        }
        t.exports = (function() {
          function t(e) {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
              (this.value = e)
          }
          return (
            (function(t, e, n) {
              e && r(t.prototype, e), n && r(t, n)
            })(t, [
              {
                key: 'toHEX',
                value: function() {
                  var t = n(
                      this.value.match(
                        /^#?(?:([0-9a-f]{3})|([0-9a-f]{6})(?:[0-9a-f]{2})?)$/i
                      ) || [],
                      3
                    ),
                    e = t[1],
                    r = t[2]
                  return r ? '#'.concat(r) : e ? '#'.concat(e) : void 0
                },
              },
            ]),
            t
          )
        })()
      },
    './src/core/design-tokens.js':
      /*!***********************************!*\
  !*** ./src/core/design-tokens.js ***!
  \***********************************/
      /*! no static exports found */ function(t, e, n) {
        function r(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r)
          }
        }
        var o = n(/*! ./token */ './src/core/token.js')
        t.exports = (function() {
          function t(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { outputFormat: 'scss' }
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
              (this.tokens = []),
              (this.config = n),
              this.initTokens(e)
          }
          return (
            (function(t, e, n) {
              e && r(t.prototype, e), n && r(t, n)
            })(t, [
              {
                key: 'initTokens',
                value: function(t) {
                  return Array.isArray(t)
                    ? ((this.tokens = t.map(function(t) {
                        return new o(t)
                      })),
                      null)
                    : new TypeError('"data must be Array"')
                },
              },
              {
                key: 'output',
                value: function() {
                  var t
                  switch (this.config.outputFormat) {
                    case 'scss':
                      t = this.tokens
                        .map(function(t) {
                          return t.toScss()
                        })
                        .join('\n')
                      break
                    case 'css':
                      t = this.tokens
                        .map(function(t) {
                          return t.toCss()
                        })
                        .join('\n')
                  }
                  return t
                },
              },
              {
                key: 'setOutputFormat',
                set: function(t) {
                  this.config.outputFormat = t
                },
              },
            ]),
            t
          )
        })()
      },
    './src/core/token.js':
      /*!***************************!*\
  !*** ./src/core/token.js ***!
  \***************************/
      /*! no static exports found */ function(t, e, n) {
        function r(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r)
          }
        }
        var o = n(/*! ./color */ './src/core/color.js'),
          a = {
            type: { type: 'string' },
            name: { type: 'string' },
            value: { type: 'string' },
          }
        t.exports = (function() {
          function t(e) {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
              (this.data = e),
              this.validate(),
              'color' === this.data.type &&
                (this.color = new o(this.data.value))
          }
          return (
            (function(t, e, n) {
              e && r(t.prototype, e), n && r(t, n)
            })(t, [
              {
                key: 'validate',
                value: function() {
                  var t = this
                  Object.keys(a).forEach(function(e) {
                    if (!(e in t.data))
                      throw new ReferenceError(
                        'Data must have '.concat(e, ' property.')
                      )
                    if ('string' != typeof t.data[e])
                      throw new TypeError(
                        ''.concat(e, ' must be ').concat(a[e].type)
                      )
                  })
                },
              },
              {
                key: 'toScss',
                value: function() {
                  var t = this.data,
                    e = t.name,
                    n = t.value
                  return (
                    (n = 'color' === this.data.type ? new o(n).toHEX() : n),
                    (e = '$'.concat(e.replace(/^\$?(.*)/, '$1'))),
                    ''.concat(e, ': ').concat(n, ' !default;')
                  )
                },
              },
              {
                key: 'toCss',
                value: function() {
                  var t = this.data,
                    e = t.name,
                    n = t.value
                  return (
                    (n = 'color' === this.data.type ? new o(n).toHEX() : n),
                    (e = '--'.concat(e.replace(/^\$?(.*)/, '$1'))),
                    ''.concat(e, ': ').concat(n, ';')
                  )
                },
              },
            ]),
            t
          )
        })()
      },
    './src/designtoken2code.js':
      /*!*********************************!*\
  !*** ./src/designtoken2code.js ***!
  \*********************************/
      /*! exports provided: default */ function(t, e, n) {
        'use strict'
        n.r(e)
        var r = n(/*! sketch/dom */ 'sketch/dom'),
          o = n(/*! sketch */ 'sketch').UI,
          a = n(/*! ./config */ './src/config.js'),
          i = a.prefix,
          c = a.artboardName,
          s = n(/*! ./utils */ './src/utils.js').escapeRegExp,
          u = n(/*! ./core/design-tokens */ './src/core/design-tokens.js'),
          l = n(/*! ./sketch-ui/index */ './src/sketch-ui/index.js'),
          f = l.createDialog,
          p = l.openPanel,
          d = n(/*! ./sketch-ui/utils */ './src/sketch-ui/utils.js'),
          y = d.pasteBoardWrite,
          h = d.extractTokenLayersByPattern,
          v = d.convertLayersToTokenData,
          m = d.writeToFile,
          g = 'scss'
        e.default = function(t) {
          var e = r.fromNative(t.document).getLayersNamed(c)[0],
            n = new RegExp(''.concat(s(i)))
          if (e.layers.length) {
            var a = h(e, n)
            log(a)
            var l = new u(v(a))
            l.setOutputFormat = g
            var d = l.output()
            f({
              title: 'DesignTokens2Code',
              message: d,
              buttons: [
                {
                  text: 'Copy',
                  action: function() {
                    y({ data: d, message: 'Copied' }, t)
                  },
                },
                {
                  text: 'Save as',
                  action: function() {
                    p(function(t) {
                      m(''.concat(t, '/color.').concat(g), ''.concat(d))
                    })
                  },
                },
                { text: 'Close' },
              ],
            })
          } else o.message('Not found')
        }
      },
    './src/sketch-ui/index.js':
      /*!********************************!*\
  !*** ./src/sketch-ui/index.js ***!
  \********************************/
      /*! no static exports found */ function(t, e) {
        var n = this
        ;(t.exports.createDialog = function(t) {
          var e = t.title,
            n = t.message,
            r = t.buttons
          if (void 0 === e || void 0 === n)
            throw new Error('"title" or "message" is no arguments.')
          var o = NSAlert.alloc().init()
          if (
            ((o.messageText = e),
            (o.informativeText = n),
            void 0 !== r && !Array.isArray(r))
          )
            throw new TypeError('"buttons" must be Array.')
          r.length > 0 &&
            r.forEach(function(t) {
              o.addButtonWithTitle(t.text)
            })
          var a = Number(o.runModal()) - 1e3
          r[a].action && 'function' == typeof r[a].action && r[a].action()
        }),
          (t.exports.openPanel = function(t) {
            var e = NSOpenPanel.openPanel()
            if (
              ((e.canChooseDirectories = !0),
              (e.canCreateDirectories = !0),
              (e.allowsMultipleSelection = !1),
              e.runModal() === NSFileHandlingPanelOKButton)
            ) {
              var r = e.URL().path(),
                o = NSString.stringWithFormat('%@', r)
              0 === o.indexOf('file://') && (o = o.substring(7)), t.bind(n, o)()
            }
          })
      },
    './src/sketch-ui/utils.js':
      /*!********************************!*\
  !*** ./src/sketch-ui/utils.js ***!
  \********************************/
      /*! no static exports found */ function(t, e, n) {
        var r = n(/*! sketch/dom */ 'sketch/dom'),
          o = [''.concat(r.Types.ShapePath)]
        ;(t.exports.pasteBoardWrite = function(t, e) {
          var n = t.data,
            r = t.message,
            o = void 0 === r ? 'Copied' : r
          if (void 0 === n) throw new Error('"data" is not exist')
          if ('Document' === e.document.type)
            throw new TypeError('"context" must be Sketch/dom')
          var a = NSPasteboard.generalPasteboard()
          a.clearContents(), a.writeObjects([n]), e.document.showMessage(o)
        }),
          (t.exports.extractTokenLayersByPattern = function(t, e) {
            var n = []
            return (
              (function t(r) {
                r.layers && r.layers.length && r.layers.forEach(t),
                  e.test(r.name) &&
                    o.some(function(t) {
                      return t === r.type
                    }) &&
                    r.style.fills &&
                    r.style.fills.length &&
                    n.push(r)
              })(t),
              n
            )
          }),
          (t.exports.convertLayersToTokenData = function(t) {
            return t.map(function(t) {
              return {
                type: 'color',
                name: t.name,
                value: t.style.fills[0].color,
              }
            })
          }),
          (t.exports.writeToFile = function(t, e) {
            return NSString.stringWithFormat('%@', e).writeToFile_atomically(
              t,
              !0
            )
          })
      },
    './src/utils.js':
      /*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
      /*! no static exports found */ function(t, e) {
        t.exports.escapeRegExp = function(t) {
          return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        }
      },
    sketch:
      /*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
      /*! no static exports found */ function(t, e) {
        t.exports = require('sketch')
      },
    'sketch/dom':
      /*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
      /*! no static exports found */ function(t, e) {
        t.exports = require('sketch/dom')
      },
  })
  'default' === t && 'function' == typeof n ? n(e) : n[t](e)
}
that.onRun = __skpm_run.bind(this, 'default')
