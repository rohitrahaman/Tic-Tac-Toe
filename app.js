let boxes = document.querySelectorAll(".box");
let resetbut = document.querySelector("#reset-button");
let newgame = document.querySelector("#newgame-button");
let msgcount = document.querySelector(".msg-cont");
let msgs = document.querySelector("#msg");
let result = document.querySelector(".resultbord");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetbutton = () => {
  turnO = true;
  enableBoxes();
  msgcount.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWin();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWin = (winner) => {
  msgs.innerText = `Congratulations!!! winner is ${winner}`;
  msgcount.classList.remove("hide");
  disabledBoxes();
};

const checkWin = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWin(pos1val);
      }
    }
  }
};

newgame.addEventListener("click", resetbutton);

resetbut.addEventListener("click", resetbutton);
