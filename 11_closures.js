// ===== CLOSURES =====

// Closure - Function that remembers variables from outer scope
function outer() {
  const message = "Hello"; // Outer variable

  function inner() {
    console.log(message); // Inner function accesses outer variable
  }

  return inner;
}

console.log("--- BASIC CLOSURE ---");
const myFunc = outer();
myFunc(); // "Hello" - closure remembers 'message'

// Practical closure - Counter
console.log("\n--- COUNTER WITH CLOSURE ---");
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log("Increment:", counter.increment()); // 1
console.log("Increment:", counter.increment()); // 2
console.log("Decrement:", counter.decrement()); // 1
console.log("Current count:", counter.getCount()); // 1

// Closure for data privacy
console.log("\n--- DATA PRIVACY ---");
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit: function (amount) {
      balance += amount;
      return "Deposited: " + amount + ", Balance: " + balance;
    },
    withdraw: function (amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return "Withdrawn: " + amount + ", Balance: " + balance;
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500)); // "Deposited: 500, Balance: 1500"
console.log(account.withdraw(200)); // "Withdrawn: 200, Balance: 1300"
console.log(account.getBalance()); // 1300
// console.log(account.balance); // undefined - balance is private!

// Closure in loops
console.log("\n--- CLOSURE IN LOOPS (COMMON MISTAKE) ---");

// ❌ WRONG - all functions refer to same i
const functionsWrong = [];
for (var i = 0; i < 3; i++) {
  functionsWrong.push(function () {
    console.log(i); // Will print 3, 3, 3
  });
}

console.log("Wrong way (var):");
// functionsWrong[0](); // 3
// functionsWrong[1](); // 3
// functionsWrong[2](); // 3

// ✅ RIGHT - let creates new scope for each iteration
const functionsRight = [];
for (let i = 0; i < 3; i++) {
  functionsRight.push(function () {
    console.log(i); // Will print 0, 1, 2
  });
}

console.log("Right way (let):");
functionsRight[0](); // 0
functionsRight[1](); // 1
functionsRight[2](); // 2

// Function factory using closure
console.log("\n--- FUNCTION FACTORY ---");
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15
console.log("Quadruple 5:", quadruple(5)); // 20

// Memoization with closure (caching function results)
console.log("\n--- MEMOIZATION ---");
function createMemoizedMultiply() {
  const cache = {}; // Private cache

  return function (a, b) {
    const key = a + "," + b;
    if (key in cache) {
      console.log("From cache:", key);
      return cache[key];
    }
    console.log("Computing:", key);
    const result = a * b;
    cache[key] = result;
    return result;
  };
}

const memoizedMultiply = createMemoizedMultiply();
console.log(memoizedMultiply(3, 4)); // "Computing: 3,4" -> 12
console.log(memoizedMultiply(3, 4)); // "From cache: 3,4" -> 12
console.log(memoizedMultiply(5, 6)); // "Computing: 5,6" -> 30
