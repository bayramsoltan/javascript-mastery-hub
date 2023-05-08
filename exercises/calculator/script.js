const minusSign = document.getElementById("minus");

  function show(){
    results.innerHTML = minusSign.value;
}

const plusSign = document.querySelector("#plus");

function gon(){
    results.innerHTML = plusSign.value;
}

const aC = document.querySelector("#clear");
function clearAll(){
    results.innerHTML = 0;
}


//numbers
const number8 = document.querySelector("#eight");

const number9 = document.querySelector("#nine");
const number6 = document.querySelector("#six");
const number5 = document.querySelector("#five");
const number4 = document.querySelector("#four");
const number3 = document.querySelector("#three");
const number2 = document.querySelector("#two");
const number1 = document.querySelector("#one");
const number0 = document.querySelector("#zero");

//signs

const multiplySign = document.querySelector("#multiply");
const divideSign = document.querySelector("#divide");
const dotSign = document.querySelector("#dot");
const equalSign = document.querySelector("#equal");

result = 0;


function addNumb(){
            result = Number(firstVal.value) + Number(secondVal.value);
            result.innerHTML = `${result}`;
        }