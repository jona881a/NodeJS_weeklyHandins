const router = require("express").Router();
const { calculateAmountOfCoolDinosaurs } = require("../dinosaurs/dinosaurs.js");

router.get("/calculatecooldinosaurs", (req, res) => {
  res.send({ data: calculateAmountOfCoolDinosaurs() });
});

router.get("/coolestdinosaur", (req, res) => {
  if (req.query.cool === "yes") {
    return res.send({ dinosaur: "Mosasaurus" });
  } else {
    res.send({ dinosaur: "T.Rex" });
  }
});

module.exports = {
  router,
};
