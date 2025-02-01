require("./config/dotenv");
require("./config/db");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from " + process.env.NODE_ENV);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
