import categories from "./_categories.js";

const contents = JSON.stringify(categories.map(cat => {
  return {
    label: cat.label,
    img: cat.img
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
