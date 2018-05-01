const util = require('./src/tool');
const fs = require('fs');

const dataset = [
  { type: 'title', value: 'Headers H1-H6'},
  { type: 'h1', value: 'H1 Header'},
  { type: 'h2', value: 'H2 Header'},
  { type: 'h3', value: 'H3 Header'},
  { type: 'h4', value: 'H4 Header'},
  { type: 'h5', value: 'H5 Header'},
  { type: 'h6', value: 'H6 Header'},
  { type: 'title', value: 'Lists Ordered, Unordered sub-list, Unordered'},
  { type: 'list', text: '\n1. One\n2. Two\n3. Three\n4. Four\n5. Five\n'},
  { type: 'list', text: '\n1. One\n  * Two\n4. Three\n'},
  { type: 'list', text: '\n* Five\n* Four\n* Three\n* Two\n* One\n'},
  { type: 'title', value: 'Links'},
  { type: 'link', link: { text: 'Link One Google', url: 'google.com'} },
  { type: 'link', link: { text: 'Link Two Yahoo', url: 'yahoo.com'} },
  { type: 'link', link: { text: 'Link Three Reddit', url: 'reddit.com'} },
  { type: 'title', value: 'Code Blocks'},
  { type: 'code', code: '\n<h1>H1 Title</h1>\n<p>This is a code block filler text.</p>\n'},
  { type: 'code', code: '\n<h2>H2 Title</h2>\n<p>This is a code block filler text number two.</p>\n'},
  { type: 'code', code: '\n<h3>H3 Title</h3>\n<p>This is a code block filler text number Three.</p>\n'},
];

let markdown = [];

const builder = function(data) {
  data.forEach(element => {
    const { type, value, text, link, code } = element;
    const nl = '\n'; // New Line

    if (type == "title") {
      markdown += nl + `## ${value} ` + nl;
    }
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
      markdown += nl + '```js' + `${code}` + '```' + nl;
    }
  });
  util.log('My Markdown \n', markdown);
  return markdown
};

fs.writeFile("./temp/readme.md", builder(dataset), function(err) {
  if(err) {
      return util.log(err);
  }
  util.log("Markdown was created!");
});
