
let humanScore = 0; // variables to keep track of scores
let computerScore = 0;


/* Declare variables to access elements in javascript */

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const humanScorePara = document.querySelector("#human-score");
const computerScorePara = document.querySelector("#comp-score");

const message = document.querySelector("#message");

const resetBtn = document.querySelector("#reset-btn");



// Function for getting computer input

const getComputerChoice = () => {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        compChoice = "rock";
    } else if (compChoice === 1) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    return compChoice;
}


// Function to display round was draw

const drawRound = () => {
    msg.innerText = "Round was draw!";
    msg.style.backgroundColor = "#af54d9";
}


// Function for the logic of the round

const playRound = (humanChoice) => {
    console.log("Human Choice = ", humanChoice);
    // Generate computer choice
    const computerChoice = getComputerChoice();
    console.log("Computer Choice = ", computerChoice);

    
    if (humanChoice === computerChoice) {
        // Draw Round
        drawRound();
    } else {
        let humanWin = true;
        if (humanChoice === "rock") {
            // scissors, paper
            humanWin = computerChoice === "paper" ? false : true;
        } else if (humanChoice === "paper") {
            // rock, scissors
            humanWin = computerChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            humanWin = computerChoice === "rock" ? false : true;
        }
        showWinner(humanWin, humanChoice, computerChoice);
        
    }
}


// Attach an event listener to each choice which tracks the click event

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const humanChoice = choice.getAttribute("id");
        playRound(humanChoice);
    });
});


// Attach an event listener to Reset Button to track the click event


resetBtn.addEventListener("click", () => {
    resetGame();
});


// Function to display winner and loser of the round

const showWinner = (humanWin, humanChoice, computerChoice) => {
    if (humanWin) {
        humanScore++;
        humanScorePara.innerText = humanScore;
        msg.innerText = `You win! your ${humanChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#acd22d";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose! ${computerChoice} beats your ${humanChoice}`;
        msg.style.backgroundColor = "#ff00009e";
    }

    checkGameWinner();
};


/* Function to declare winner or loser of the game */

function checkGameWinner() {
    if (humanScore === 5) {
        message.innerText = "CONGRATULATIONS! YOU WIN THE GAME";
        message.style.backgroundColor = "#acd22d";
    } else if (computerScore === 5) {
        message.innerText = "OH GOD! YOU LOSE THE GAME";
        message.style.backgroundColor = "#ff00009e";
    } else if (humanScore === computerScore) {
        message.innerText = "GAME WAS DRAW. PLAY AGAIN!";
        message.style.backgroundColor = "#af54d9";
    }
}





