const util = require('./tool');
const fs = require('fs');

const dataSet = [
  { type: 'title', text: '## Headers H1-H6'},
  { type: 'h1', text: '# H1 Header'},
  { type: 'h2', text: '## H2 Header'},
  { type: 'h3', text: '### H3 Header'},
  { type: 'h4', text: '#### H4 Header'},
  { type: 'h5', text: '##### H5 Header'},
  { type: 'h6', text: '###### H6 Header'},
  { type: 'title', text: '## Lists Ordered, Unordered sub-list, Unordered'},
  { type: 'list', text: '\n1. One\n2. Two\n3. Three\n4. Four\n5. Five\n'},
  { type: 'list', text: '\n1. One\n  * Two\n4. Three\n'},
  { type: 'list', text: '\n* Five\n* Four\n* Three\n* Two\n* One\n'},
  { type: 'title', text: '## Links'},
  { type: 'link', link: { text: 'Link One Google', url: 'google.com'} },
  { type: 'link', link: { text: 'Link Two Yahoo', url: 'yahoo.com'} },
  { type: 'link', link: { text: 'Link Three Reddit', url: 'reddit.com'} },
  { type: 'title', text: '## Code Blocks'},
  { type: 'code_js', code: 'js\n// js\nvar answer = 6 * 7;\nconsole.log(answer);\n'},
  { type: 'code_css', code: 'css\n/* css */\nh2 {\n  font-family: sans-serif;\n  color: #000;\n}\n'},
  { type: 'code_md', code: 'md\n<!-- md -->\n# H3 Title\n\nThis is a code block filler text number Three.\n'},
];

fs.writeFile("./temp/readme.md", util.builder(dataSet), function(err) {
  if(err) {
      return console.log(err);
  } else {
      console.log("Markdown was created!");
  }
});
