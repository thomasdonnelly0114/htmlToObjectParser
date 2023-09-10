function parseStyles(styleString) {
  const styles = {};
  if (styleString) {
    styleString.split(";").forEach((style) => {
      const [property, value] = style.split(":").map((s) => s.trim());
      if (property && value) {
        const propertyValue = property.replace(/-([a-z])/g, (match, letter) =>
          letter.toUpperCase()
        );
        styles[propertyValue] = value;
      }
    });
    return styles;
  }
}

function parseNode(node) {
  const result = {
    tag: node.tagName.toLowerCase(),
    style: parseStyles(node.getAttribute("style") || ""),
  };

  if (node.id) {
    result.id = node.id;
  }

  const children = [];
  node.childNodes.forEach((child) => {
    if (child.nodeType === node.ELEMENT_NODE) {
      children.push(parseNode(child));
    } else if (
      child.nodeType === node.TEXT_NODE &&
      child.textContent.trim() !== ""
    ) {
      result.text = child.textContent.trim();
    }
  });

  if (children.length > 0) {
    result.children = children;
  }

  if (node.classList.length > 0) {
    result.class = Array.from(node.classList);
  }

  return result;
}

module.exports = { parseNode };
