const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (isNaN(n) || n <= 0) {
  console.log("Please ENTER a +ve number between 1 and 6 inclusive.");
  process.exit(1);
}

const diceRoller = function() {
  return Math.floor(Math.random() * 6) + 1;
};


const randomNum = [];
for (let i = 0; i < n; i++) {
  randomNum.push(diceRoller());
}

const result = randomNum.join(", ");
console.log(`The dice was rolled ${n} time(s), in the following order :- ${result}`);
