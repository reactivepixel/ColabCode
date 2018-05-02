# Form Builder

**Form Builder** is a simple node application that generates a form based on given inputs.

## Getting Started

### Prerequisites

[Node](https://nodejs.org/en/)

### Installing

Clone Repo

```
$ git clone https://github.com/reactivepixel/ColabCode.git
```

Switch to formbuilder-BrennonDenny branch for testing

```
$ git checkout formbuilder-BrennonDenny
```

## Deployment

Locate the ColabCode Folder

```
$ cd ColabCode
```

Run on your Local Machine

```
$ node app
```

## Functionality

Edit formbuilder in [App.js](/app.js)

```javascript
let formbuilder = [
  {
    //Text Inputs
    type: "text",
    id: "CUSTOM_INFO",
    required: "CUSTOM_INFO", //true or false
    placeholder: "CUSTOM_INFO"
  },
  {
  	//Select Inputs
    type: "select",
    id: "CUSTOM_INFO",
    required: "CUSTOM_INFO", //true or false
    option1: "CUSTOM_INFO" //set first option in select
    option2: "CUSTOM_INFO" //set second option in select
  },
   	//Button Input
    {
    type: "button",
    id: "CUSTOM_INFO",
    text: "CUSTOM_INFO"
  } 
]
    
```




