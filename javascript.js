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

//create function called game() 
    //call playRound 5 times and keep score
function game() {
    
    //Initialize variables
    let playerSelection;
    let roundWinner;
    let playerScore = 0;
    let computerScore = 0;

    //Play 5 rounds
    for (let i = 0; i < 5; i++) {
        //Get player choice each round
        playerSelection = prompt("Rock, Paper, Scissors?");
        //Determine winner of round by storing 'I' (tie), 'C' (computer) or 'P' (player) from return statements 
        roundWinner = playRound(playerSelection, getComputerChoice()).charAt(0);
        //Add point for the round
        switch (roundWinner) {
            case 'P':
                playerScore++;
                break;
            case 'C':
                computerScore++;
                break;
        }
    }

    //Determine winner
    if (playerScore > computerScore) {
        return `Player wins ${playerScore} to ${computerScore}`;
    } else if (playerScore == computerScore) {
        return "It's a tie!";
    } else {
        return `Computer wins ${computerScore} to ${playerScore}`;
    }
}
//display these results
console.log(game());