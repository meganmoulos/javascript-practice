//Rock, Paper, Scissor

//Rock beats scissor, scissor beats paper, paper beats rock
//random selection of tie, win or lose against computer

//prompt from user - user picks rock, paper or scissor, make sure they make a valid selection
//to randomize computer - choose a random number 1 to 9 (0 = rock, 1 = paper, 2 = scissors)
//if user selects same as computer - tie
//if the user selects scissor - if paper comp loses, if rock user wins
//if the user selects rock - if paper comp wins, if scissor user wins
//if user selects paper - if rock user wins, if scissor comp wins
//alert user of win, lose, tie


function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function gameWinner(userChoice, computerChoice){
    if (userChoice === 'scissors' && computerChoice === 'paper'){
        return 'You Win!';
    } else if (userChoice === 'scissors' && computerChoice === 'rock'){
        return 'You Lose!';
    } else if (userChoice === 'rock' && computerChoice === 'paper'){
        return 'You Lose!';
    } else if (userChoice === 'rock' && computerChoice === 'scissors'){
        return 'You Win!';
    } else if (userChoice === 'paper' && computerChoice === 'rock'){
        return 'You Win!';
    } else if (userChoice === 'paper' && computerChoice === 'scissors'){
        return 'You Lose!';
    } else {
        return 'You Tied!';
    }
}

function runGame(){
    let userChoice = ''; 
    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors'){
        userChoice = prompt('Choose rock, paper, or scissors').toLowerCase().trim(); 
    }
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    alert(gameWinner(userChoice, computerChoice));
}

runGame();
