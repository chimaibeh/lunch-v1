//Define the raisnAlarm function
const raisinAlarm = function(cookie) { 
  if (cookie.includes("🍇")) { //conditional ststement to check if 🍇 is in the array
    return "🚨🚨 Raisin alert! 🚨🚨"; //expected output if yes
  } else {
    return "😊😊  All good! 😊😊"; //expected output if no
  }
};
  
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));// Expected output: Raisin alert
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"])); // Expected output: Raisin alert
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); // Expected output: All good