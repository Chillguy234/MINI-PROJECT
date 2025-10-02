const express = require("express");
const path = require("path");
const converters = require("./group6fomula.js");

const app = express();
const PORT = 3000;

const cors = require("cors");
app.use(cors());

// serve static frontend files (HTML, CSS, JS, images) from "group6" folder
app.use(express.static(path.join(__dirname, "group6/frontend")));

console.log("Registration Number: our group 6");
console.log("Check converters object:", converters);
console.log("Available types:", Object.keys(converters));

app.get("/convert", (req, res) => {
  const { value, type } = req.query;

  if (!value || !type) {
    return res.status(400).json({ error: "Please provide value and type" });
  }

  const numValue = parseFloat(value);
  if (isNaN(numValue)) {
    return res.status(400).json({ error: "Value must be a number" });
  }

  const converterFn = converters[type];
  if (!converterFn) {
    return res.status(400).json({ error: "Invalid conversion type" });
  }

  const result = converterFn(numValue);
  res.json({
    input: numValue,
    conversion: type,
    result,
  });
});

// Home test
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "group6", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
