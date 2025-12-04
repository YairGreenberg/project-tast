import readlineSync from "readline-sync";
import { createPlayer } from "../riddles/names.js";
import { list_riddles } from "../riddles/all_riddles.js";
import { askRiddle, measureSolveTime } from "../riddles/names.js";
// import timeNow from "time-now";

// let now = new Date();
// let seconds =now.getSeconds()
// console.log(seconds);
let now = new Date();
let secondsBefor = now.getSeconds();
console.log(`secondsBefor ${secondsBefor}`);

let now2 = new Date();
let secondsAfter = now2.getSeconds();
console.log(`secondsAfter ${secondsAfter}`);

let time = secondsAfter + 1 - secondsBefor;
console.log(`time: ${time}`);

// function formatTime(number) {
//     return number < 10 ? '0' + number : number;
// }

// let now = new Date();
// let hours = formatTime(now.getHours());
// let minutes = formatTime(now.getMinutes());
// let seconds = formatTime(now.getSeconds());

// console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

// formatTime()

console.log("wellcom to riddles game!!");

const name = readlineSync.question("wate your name? \n");
console.log(`hello ${name}`);
const objectName = createPlayer(name);

function main() {
  for (let riddle of list_riddles) {
    let time = measureSolveTime(() => askRiddle(riddle));
    console.log(`cournt time ${time}`);
  }
}

main();

// Import all riddles using a single import (one statement, not one per
// file).

// 5. For each riddle:
// ○ Use measureSolveTime() to measure how long it takes to
// solve it.
// ■ Inside the function you pass to measureSolveTime,
// call askRiddle(riddle).
// ○ Get the returned duration.
// ○ Call addSolveTime(player, duration) to store the
// time.
// 6. After all riddles are solved:
// ○ Call showStats(player) to print total and average time
