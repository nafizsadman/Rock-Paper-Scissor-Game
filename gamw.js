


// for creating score 
let gameScore = JSON.parse(localStorage.getItem('score'));

if (gameScore === null) {
    gameScore = {
        wins: 0,
        loses: 0,
        ties: 0
    };
}

function resultScore() {

    document.querySelector('.js-game-score').innerHTML = `Wins: ${gameScore.wins}, Losses: ${gameScore.loses}, Ties: ${gameScore.ties}`;
    
}


function dataReset() {
    
    gameScore.wins = 0;
    gameScore.loses = 0;
    gameScore.ties = 0;
    localStorage.removeItem('score');
    resultScore();
    
    }


//Functional part in game  

function playGame(playerMove) {

    let result = '';
    
    let computerMove = pickComputerMove();
    
    if (playerMove === 'rock') {
        
        if (computerMove === 'rock') {
            result = 'Tied.';
            
            document.querySelector('.com_move').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
            
            document.querySelector('.com_move').innerHTML = '<i class="fa-solid fa-hand"></i>';
        } else {
            result = 'You win.';
            
            document.querySelector('.com_move').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
        }
        
        document.querySelector('.my_move').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
        
    } else if (playerMove === 'paper') {
        
        if (computerMove === 'rock') {
            result = 'You lose.';
            document.querySelector('.com_move').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
        } else if (computerMove === 'paper') {
            result = 'Tied.';
            document.querySelector('.com_move').innerHTML = '<i class="fa-solid fa-hand"></i>';
        } else {
            result = 'You win.';
            
            document.querySelector('.com_move').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
        }
        
        document.querySelector('.my_move').innerHTML = '<i class="fa-solid fa-hand"></i>';
    
    } else {
    
        if (computerMove === 'rock') {
            result = 'You win.';
            document.querySelector('.com_move').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
            document.querySelector('.com_move').innerHTML = '<i class="fa-solid fa-hand"></i>';
        } else {
            result = 'Tied.';
            
            document.querySelector('.com_move').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
        }
        document.querySelector('.my_move').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
    }
    
    document.querySelector('.js-result').innerHTML = `${result}`;
    
    if(result === 'You win.') {
        gameScore.wins ++;
    } else if (result === 'You lose.') {
        gameScore.loses ++;
    } else {
        gameScore.ties ++;
    }

    localStorage.setItem('score', JSON.stringify(gameScore));
    
    resultScore();
    
    
}


// create random number 

function pickComputerMove() {

    const randomNumber = Math.random();
    
    let computerMove = '';
    
    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissor';
    }
    
    return computerMove;
    
}