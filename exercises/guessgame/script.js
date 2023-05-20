const intInput = document.getElementById("txtNum");
const lblResult = document.getElementById("lblResult");
const lblLife = document.getElementById("lblLife");

//random number between 1-100
let sayi = Math.floor(Math.random() * (100)) + 1;
let counter = 10;

console.log(sayi)

document.querySelector("#btnStart").addEventListener("click",()=>{
    btnGuess.classList.remove("d-none");
    intInput.classList.remove("d-none");
    intInput.removeAttribute("disabled");
    btnStart.classList.add("d-none");
})

document.querySelector("#btnGuess").addEventListener("click",()=>{
    if (intInput.value < sayi){
        lblResult.innerText = "Too small. Guess higher";
    }else if(intInput.value > sayi){
        lblResult.innerText = "Too big. Guess lower";
    }else{
        lblResult.innerText = "You Guessed";
        lblResult.classList.remove("text-danger");
        lblResult.classList.add("text-success");
    }
})