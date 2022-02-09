const express = require("express");
const app = express();
const uri = "/api/beers/";
const testData = [
  {
    id: 1,
    brand: "Carlsberg",
  },
  {
    id: 2,
    brand: "Turborg",
  },
  {
    id: 3,
    brand: "Anarkist",
  },
];

app.use(express.json());

/*GET*/
app.get("/beers", (req, res) => {
  res.send(testData);
});
/*GET/:ID*/
app.get("/beers/:id", (req, res) => {
  const requestId = parseInt(req.params.id);
  let foundBeer;
  testData.forEach((beer) => {
    if (beer.id === requestId) {
      foundBeer = beer;
    } else {
      res.send(`beer with id of:${requestId} could not be found`);
    }
  });
  res.send(foundBeer);
});

/*POST*/
app.post("/beers", (req, res) => {
  testData.push(req.body);
  res.send(req.body);
});

/*PUT*/
app.put("/beers/:id", (req, res) => {
  const requestId = parseInt(req.params.id);
  const body = req.body;

  indexOfBeer = testData.findIndex((beer) => beer.id === requestId);

  if (indexOfBeer !== -1) {
    testData[indexOfBeer] = {
      id: requestId,
      brand: body.brand,
    };

    res.send(testData[indexOfBeer]);
  } else {
    res.send(`beer with id of:${requestId} could not be found`);
  }
});

/*PATCH*/ //NOT DONE, CANNOT ONLY TAKE ONE VALUE AND CHANGE
app.patch("/beers/:id", (req, res) => {
  const requestId = parseInt(req.params.id);
  const body = req.body;

  indexOfBeer = testData.findIndex((beer) => beer.id === requestId);

  if (indexOfBeer !== -1) {
    testData[indexOfBeer] = {
      id: requestId,
      brand: body.brand,
    };

    res.send(testData[indexOfBeer]);
  } else {
    res.send(`beer with id of:${requestId} could not be found`);
  }
});

/*DELETE*/
app.delete("/beers/:id", (req, res) => {
  const requestId = parseInt(req.params.id);
  testData.forEach((beer) => {
    if (beer.id === requestId) {
      console.log(beer);
      testData.splice(testData.indexOf(beer), 1);
    }
  });
  res.send(`Beer with id: ${requestId} has succesfully been deleted`);
});

app.listen(8080);
