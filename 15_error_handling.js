// ===== ERROR HANDLING =====

// Try-catch block
console.log("--- TRY-CATCH ---");

try {
  const result = 10 / 2;
  console.log("Result:", result); // 5
} catch (error) {
  console.log("Error:", error);
}

// Catching actual errors
console.log("\n--- CATCHING ERRORS ---");

try {
  const obj = null;
  console.log(obj.property); // TypeError
} catch (error) {
  console.log("Error type:", error.name); // TypeError
  console.log("Error message:", error.message);
  console.log("Error stack:", error.stack);
}

// Finally block
console.log("\n--- TRY-CATCH-FINALLY ---");

try {
  console.log("Executing try block");
  const x = 10;
  console.log("x =", x);
} catch (error) {
  console.log("Executing catch block");
} finally {
  console.log("Finally block always executes");
}

// Multiple catch scenarios
console.log("\n--- MULTIPLE CATCH ---");

try {
  // Simulate different errors
  const data = JSON.parse('{"invalid": json}'); // SyntaxError
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Syntax Error:", error.message);
  } else if (error instanceof TypeError) {
    console.log("Type Error:", error.message);
  } else {
    console.log("Unknown error:", error);
  }
}

// Throwing custom errors
console.log("\n--- THROWING ERRORS ---");

function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  if (age < 18) {
    throw new Error("Must be 18 or older");
  }
  return "Valid age";
}

try {
  console.log(validateAge(20)); // Valid age
} catch (error) {
  console.log("Caught error:", error.message);
}

try {
  console.log(validateAge(-5)); // Error
} catch (error) {
  console.log("Caught error:", error.message);
}

// Custom error class
console.log("\n--- CUSTOM ERROR CLASS ---");

class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "CustomError";
    this.code = code;
  }
}

try {
  throw new CustomError("Something went wrong", 500);
} catch (error) {
  console.log("Name:", error.name);
  console.log("Message:", error.message);
  console.log("Code:", error.code);
}

// Async error handling
console.log("\n--- ASYNC ERROR HANDLING ---");

async function riskyOperation() {
  throw new Error("Operation failed");
}

async function handleAsyncError() {
  try {
    await riskyOperation();
  } catch (error) {
    console.log("Caught async error:", error.message);
  }
}

handleAsyncError();

// Error handling with callbacks
console.log("\n--- CALLBACK ERROR HANDLING ---");

function readFile(filename, callback) {
  // Simulating file read
  if (filename === "invalid.txt") {
    callback(new Error("File not found"), null);
  } else {
    callback(null, "File contents");
  }
}

readFile("valid.txt", (error, data) => {
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log("Data:", data);
  }
});

readFile("invalid.txt", (error, data) => {
  if (error) {
    console.log("Error:", error.message); // "File not found"
  } else {
    console.log("Data:", data);
  }
});

// Validation function
console.log("\n--- VALIDATION WITH ERROR HANDLING ---");

function validateUser(user) {
  const errors = [];

  if (!user.name || user.name.trim() === "") {
    errors.push("Name is required");
  }

  if (!user.email || !user.email.includes("@")) {
    errors.push("Valid email is required");
  }

  if (!user.age || user.age < 0 || user.age > 150) {
    errors.push("Age must be between 0 and 150");
  }

  if (errors.length > 0) {
    throw new Error("Validation failed: " + errors.join(", "));
  }

  return true;
}

try {
  validateUser({ name: "Raj", email: "raj@example.com", age: 25 });
  console.log("User is valid");
} catch (error) {
  console.log(error.message);
}

try {
  validateUser({ name: "", email: "invalid", age: 200 });
} catch (error) {
  console.log(error.message);
}

// Error logging
console.log("\n--- ERROR LOGGING ---");

function logError(error, context) {
  const errorLog = {
    timestamp: new Date().toISOString(),
    message: error.message,
    stack: error.stack,
    context: context,
  };
  console.log("Error Log:", JSON.stringify(errorLog, null, 2));
}

try {
  throw new Error("Database connection failed");
} catch (error) {
  logError(error, { service: "UserService", method: "getUser" });
}
