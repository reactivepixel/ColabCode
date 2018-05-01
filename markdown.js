const util = require('./src/tool');
const fs = require('fs');

const dataset = [
  { type: 'h1', value: 'H1 Hello'},
  { type: 'h2', value: 'H2 Hello'},
  { type: 'h3', value: 'H3 Hello'},
  { type: 'h4', value: 'H4 Hello'},
  { type: 'h5', value: 'H5 Hello'},
  { type: 'h6', value: 'H6 Hello'},
  { type: 'list', text: '1. One 2. Two 3. Three 4. Four 5. Five'},
  { type: 'list', text: '* Five * Four * Three * Two * One'},
  { type: 'link', link: { text: 'Link One Google', url: 'google.com'} },
  { type: 'link', link: { text: 'Link Two Yahoo', url: 'yahoo.com'} },
  { type: 'link', link: { text: 'Link Three Reddit', url: 'reddit.com'} },
];

let markdown = [];

const builder = function(data) {
  data.forEach(element => {
    const { type, value, text, link } = element;

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
    if (type == "list") {
      markdown += `${text} `;
    }
    if (type == "link") {
      markdown += `[${link.text}](${link.url})`;
    }
    if (type == "link") {
      markdown += `[${link.text}](${link.url})`;
    }
    if (type == "link") {
      markdown += `[${link.text}](${link.url})`;
    }
  });
  util.log('My Markdown \r\n', markdown);
  return markdown
};

builder(dataset)