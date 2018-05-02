const http = require('http')
const { formGenerator } = require('./tool.js')

// Initialize form here
const formInputs = [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
  }, {
    label: 'Email',
    type: 'email',
    name: 'email',
  }, {
    label: 'Favorite Number',
    type: 'number',
    name: 'favorite_number',
  }, {
    type: 'submit'
  }
]

// Creates a server, and runs it on port 8000
http.createServer(function(request, response) {  
  response.writeHeader(200, {"Content-Type": "text/html"});  
  response.write(formGenerator(formInputs));
  response.end();  
}).listen(8000);