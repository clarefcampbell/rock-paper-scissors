//Rock Paper Scissors

//Initialize global variables   
let playerScore = 0;
let computerScore = 0;
let ties = 0;
const results = document.getElementById('results');
results.textContent = 'Rock Paper Scissors!';

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
}

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
        results.textContent += `\nPlayer wins! ${playerSelection} beats ${computerSelection}! `;
        return 'Player';
    } else if (playerSelection == computerSelection) {
        results.textContent += `\nIt's a tie between ${playerSelection}. `;
        return "Tie";
    } else {
        results.textContent += `\nComputer wins! ${computerSelection} beats ${playerSelection}! `;
        return "Computer";
    }
}

//Play rounds, keep score, determine winner
function game(playerSelection) {
    //Reset results if starting new game
    if (playerScore == 0 && computerScore == 0) {
        results.textContent = 'Rock Paper Scissors!';
    }

    //Determine winner of round by storing 'I' (tie), 'C' (computer) or 'P' (player) from return statements 
    let roundWinner = playRound(playerSelection, getComputerChoice());
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
    results.textContent += `Player now has ${playerScore} points vs Computer at ${computerScore} points. ${ties} ties.`;

    //Determine winner
    if (playerScore >= 5) {
        results.textContent += `\nPlayer wins ${playerScore} to ${computerScore}`;
        resetScore();
    } else if (computerScore >= 5) {
        results.textContent += `\nComputer wins ${computerScore} to ${playerScore}`;
        resetScore();
    }
}

//Use button events to control the game
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', e => game(e.target.id)));
