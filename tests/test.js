const assert = require('assert')
const { formGenerator } = require('../src/tool.js')

// Tests that the correct format for inputs works
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

// Tests for bad input formats
const testBadFormat = {
  test1: 'test',
  test2: 0,
  test3: false,
  test4: ['testVal1', 'testVal2'],
  test5: {testVal1: 'test1', testVal2: 'test2'}
}

// Tests that the form generator function returns proper values 
assert(typeof formGenerator() === 'string', 'Error, return type invalid for default input argument.')
assert(typeof formGenerator(testCorrectFormat) === 'string', 'Error, return type invalid for correct input.')
assert(typeof formGenerator(testBadFormat) === 'string', 'Error, return type invalid for bad input object.')