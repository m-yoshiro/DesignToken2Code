/* global describe:false, it:false, context:false */
const { assert } = require('chai')
const DesignTokens = require('../../src/core/design-tokens')

const testData = [
  {
    type: 'color',
    name: 'primary',
    value: '#fff',
  },
  {
    type: 'color',
    name: 'secondary',
    value: '#22ff99',
  },
]

/* eslint-disable no-unused-vars */
describe('DesignTokens', () => {
  describe('#initTokens()', () => {
    context('when create tokens from data', () => {
      const Tokens = new DesignTokens(testData)

      it('Should #tokens must has tokens', () => {
        assert.isAbove(
          Tokens.tokens.length,
          0,
          '#tokens.length is strictly greater than 0'
        )
      })
    })
  })

  describe('#output()', () => {
    context('when create tokens from data', () => {
      const Tokens = new DesignTokens(testData)

      it('Should output must be scss variables', () => {
        assert.equal(
          Tokens.output(),
          '$primary: #fff !default;\n$secondary: #22ff99 !default;',
          '=== $token-name: #fff !default;'
        )
      })
    })
  })
})
/* eslint-enable no-unused-vars */
