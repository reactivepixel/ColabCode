const assert = require('assert')
const { formGenerator } = require('../src/tool.js')

const testCorrectFormat = [
  {
    type: 'text'
  }, {
    type: 'email'
  }, {
    type: 'number'
  }, {
    type: 'submit'
  }
]

const testBadFormat = [
  {
    type: 'text',
    num: 0
  }, {
    bool: false
  }, {
    type: 'wrong'
  }, {
    object: {}
  }
]

assert(typeof formGenerator() === 'string', 'Error, return type invalid for default input argument.')
assert(typeof formGenerator(testCorrectFormat) === 'string', 'Error, return type invalid for correct input.')
assert(typeof formGenerator(testBadFormat) === 'string', 'Error, return type invalid for bad input object.')