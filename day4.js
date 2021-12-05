const { cp } = require("fs");
const { exit } = require("process");

const arrayWithoutElementAtIndex = (arr, index) => arr.filter((value, arrIndex) => index !== arrIndex);
let input = require("fs").readFileSync("./in.txt").toString().split('\n');
let nums = eval('[' + input[0] + ']');  // cringe.
let input1 = input.splice(2);
let boards = [];
let currBoard = [];
let currBoardI = 0;
for (let line of input1) {
  line = line.trimLeft().split(/ +/gm);
  if (line[0] === '') {
    boards.push(currBoard.filter(n => n));
    currBoard = [];
    continue;
  }
  currBoard.push(line);
}
boards.push(currBoard.filter(n => n));
currBoard = [];
boards = arrayWithoutElementAtIndex(boards, boards.length - 1)

function markWithNumber(n) {
  for (let i = 0; i < boards.length; i++) {
    let board = boards[i];
    for (let j = 0; j < board.length; j++) {
      let arr = board[j];
      for (let k = 0; k < arr.length; k++) {
        let n1 = parseInt(arr[k], 10);
        if (n1 === n) {
          boards[i][j][k] = `*${boards[i][j][k]}`;
        }
      }
    }
  }
}
function unMarkWithNumber(n) {
  for (let i = 0; i < boards.length; i++) {
    let board = boards[i];
    for (let j = 0; j < board.length; j++) {
      let arr = board[j];
      for (let k = 0; k < arr.length; k++) {
        let n1 = parseInt(arr[k].replace("*", ""), 10);
        if (n1 === n) {
          boards[i][j][k] = `${boards[i][j][k].replace("*", "")}`;
        }
      }
    }
  }
}
function detectWinners() {
  // Detect horizontally
  let out = []
  for (let i = 0; i < boards.length; i++) {
    let board = boards[i];
    for (let j = 0; j < board.length; j++) {
      let arr = board[j];
      if (arr.filter((v) => v.startsWith('*')).length === arr.length) {
        if (!out.includes(i)) out.push(i);
      }
    }
  }
  // Detect vertically
  for (let i = 0; i < boards.length; i++) {
    let board = boards[i];
    for (let j = 0; j < board.length; j++) {
      let arr = [];
      for (let k = 0; k < board.length; k++) {
        arr.push(board[k][j]);
      }
      if (arr.filter((v) => v.startsWith('*')).length === arr.length) {
        if (!out.includes(i)) out.push(i);
      }
    }
  }
  return out;
}
let winners = [];
function calculate(winner, number) {
  //let winningBoard = boards[winner];
  let out = 0;
  for (let line of winner) {
    for (let str of line) {
      if (!str.startsWith('*')) {
        out += parseInt(str, 10);
      }
    }
  }
  console.log(out, "*", number);
  return out * number;
}
let a = false;
let b1 = boards;
let lwinner = undefined;
let llwinner = null;
//console.log(boards)
let preWinner;
let num = 0;
let ab = false;
for(let i = 0; i < nums.length; i++) {
  num = nums[i];
  console.log("Drawing", num, "!");
  markWithNumber(num);
  let winnerList = detectWinners();
  if(winnerList.length !== 0) {
    for(let winner of winnerList) {
      winners.push(boards[winner])
      boards = arrayWithoutElementAtIndex(boards, winner);
      console.log(boards);
      if(boards.length === 1) {
        console.log("a")
        let last = boards[0]
        console.log(last);
        console.log(calculate(last, num));
        exit(0)
      }
    }
  }
}
let last = winners.pop();
console.log(last);
console.log(calculate(last, num));
