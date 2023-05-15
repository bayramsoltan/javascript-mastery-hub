import { students } from "../data/students.js";
const loadData = () => { 
    let html = "";
    students.forEach( (student)=>{
        html += `
            <tr>
                <td>1</td>
                <td>Ali Gel</td>
                <td>70</td>    
            </tr>`;
    } )
    
 }