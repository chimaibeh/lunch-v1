// Define the findWaldo function which takes an array of names and a callback function.
// const findWaldo = function(names, found) {
//   // Use a for loop to iterate over the elements of the 'names' array
//   for (let i = 0; i < names.length; i++) {
//     // Get the current name at index 'i'.
//     let name = names[i];
//     // Check if the current name is equal to "Waldo".
//     if (name === "Waldo") {
//       // If the name is "Waldo", call the 'found' callback function and pass the index 'i' as an argument.
//       found(i); // Pass the index to the callback
//     }
//   }
// };

// REFACTORED CODE
// Define findWaldo function
const findWaldo = function(names, found) {
  names.forEach((name, index) => { //  iterate over the elements of the 'names' array
    if (name === "Waldo") { // If the name is "Waldo", call the 'found' callback function and pass index as an argument.
      found(index);  // Pass the index to the callback
    }
  });
};

// Define the actionWhenFound function which takes an 'index' argument.
const actionWhenFound = function(index) {
  // Display a message indicating the index position where "Waldo" was found
  console.log(`Found Waldo at index ${index}!`);
};
  
// Call the findWaldo function with an array of names and the 'actionWhenFound' callback.
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  
