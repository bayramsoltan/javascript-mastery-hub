//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const city=document.querySelector("#city");
const descriptionn=document.querySelector("#description");
const feels=document.querySelector("#feels");

const textInput=document.querySelector("#inputText");
const btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
   const cityName=textInput.value;
   getData(cityName).then(data => {
       const {name,main:{temp},weather:[{description}]}=data;
       city.textContent +=name;
       descriptionn.textContent +=description;
       feels.textContent+=temp;
   })
})

const getData=(name)=>{
   const apiKey=`aef00181dee1ab9c2ca43739994a52f0`;
   const baseUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&lang=tr&units=metric`
   console.log(baseUrl);

   return new Promise((resolve,reject)=>{
       fetch(baseUrl)
       .then((res)=>res.json())
       .then((data)=>resolve(data))
       .catch((err)=>reject(err));
       
   })
   
 
}