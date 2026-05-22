// ===== ARRAYS =====

// Array declaration
const fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]); // Apple
console.log("Length:", fruits.length); // 3

// Array with mixed data types
const mixed = [1, "string", true, null, undefined, { name: "Raj" }];
console.log("Mixed array:", mixed);

// Array methods - Adding elements
let numbers = [1, 2, 3];

numbers.push(4); // Add at end
console.log("After push:", numbers); // [1, 2, 3, 4]

numbers.unshift(0); // Add at beginning
console.log("After unshift:", numbers); // [0, 1, 2, 3, 4]

// Array methods - Removing elements
console.log("\n--- Removing Elements ---");
let items = ["a", "b", "c", "d"];

items.pop(); // Remove last
console.log("After pop:", items); // ["a", "b", "c"]

items.shift(); // Remove first
console.log("After shift:", items); // ["b", "c"]

// Array methods - Finding elements
console.log("\n--- Finding Elements ---");
const colors = ["red", "blue", "green", "red"];

console.log("indexOf('blue'):", colors.indexOf("blue")); // 1
console.log("includes('red'):", colors.includes("red")); // true

// Array methods - Slicing
console.log("\n--- Slicing ---");
const letters = ["a", "b", "c", "d", "e"];
console.log("slice(1, 4):", letters.slice(1, 4)); // ["b", "c", "d"]

// Array methods - Joining
console.log("\n--- Joining ---");
const words = ["Hello", "World", "JavaScript"];
console.log("join(' '):", words.join(" ")); // "Hello World JavaScript"

// Array methods - Concatenating
console.log("\n--- Concatenating ---");
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log("concat:", combined); // [1, 2, 3, 4]

// Array methods - Reversing
console.log("\n--- Reversing ---");
let nums = [1, 2, 3];
nums.reverse();
console.log("After reverse:", nums); // [3, 2, 1]

// Array methods - Sorting
console.log("\n--- Sorting ---");
let unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b);
console.log("After sort:", unsorted); // [1, 1, 3, 4, 5, 9]

// Spread operator
console.log("\n--- Spread Operator ---");
const original = [1, 2, 3];
const copy = [...original]; // Create copy
console.log("Copy:", copy);

const combined2 = [...original, 4, 5];
console.log("Combined with spread:", combined2); // [1, 2, 3, 4, 5]
