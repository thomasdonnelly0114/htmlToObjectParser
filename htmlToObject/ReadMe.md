# HTML to Object Parser

This is a JavaScript library that converts HTML into a structured JavaScript object.

## Usage

You can use the library in your Node.js code as follows:

```javascript
const { htmlToObject } = require('htmlToObject');

const html = `
  <div style="background-color: yellow; font-size: 14px" id="first-div">
    Hello, friends
    <p class="para" style="font-family: monospace; font-size: 11px">Lorem ipsum dolor sit</p>
    <footer style="width: auto; height: 100px; color: blue">
      <span>This is the end</span>
    </footer>
  </div>
`;

const result = htmlToObject(html);

console.log(result);
```
## Exmaple Output

The code will produce the following output for the provided HTML:

```json
{
  "tag": "div",
  "text": "Hello, friends",
  "style": {
    "background-color": "yellow",
    "font-size": "14px"
  },
  "id": "first-div",
  "children": [
    {
      "tag": "p",
      "text": "Lorem ipsum dolor sit",
      "class": ["para"],
      "style": {
        "font-family": "monospace",
        "font-size": "11px"
      }
    },
    {
      "tag": "footer",
      "style": {
        "width": "auto",
        "height": "100px",
        "color": "blue"
      },
      "children": [{ "tag": "span", "text": "This is the end" }]
    }
  ]
}
```