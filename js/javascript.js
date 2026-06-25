
let humanScore = 0; // variables to keep track of scores
let computerScore = 0;


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
    console.log("Round " + round + ": " + "Round was draw.");
}


// Function to display winner and loser of the round
const showWinner = (humanWin, humanChoice, computerChoice) => {
    if (humanWin) {
        humanScore++;
        console.log(`You win! your ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats your ${humanChoice}`);
    }
};


// Function for the logic of the round
const playRound = () => {
    // Generate computer choice
    const computerChoice = getComputerChoice();
    console.log("Computer Choice = ", computerChoice);
    // Generate human choice
    const humanChoice = getHumanChoice();
    console.log("Human Choice = ", humanChoice);
    
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
        console.log("Round " + round + ": " + "You: " + humanScore + " Comp: " + computerScore);
    }
}


// Function to run playRound function 5 times
const playGame = () => {
    for (let i = 1; i < 6; i++) {
        playRound();
    }
       
    if (humanScore > computerScore) {
        console.log("Final Score: "+" You: "+humanScore+" Comp: "+computerScore);

        // To show winner of the game
        console.log("CONGRATULATIONS! YOU WIN THE GAME.");
    } else if (humanScore < computerScore) {
        console.log("Final Score: "+" You: "+humanScore+" Comp: "+computerScore);

        // To show loser of the game
        console.log("OH GOD! YOU LOSE THE GAME.");
    } else {
        console.log("Final Score: "+" You: "+humanScore+" Comp: "+computerScore);

        // Game Draw
        console.log("GAME WAS DRAW. PLAY AGAIN!");
    }
}


playGame();

