# Matt Pezzente - Form Generator

This simple Node application generates a form based on given input types. To render a form, simply add on to the "formInputs" variable inside of app.js.

```
app.js

const http = require('http');
const { formGenerator } = require('./tool.js');

// Initialize form here
const formInputs = [
  {
    id: 'user_name',
    label: 'Name',
    type: 'text',
    name: 'username',
  }, {
    id: 'user_email',
    label: 'Email',
    type: 'email',
    name: 'email',
  }, {
    id: 'user_number',
    label: 'Favorite Number',
    type: 'number',
    name: 'favorite_number',
  }, {
    type: 'submit',
  },
];
```

### Above and Beyond

Going beyond just the simple logging of HTML inputs, I was able to include a way for node to spin up a local server, that will render a page with the HTML built out.

```
app.js

// Creates a server, and runs it on port 8000
http.createServer((request, response) => {
  response.writeHeader(200, { 'Content-Type': 'text/html' });
  response.write(formGenerator(formInputs));
  response.end();
}).listen(8000);
```

### Running the Application

#### Prerequisites

Before running this application, make sure Node and Git are installed on your computer:

[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
[Node](https://nodejs.org/en/)

#### Installing

Clone the repo by entering the following command:
```
git clone https://github.com/reactivepixel/ColabCode.git
```

Then navigate to the folder:
```
cd ColabCode
```

Next, switch to the this branch using git:
```
git checkout form-generator
```

And finally, to start the server for the application, run:
```
npm start
```

#### NOTE: 
Executing this command will start a server on your local computer, which can be accessed by typing "localhost:8000" into your browser window.

If working correctly, it should appear as follows:
```
> deployment-assignment-1@1.0.0 start /some/file/url
> node src/app
```

### Testing


#### Airbnb Style Guide Linting Test

To run a check for code conformity to the Airbnb specifications, enter the following npm command into your command line:

```
npm run lint
```

On success, you should see something similar to this in your command line:

```
  AirBnB Style Guide Adhearance - eslint
    ✓ should have no errors in src/app.js
    ✓ should have no errors in src/tool.js
```

#### Form Generator Test

The testing runs three different tests using Node's built-in assert library, to make sure the proper output is being produced.

* Test the form generator with its own default value
* Test with correct format
* Test with bad format

To run the test do:
```
npm test
```

If successful, the tests should just ouput:
```
> deployment-assignment-1@1.0.0 test /some/file/url
> node tests/test
```