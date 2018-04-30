const tool = require('./src/tool');

let formbuilder = [

  // Text Inputs
  {
    type: "text",
    id: "username",
    required: "true",
    placeholder: "username"
  },
  {
    type: "password",
    id: "password",
    required: "true",
    placeholder: "password"
  },

  // Select Inputs
  {
    type: "select",
    id: "gender",
    required: "true",
    option1: "male",
    option2: "female"
  },
  {
    type: "select",
    id: "team",
    required: "false",
    option1: "red",
    option2: "blue"
  },

  //Button Inputs
  {
    type: "button",
    id: "submit",
    text: "submit"
  },
  {
    type: "button",
    id: "cancel",
    text: "cancel"
  }
];

console.log(tool.buildForm(formbuilder));
