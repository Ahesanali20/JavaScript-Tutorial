let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const guessesRemaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let prevGuess = [];
let numberOfGuesses = 0;
let playGame = true;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (userInput.value === "") {
    alert("Please enter a number");
    return;
  }
  const guess = parseInt(userInput.value);
  validateGuess(guess);
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a Number Greater Than 1");
  } else if (guess > 100) {
    alert("Please Enter a Number Less Than 100");
  } else {
    prevGuess.push(guess);
    displayGuess(guess);

    if (numberOfGuesses >= 10) {
      displayMessage(`Game Over! The number was ${randomNumber}.`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Won.. You Guessed Right Number`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`${guess} Less than Random Number`);
  } else if (guess > randomNumber) {
    displayMessage(`${guess} Greater than Random Number`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guesses.innerHTML += `${guess} , `;
  numberOfGuesses++;
  guessesRemaining.innerHTML = `${10 - numberOfGuesses}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "disabled");
  const p = document.createElement("p");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  p.style.cursor = "pointer";
  startOver.appendChild(p);
  playGame = false;

  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", resetGame);
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  prevGuess = [];
  numberOfGuesses = 0;
  guesses.innerHTML = "";
  guessesRemaining.innerHTML = "10";
  lowOrHi.innerHTML = "";
  userInput.removeAttribute("disabled");
  userInput.value = "";

  const newGameElement = document.querySelector("#newGame").parentElement;
  if (newGameElement) {
    newGameElement.remove();
  }

  playGame = true;
}
