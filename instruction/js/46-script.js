const txtScore1 = document.querySelector("#txtScore1");
const txtScore2 = document.querySelector("#txtScore2");
const txtScore3 = document.querySelector("#txtScore3");
const btnAverage = document.querySelector("#txtResult");

btnAverage.addEventListener("click",()=>{
    return (score||score===0)&&!isNaN(score) && score<=100 &&score>0;
})

const getAverage=(num1,num2,num3)=>{
    return (num1+num2+num3)/3
}

const convertScoreLetter =(score)=>{
    
}
