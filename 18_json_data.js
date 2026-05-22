// ===== JSON & DATA MANIPULATION =====

// What is JSON?
// -> JSON (JavaScript Object Notation) is a lightweight data format used for data exchange. It's based on JavaScript object syntax but language-independent. Methods: JSON.stringify() (object to string) and JSON.parse() (string to object).

// JSON.stringify() - convert object to JSON string
console.log("--- JSON.STRINGIFY ---");

const user = {
  name: "Raj",
  age: 25,
  email: "raj@example.com",
  active: true,
  hobbies: ["coding", "reading", "gaming"],
};

const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);
// {"name":"Raj","age":25,"email":"raj@example.com","active":true,"hobbies":["coding","reading","gaming"]}

// Pretty print with indentation
const prettyJson = JSON.stringify(user, null, 2);
console.log("\nPretty JSON:\n", prettyJson);

// JSON.parse() - convert JSON string to object
console.log("\n--- JSON.PARSE ---");

const jsonData = '{"name":"Priya","age":23,"email":"priya@example.com"}';
const parsedUser = JSON.parse(jsonData);
console.log("Parsed user:", parsedUser);
console.log("Name:", parsedUser.name);
console.log("Age:", parsedUser.age);

// Error handling in JSON.parse
console.log("\n--- ERROR HANDLING IN PARSE ---");

const invalidJson = '{"name": "Invalid JSON"'; // Missing closing brace

try {
  JSON.parse(invalidJson);
} catch (error) {
  console.log("JSON Parse Error:", error.message);
}

// Replacer function in stringify
console.log("\n--- REPLACER FUNCTION ---");

const person = {
  name: "John",
  age: 30,
  password: "secret123", // We want to exclude this
  email: "john@example.com",
};

const filtered = JSON.stringify(
  person,
  (key, value) => {
    if (key === "password") {
      return undefined; // Exclude password
    }
    return value;
  },
  2,
);

console.log("Filtered JSON:\n", filtered);

// Reviver function in parse
console.log("\n--- REVIVER FUNCTION ---");

const jsonWithDate = '{"name":"Raj","createdAt":"2024-05-21"}';

const parsed = JSON.parse(jsonWithDate, (key, value) => {
  if (key === "createdAt") {
    return new Date(value); // Convert to Date object
  }
  return value;
});

console.log("Parsed with reviver:", parsed);
console.log("createdAt type:", typeof parsed.createdAt);

// Array of objects
console.log("\n--- ARRAY OF OBJECTS ---");

const users = [
  { id: 1, name: "Raj", active: true },
  { id: 2, name: "Priya", active: false },
  { id: 3, name: "Amit", active: true },
];

const usersJson = JSON.stringify(users, null, 2);
console.log("Users JSON:\n", usersJson);

// Parse array back
const parsedUsers = JSON.parse(usersJson);
console.log("\nActive users:");
parsedUsers.forEach((u) => {
  if (u.active) {
    console.log("- " + u.name);
  }
});

// Nested objects
console.log("\n--- NESTED OBJECTS ---");

const company = {
  name: "TechCorp",
  address: {
    street: "123 Tech Lane",
    city: "Mumbai",
    country: "India",
  },
  employees: [
    { name: "Raj", department: "Engineering" },
    { name: "Priya", department: "Design" },
  ],
};

const companyJson = JSON.stringify(company, null, 2);
console.log("Company JSON:\n", companyJson);

// Type checking with JSON
console.log("\n--- TYPE CHECKING ---");

console.log("typeof jsonString:", typeof jsonString); // "string"
console.log("typeof parsedUser:", typeof parsedUser); // "object"

// Converting different types to JSON
console.log("\n--- CONVERTING TYPES ---");

console.log("String:", JSON.stringify("hello")); // ""hello""
console.log("Number:", JSON.stringify(42)); // "42"
console.log("Boolean:", JSON.stringify(true)); // "true"
console.log("Null:", JSON.stringify(null)); // "null"
console.log("Undefined:", JSON.stringify(undefined)); // undefined (not returned)
console.log("Array:", JSON.stringify([1, 2, 3])); // "[1,2,3]"

// Circular reference error (cannot stringify circular references)
console.log("\n--- AVOIDING CIRCULAR REFERENCES ---");

const obj1 = { name: "Object 1" };
const obj2 = { name: "Object 2" };

// obj1.ref = obj2;
// obj2.ref = obj1;
// JSON.stringify(obj1); // Error: Converting circular structure

// Solution: replacer function to handle circular refs
const seen = new WeakSet();
const jsonWithCircular = JSON.stringify(obj1, (key, value) => {
  if (typeof value === "object" && value !== null) {
    if (seen.has(value)) {
      return undefined; // Skip circular reference
    }
    seen.add(value);
  }
  return value;
});

// Real-world examples
console.log("\n--- REAL-WORLD EXAMPLES ---");

// Example 1: API response handling
const apiResponse = `{
  "status": "success",
  "data": {
    "users": [
      {"id": 1, "name": "Raj", "email": "raj@example.com"},
      {"id": 2, "name": "Priya", "email": "priya@example.com"}
    ]
  }
}`;

const response = JSON.parse(apiResponse);
console.log("API Response Status:", response.status);
console.log("First user:", response.data.users[0].name);

// Example 2: Local storage simulation
const userData = {
  userId: 123,
  username: "john_doe",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// Save to localStorage (simulated)
const savedData = JSON.stringify(userData);
console.log("\nSaved to storage:", savedData);

// Retrieve from localStorage (simulated)
const retrievedData = JSON.parse(savedData);
console.log("Retrieved from storage:", retrievedData.username);

// Example 3: Deep copy using JSON
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 100;
console.log("\nOriginal b.c:", original.b.c); // 2 (not affected)
console.log("Copy b.c:", deepCopy.b.c); // 100
