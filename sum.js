//Modules protectes their variable and functions from leaking.

console.log("Sum Module Executed");

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = calculateSum;
