// ===== CALLBACKS & HIGHER-ORDER FUNCTIONS =====

// What is a Callback?
// -> A callback is a function passed as an argument to another function. It gets executed later, often after an asynchronous operation completes. Callbacks are fundamental to handling async operations.

// What is a Higher-Order Function?
// -> A higher-order function is a function that takes another function as a parameter or returns a function. They enable functional programming patterns like map, filter, and reduce.

// Callback - Function passed as argument
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

console.log("--- CALLBACKS ---");
greet("Raj", sayGoodbye);

// Callback with parameters
function processData(data, callback) {
  const result = data * 2;
  callback(result);
}

console.log("\n--- CALLBACK WITH PARAMETERS ---");
processData(5, function (result) {
  console.log("Result:", result); // 10
});

// Higher-order function - returns a function
function createGreeter(greeting) {
  return function (name) {
    console.log(greeting + ", " + name);
  };
}

console.log("\n--- HIGHER-ORDER FUNCTION ---");
const greetHi = createGreeter("Hi");
const greetHello = createGreeter("Hello");

greetHi("Raj");
greetHello("Priya");

// Function that accepts and returns functions
function compose(fn1, fn2) {
  return function (x) {
    return fn2(fn1(x));
  };
}

const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;

console.log("\n--- FUNCTION COMPOSITION ---");
const addThenMultiply = compose(add5, multiply2);
console.log("compose(add5, multiply2)(3):", addThenMultiply(3)); // (3+5)*2 = 16

// Array methods with callbacks
console.log("\n--- ARRAY METHODS WITH CALLBACKS ---");
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log("Doubled:", doubled);

const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Evens:", evens);

// setTimeout - callback after delay
console.log("\n--- ASYNC CALLBACK (setTimeout) ---");
console.log("Starting...");

setTimeout(function () {
  console.log("After 2 seconds");
}, 2000);

console.log("Scheduled!");

// Callback hell (nested callbacks) - NOT recommended
console.log("\n--- CALLBACK HELL EXAMPLE ---");

function fetchUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "User" + id });
  }, 500);
}

// Nested callbacks - gets messy with more levels
fetchUser(1, function (user) {
  console.log("User:", user);
  fetchUser(user.id + 1, function (user2) {
    console.log("User 2:", user2);
  });
});

// Event-based callback example
console.log("\n--- EVENT CALLBACK ---");
// In browsers this would work:
// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//   console.log('Button clicked!');
// });

// Callback for error handling
function divideNumbers(a, b, successCallback, errorCallback) {
  if (b === 0) {
    errorCallback("Cannot divide by zero");
  } else {
    successCallback(a / b);
  }
}

console.log("\n--- ERROR HANDLING WITH CALLBACKS ---");
divideNumbers(
  10,
  2,
  function (result) {
    console.log("Result:", result); // 5
  },
  function (error) {
    console.log("Error:", error);
  },
);

divideNumbers(
  10,
  0,
  function (result) {
    console.log("Result:", result);
  },
  function (error) {
    console.log("Error:", error); // "Cannot divide by zero"
  },
);
