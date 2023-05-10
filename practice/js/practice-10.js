// let sayi1El = getElementById("sayi1"); //it is just choose that id named element
//not like taking first element named with that id like document query selector
// let sayi2El =getElementById("sayi2");
// let mesaj =getElementById("mesaj");


 // "nfn" shortcut for this =>const first = (second) => { third }
// const hesapla = () => {
//     let sayi1 = sayi1El.value;
//     let sayi2 = sayi2El.value;

//     if (sayi1>sayi2){
//         let temp =sayi1;
//         sayi1 = sayi2;
//         sayi2 = temp; //changing places of sayi1 and sayi2
//     }

//     let kalanlar = 0;

//     while(sayi1>sayi2){
//         kalanlar+=(sayi2%sayi1)
//         sayi1++;
//     }

//     mesaj.innerHtml = `Kalanlar toplami: ${kalanlar}`
//  }
//  document.getElementById("mesaj").addEventListener("click",()=>{
//     hesapla()
// })


//Büyük sayının küçük sayıya bölümünden kalanlar toplamını,
// küçük sayı büyük sayıya
//yetişene kadar birer birer artırarak bulalım.
let sayi1El=document.getElementById("sayi1");
let sayi2El=document.getElementById("sayi2");
let mesaj=document.getElementById("msg");
const hesapla = () => { 
    let sayi1=sayi1El.value
    let sayi2=sayi2El.value
    if(sayi1>sayi2){
        let temp= sayi1;
        sayi1=sayi2;
        sayi2=temp;
    }
    let kalanlar=0;
    while(sayi2>sayi1){
        kalanlar+=(sayi2%sayi1)
        sayi1++;
    }
    mesaj.innerHTML= `Kalanlar toplami: ${kalanlar} `;
 }
 document.getElementById("msg").addEventListener("click",()=>{
    hesapla()
 })