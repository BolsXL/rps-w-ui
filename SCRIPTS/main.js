// VARIABLES
const PLAYER_SCORE = document.querySelector('.player-score');
const COM_SCORE = document.querySelector('.com-score')
const SUB = document.querySelector('.sub');
const ROCK = document.querySelector('.rock');
const PAPER = document.querySelector('.paper');
const SCISSORS = document.querySelector('.scissors');

let playerScore = Number(PLAYER_SCORE.textContent);
let comScore = Number(COM_SCORE.textContent);

ROCK.addEventListener('click', function () {playRound('rock')});
PAPER.addEventListener('click', function () {playRound('paper')});
SCISSORS.addEventListener('click', function () {playRound('scissors')});


// RUNNING CODE



// FUNCTIONS
function playRound(input) {
    checkScore();
    let choice = input;
    let comChoice = comSelection();
    if (choice == comChoice) {
        SUB.textContent = "Draw, neither side receives a point!";
        return;
    }
    else if (choice == 'rock') {
        if (comChoice == 'paper') {
            SUB.textContent = "You lose the round, 1 point for the computer.";
            comScore += 1;
        }
        else {
            SUB.textContent = "You win the round, 1 point for you.";
            playerScore += 1;
        }
    }
    else if (choice == 'paper') {
        if (comChoice == 'scissors') {
            SUB.textContent = "You lose the round, 1 point for the computer.";
            comScore += 1;
        }
        else {
            SUB.textContent = "You win the round, 1 point for you.";
            playerScore += 1;
        }
    }
    else if (choice == 'scissors') {
        if (comChoice == 'rock') {
            SUB.textContent = "You lose the round, 1 point for the computer.";
            comScore += 1;
        }
        else {
            SUB.textContent = "You win the round, 1 point for you.";
            playerScore += 1;
        }
    }
    PLAYER_SCORE.textContent = playerScore;
    COM_SCORE.textContent = comScore;
    checkScore();
}

function checkScore() {
    if (playerScore == 3) {
        SUB.textContent = "You win! Refresh to Play Again!";
        ROCK.removeEventListener('click');
        PAPER.removeEventListener('click');
        SCISSORS.removeEventListener('click');
    }
    else if (comScore == 3) {
        SUB.textContent = "Computer wins! Refresh to Play Again!";
        ROCK.removeEventListener('click');
        PAPER.removeEventListener('click');
        SCISSORS.removeEventListener('click');
    }
}

function comSelection() {
    let roll = rollDice(3);
    if (roll == 1) {
        return 'rock';
    }
    else if (roll == 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function rollDice(n) {
    return Math.ceil(Math.random() * n);
}