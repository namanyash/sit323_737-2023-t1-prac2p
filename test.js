const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date().toLocaleString({
    timeZone: "Australia/Sydney",
  });
  console.log("Reqest time: " + d);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
