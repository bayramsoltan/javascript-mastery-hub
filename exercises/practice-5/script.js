const inputText = document.getElementById("inputText");
const uList = document.getElementById("uList");
//buttons
const btnAdd = document.getElementById("btnAdd");
const btnSort = document.getElementById("btnSort");
const btnReverse = document.getElementById("btnReverse");
const btnLast = document.getElementById("btnLast");
const btnFirst = document.getElementById("btnFirst");
const btnReAll = document.getElementById("btnReAll");
const btnMix = document.getElementById("btnMix");

let torba = [];


btnAdd.addEventListener("click",()=>{
    uList.innerHTML  = `<li>${inputText.value}</li>`
})