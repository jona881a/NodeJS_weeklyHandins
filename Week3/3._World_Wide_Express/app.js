const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.json());

app.use(express.static("public"));

const { calculateAmountOfCoolDinosaurs } = require("./dinosaurs/dinosaurs.js");
//console.log(calculateAmountOfCoolDinosaurs());

const dinosaurrouter = require("./routers/dinosaurrouter.js");
app.use(dinosaurrouter.router);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/frontpage/frontpage.html`);
});

app.get("/welcome", (req, res) => {
  res.send(`<h1>Welcome to my website ${true}</h1>`);
});

app.get("/bored", (req, res) => {
  res.sendFile(`${__dirname}/public/activities.html`);
});

app.get("/proxy", async (req, res) => {
  const response = await fetch("https://google.com");
  const homepage = await response.text();
  res.send(homepage);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
