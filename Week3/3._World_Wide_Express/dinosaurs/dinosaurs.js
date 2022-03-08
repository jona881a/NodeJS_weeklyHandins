const { dinosaurs } = require("./dinosaurs.json");

const people = {
  first: "Jonas",
  second: "Oliver"
}

const {first, third, second} = people;
/*
console.log(first,third,second);

console.log(amountofCoolDinosaurs());
console.log(dinosaurs);
*/
function amountofCoolDinosaurs() {
  return dinosaurs.length;
}

module.exports = {
  calculateAmountOfCoolDinosaurs: amountofCoolDinosaurs
}