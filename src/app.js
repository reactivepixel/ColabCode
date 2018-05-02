const http = require('http')
const { formGenerator } = require('./tool.js')

// Initialize form here
const formInputs = [
  {
    id: 'username',
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
    type: 'submit'
  }
]

// Creates a server, and runs it on port 8000
http.createServer(function(request, response) {  
  response.writeHeader(200, {"Content-Type": "text/html"});  
  response.write(formGenerator(formInputs));
  response.end();  
}).listen(8000);