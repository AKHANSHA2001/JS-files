// console.log(parseInt(Math.random()*100 + 1));

let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){   //to verify if you are eligible to play the game
    submit.addEventListener('click', function(e){
        e.preventDefault(); //to hold the values into the form
        const guess = parseInt(input.value); //to take the values
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess) { //to validate wheather the input number is btw 1 & 100
    if(guess < 1 || guess > 100) { //to check the input number is
        alert('Please enter a number between 1 and 100');
    } else { //if the input number is btw 1 & 100
        prevGuess.push(guess);
        if (numGuess===11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
        checkGuess(guess);
    } 
}
function checkGuess(guess) {    //to check wheather guess is equal to the 'random number'
    if(guess === randomNumber) { //if the guess is equal to the 'random number'
        displayMessage(`You got it! The number was ${randomNumber}.`);
        endGame();
    } else if(guess > randomNumber) { //if the guess is greater than the 'random number
        displayMessage('Too high. Guess again.');
    } else if(guess < randomNumber) { //if the guess is less than the 'random number
        displayMessage('Too low. Guess again.');
    }
}
function displayGuess(guess) {  //also can be referred as clean-up method, to display the guesses each time
    input.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {  //to print low or high messaage
    lowOrHi.innerHTML =`<h2>${message}</h2>`;
    
}
function endGame() {
    input.value= '';
    input.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
    
}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess =[];
        numGuess =1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        input.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}