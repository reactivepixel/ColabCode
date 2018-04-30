const { formBuilder } = require('./src/tool')
const inputs = [
  {
    type: 'text' 
  }, {
    type: 'select'
  }, {
    type: 'number'
  }, {
    type: 'radio'
  }, {
    type: 'button'
  }
]

if (typeof formBuilder(inputs) === 'string') {
  console.log('true')
}
else {
  console.log('false')
}