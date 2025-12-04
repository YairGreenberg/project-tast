import readlineSync from "readline-sync";

export function createPlayer(name) {
  let objectName = {
    name: name,
    times: [],
  };
  return objectName;
}

function addSolveTime(player, seconds) {
  player[times] = seconds; //// or player.times
}

//     ○ קלט: אובייקט שחקן.
// ○ התנהגות:
// ■ מחשב את הזמן הכולל
// ■ מחשב את הזמן הממוצע לחידה (סה"כ חלקי
// מספר החידות).
// ■ מדפיס את שני הערכים למסוף בשניות.
// ניתן להוסיף תיקיות/קבצים/פונקציות עזר נוספות אם רוצים, אך אלה
// חייבים להתקיים ולפעול כראוי.

function showStats(player) {}

export function askRiddle(riddleObj) {
  let list = riddleObj.choices;

  console.log(
    `riddle ${riddleObj.id}: ${riddleObj.name} \n ${riddleObj.taskDescription}\n `
  );
  if (riddleObj.choices) {
    console.log(list);
  }
  const answer = readlineSync.question("wate your answer? \n");
  let bool = true;
  while (bool) {
    const answer = readlineSync.question("wate your answer? \n");

    if (riddleObj.correctAnswer === answer) {
      console.log("correct!\nGreat job!");
      bool = false;
    }
  }

  // ■ עבור חידות רגילות: השווה את הקלט ישירות ל-
  // correctAnswer (השוואת מחרוזות).
  // ■ עבור חידות רב-ברירה: השווה את מספר האפשרות שנבחרה
  // לאפשרות הנכונה.
}

export function measureSolveTime(fn) {
  let now = Date.now()
  let secondsBefor = now.getSeconds();
  fn();
  let now2 =  Date.now();
  let secondsAfter = now2.getSeconds();
  
  let time = secondsAfter  -secondsBefor
  console.log(time);
  
  return time
  //     ○ קלט: פונקציה (לדוגמה, פונקציה שקוראת ל-
  // askRiddle).
  // ○ התנהגות:
  // ■ אחסון השעה הנוכחית לפני הפעלת הפונקציה.
  // ■ הפעלת הפונקציה.
  // ■ אחסון השעה הנוכחית לאחר סיומה.
  // ■ החזרת ההפרש בשניות.
  // ○ תשתמשו בזה כדי למדוד כמה זמן לוקח לפתור כל חידה.
  // ניתן להוסיף פונקציות עזר נוספות במידת הצורך, אך הן חייבות להתקיים ולפעול כראוי.
}
//fn(() => riddleObj);