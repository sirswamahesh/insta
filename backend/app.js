require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ success: true, message: "api is working!" });
});

module.exports = app;
