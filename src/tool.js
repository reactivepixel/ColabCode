exports.buildForm = (inputs) => {
  let copy = '';
  try {
    inputs.forEach((tool) => {
      if (tool.type) {
        switch (tool.type) {
          case 'text':
          // Save all Text Input for Copy
            copy += `<input type="${tool.type}" id="${tool.id}" placeholder="${tool.placeholder}"required="${tool.required}"/>`;
            break;

          // Save all Select Inputs to Copy
          case 'select':
            copy += `<select id="${tool.id}" required="${tool.required}"><option value="${tool.option1}">${tool.option1}</option><option value="${tool.option2}">${tool.option2}</option></select>`;
            break;

          // Save all Button Inputs to Copy
          case 'button':
            copy += `<button type="${tool.id}" id="${tool.id}">${tool.text}</button>`;
            break;

          default:
            copy += '';
        }
      }
    });
  } catch (e) {
    console.error(`Error: ${e}`);
  }
  return `<form>${copy}</form>`;
};
