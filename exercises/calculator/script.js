
//numbers
let number7 = 7;
number7 = document.querySelector("#seven");

function show7(){
    console.log(number7);
}

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
const plusSign = document.querySelector("#plus");
const minusSign = document.querySelector("#minus");
const multiplySign = document.querySelector("#multiply");
const divideSign = document.querySelector("#divide");
const dotSign = document.querySelector("#dot");
const equalSign = document.querySelector("#equal");

result = 0;


function addNumb(){
            result = Number(firstVal.value) + Number(secondVal.value);
            result.innerHTML = `${result}`;
        }