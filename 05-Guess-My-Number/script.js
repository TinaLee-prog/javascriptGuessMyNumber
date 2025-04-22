'use strict';

// Constants
const maxScore =20;
const numWidthWin ='30rem';
const numWidthDefault = '15rem';
const colorBgDefault = '#222';
const colorBgWinStart = '#AFEEEE';
const colorBgWinEnd = '#0D98BA';

// Game State
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = maxScore;

//Update function
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const displayNumber = number =>{
    document.querySelector('.number').textContent = number;
}

const updateScore = score => {
    document.querySelector('.score').textContent = score;
}

const winStyle = () => {
    document.body.style.background = `linear-gradient(${colorBgWinStart}, ${colorBgWinEnd})`;
    document.querySelector('.number').style.width = numWidthWin;
}

const resetStyle = () => {
    document.body.style.background = colorBgDefault;
    document.querySelector('.number').style.width = numWidthDefault;
};

//Event Handler
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log('guess', typeof guess);

    if(!guess){
        displayMessage('🚫 No number!');

        //when player win
    }else if (guess === secretNumber){
        displayMessage('😄 Correct Number');
        displayNumber(secretNumber);
        winStyle();       

        //when guess is wrong
    }else if(guess !== secretNumber){
        if (score > 1){
            displayMessage(guess > secretNumber ? '🙀 Too high!':'🙀 Too low!');
            score --;
            updateScore(score);
        }else{
            displayMessage('💀 You lost the game!');
            updateScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = maxScore;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    displayMessage('Start guessing...');  
    updateScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';
    resetStyle();
});