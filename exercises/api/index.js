   
const baseUrl="https://api.tvmaze.com/shows"

  const getData =()=>{
    return new Promise((resolve,reject)=>{
    fetch(baseUrl)
    .then((res)=>res.json())
    .then((data)=>resolve(data))
    .catch((err)=>reject(err));
    
    })
    
  }

  export{getData}