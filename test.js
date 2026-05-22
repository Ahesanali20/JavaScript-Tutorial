// var i = 1;
// function foo() {
//   i = 2;
//   console.log(i);
// }
// foo();

// console.log(i);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
