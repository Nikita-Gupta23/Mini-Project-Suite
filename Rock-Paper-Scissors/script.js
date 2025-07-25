let btns = document.querySelectorAll("button");
let msg = document.querySelector(".msg");
let userScore = 0;
let compScore = 0;
let userScoreDisplay = document.querySelector("#userscore");
let compScoreDisplay = document.querySelector("#compscore");
const compMoveDisplay = document.querySelector("#comp-move");
const userMoveDisplay = document.querySelector("#your-move");

const getEmoji = (choice) => {
  switch (choice) {
    case "rock":
      return "🪨";
    case "paper":
      return "📜";
    case "scissors":
      return "✂️";
    default:
      return "🤖";
  }
};


btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const userChoice = btn.getAttribute("id");
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      playGame(userChoice);
    }
    });
});

const genCompChoice = () => {
    options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const drawGame = () => {
    console.log("Game draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "#444";
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    userScore++;
    userScoreDisplay.textContent = userScore;
    } else {
        console.log("You lose!");
        msg.innerText = "You lose!";
         msg.style.backgroundColor = "red";
    compScore++;
    compScoreDisplay.textContent = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("User choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice=", compChoice);

     compMoveDisplay.innerText = getEmoji(compChoice);
userMoveDisplay.innerText=getEmoji(userChoice)
     if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = false;

    if (userChoice === "rock") {
      userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else if (userChoice === "scissors") {
      userWin = compChoice === "paper";
    }

    showWinner(userWin);
    }
}