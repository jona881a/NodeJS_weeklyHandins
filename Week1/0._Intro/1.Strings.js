// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

const numberOneFloat = parseFloat(numberOne);
const numberTwoFloat = parseFloat(numberTwo);

console.log(numberOne, "is a" ,typeof numberOneFloat);
console.log(numberTwo, "is a",typeof numberTwoFloat);

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const result1 = numberOneFloat + numberTwoFloat;
console.log(result1);

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherNumberOneFloat = parseFloat(anotherNumberOne);
const anotherNumberTwoFloat = parseFloat(anotherNumberTwo);

const result2 = anotherNumberOneFloat + anotherNumberTwoFloat;

console.log(result2.toPrecision(3));

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals


const sum = ((one+two+three)/3).toFixed(5);
console.log(sum);


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters[letters.indexOf("c")]);


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

String.prototype.replaceAt = function(index, char) {
    const newString = this.split(""); //This referes to the string the prototype method is used on
    newString[index] = char;
    return newString.join("");
}

console.log(fact.replaceAt(17,"J"));
// --------------------------------------