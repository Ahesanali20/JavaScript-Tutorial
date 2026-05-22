// ===== ES6 CLASSES =====

// What is a Class?
// -> A class is a blueprint for creating objects with predefined properties and methods. Introduced in ES6, classes provide a cleaner syntax than constructor functions and support inheritance.

// Basic class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }

  getInfo() {
    return `${this.name} is a ${this.species}`;
  }
}

console.log("--- BASIC CLASS ---");
const dog = new Animal("Buddy", "Dog");
console.log(dog.getInfo()); // "Buddy is a Dog"
dog.speak(); // "Buddy makes a sound"

// Inheritance
console.log("\n--- INHERITANCE ---");
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog"); // Call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(this.name + " barks!");
  }

  getBreed() {
    return this.breed;
  }
}

const myDog = new Dog("Rex", "German Shepherd");
console.log(myDog.getInfo()); // "Rex is a Dog"
console.log("Breed:", myDog.getBreed()); // "German Shepherd"
myDog.speak(); // "Rex barks!"

// Static methods
console.log("\n--- STATIC METHODS ---");
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }

  constructor() {
    // Note: Constructor is not called for static methods
  }
}

console.log("Add:", MathUtils.add(5, 3)); // 8
console.log("Multiply:", MathUtils.multiply(4, 3)); // 12
// const utils = new MathUtils(); // Can also create instance

// Getters and Setters
console.log("\n--- GETTERS & SETTERS ---");
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  set fullName(name) {
    const parts = name.split(" ");
    this._firstName = parts[0];
    this._lastName = parts[1];
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }
}

const person = new Person("John", "Doe");
console.log("Full name:", person.fullName); // "John Doe"

person.fullName = "Jane Smith";
console.log("Updated name:", person.fullName); // "Jane Smith"

// Private fields (# notation)
console.log("\n--- PRIVATE FIELDS ---");
class BankAccount {
  #balance = 0; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    return "Deposited: " + amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return "Insufficient funds";
    }
    this.#balance -= amount;
    return "Withdrawn: " + amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log(account.deposit(500)); // "Deposited: 500"
console.log(account.getBalance()); // 1500
console.log(account.withdraw(200)); // "Withdrawn: 200"
console.log(account.getBalance()); // 1300
// console.log(account.#balance); // Error - private field

// Class methods that use other methods
console.log("\n--- COMPLEX CLASSES ---");
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  getSummary() {
    return {
      itemCount: this.items.length,
      total: this.getTotal(),
      items: this.items,
    };
  }
}

const cart = new ShoppingCart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
console.log(cart.getSummary());
// { itemCount: 2, total: 51000, items: [...] }

// Polymorphism - method overriding
console.log("\n--- POLYMORPHISM ---");
class Shape {
  getArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const shapes = [new Rectangle(5, 10), new Circle(3)];

console.log("Areas:");
shapes.forEach((shape) => {
  console.log(shape.getArea().toFixed(2));
});
