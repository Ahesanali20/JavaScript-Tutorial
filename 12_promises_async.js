// ===== PROMISES & ASYNC-AWAIT =====

// Promise - for handling async operations
console.log("--- PROMISES ---");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result); // Will print after 1 second
});

// Promise with rejection
console.log("\n--- PROMISE WITH REJECTION ---");
const promiseWithError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error occurred!");
  }, 1000);
});

promiseWithError
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Caught error:", error);
  });

// Promise chaining
console.log("\n--- PROMISE CHAINING ---");
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete");
      resolve("Data from step 1");
    }, 500);
  });
}

function step2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 complete, received:", data);
      resolve("Data from step 2");
    }, 500);
  });
}

function step3(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 complete, received:", data);
      resolve("Final result");
    }, 500);
  });
}

step1()
  .then((result) => step2(result))
  .then((result) => step3(result))
  .then((result) => console.log("All done:", result))
  .catch((error) => console.log("Error:", error));

// Promise.all() - wait for all promises
console.log("\n--- PROMISE.ALL ---");
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Foo"), 100),
);
const promise3 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  (r) => r.json(),
);

// Promise.all([promise1, promise2, promise3])
//   .then((values) => console.log(values))
//   .catch((error) => console.log("Error in Promise.all"));

// ASYNC-AWAIT (Cleaner syntax for promises)
console.log("\n--- ASYNC-AWAIT ---");

async function asyncFunction() {
  try {
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve("Async result"), 500);
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error:", error);
  }
}

asyncFunction();

// Async-await with multiple operations
console.log("\n--- ASYNC-AWAIT WITH MULTIPLE OPERATIONS ---");

async function multiStep() {
  try {
    console.log("Starting operations...");

    const result1 = await new Promise((resolve) => {
      setTimeout(() => resolve("First operation"), 500);
    });
    console.log(result1);

    const result2 = await new Promise((resolve) => {
      setTimeout(() => resolve("Second operation"), 500);
    });
    console.log(result2);

    const result3 = await new Promise((resolve) => {
      setTimeout(() => resolve("Third operation"), 500);
    });
    console.log(result3);

    console.log("All operations completed!");
  } catch (error) {
    console.log("Error:", error);
  }
}

multiStep();

// Async function that returns a promise
console.log("\n--- RETURNING FROM ASYNC ---");
async function fetchData() {
  return "Fetched data";
}

fetchData().then((data) => console.log(data));

// Real-world example: Simulating API calls
console.log("\n--- SIMULATED API CALLS ---");

function fetchUserAPI(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id: id, name: "User " + id });
      } else {
        reject("Invalid ID");
      }
    }, 300);
  });
}

async function getUserInfo(userId) {
  try {
    const user = await fetchUserAPI(userId);
    console.log("User info:", user);
    return user;
  } catch (error) {
    console.log("Error fetching user:", error);
  }
}

getUserInfo(1);
// getUserInfo(-1); // This would trigger the error

// Note: In Node.js, these async operations will complete before the process exits
console.log("Script continues while async operations run...");
