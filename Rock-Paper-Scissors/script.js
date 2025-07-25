let btns = document.querySelectorAll("button");
let msg = document.querySelector(".msg");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const userChoice = btn.getAttribute("id");
        playGame(userChoice)
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
}

const showWinner = () => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = "You win!";
    } else {
        console.log("You lose!");
        msg.innerText = "You lose!";
    }
}

const playGame = (userChoice) => {
    console.log("User choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice=", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}