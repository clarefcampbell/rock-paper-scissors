//Rock Paper Scissors

//Get random computer choice, return 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    randomChoice = Math.floor(Math.random()*3);
    switch(randomChoice) {
        case 0: 
            return "Rock";
            break;
        case 1: 
            return "Paper";
            break;
        case 2: 
            return "Scissors";
        default:
            return "something went wrong";
    }
}

//Play single round 
function playRound(playerSelection, computerSelection) {
    //Player Selection is case insensitive. Capitalize only first letter.
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
    //Winning conditions and return strings
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        return `Player wins! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}!`;
    }
}

//test functions so far before moving on 
console.log(playRound("rock", getComputerChoice()));

//create function called game() 
    //call playRound 5 times and keep score
function game() {
    for (let i = 0; i < 5; i++) {
        //use prompt() to get input from the user 
    }
}
//console.log() to display these results