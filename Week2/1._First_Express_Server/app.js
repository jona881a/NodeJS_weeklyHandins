//import Express
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.get("/welcome", (req, res) => {
  res.send({ message: "Greetings traveller" });
});

app.post("/mirror", (req, res) => {
  res.send(req.body);
});

app.listen(8080);
