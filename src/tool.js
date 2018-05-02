exports.builder = (data) => {

  let markdown = [];

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
  console.log('My Markdown \n', markdown);
  return markdown
};
