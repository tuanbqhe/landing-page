const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 80;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
