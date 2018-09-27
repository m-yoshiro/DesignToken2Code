/* global describe:false, it:false, context:false */
const { assert } = require('chai')
const Token = require('../../src/core/token')

const testToken = {
  type: 'color',
  name: 'token-name',
  value: '#fff',
}

/* eslint-disable no-unused-vars */
describe('Token', () => {
  describe('#validate()', () => {
    context('when luck "type" property', () => {
      it('Should throw ReferenceError', () => {
        assert.throws(
          () => {
            const newToken = new Token({
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
            name: 'token-name',
            value: '#fff',
          })
        }, TypeError)
      })
    })
  })

  // TODO:
  describe('#toScss()', () => {
    context('when output "scss" format from token ', () => {
      it('Should return scss variable', () => {
        const newToken = new Token(testToken)

        assert.equal(
          newToken.toScss(),
          '$token-name: #fff !default;',
          'not equle'
        )
      })
    })
  })
})
/* eslint-enable no-unused-vars */
