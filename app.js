const tool = require('./src/tool');

const formBuilder = [
  // Text Inputs
  {
    type: "text",
    id: "username",
    required: "true",
    placeholder: "username"
  },
  {
    type: "text",
    id: "email",
    required: "true",
    placeholder: "email"
  },

  // Select Inputs
  {
    type: "select",
    id: "gender",
    required: "true",
    //two available options
    option1: "male",
    option2: "female"
  },
  {
    type: "select",
    id: "team",
    required: "false",
    //two available options
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

console.log(tool.buildForm(formBuilder));
