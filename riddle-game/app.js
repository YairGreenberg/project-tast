import readlineSync from "readline-sync";
import { list_riddles } from "../riddles/all_riddles.js";
import { createPlayer,askRiddle, measureSolveTime,addSolveTime,showStats } from "../riddles/names.js";




console.log("welcome to riddles game!!");

const name = readlineSync.question("\nwhat your name? \n");
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


