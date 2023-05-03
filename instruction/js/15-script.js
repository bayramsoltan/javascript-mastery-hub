
//querySelector choose first element
const headEl =  document.querySelector("h1");
console.log(headEl);

const aboutUsEl = document.querySelector("#aboutUs");
console.log(aboutUsEl);

const spanEl = document.querySelector("aboutUs span");
console.log(spanEl);

const menuItem3El = document.querySelector("ul.menu li:nth-child(3");
console.log(menuItem3El);


headEl.innerText ="Hello JavaScript";


//querySelectorAll chooses all elements which fits

const spanEls = document.querySelectorAll("#aboutUs > span");
console.log(spanEls);

spanEls[0].innerText = "Hello";
