/* global describe:false, it:false */
const { assert } = require('chai')

// Test data
const testData = [
  {
    type: 'color',
    name: 'token-name',
    value: '#fff',
  },
  {
    type: 'color',
    name: 'token-name',
    value: '#fff',
  },
]

describe('Test', () => {
  it('Should return data', () => {
    assert.typeOf(testData, 'array')
  })
})
