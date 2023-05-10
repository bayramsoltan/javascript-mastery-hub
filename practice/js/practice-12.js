let img = document.getElementById("lamp")

document.getElementById("on").addEventListener("click",()=>{
    img.src="img/lamba_on.gif"
})

document.getElementById("off").addEventListener("click",()=>{
    img.src="img/lamba_off.gif"

})

img.addEventListener("mouseover",()=>{
    img.src = "img/lamba_on.gif"
    black.classList.add("bg-dark");

})
img.addEventListener("mouseleave",()=>{
    img.src = "img/lamba_off.gif";
    black.classList.remove("bg-dark");
})