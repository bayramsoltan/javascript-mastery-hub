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
let liste = [];

const listele = (item)=>{
    uList.innerHTML += `<li>${item}</li>`;
}


btnAdd.addEventListener("click", () => {
  if (!inputText.value) {return}
  torba = inputText.value;
  liste.push(inputText.value);
  uList.innerHTML += `<li>${torba}</li>`;
  inputText.value = "";
  inputText.focus();
});

btnSort.addEventListener("click", () => {
    uList.innerHTML = "";
    liste.sort();
    liste.forEach(listele);
});

btnReverse.addEventListener("click", () => {
    uList.innerHTML = "";
    liste.reverse();
    liste.forEach(listele);
});
btnLast.addEventListener("click", () => {
    uList.innerHTML = "";
    liste.pop();
    liste.forEach(listele);
});
btnFirst.addEventListener("click", () => {
    uList.innerHTML = "";
    liste.shift();
    liste.forEach(listele);
});

btnReAll.addEventListener("click",()=>{
    uList.innerHTML = "";
    liste = [];
})

btnMix.addEventListener("click",()=>{
    uList.innerHTML = "";
    const getRandomItem = (arr) => {
        const allAr = [...arr];
        for (let i = allAr.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [allAr[i], allAr[randomIndex]] = [allAr[randomIndex], allAr[i]]; //destructuring
        }
        return allAr;
      };
  
    liste = getRandomItem(liste);
    liste.forEach(listele);
})  


// const getRandomItem=(arr)=> {
    //     const allAr = [];
    //     for(let i =0; i<arr.length; i++){
    //         const randomIndex = Math.floor(Math.random() * arr.length);
    //         const item = arr[randomIndex];
    //         allAr.push(item);
    //     }return allAr;
    // }