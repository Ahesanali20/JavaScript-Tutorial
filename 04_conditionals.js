// ===== CONDITIONALS (IF-ELSE, SWITCH) =====

// What are Conditionals?
// -> Conditionals are statements that execute different code based on whether a condition is true or false. Examples: if-else, switch, ternary operator. They control the flow of a program.

// if-else statement
const age = 20;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// if-else if-else
const score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Nested if-else
const isRaining = true;
const hasUmbrella = false;

if (isRaining) {
  if (hasUmbrella) {
    console.log("Go out with umbrella");
  } else {
    console.log("Stay home");
  }
} else {
  console.log("No rain, go out!");
}

// Switch statement
const day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

// Multiple conditions
const userRole = "admin";
const isActive = true;

if (userRole === "admin" && isActive) {
  console.log("Admin user is active");
}
