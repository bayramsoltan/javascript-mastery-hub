const result = eval("4+2*1");
result.innerHTML = `${result}`;


const firstVal = document.querySelector("#numberOne");
const secondVal = document.querySelector("#numberTwo");
result = 0;


function addNumb(){
            result = Number(firstVal.value) + Number(secondVal.value);
            resultAll.innerHTML = `Sonuç: ${result}`;
        }