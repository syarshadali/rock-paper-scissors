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


const showWinner = (humanWin, humanChoice, computerChoice) => {
    if (humanWin) {
        humanScore++;
        console.log(`You win! your ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats your ${humanChoice}`);
    }
};


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


const playGame = () => {
    
}
