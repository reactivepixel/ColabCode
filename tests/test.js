const assert = require('assert')
const { formGenerator } = require('../src/tool.js')

// Test variables for the correct input formats
const testCorrectFormat = [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
  }, {
    label: 'Email',
    type: 'email',
    name: 'email',
  }, {
    label: 'Favorite Number',
    type: 'number',
    name: 'favorite_number',
  }, {
    type: 'submit'
  }
]

// Test variables for bad input formats
const testBadFormat = {
  test1: 'test',
  test2: 0,
  test3: false,
  test4: ['testVal1', 'testVal2'],
  test5: {testVal1: 'test1', testVal2: 'test2'}
}

// Assertions to test that the form generator function returns proper values 
assert(typeof formGenerator() === 'string', 'Error, return type invalid for default input argument.')
assert(typeof formGenerator(testCorrectFormat) === 'string', 'Error, return type invalid for correct input.')
assert(typeof formGenerator(testBadFormat) === 'string', 'Error, return type invalid for bad input object.')