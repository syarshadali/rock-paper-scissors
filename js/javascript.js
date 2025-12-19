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


const playRound = () => {
    
}


const playGame = () => {
    
}
