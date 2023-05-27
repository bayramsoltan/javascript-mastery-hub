import { getData } from "./index.js";


getData().then((data)=>{
    data.forEach(show => {
        console.log(show.name)

    });
})





