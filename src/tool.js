// Dynamically generates a form based on input array objects
module.exports.formGenerator = (inputs = []) => {
  // Begin the form
  let html = '<form method="POST">';

  // Validates that the incoming argument is an array
  if (inputs instanceof Array === false) {
    return '<p>Error, argument not in array format</p>';
  }

  // Loop through each input item
  inputs.forEach((inputItem) => {
    const {
      id,
      label,
      type,
      name,
    } = inputItem;
    const idAttribute = id == null ? '' : `id="${id}"`;
    const typeAttribute = type == null ? '' : `type="${type}"`;
    const forAttribute = name == null ? '' : `for="${name}"`;
    const nameAttribute = name == null ? '' : `name="${name}"`;
    let inputHTML = '';

    // Surround each input with a p tag
    html += '<p>';

    // Makes a regular input type field
    if (type === 'text' || type === 'email' || type === 'number') {
      inputHTML = `<input ${typeAttribute} ${idAttribute} ${nameAttribute}/>`;
    }

    // Makes a button input
    if (type === 'submit') {
      inputHTML = `<button ${typeAttribute} ${idAttribute} />Submit</button>`;
    }

    // Wraps input in label, then adds to the HTML
    if (label != null) {
      html += `<label ${forAttribute}>${label}: ${inputHTML}</label></p>`;
    } else {
      html += `${inputHTML}</p>`;
    }
  });
  html += '</form>';
  return html;
};
