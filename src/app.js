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

http.createServer(function(request, response) {  
  response.writeHeader(200, {"Content-Type": "text/html"});  
  response.write(formGenerator(inputs));
  response.end();  
}).listen(8000);
