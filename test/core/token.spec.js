/* global describe:false, it:false, context:false */
const { assert } = require('chai')

const Token = require('../../src/core/token')
/* eslint-disable no-unused-vars */
describe('Token Class:', () => {
  describe('#validate()', () => {
    context('when luck "type" property', () => {
      it('Should throw ReferenceError', () => {
        assert.throws(
          () => {
            const newToken = new Token({
              format: 'scss',
              name: 'token-name',
              value: '#fff',
            })
          },
          ReferenceError,
          /Data must have type property/
        )
      })
    })

    context('when prop type is not "string"', () => {
      it('Should throw TypeError', () => {
        assert.throws(() => {
          const newToken = new Token({
            type: 87,
            format: 'scss',
            name: 'token-name',
            value: '#fff',
          })
        }, TypeError)
      })
    })
  })

  // TODO:
  describe('#output()', () => {
    context('when output tokens with "scss" format', () => {
      it('Should output code is scss format', () => {
        assert.isOk('everything is ok')
      })
    })
  })
})
/* eslint-enable no-unused-vars */
