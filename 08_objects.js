// ===== OBJECTS =====

// Object declaration
const person = {
  name: "Raj",
  age: 25,
  city: "Mumbai",
  email: "raj@email.com",
};

console.log("Person:", person);
console.log("Name:", person.name); // Dot notation
console.log("Age:", person["age"]); // Bracket notation

// Object with nested data
const user = {
  id: 1,
  profile: {
    name: "Raj",
    address: {
      city: "Mumbai",
      country: "India",
    },
  },
  hobbies: ["coding", "reading", "gaming"],
};

console.log("\n--- Nested Objects ---");
console.log("City:", user.profile.address.city);
console.log("Hobbies:", user.hobbies);

// Object with methods (functions inside objects)
const calculator = {
  num1: 10,
  num2: 5,
  add: function () {
    return this.num1 + this.num2;
  },
  subtract: function () {
    return this.num1 - this.num2;
  },
};

console.log("\n--- Object Methods ---");
console.log("Add:", calculator.add()); // 15
console.log("Subtract:", calculator.subtract()); // 5

// Object.keys(), Object.values(), Object.entries()
console.log("\n--- Object Methods ---");
const student = { name: "Priya", roll: 101, class: "XII" };

console.log("Keys:", Object.keys(student)); // ["name", "roll", "class"]
console.log("Values:", Object.values(student)); // ["Priya", 101, "XII"]
console.log("Entries:", Object.entries(student));

// Destructuring objects
console.log("\n--- Destructuring ---");
const { name, age, city } = person;
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// Object spread operator
console.log("\n--- Spread Operator ---");
const defaults = { theme: "dark", language: "en" };
const userSettings = { ...defaults, theme: "light" };
console.log("User Settings:", userSettings); // { theme: "light", language: "en" }

// Object.assign()
const target = { a: 1 };
const source = { b: 2, c: 3 };
const merged = Object.assign(target, source);
console.log("Merged:", merged); // { a: 1, b: 2, c: 3 }

// Checking if property exists
console.log("\n--- Checking Properties ---");
console.log("'name' in person:", "name" in person); // true
console.log("'address' in person:", "address" in person); // false
console.log("person.name !== undefined:", person.name !== undefined); // true

// Object.freeze() - prevents modifications
const frozenObj = Object.freeze({ id: 1, name: "Test" });
// frozenObj.name = "Changed"; // This won't work - object is frozen
console.log("Frozen object:", frozenObj);
