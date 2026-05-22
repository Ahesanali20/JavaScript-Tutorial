// ===== ADVANCED CONCEPTS =====

// Destructuring Objects
console.log("--- DESTRUCTURING OBJECTS ---");
const user = {
  name: "Raj",
  age: 25,
  email: "raj@example.com",
  address: {
    city: "Mumbai",
    country: "India",
  },
};

const { name, age, email } = user;
console.log("Name:", name, "Age:", age);

// Destructuring with renaming
const { name: fullName, email: userEmail } = user;
console.log("Full name:", fullName);

// Nested destructuring
const {
  address: { city, country },
} = user;
console.log("City:", city, "Country:", country);

// Default values in destructuring
const { phone = "N/A" } = user;
console.log("Phone:", phone); // "N/A" - default value

// Destructuring Arrays
console.log("\n--- DESTRUCTURING ARRAYS ---");
const colors = ["red", "green", "blue", "yellow"];

const [first, second, third] = colors;
console.log("First:", first, "Second:", second);

// Skipping elements
const [primary, , secondary] = colors;
console.log("Primary:", primary, "Secondary:", secondary);

// Rest element
const [head, ...rest] = colors;
console.log("Head:", head);
console.log("Rest:", rest); // ["green", "blue", "yellow"]

// Spread Operator
console.log("\n--- SPREAD OPERATOR ---");

// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined:", combined); // [1, 2, 3, 4, 5, 6]

// Add element in middle
const withElement = [0, ...arr1, 3.5];
console.log("With element:", withElement); // [0, 1, 2, 3, 3.5]

// Spread in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log("Merged object:", mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const updatedObj = { ...obj1, b: 20 };
console.log("Updated:", updatedObj); // { a: 1, b: 20 }

// Rest Parameters
console.log("\n--- REST PARAMETERS ---");

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5)); // 15

function introduce(name, ...hobbies) {
  console.log(`${name} enjoys: ${hobbies.join(", ")}`);
}

introduce("Raj", "coding", "reading", "gaming");

// Optional Chaining (?.)
console.log("\n--- OPTIONAL CHAINING ---");

const person = {
  name: "Priya",
  // address property doesn't exist
};

console.log("person.address?.city:", person.address?.city); // undefined (no error)
console.log("person.name?.length:", person.name?.length); // 5

// Nullish Coalescing (??)
console.log("\n--- NULLISH COALESCING ---");

const value = null;
const result1 = value ?? "default"; // "default"
console.log("result1:", result1);

const value2 = 0;
const result2 = value2 ?? "default"; // 0 (0 is not nullish)
console.log("result2:", result2);

// Object.assign()
console.log("\n--- OBJECT.ASSIGN ---");

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3, a: 100 }; // Overwrites a

const result = Object.assign(target, source1, source2);
console.log("Result:", result); // { a: 100, b: 2, c: 3 }

// Computed property names
console.log("\n--- COMPUTED PROPERTY NAMES ---");

const key = "dynamicKey";
const obj = {
  [key]: "value",
  [key + "2"]: "another value",
};

console.log("Object:", obj);
// { dynamicKey: "value", dynamicKey2: "another value" }

// Object shorthand
console.log("\n--- OBJECT SHORTHAND ---");

const firstName = "John";
const lastName = "Doe";
const age = 30;

// Old way
const personOld = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

// Shorthand
const personNew = { firstName, lastName, age };
console.log("Person:", personNew);

// Method shorthand
const calculator = {
  value: 0,
  add(num) {
    this.value += num;
    return this;
  },
  subtract(num) {
    this.value -= num;
    return this;
  },
  getValue() {
    return this.value;
  },
};

console.log("\n--- METHOD CHAINING ---");
calculator.add(10).subtract(3).add(5);
console.log("Final value:", calculator.getValue()); // 12

// For-of loop with entries
console.log("\n--- FOR-OF WITH ENTRIES ---");

const items = ["apple", "banana", "orange"];
for (const [index, item] of items.entries()) {
  console.log(`${index}: ${item}`);
}

// Array destructuring in function parameters
console.log("\n--- DESTRUCTURING IN FUNCTION PARAMS ---");

function printCoordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}

printCoordinates([10, 20]);

function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

printUser({ name: "Alice", age: 28 });

// Deep cloning with spread
console.log("\n--- DEEP VS SHALLOW COPY ---");

const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.a = 100;
shallowCopy.b.c = 200;

console.log("Original after shallow copy:", original);
// { a: 1, b: { c: 200 } } - nested object affected!

// Deep copy with JSON
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 300;

console.log("Original after deep copy:", original);
// { a: 1, b: { c: 200 } } - not affected
