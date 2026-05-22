// ===== VARIABLES & DATA TYPES =====

// var (old way - avoid using)
var name = "Raj";

// let (block-scoped, recommended)
let age = 25;

// const (constant, cannot be reassigned)
const city = "Mumbai";

// Data Types
const number = 42;
const float = 3.14;
const string = "Hello JavaScript";
const boolean = true;
const undefinedVar = undefined;
const nullVar = null;
const symbol = Symbol("unique");
const bigInt = 999999999999999999n;

// Checking types
console.log(typeof number); // "number"
console.log(typeof string); // "string"
console.log(typeof boolean); // "boolean"
console.log(typeof symbol); // "symbol"

// Variable reassignment
let count = 10;
count = 20; // ✅ Works with let
console.log("Count:", count);

// const reassignment (❌ Error)
// city = "Delhi"; // Error: Assignment to constant variable

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
