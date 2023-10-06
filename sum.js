// Original code

// const num = process.argv;
// const input = (num.slice(2));

// // create amd initialize a var for the sum
// let sum = 0;

// //iterate through every single element in the array
// for (let i = 0; i < input.length; i++) {
//   sum += parseFloat(input[i]);
// }

// console.log(sum);


// Refactored code

// create and initialize a function for the sum
function sum (input) {
    let sumTotal = 0;

//iterate through every single element in the array
for (let i = 0; i < input.length; i++) {
  sumTotal += parseFloat(input[i]);
}

return sumTotal;
}

const num = process.argv;
const input = (num.slice(2));
console.log(sum(input));
























