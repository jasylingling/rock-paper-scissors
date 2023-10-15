let playerWins = 0;
let computerWins = 0;

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

// console.log("Computer's Choice: " + getComputerChoice())


// play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        if (playerSelection === "rock" && computerSelection === "rock") {
            return "Tie! -_- You both have Rock"
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerWins++;
            return "You lose! :( Paper beats Rock"
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerWins++;
            return "You win! :D Rock beats Scissors"
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerWins++;
            return "You win! :D Paper beats Rock"
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            return "Tie! -_- You both have Paper"
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerWins++;
            return "You lose! :( Scissors beats Paper"
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerWins++;
            return "You lose! :( Rock beats Scissors"
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerWins++;
            return "You win! :D Scissors beats Paper"
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            return "Tie! -_- You both have Rock"
        }
    } else {
        return "Wrong input you baka! You lose a turn 🤡 "
    }
}



// play a 5 round game that keeps score and reports a winner or loser at the end
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please enter either 'Rock', 'Paper' or 'Scissors'");
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }

    if (computerWins === playerWins) {
        return `It's a tie!
Computer: ${computerWins} | You: ${playerWins}`;
    } else if (computerWins > playerWins) {
        return `You lose you loser! 😂
Computer: ${computerWins} | You: ${playerWins}`;
    } else if (computerWins > playerWins) {
        return `You win - SUGEEEE! ⭐️.⭐️
Computer: ${computerWins} | You: ${playerWins}`;
    }
}

alert(game());