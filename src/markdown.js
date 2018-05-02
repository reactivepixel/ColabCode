const util = require('./tool');
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
  { type: 'code_js', code: '\n// js\nvar answer = 6 * 7;\nconsole.log(answer);\n'},
  { type: 'code_css', code: '\n/* css */\nh2 {\n  font-family: sans-serif;\n  color: #000;\n}\n'},
  { type: 'code_md', code: '\n<!-- md -->\n# H3 Title\n\nThis is a code block filler text number Three.\n'},
];

fs.writeFile("./temp/readme.md", util.builder(dataset), function(err) {
  if(err) {
      return console.log(err);
  } else {
      console.log("Markdown was created!");
  }
});
