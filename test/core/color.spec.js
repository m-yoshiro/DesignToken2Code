/* global describe:false, it:false, context:false */
const { assert } = require('chai')
const Color = require('../../src/core/color')

/* eslint-disable no-unused-vars */
describe('Color', () => {
  describe('#toHEX()', () => {
    context('when color data is #fff', () => {
      it('Should output hex color', () => {
        assert.equal(
          () => {
            const TestColor = new Color('#fff')
            return TestColor.toHEX()
          },
          '#fff',
          'must equal'
        )
      })
    })
  })
})
/* eslint-enable no-unused-vars */
