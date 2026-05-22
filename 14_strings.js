// ===== STRING MANIPULATION =====

// What is a String?
// -> A string is a sequence of characters used to represent text. Strings are immutable in JavaScript and can be manipulated using methods like slice(), substring(), toUpperCase(), toLowerCase(), split(), etc.

// String basics
console.log("--- STRING BASICS ---");
const str = "Hello JavaScript";
console.log("String:", str);
console.log("Length:", str.length); // 16
console.log("Character at 0:", str[0]); // "H"

// String methods
console.log("\n--- CASE CONVERSION ---");
console.log("toUpperCase:", str.toUpperCase()); // "HELLO JAVASCRIPT"
console.log("toLowerCase:", str.toLowerCase()); // "hello javascript"

// Searching strings
console.log("\n--- SEARCHING ---");
const text = "The quick brown fox jumps over the lazy dog";

console.log("indexOf('quick'):", text.indexOf("quick")); // 4
console.log("lastIndexOf('the'):", text.lastIndexOf("the")); // 31
console.log("includes('fox'):", text.includes("fox")); // true
console.log("startsWith('The'):", text.startsWith("The")); // true
console.log("endsWith('dog'):", text.endsWith("dog")); // true

// Extracting substrings
console.log("\n--- EXTRACTING SUBSTRINGS ---");
const email = "user@example.com";

console.log("slice(0, 4):", email.slice(0, 4)); // "user"
console.log("substring(5, 12):", email.substring(5, 12)); // "example"
console.log("substr(5, 7):", email.substr(5, 7)); // "example"

// Splitting and joining
console.log("\n--- SPLIT & JOIN ---");
const csv = "John,Doe,30,Engineer";
const parts = csv.split(",");
console.log("Split:", parts); // ["John", "Doe", "30", "Engineer"]

const joined = parts.join(" - ");
console.log("Joined:", joined); // "John - Doe - 30 - Engineer"

// Trimming whitespace
console.log("\n--- TRIMMING ---");
const paddedString = "  Hello World  ";
console.log("trim():", "'" + paddedString.trim() + "'"); // "Hello World"
console.log("trimStart():", "'" + paddedString.trimStart() + "'");
console.log("trimEnd():", "'" + paddedString.trimEnd() + "'");

// Repeating strings
console.log("\n--- REPEATING ---");
console.log("'ab'.repeat(3):", "ab".repeat(3)); // "ababab"
console.log("'*'.repeat(5):", "*".repeat(5)); // "*****"

// Padding strings
console.log("\n--- PADDING ---");
const num = "5";
console.log("padStart(3, '0'):", num.padStart(3, "0")); // "005"
console.log("padEnd(3, '0'):", num.padEnd(3, "0")); // "500"

// Replace
console.log("\n--- REPLACE ---");
const sentence = "I love cats. I love dogs.";
console.log("replace('love', 'like'):", sentence.replace("love", "like")); // Replaces first
console.log("replaceAll('love', 'like'):", sentence.replaceAll("love", "like")); // Replaces all

// Template literals (backticks)
console.log("\n--- TEMPLATE LITERALS ---");
const name = "Raj";
const age = 25;
const city = "Mumbai";

const message = `My name is ${name}, I'm ${age} years old, and I live in ${city}`;
console.log(message);

// Multi-line template literal
const multiLine = `
  Line 1
  Line 2
  Line 3
`;
console.log("Multi-line:", multiLine);

// Regular expressions
console.log("\n--- REGULAR EXPRESSIONS ---");
const phoneNumber = "9876543210";

// Check if valid
const phoneRegex = /^\d{10}$/;
console.log("Valid phone:", phoneRegex.test(phoneNumber)); // true

// Match pattern
const text2 = "apple, apricot, avocado";
const words = text2.match(/a\w+/g);
console.log("Words starting with 'a':", words); // ["apple", "apricot", "avocado"]

// Replace with regex
const date = "2024-05-21";
const formattedDate = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
console.log("Formatted date:", formattedDate); // "21/05/2024"

// String interpolation with methods
console.log("\n--- STRING METHODS EXAMPLES ---");
const userEmail = "JOHN.DOE@EXAMPLE.COM";
const cleanEmail = userEmail.toLowerCase().trim();
console.log("Clean email:", cleanEmail); // "john.doe@example.com"

// Validating email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

console.log("Is valid email:", isValidEmail("user@example.com")); // true
console.log("Is valid email:", isValidEmail("invalid.email")); // false
