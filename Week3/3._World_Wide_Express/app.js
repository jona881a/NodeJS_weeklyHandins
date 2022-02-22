const express = require("express");
const app = express();
//app.using(json);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my website ${true}</h1>`);
});

app.get("/bored", (req, res) => {
  res.sendFile(`${__dirname}/public/activities.html`);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
