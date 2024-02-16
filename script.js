// starting point score
let playerWins = 0;
let computerWins = 0;


// Add an event listener to the buttons that call your game function with the correct playerSelection every time a button is clicked.
let allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', e => {
        game(button.id)
        console.log(playerWins, computerWins);
    });
});


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

    if (playerSelection === "rock" && computerSelection === "rock") {
        document.querySelector('.message').innerText = "Tie! -_- You both have Rock"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        document.querySelector('.message').innerText = "You lose! :( Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        document.querySelector('.message').innerText = "You win! :D Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        document.querySelector('.message').innerText = "You win! :D Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        document.querySelector('.message').innerText = "Tie! -_- You both have Paper"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        document.querySelector('.message').innerText = "You lose! :( Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        document.querySelector('.message').innerText = "You lose! :( Rock beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        document.querySelector('.message').innerText = "You win! :D Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        document.querySelector('.message').innerText = "Tie! -_- You both have Rock"
    }

    document.querySelector('#player-score span').innerText = playerWins;
    document.querySelector('#computer-score span').innerText = computerWins;
}


// play a 5 round game that keeps score and reports a winner or loser at the end
function game(selection) {
    const playerSelection = selection;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    if (computerWins === 5) {
        if(confirm('You lose you loser! 😂 - try again')) {
            resetGame()
        }
    } else if (playerWins === 5) {
        if(confirm('You win - SUGEEEE! ⭐️.⭐️ - play again')) {
            resetGame()
        }
    }
}

// reset game after 5 rounds
function resetGame() {
    playerWins = 0
    computerWins = 0
    document.querySelector('.message').innerText = ''
    document.querySelector('#player-score span').innerText = '0';
    document.querySelector('#computer-score span').innerText = '0';
}