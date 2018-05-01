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
  { type: 'list', text: '1. One   1. Two 4. Three'},
  { type: 'list', text: '* Five * Four * Three * Two * One'},
  { type: 'link', link: { text: 'Link One Google', url: 'google.com'} },
  { type: 'link', link: { text: 'Link Two Yahoo', url: 'yahoo.com'} },
  { type: 'link', link: { text: 'Link Three Reddit', url: 'reddit.com'} },
  { type: 'code', code: '<h1>H1 Title</h1> <p>This is a code block filler text.</p>'},
  { type: 'code', code: '<h2>H2 Title</h2> <p>This is a code block filler text number two.</p>'},
  { type: 'code', code: '<h3>H3 Title</h3> <p>This is a code block filler text number Three.</p>'},
];

let markdown = [];

const builder = function(data) {
  data.forEach(element => {
    const { type, value, text, link, code } = element;
    const nl = '\n'; // New Line

    if (type == "h1") {
      markdown += nl + `# ${value} ` + nl;
    }
    if (type == "h2") {
      markdown += nl + `## ${value} ` + nl;
    }
    if (type == "h3") {
      markdown += nl + `### ${value} ` + nl;
    }
    if (type == "h4") {
      markdown += nl + `#### ${value} ` + nl;
    }
    if (type == "h5") {
      markdown += nl + `##### ${value} ` + nl;
    }
    if (type == "h6") {
      markdown += nl + `###### ${value} ` + nl;
    }
    if (type == "list") {
      markdown += nl + `${text} ` + nl;
    }
    if (type == "link") {
      markdown += nl + `[${link.text}](${link.url})` + nl;
    }
    if (type == "code") {
      markdown += nl + '```' + `${code}` + '```' + nl;
    }
  });
  util.log('My Markdown \n', markdown);
  return markdown
};

fs.writeFile("./temp/readme.md", builder(dataset), function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("Markdown was created!");
});
