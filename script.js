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

let scores, currentScore, activePlayer, playing;

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

  const switchPlayer = function () {
    document.getElementById(`current__${activePlayer}`).innerText = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player__active');
    player1El.classList.toggle('player__active');
  };

  btnRoll.addEventListener('click', function () {
    if (playing) {
      const dice = Math.trunc(Math.random() * 6) + 1;
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;
      if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current__${activePlayer}`).innerText = currentScore;
      } else {
        switchPlayer();
      }
    }
  });

  btnHold.addEventListener('click', function () {
    if (playing) {
      scores[activePlayer] += currentScore;
      document.getElementById(`score__${activePlayer}`).innerText = scores[activePlayer];
      if (scores[activePlayer] >= 100) {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player__${activePlayer}`).classList.add('player__winner');
        document.querySelector(`.player__${activePlayer}`).classList.remove('player__active');
      } else {
        switchPlayer();
      }
    }
  });
  
  btnNew.addEventListener('click', init);
