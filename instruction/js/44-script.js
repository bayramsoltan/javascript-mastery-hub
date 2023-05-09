const txtNum = document.querySelector("#txtNum");
const btnStart = document.querySelector("#btnStart");
const btnGuess = document.querySelector("#btnGuess");
const txtResult =document.querySelector("#txtResult");


let randomNumber = 0;

const start=()=>{
randomNumber = getRandomNumber();
txtNum.removeAttribute("disabled");
txtNum.focus();

btnGuess.classList.remove("d-none");
}

const guess = () =>{
    const guessNumber =Number(txtNum.value);
    if (!guessNumber || isNaN(guessNumber) || guessNumber>100 || guessNumber<1){
        txtResult.innerHTML ="Please type a number between 1-100";
        return;
    }
    if(guessNumber===randomNumber){
        txtResult.innerHTML = "You win!";
    }else if(guessNumber>randomNumber){
        txtResult.innerHTML = `${guessNumber} is too high! Lower the number!`;
    }else{
        txtResult.innerHTML = `${guessNumber} is too low! Raise the number`;
    }
    txtNum.focus();
    txtNum.value = "";
}

//Math.random creates random between 1-0
const getRandomNumber =()=>{
    return Math.floor(Math.random() * 100)+ 1; // creates random between 1-100, Math.floor rounds down
}