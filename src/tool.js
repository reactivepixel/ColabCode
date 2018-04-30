module.exports.formBuilder = (inputs) => {
  let html = ''

  for (let i = 0; i < inputs.length; i++) {
    switch(inputs[i].type) {
      case 'text':
        html += ('<input type="text"></input>')
        break;
      case 'select':
        html += ('<input type="select"></input>')
        break;
      case 'number':
        html += ('<input type="number"></input>')
        break;
      case 'radio':
        html += ('<input type="radio"></input>')
        break;
      case 'email':
        html += ('<input type="email"></input>')
        break;
      case 'button':
        html += ('<button type="button">Click</button>')
        break;
    }
  }

  return html
}
