const express = require("express");
const app = express();
const uri = "/api/beers";
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
app.get(uri, (req, res) => {
  res.send(testData);
});

/*GET/:ID*/
app.get(`${uri}/:id`, (req, res) => {
  const requestId = parseInt(req.params.id);
  console.log(requestId);
  let foundBeer;
  testData.forEach((beer) => {
    if (beer.id === requestId) {
      foundBeer = beer;
    }
  });
  if (foundBeer !== null) {
    res.send(foundBeer);
  } else {
    res.send(`beer with id of: ${requestId} could not be found`);
  }
});

/*POST*/
app.post(uri, (req, res) => {
  testData.push(req.body);
  res.send(req.body);
});

/*PUT*/
app.put(`${uri}/:id`, (req, res) => {
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
app.patch(`${uri}/:id`, (req, res) => {
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
app.delete(`${uri}/:id`, (req, res) => {
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
