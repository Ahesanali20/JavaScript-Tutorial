// ===== FUNCTIONS =====

// Function declaration
function greet(name) {
  console.log("Hello, " + name);
}

greet("Raj"); // Output: Hello, Raj

// Function with return value
function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log("Sum:", result); // 8

// Function with default parameters
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5)); // 10 (b is default 2)
console.log(multiply(5, 3)); // 15

// Function Expression (Anonymous function)
const subtract = function (a, b) {
  return a - b;
};

console.log("Difference:", subtract(10, 3)); // 7

// Arrow Function (ES6)
const divide = (a, b) => a / b;
console.log("Division:", divide(20, 4)); // 5

// Arrow Function with multiple lines
const calculator = (a, b, operation) => {
  if (operation === "add") {
    return a + b;
  } else if (operation === "sub") {
    return a - b;
  }
};

console.log("Add:", calculator(10, 5, "add")); // 15
console.log("Sub:", calculator(10, 5, "sub")); // 5

// Function with multiple parameters
function createUser(name, age, email) {
  return {
    name: name,
    age: age,
    email: email,
    displayInfo: function () {
      console.log(`${this.name}, ${this.age} years old, ${this.email}`);
    },
  };
}

const user = createUser("Raj", 25, "raj@email.com");
user.displayInfo();

// Function that returns another function (Higher-order function)
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double of 5:", double(5)); // 10
console.log("Triple of 5:", triple(5)); // 15

// Recursive function (function that calls itself)
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // 120

// Function with variable number of arguments (rest parameter)
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log("Sum:", sum(1, 2, 3, 4, 5)); // 15
