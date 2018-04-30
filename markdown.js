const util = require('./src/tool');
const fs = require('fs');

const dataset = [
  { type: 'h1', value: 'Hello World'}
];

let markdown = [];

const builder = function(data) {
  data.forEach(element => {
    const { type, value } = element;

    if (type == "h1") {
      markdown += `# ${value} `;
    }
  });
  console.log('My Markdown \r\n', markdown);
  return markdown
};

builder(dataset)
