const gameOptions = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const random = Math.floor(Math.random() * gameOptions.length);
    return random, gameOptions[random];
}
    
let playerScore = 0; 
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'You Tie. Play again!';
    }
    else if (playerSelection === 'paper' && computerSelection == 'rock') {
        playerScore ++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        playerScore ++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        playerScore ++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock'){
        computerScore ++;
        return `You Loose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        computerScore ++;
        return `You Loose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        computerScore ++;
        return `You Loose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('type rock, paper or scissors!');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore){
        console.log(`You win the round of 5! You: ${playerScore} Comp: ${computerScore}`);
    }
    else if (computerScore> playerScore){
        console.log(`You loose the round of 5! You: ${playerScore} Comp: ${computerScore}`);
    }
    else {
        console.log(`You tie!You: ${playerScore} Comp: ${computerScore}`);
    }
}


game();

