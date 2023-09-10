const { JSDOM } = require("jsdom");
const { parseNode } = require("./utils");
function htmlToObject(html) {
  const dom = new JSDOM(html);
  const body = dom.window.document.body;
  return parseNode(body.firstChild);
}

module.exports = { htmlToObject };
