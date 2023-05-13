let sum = 0;

function onScreen(value){
    results.innerHTML +=value;
}

function clearAll(){
    results.innerHTML = "";
}

function calculateResult(){
    sum = eval(results.innerHTML);
    results.innerHTML = sum;
}