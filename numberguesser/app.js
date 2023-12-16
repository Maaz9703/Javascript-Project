// game value 
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI element 
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI max and min 
minNum.textContent = min;
maxNum.textContent = max;


game.addEventListener('mousedown',function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})


// listen on guess

guessBtn.addEventListener('click',function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`please enter a number between ${min} and ${max}`,'red');
    }

    if (guess === winningNum) {
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green'
        // setMessage(`${winningNum} is Correct,You Win`, 'green')
        gameOver(true,`${winningNum} is correct ,You win`)

        
    } else {
        guessesLeft = guessesLeft - 1 ;

        if (guessesLeft === 0) {
            gameOver(false,`Game Over , You Lost, the correct number was ${winningNum} ` , 'red')
        } else {
            guessInput.style.borderColor = 'red'
            
            guessInput.value = '';

            setMessage(`${guess} is not correct and ${guessesLeft} Guesses Left`)
        }
    }
})

function gameOver(won,msg) {

    let color;
    won === true ? color = 'green' : color = 'red'


    guessInput.disabled = true;
        guessInput.style.borderColor = 'green'
        setMessage(msg)
        MessageChannel.style.color = color;

        guessBtn.value = 'Play-again';
        guessBtn.className = 'play-again';
}

function getRandomNum(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}


function setMessage(msg,color) {
    message.style.color = color
    message.textContent = msg
}