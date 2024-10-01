'use strict';

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.guess-message').textContent = 'Правильно!';

// document.querySelector('.question').textContent = 7;

// document.querySelector('.score').textContent = 11;

// document.querySelector('.number-input').value = 13;

let target = Math.trunc(Math.random() * 20) + 1;

console.log(target);

let score = 20;

let bestScore = 0;

const EventHandler = function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  // No input
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введи число!';
  } else {
    // Win
    if (guessingNumber === target) {
      document.querySelector('.guess-message').textContent = 'Правильно';
      document.querySelector('body').style.backgroundColor = 'lime';
      document.querySelector('.question').textContent = target;
      document.querySelector('.question').style.fontSize = '60px';
      document.querySelector('.question').style.width = '500px';
      if (score > bestScore) {
        bestScore = score;
        document.querySelector('.highscore').textContent = bestScore;
      }
      // Input is wrong
    } else if (guessingNumber !== target && score > 1) {
      document.querySelector('.guess-message').textContent =
        guessingNumber > target ? 'Слишком много' : 'Слишком мало';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  }
};

function restart() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess-message').textContent = 'Начни угадывать';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.fontSize = '20px';
  document.querySelector('.question').style.width = '200px';
  target = Math.trunc(Math.random() * 20) + 1;
  console.log(target);
}

document.querySelector('.check').addEventListener('click', EventHandler);

document.querySelector('.again').addEventListener('click', restart);
