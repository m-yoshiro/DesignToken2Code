/* global describe:false, it:false, context:false */
const { assert } = require('chai')
const Color = require('../../src/core/color')

/* eslint-disable no-unused-vars */
describe('Color', () => {
  describe('#toHEX()', () => {
    context('when color data is #fff', () => {
      const TestColor = new Color('#fff')

      it('Should return string', () => {
        assert.typeOf(TestColor.toHEX(), 'string', 'output is string')
      })
      it('Should output hex color', () => {
        assert.equal(TestColor.toHEX(), 'fff', 'must be equal')
      })
    })

    context('when color data is #000000', () => {
      const TestColor = new Color('#000000')

      it('Should return string', () => {
        assert.typeOf(TestColor.toHEX(), 'string', 'output is string')
      })
      it('Should output hex color', () => {
        assert.equal(TestColor.toHEX(), '000000', 'must be equal')
      })
    })

    context('when color data has alpha', () => {
      const TestColor = new Color('#000000ff')

      it('Should return string', () => {
        assert.typeOf(TestColor.toHEX(), 'string', 'output is string')
      })
      it('Should output hex color', () => {
        assert.equal(TestColor.toHEX(), '000000', 'must be equal')
      })
      it('Should not has alpha', () => {
        assert.notEqual(TestColor.toHEX(), '000000ff', 'must not has alpha')
      })
    })
  })
})
/* eslint-enable no-unused-vars */
