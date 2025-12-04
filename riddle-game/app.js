import readlineSync from "readline-sync";
import { createPlayer } from "../riddles/names.js";
import { list_riddles } from "../riddles/all_riddles.js";
import { askRiddle, measureSolveTime,addSolveTime,showStats } from "../riddles/names.js";




console.table("wellcom to riddles game!!");

const name = readlineSync.question("\nwate your name? \n");
console.log(`hello ${name}`);
const objectName = createPlayer(name);







function main() {

  for (let riddle of list_riddles) {
    let time = measureSolveTime(() => askRiddle(riddle));
    addSolveTime(objectName,time)
   
   
    
    
  }
  console.log(showStats(objectName));
  
}

main();

// Import all riddles using a single import (one statement, not one per
// file).

