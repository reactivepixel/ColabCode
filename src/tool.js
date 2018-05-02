// Dynamically generates a form based on input array objects
module.exports.formGenerator = (inputs=[]) => {
  // Begin the form
  let html = '<form method="POST">'

  // Catches any issues with the incoming arguments
  if (!inputs instanceof Array) {
    return '<p>Error, argument not in array format</p>'
  }

  // Loop through each input item
  inputs.forEach(inputItem => {
    let {label, type, name} = inputItem
    let typeAttribute = type == null ? '' : `type="${type}"`  
    let forAttribute = name == null ? '' : `for="${name}"`  
    let nameAttribute = name == null ? '' : `name="${name}"`  
    let inputHTML = ''

    // Surround each input with a p tag
    html += '<p>'

    // Makes a regular input type field
    if ( type === 'text' || type === 'email' || type === 'number') {
      inputHTML = `<input ${typeAttribute} ${nameAttribute}/>`
    }

    // Makes a button input
    if (type === 'submit') {
      inputHTML = `<button ${typeAttribute} />Submit</button>`
    }

    // Wraps input in label, then adds to the HTML
    if (label != null) {
      html += `<label ${forAttribute}>${inputHTML}</label></p>`
    }
    // No label, simply add input field to HTML
    else {
      html += `${inputHTML}</p>`
    }
  })
  html += '</form>'
  return html
}
