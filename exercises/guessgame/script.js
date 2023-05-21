const intInput = document.getElementById("txtNum");
const lblResult = document.getElementById("lblResult");
const lblLife = document.getElementById("lblLife");
const lblHeart = document.getElementById("lblheart");
const btnStart = document.querySelector("#btnStart");
const btnGuess = document.querySelector("#btnGuess");
let counter = lblLife.innerText;

//random number between 1-50
let sayi = Math.floor(Math.random() * 50) + 1;

console.log(sayi);

function start() {
  btnGuess.classList.remove("d-none");
  lblLife.classList.remove("d-none");
  intInput.classList.remove("d-none");
  intInput.removeAttribute("disabled");
  btnStart.classList.add("d-none");
  lblHeart.classList.remove("d-none");
  lblResult.classList.add("text-light");
  lblResult.innerText = "";
  lblLife.innerText = 10;
  counter = 10;
}

function endGame() {
  btnGuess.classList.add("d-none");
  lblLife.classList.add("d-none");
  intInput.classList.add("d-none");
  btnStart.innerText = "Play Again";
  btnStart.classList.remove("d-none");
  lblHeart.classList.add("d-none");
}

btnStart.addEventListener("click", () => {
  start();
});

intInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    btnGuess.click();
  }
});

btnGuess.addEventListener("click", () => {
  if (intInput.value < sayi) {
    lblResult.innerText = "Too small. Guess higher 👍";
    counter--;
    lblLife.innerText = counter;
    if (counter === 0) {
      lblResult.innerText = "You lost 💔";
      endGame();
    }
  } else if (intInput.value > sayi) {
    lblResult.innerText = "Too big. Guess lower 👎!";

    counter--;
    lblLife.innerText = counter;
    if (counter === 0) {
      lblResult.innerText = "You lost 💔";
      endGame();
    }
  } else {
    lblResult.innerText = "You Guessed! 🎯";
    endGame();
  }
  intInput.focus();
  intInput.value = "";
});
