// ===== THIS KEYWORD & CONTEXT =====

// What is 'this'?
// -> 'this' is a special keyword that refers to the object it belongs to. Its value depends on the context: in global scope it refers to the global object, in a method it refers to the parent object, in a function it refers to undefined (strict mode).

// Understanding 'this'
console.log("--- THIS IN DIFFERENT CONTEXTS ---");

// 1. In global scope
console.log("Global this:", this); // global object

// 2. In regular function
function regularFunction() {
  console.log("this in regular function:", this);
}

regularFunction(); // window/global object

// 3. In object method
const obj = {
  name: "Object",
  method: function () {
    console.log("this in method:", this); // obj
    console.log("this.name:", this.name);
  },
};

obj.method();

// 4. In arrow function
const obj2 = {
  name: "Arrow Test",
  regularFunc: function () {
    console.log("Regular function this:", this); // obj2

    const arrowFunc = () => {
      console.log("Arrow function this:", this); // Still obj2 (inherited)
    };

    arrowFunc();
  },
};

obj2.regularFunc();

// Call, Apply, Bind
console.log("\n--- CALL, APPLY, BIND ---");

const person1 = {
  name: "Raj",
  greet: function (greeting) {
    console.log(greeting + ", " + this.name);
  },
};

const person2 = {
  name: "Priya",
};

// call() - execute immediately with specific 'this'
person1.greet.call(person2, "Hello"); // "Hello, Priya"

// apply() - similar to call but takes array of arguments
function sum(a, b, c) {
  return this.multiplier * (a + b + c);
}

const context = { multiplier: 2 };
console.log("apply result:", sum.apply(context, [1, 2, 3])); // 2 * 6 = 12

// bind() - creates new function with 'this' bound
const boundGreet = person1.greet.bind(person2);
boundGreet("Hi"); // "Hi, Priya"

// Practical example with bind
const user = {
  username: "john_doe",
  login: function () {
    console.log(this.username + " logged in");
  },
  logout: function () {
    console.log(this.username + " logged out");
  },
};

// Without bind, 'this' would be lost
setTimeout(user.login.bind(user), 100);

// Constructor functions
console.log("\n--- CONSTRUCTOR FUNCTIONS ---");

function User(name, email) {
  this.name = name;
  this.email = email;
  this.active = true;

  this.describe = function () {
    return `${this.name} (${this.email})`;
  };
}

const user1 = new User("Raj", "raj@example.com");
const user2 = new User("Priya", "priya@example.com");

console.log(user1.describe()); // "Raj (raj@example.com)"
console.log(user2.describe()); // "Priya (priya@example.com)"

// Constructor.prototype
console.log("\n--- PROTOTYPES ---");

console.log("user1 instanceof User:", user1 instanceof User); // true
console.log("user1.constructor:", user1.constructor === User); // true

// Adding methods to prototype
User.prototype.sayHello = function () {
  console.log("Hello, I'm " + this.name);
};

user1.sayHello(); // "Hello, I'm Raj"

// Prototype chain
console.log("\n--- PROTOTYPE CHAIN ---");

const parent = {
  greet() {
    console.log("Greetings from parent");
  },
};

const child = Object.create(parent);
child.greet(); // Inherited from parent

console.log("child.greet === parent.greet:", child.greet === parent.greet); // true

// This in class methods
console.log("\n--- THIS IN CLASSES ---");

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    return this.count;
  }

  getCount() {
    return this.count;
  }

  // Arrow function method
  getCountArrow = () => {
    return this.count;
  };
}

const counter = new Counter();
console.log("Increment:", counter.increment()); // 1
console.log("Get count:", counter.getCount()); // 1

// Problem: 'this' lost when method passed as callback
const regularMethod = counter.increment;
// regularMethod(); // Error: this is undefined

// Solution 1: Bind
const boundMethod = counter.increment.bind(counter);
console.log("Bound method:", boundMethod()); // 2

// Solution 2: Arrow function
const arrowMethod = counter.getCountArrow;
console.log("Arrow method:", arrowMethod()); // 2

// This in event listeners (browser context)
// In browser:
// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//   console.log(this); // button element
// });
// button.addEventListener('click', () => {
//   console.log(this); // window
// });

console.log("\n--- NESTED OBJECTS AND THIS ---");

const company = {
  name: "TechCorp",
  employees: [
    { name: "Raj", role: "Developer" },
    { name: "Priya", role: "Designer" },
  ],
  describe: function () {
    return "Company: " + this.name;
  },
  listEmployees: function () {
    this.employees.forEach(function (emp) {
      console.log(emp.name + " from " + this.name); // 'this' is undefined here
    });
  },
  listEmployeesArrow: function () {
    this.employees.forEach((emp) => {
      console.log(emp.name + " from " + this.name); // 'this' works with arrow!
    });
  },
};

console.log(company.describe());
// company.listEmployees(); // Problem: 'this.name' is undefined
company.listEmployeesArrow(); // Works correctly!
