// ===== OPERATORS =====

// What are Operators?
// -> Operators are symbols that perform operations on variables and values. Types include arithmetic (+, -, *, /), comparison (===, !==, >, <), logical (&&, ||, !), and assignment (=).

// Arithmetic Operators
const a = 10;
const b = 3;

console.log("Addition:", a + b); // 13
console.log("Subtraction:", a - b); // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b); // 3.333...
console.log("Modulus:", a % b); // 1
console.log("Exponentiation:", a ** 2); // 100

// Comparison Operators
console.log("\n--- Comparison ---");
console.log("a > b:", a > b); // true
console.log("a < b:", a < b); // false
console.log("a === b:", a === b); // false (strict equality)
console.log("a !== b:", a !== b); // true

// Logical Operators
console.log("\n--- Logical ---");
const x = true;
const y = false;

console.log("x && y:", x && y); // false (AND)
console.log("x || y:", x || y); // true (OR)
console.log("!x:", !x); // false (NOT)

// Assignment Operators
console.log("\n--- Assignment ---");
let num = 5;
num += 3; // num = num + 3
console.log("After += 3:", num); // 8

num -= 2; // num = num - 2
console.log("After -= 2:", num); // 6

num *= 2; // num = num * 2
console.log("After *= 2:", num); // 12

// Ternary Operator
console.log("\n--- Ternary ---");
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status); // "Adult"
