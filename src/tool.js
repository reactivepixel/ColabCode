module.exports.builder = (markdownInput) => {
  let markdown = [];
  try {
    markdownInput.forEach(inputData => {
      if (inputData.type) {
        switch (inputData.type) {
          case "title":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
          case "list":
            // All Text Inputs
            markdown += `\n${inputData.text}\n`;
            break;

          case "link":
            // All Link Inputs
            markdown += `\n[${inputData.link.text}](${inputData.link.url})\n`;
            break;

          case "code_js":
          case "code_css":
          case "code_md":
            // All Code Inputs
            markdown += '\n```' + `${inputData.code}` + '```\n';
            break;

          default:
            markdown += ``;
        }
      }
    });
  } catch (error) {
    console.log("Error: " + error);
  }
  console.log('My Markdown \n', markdown);
  return markdown
};
