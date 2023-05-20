const intInput = document.getElementById("txtNum");
const lblResult = document.getElementById("lblResult");
const lblLife = document.getElementById("lblLife");
const lblHeart = document.getElementById("lblheart");
const btnStart = document.querySelector("#btnStart");
const btnGuess = document.querySelector("#btnGuess");

//random number between 1-100
let sayi = Math.floor(Math.random() * (100)) + 1;
let counter = lblLife.innerText;

console.log(sayi);

btnStart.addEventListener("click",()=>{
    btnGuess.classList.remove("d-none");
    lblLife.classList.remove("d-none");
    intInput.classList.remove("d-none");
    intInput.removeAttribute("disabled");
    btnStart.classList.add("d-none");
    lblHeart.classList.remove("d-none");
    lblResult.classList.add("text-light");
    lblResult.innerText = "";
    lblLife.innerText = 10;
})

btnGuess.addEventListener("click",()=>{
    if (intInput.value < sayi){
        lblResult.innerText = "Too small. Guess higher 👍";
        counter--;
        lblLife.innerText = counter;
        if(counter === 0){
            lblResult.innerText = "You lost 💔";
            btnGuess.classList.add("d-none");
            lblLife.classList.add("d-none");
            intInput.classList.add("d-none");
            btnStart.innerText = "Play Again";
            btnStart.classList.remove("d-none");
            lblHeart.classList.add("d-none");
        }
        
    }else if(intInput.value > sayi){
        lblResult.innerText = "Too big. Guess lower 👎!";
        
        counter--;
        lblLife.innerText = counter;
        if(counter === 0){
            lblResult.innerText = "You lost 💔";
            lblResult.classList.remove("text-light");
            lblResult.classList.add("text-danger");
            btnGuess.classList.add("d-none");
            lblLife.classList.add("d-none");
            intInput.classList.add("d-none");
            btnStart.innerText = "Play Again";
            btnStart.classList.remove("d-none");
            lblHeart.classList.add("d-none");
        }
        

    }else{
        lblResult.innerText = "You Guessed! 🎯";
        btnGuess.classList.add("d-none");
        lblLife.classList.add("d-none");
        intInput.classList.add("d-none");
        btnStart.innerText = "Play Again";
        btnStart.classList.remove("d-none");
        lblHeart.classList.add("d-none");
    }
        intInput.focus();
        intInput.value = "";
})