// Good JavaScript loops

//Why don't we like for loops in JavaScript
//With the right loop method, we have immutable data
//it isn't a functional approach

const smartPhones = [
  { brand: "Samsung", price: 4500 },
  { brand: "Iphone", price: 7200 },
  { brand: "Sony Experia", price: 3800 },
];

/*
const discountedPhones = function (smartPhone) {
  smartPhone.price -= 500;
};

smartPhones.forEach((smartPhone) => {
  discountedPhones(smartPhone);
});
*/

const discountedPhones = smartPhones.map((smartPhone) => {
  smartPhone.price -= 500;
  return smartPhone;
});

console.log(discountedPhones);

const expensivePhones = smartPhones.filter(
  (smartPhone) => smartPhone.price <= 4000
);

console.log(expensivePhones);
