const fs = require("fs");
const { htmlToObject } = require("./htmlToObject");

// Read the HTML file
const fileName = process.argv[2];

if (!fileName) {
  console.error("Please provide an HTML file as an argument.");
  process.exit(1);
}

try {
  const html = fs.readFileSync(fileName, "utf-8");
  const result = htmlToObject(html);
  console.log(JSON.stringify(result, null, 2));
} catch (err) {
  console.error("Error reading or parsing the HTML file:", err);
  process.exit(1);
}
