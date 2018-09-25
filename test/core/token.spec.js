/* global describe:false, it:false */
const { assert } = require('chai')

const Token = require('../../src/core/token')
/* eslint-disable no-unused-vars */
describe('Token Class:', () => {
  it('Should throw Error when luck "type" property', () => {
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

  it('Should throw TypeError when prop type is not "string"', () => {
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
/* eslint-enable no-unused-vars */
