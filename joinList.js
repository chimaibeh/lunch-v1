const joinList = function(anyArray) {
  if (!Array.isArray(anyArray)) {
    return "No array detected!";
  }
  if (anyArray.length === 0) {
    return "";
  }
  let result = "";
  for (let i = 0; i < anyArray.length; i++) {
    if (i === 0) {
      result += anyArray[i];
    } else {
      result += ", " + anyArray[i];
    }
  }
  
  return result;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);