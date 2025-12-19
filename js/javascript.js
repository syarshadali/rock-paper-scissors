let humanScore = 0;
let computerScore = 0;

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


const getHumanChoice = () => {
    let choice2 = prompt('choose what to throw:').toLowerCase();
    return choice2;
}


const drawRound = () => {
    console.log("Round was draw. Play again.");
}


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
    }
}


const playGame = () => {
    
}
