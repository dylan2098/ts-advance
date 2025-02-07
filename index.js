function log(message) {
  console.log('----------------------------------------------------------------------');
  console.log(message);
  console.log('----------------------------------------------------------------------');
}

// Arrow Functions
const sum = (x, y) => x + y;

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// Destructuring Assignment
let [fruit1, fruit2] = fruits;

log(fruit1); // Banana
log(fruit2); // Orange

// Operator
const q1 = ['Jan', 'Feb', 'Mar'];
const q2 = ['Apr', 'May', 'Jun'];
const q3 = ['Jul', 'Aug', 'Sep'];
const q4 = ['Oct', 'Nov', 'Dec'];
const year = [...q1, ...q2, ...q3, ...q4];

// for of
for (let month of year) {
  console.log(month);
}

// maps
const mapFruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);

log(mapFruits.values());

// sets
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add({ a: 1 });
letters.add({ b: 2 });
letters.add({ c: 3 });

log(letters.keys());
log(letters.entries());
let arrayConvert = Array.from(letters);

log(arrayConvert);

log(Array.from('ABCDEFG'));

// array find
const numbers = [4, 9, 16, 25, 29];
let first = numbers.filter(myFunction);
log(first);

function myFunction(value, index, array) {
  return value > 18;
}

// entries
const fruitsSend = { Bananas: 300, Oranges: 200, Apples: 500 };

for (let [fruit, value] of Object.entries(fruitsSend)) {
  console.log(fruit, value);
}

const fruitsThree = [
  ['apples', 300],
  ['pears', 900],
  ['bananas', 500],
];

const myObj = Object.fromEntries(fruitsThree);

log(myObj);

// map
const myArr = [1, 2, 3, 4, 5, 6];

const newMap = myArr.map((x) => [x, x * 10]);
log(newMap);

let fruit = fruits.at(2);

// Object.hasOwn(myObject, age)

// class private
class Hello {
  #counter = 0; // Private field
  #myMethod() {} // Private method
}
const myClass = new Hello();

//   let x = myClass.#counter; // Error
//   myClass.#myMethod();      // Error

// array of
let fruitsFour = Array.of('Banana', 'Orange', 'Apple', 'Mango');
log(fruitsFour);



//Create a method that transforms array values into upper case:
Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

const fruitsFive = ["Banana", "Orange", "Apple", "Mango"];
fruitsFive.myUcase();

console.log('fruitesFive',fruitsFive)



// function some array

const ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age > 18;
}

log(ages.some(checkAdult))


// method updates a specified array element.
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

log(myMonths);


// unshift
const fruitsSix = ["Banana", "Orange", "Apple", "Mango"];
fruitsSix.unshift("Lemon","Pineapple");

console.log('fruitsSix', fruitsSix)
