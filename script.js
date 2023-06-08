const player0El = document.querySelector('.player__0');
const player1El = document.querySelector('.player__1');
const score0El = document.querySelector('#score__0');
const score1El = document.getElementById('score__1');
const current0El = document.getElementById('current__0');
const current1El = document.getElementById('current__1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn__new');
const btnRoll = document.querySelector('.btn__roll');
const btnHold = document.querySelector('.btn__hold');


const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0El.innerText = 0;
    score1El.innerText = 0;
    current0El.innerText = 0;
    current1El.innerText = 0;
  
    diceEl.classList.add('hidden');
    player0El.classList.remove('player__winner');
    player1El.classList.remove('player__winner');
    player0El.classList.add('player__active');
    player1El.classList.remove('player__active');
  };
  init();