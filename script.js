let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            box.style.color = "#E63946";
            turn0 = false;
        } else {
            box.innerText = "X";
            box.style.color = "#06AED5";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disbaleBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbaleBoxes();
}

const showDraw = (draw) => {
    msg.innerText = `The Match is Draw`;
    msgContainer.classList.remove("hide");
    disbaleBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1value= boxes[pattern[0]].innerText;
        let pos2value= boxes[pattern[1]].innerText;
        let pos3value= boxes[pattern[2]].innerText;
        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value === pos2value && pos2value === pos3value){
                console.log("winner", pos1value);
                showWinner(pos1value);
            }
        }
    }

    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });
    if (isDraw) {
        showDraw();
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

