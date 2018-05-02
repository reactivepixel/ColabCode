module.exports.builder = (markdownInput) => {

  let markdown = [];

  markdownInput.forEach(inputData => {
    const { type, text, link, code } = inputData;
    const nl = '\n'; // New Line

    if (type === "title") {
      markdown += nl + `## ${text} ` + nl;
    }
    if (type === "h1") {
      markdown += nl + `# ${text} ` + nl;
    }
    if (type === "h2") {
      markdown += nl + `## ${text} ` + nl;
    }
    if (type === "h3") {
      markdown += nl + `### ${text} ` + nl;
    }
    if (type === "h4") {
      markdown += nl + `#### ${text} ` + nl;
    }
    if (type === "h5") {
      markdown += nl + `##### ${text} ` + nl;
    }
    if (type === "h6") {
      markdown += nl + `###### ${text} ` + nl;
    }
    if (type === "list") {
      markdown += nl + `${text} ` + nl;
    }
    if (type === "link") {
      markdown += nl + `[${link.text}](${link.url})` + nl;
    }
    if (type === "code_js") {
      markdown += nl + '```js' + `${code}` + '```' + nl;
    }
    if (type === "code_css") {
      markdown += nl + '```css' + `${code}` + '```' + nl;
    }
    if (type === "code_md") {
      markdown += nl + '```md' + `${code}` + '```' + nl;
    }
  });
  console.log('My Markdown \n', markdown);
  return markdown
};
