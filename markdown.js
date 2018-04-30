const util = require('./src/tool');
const fs = require('fs');

const dataset = [
  { type: 'h1', value: 'H1 Hello'},
  { type: 'h2', value: 'H2 Hello'},
  { type: 'h3', value: 'H3 Hello'},
  { type: 'h4', value: 'H4 Hello'},
  { type: 'h5', value: 'H5 Hello'},
  { type: 'h6', value: 'H6 Hello'},
];

let markdown = [];

const builder = function(data) {
  data.forEach(element => {
    const { type, value } = element;

    if (type == "h1") {
      markdown += `# ${value} `;
    }
    if (type == "h2") {
      markdown += `## ${value} `;
    }
    if (type == "h3") {
      markdown += `### ${value} `;
    }
    if (type == "h4") {
      markdown += `#### ${value} `;
    }
    if (type == "h5") {
      markdown += `##### ${value} `;
    }
    if (type == "h6") {
      markdown += `###### ${value} `;
    }
  });
  util.log('My Markdown \r\n', markdown);
  return markdown
};

builder(dataset)
