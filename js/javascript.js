// PSEUDOCODE:
// 1. Generate a random string from a set of three strings(rock, paper, scissors) through computer.
//    1a. Assign value randomly from 0 to 2. If 0 then rock, if 1 then paper, if 2 select scissors.
// 2. Make user enter one of the above three choices and return it, assuming user will always enter correct choice.
// 3. Intialize two counter variables that keep track of human and computer scores and set their values to zero.
// 4. Write a single round.
//    4a. Take human and computer choices as arguments.
//    4b. Make human choice parameter case-insensitive.
//    4c. If the round is draw, log message to the console.
//    4d. Check who is the winner, log message to the console.
//    4e. Increment human and computer scores based on the winner.
// 5. Call five rounds of the game. Log message to the console for the winner and the draw.



let humanScore = 0; // variables to keep track of scores
let computerScore = 0;


// Computer Choice
const getComputerChoice = () => {
    let choice1 = Math.floor(Math.random() * 3);
    if (choice1 === 0) {
        choice1 = "rock";
    } else if (choice1 === 1) {
        choice1 = "paper";
    } else {
        choice1 = "scissors";
    }
    return choice1;
}


// Human Choice
const getHumanChoice = () => {
    let choice2 = prompt('Enter rock or paper or scissors:').toLowerCase();
    return choice2;
}


// To show draw
const drawRound = () => {
    console.log("Round was draw.");
}


// To show winner and loser
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
        console.log("You: "+humanScore+" Comp: "+computerScore);
    }
}


// Function to play the entire game
const playGame = () => {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore) {
        console.log("Final Score: "+" You: "+humanScore+" Comp: "+computerScore);

        // To show winner of the game
        console.log("CONGRATULATIONS! YOU WIN!");
    } else if (humanScore < computerScore) {
        console.log("Final Score: "+" You: "+humanScore+" Comp: "+computerScore);

        // To show loser of the game
        console.log("OH GOD! YOU LOSE!");
    } else {
        console.log("Final Score: "+" You: "+humanScore+" Comp: "+computerScore);

        // Game Draw
        console.log("GAME WAS DRAW. PLAY AGAIN!");
    }
}


playGame();

