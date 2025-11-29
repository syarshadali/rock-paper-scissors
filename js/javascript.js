const getComputerChoice = () => {
    let choice1 = Math.random();
    if (choice1 < 0.34) {
        choice1 = 'rock';
    } else if (choice1 <= 0.67) {
        choice1 = 'paper';
    } else {
        choice1 = 'scissors';
    }
    return choice1;
}

const getHumanChoice = () => {
    let choice2 = prompt('choose what to throw:', 'Rock, Paper, Scissors').toLowerCase();
    return choice2;
}
console.log(getHumanChoice());