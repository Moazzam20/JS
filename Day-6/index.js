// map
// foreach
// fitler

// map - its return new array
//     and to change each item in the array


var ary=[10,20,30,40,50]; 
var newAry =ary.map((num)=> num * 2);
console.log(newAry,"newAry")

var ary=[45,28,37,401,80]; 
var newAry =ary.map((num)=> num * 5);
console.log(newAry,"newAry")


// foreach - to run function on each element and doesn't return new array.

let students = ["vishal", "pravesh", "soun"];
let updatedStudentsName = students.map((student) =>  student + " gupta");
   console.log(updatedStudentsName,)


// Q given an array of Element, find count of odd numbers

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 let oddCount = 0;
 for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i], i);
   if (numbers[i] % 2 !== 0) {
     oddCount++;
  }}
 console.log(oddCount, "evenCount");

 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 let evenCount = 1;
 for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i], i);
   if (numbers[i] % 2 !== 1) {
     evenCount++;
  }}
 console.log(evenCount, "oddCount");


 let usersAge = [10, 20, 30, 40, 50, 60, 70, 80];
 let targetAge = 50;

 for (let i = usersAge.length - 1; i >= 0; i--) {
      console.log(usersAge[i], i);
   if (targetAge == usersAge[i]) {
     console.log(i);
    break;
  }
 }

















// 
// // return a new array

// function greetWithName(name) {
//   console.log("Welcome! ", name);
// }

// // foreach - to run function on each element and doesn't return new array
// let students = ["virat", "rohit", "rahul"];
// students.forEach((student) => greetWithName(student));


// // elements reduces 
// // fitler - its return new array of elements if element pass the condition 







// let numbers = [2,3,4,5,6];
// let evenNumbers = numbers.filter( num => num % 2 == 0)
// console.log(evenNumbers)