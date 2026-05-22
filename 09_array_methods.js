// ===== ARRAY METHODS (MAP, FILTER, REDUCE, FOREACH) =====

const numbers = [1, 2, 3, 4, 5];

// map() - transforms each element
console.log("--- MAP ---");
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

const squared = numbers.map((num) => num ** 2);
console.log("Squared:", squared); // [1, 4, 9, 16, 25]

// filter() - keeps elements that pass condition
console.log("\n--- FILTER ---");
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4]

const greaterThanThree = numbers.filter((num) => num > 3);
console.log("Greater than 3:", greaterThanThree); // [4, 5]

// reduce() - combines all elements into single value
console.log("\n--- REDUCE ---");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 15

const product = numbers.reduce((acc, num) => acc * num, 1);
console.log("Product:", product); // 120

// forEach() - executes function for each element
console.log("\n--- FOREACH ---");
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// find() - returns first element that passes condition
console.log("\n--- FIND ---");
const firstEven = numbers.find((num) => num % 2 === 0);
console.log("First even number:", firstEven); // 2

// findIndex() - returns index of first element that passes condition
console.log("\n--- FIND INDEX ---");
const indexOfFour = numbers.findIndex((num) => num === 4);
console.log("Index of 4:", indexOfFour); // 3

// some() - checks if at least one element passes condition
console.log("\n--- SOME ---");
const hasEven = numbers.some((num) => num % 2 === 0);
console.log("Has even number:", hasEven); // true

// every() - checks if all elements pass condition
console.log("\n--- EVERY ---");
const allPositive = numbers.every((num) => num > 0);
console.log("All positive:", allPositive); // true

const allGreaterThanFive = numbers.every((num) => num > 5);
console.log("All greater than 5:", allGreaterThanFive); // false

// Chaining methods
console.log("\n--- CHAINING ---");
const result = numbers
  .filter((num) => num > 2)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log("Chained result:", result); // (3*2 + 4*2 + 5*2) = 24

// Real-world example: Processing user data
const users = [
  { name: "Raj", age: 25, active: true },
  { name: "Priya", age: 22, active: true },
  { name: "Amit", age: 30, active: false },
];

const activeUserNames = users
  .filter((user) => user.active)
  .map((user) => user.name);

console.log("\n--- Real-world Example ---");
console.log("Active users:", activeUserNames); // ["Raj", "Priya"]

const totalAge = users.reduce((total, user) => total + user.age, 0);
console.log("Total age:", totalAge); // 77
