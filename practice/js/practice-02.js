/* // Example-1  Calculate area of rectangle
alert("Let's calculate area of rectangle.");
confirm("Do you want to calculate it?");


let longSide = prompt("OK. Please write long side of rectangle:");
let shortSide = prompt("Now. Please write short side of rectangle:");

let area = longSide*shortSide;

window.alert(`Area of rectangle is ${area}`);


let pi = 3.14;
console.log(typeof pi);

let a = null;
let b = undefined;

console.log(a);
console.log(b);


let name1 = "Khan";
let name2 = "Khabib";
let name3 = "Khalid";
let name4 = null;
let name5 = "";
let name6 = undefined;

console.log(name1 && name2 && name3); //Khalid, why because it is last
console.log(name1 && name2 && name4 && name3); //null; because boolean value of null is false
console.log(name4 || name5 || name2 || name6); // Khabib
console.log(name4 || name5 || false || name6); //undefined


// == looks only value
//=== looks value & type

let x = 40;

let y = "30";

console.log(x=='40')//true
 */
// -------------------------------------//

//Finding ones, tens and hundreds of 3-digit number


//Math.floor() rounding number to bottom
//Math.ceiling() rounding number to top

const numbers = prompt("Write 3 digit number:");

let ones = numbers%10;

let tens = Math.floor(numbers/10)%10;

let hundreds = Math.floor(numbers/100);

let sum = tens + ones + hundreds;

console.log(sum);







