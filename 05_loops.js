// ===== LOOPS (FOR, WHILE, DO-WHILE, FOR-OF, FOR-IN) =====

// What are Loops?
// -> Loops are used to repeat a block of code multiple times. Types include: for loop (count-based), while loop (condition-based), for-of loop (iterate over values), and for-in loop (iterate over keys).

// for loop
console.log("--- FOR LOOP ---");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// for loop with break
console.log("\n--- FOR LOOP WITH BREAK ---");
for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // Stop loop when i is 5
  console.log("i =", i);
}

// for loop with continue
console.log("\n--- FOR LOOP WITH CONTINUE ---");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skip when i is 3
  console.log("i =", i);
}

// while loop
console.log("\n--- WHILE LOOP ---");
let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}

// do-while loop (runs at least once)
console.log("\n--- DO-WHILE LOOP ---");
let num = 0;
do {
  console.log("Num:", num);
  num++;
} while (num < 3);

// for-of loop (for arrays and strings)
console.log("\n--- FOR-OF LOOP ---");
const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for-in loop (for objects and object properties)
console.log("\n--- FOR-IN LOOP ---");
const person = { name: "Raj", age: 25, city: "Mumbai" };
for (const key in person) {
  console.log(key + ":", person[key]);
}

// Nested loops
console.log("\n--- NESTED LOOPS ---");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
