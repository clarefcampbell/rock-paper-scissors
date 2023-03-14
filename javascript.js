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
        console.log(`Player wins! ${playerSelection} beats ${computerSelection}!`);
        return 'Player';
    } else if (playerSelection == computerSelection) {
        console.log(`It's a tie between ${playerSelection}`);
        return "Tie";
    } else {
        console.log(`Computer wins! ${computerSelection} beats ${playerSelection}!`);
        return "Computer";
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
    let ties = 0;

    //Play 5 rounds
    for (let i = 0; i < 5; i++) {
        //Get player choice each round
        playerSelection = prompt("Rock, Paper, Scissors?");
        //Determine winner of round by storing 'I' (tie), 'C' (computer) or 'P' (player) from return statements 
        roundWinner = playRound(playerSelection, getComputerChoice());
        //Add point for the round
        switch (roundWinner) {
            case 'Player':
                playerScore++;
                break;
            case 'Computer':
                computerScore++;
                break;
            case 'Tie':
                ties++;
                break;
        }
        console.log(`Player now has ${playerScore} points vs Computer at ${computerScore} points. ${ties} ties.`);
    }

    //Determine winner
    if (playerScore > computerScore) {
        return `Player wins ${playerScore} to ${computerScore}`;
    } else if (playerScore == computerScore) {
        return "Final result: It's a tie!";
    } else {
        return `Computer wins ${computerScore} to ${playerScore}`;
    }
}
//display these results
console.log(game());