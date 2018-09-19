// Test data
const testTokens = [
  {
    type: 'color',
    format: 'scss',
    name: 'token-name',
    value: '#fff',
  },
  {
    type: 'color',
    format: 'css',
    name: 'token-name',
    value: '#fff',
  },
]

class DesignTokens {
  constructor(tokens) {
    this.tokens = tokens
  }
}

export default new DesignTokens(testTokens)
