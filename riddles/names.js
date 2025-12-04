import readlineSync from "readline-sync";

export function createPlayer(name) {
  let objectName = {
    name: name,
    times: [],
  };
  return objectName;
}

export function addSolveTime(player, seconds) {
  player.times.push(seconds);
}

export function showStats(player) {
  let now = Date.now();
  let sum = 0;
  for (let time of player.times) {
    sum += time;
  }
  let average = sum / player.times.length;

  return `Total time to solve the puzzles: ${sum.toFixed(
    2
  )} The average \n for each puzzle: ${average.toFixed(2)}`;
}

export function askRiddle(riddleObj) {
  let list = riddleObj.choices;

  console.log(
    `riddle ${riddleObj.id}: ${riddleObj.name} \n ${riddleObj.taskDescription}\n `
  );
  if (riddleObj.choices) {
    console.log(list);
  }
  let bool = true;
  while (bool) {
    const answer = readlineSync.question("wate your answer? \n");

    if (riddleObj.correctAnswer === answer) {
      console.log("correct!\nGreat job!");
      bool = false;
    }
  }
}

export function measureSolveTime(fn) {
  let now = Date.now();
  fn();
  let now2 = Date.now();

  let time = (now2 - now) / 1000;

  return time;
}
