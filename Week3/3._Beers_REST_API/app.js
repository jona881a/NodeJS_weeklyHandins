const express = require("express");
const app = express();
app.use(express.json());

const beers = [
  { id: 1, type: "Pilsner" },
  { id: 2, brand: "Carlsberg", alcoholPercentage: 4.6 },
  { id: 3, expirationDate: new Date() },
];

let CURRENT_ID = 3;

app.get("/beers", (req, res) => {
  res.send({ data: beers });
});

app.get("/beers/:id", (req, res) => {
  const beer = beers.find((beer) => beer.id === Number(req.params.id));

  beer
    ? res.status(200).send({ data: beer })
    : res.status(404).send(`Beer with the id: ${req.params.id} were not found`);
});

app.post("/beers", (req, res) => {
  const beerToCreate = req.body;
  beerToCreate.id = ++CURRENT_ID;
  beers.push(beerToCreate);
  res.send({ data: beerToCreate });
});

/*
  beers.indexof({})
  beers.findIndex(predicate)
*/

app.patch("/beers/:id", (req, res) => {
  const foundBeerindex = beers.findIndex(
    (beer) => beer.id === Number(req.params.id)
  );

  if (foundBeerindex !== -1) {
    const foundBeer = beers[foundBeerindex];
    const beerToUpdateWith = req.body;
    const updatedBeer = { ...foundBeer, ...beerToUpdateWith, id: foundBeer.id };
    beers[foundBeerindex] = updatedBeer;

    res.send({ data: updatedBeer });
  } else {
    res.status(404).send({});
  }
});

app.delete("/beers/:id", (req, res) => {
  const foundBeerIndex = beers.findIndex(
    (beer) => beer.id === Number(req.params.id)
  );

  if (foundBeerIndex !== -1) {
    res.send(beers.splice(foundBeerIndex, 1));
  } else {
    res.status(404).send({});
  }
});

app.listen(8080, () => {
  console.log("Server is running on port", 8080);
});
