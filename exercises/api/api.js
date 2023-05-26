import { getData } from "./index.js";


getData().then((data)=>{
    console.log(data)
    data.forEach(show => {
        console.log(show.name)

    });
})





