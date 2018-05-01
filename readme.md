# Matt Pezzente - Form Generator

This simple Node application generates a form based on given input types. To render a form, simply add on to the "formInputs" variable inside of app.js.

```
app.js

const http = require('http')
const { formGenerator } = require('./tool.js')

const formInputs = [
  {
    type: 'text' 
  }, {
    type: 'email'
  }, {
    type: 'number'
  }, {
    type: 'submit'
  }
]
```

### Above and Beyond

Going beyond just the simple logging of HTML inputs, I was able to include a way for node to spin up a local server, that will render a page with the HTML built out.

```
app.js

http.createServer(function(request, response) {  
  response.writeHeader(200, {"Content-Type": "text/html"});  
  response.write(formGenerator(inputs));
  response.end();  
}).listen(8000);
```

### Running the Application

#### Prerequisites

Before running this application, make sure Node and Git are installed on your computer:

[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
[Node](https://nodejs.org/en/)

#### Installing

Clone the repo by entering the following command
```
git clone https://github.com/reactivepixel/ColabCode.git
```

Then navigate to the folder
```
cd ColabCode
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