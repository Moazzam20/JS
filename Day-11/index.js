// Ternary oprator

let age = 13;

let eligibility = age >=18 ? 'eligible' : 'not eligible';
console.log(eligibility);


let num = 1;

let count = num%2===0 ? "even" : "odd"
console.log(count,"result");


let marks =30

let result = marks >=35 ? "Pass" : "fail";
console.log(result);



// Template Literals


let userName ="Moazzam Shaikh"
let percentage = 65.80;
let Pass ="pass";

let show = `Hello ${userName} your percentage is ${percentage} and you have ${Pass}`
console.log(show)



// Destructuring


let userData = {name:"Moazzam", surname:23 , City:"Mumbai"};

let {name, surname, City } =userData;
console.log(name, surname, City,);




