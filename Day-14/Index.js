// localStorage 


/// 1. Storing data in localStorage
localStorage.setItem('name', 'Moazzam');

// 2. Retrieving data from localStorage
const name = localStorage.getItem('name');
console.log(name); // Output: John Doe

// 3. Removing data from localStorage
localStorage.removeItem('name');

// 4. Clearing all data from localStorage
localStorage.clear();


// ----------------------------------------------------------------------

// sessionStorage


/// 1. Storing data in localStorage
sessionStorage.setItem('Password', '123456');

// Retrieving data from sessionStorage
const username = sessionStorage.getItem('Password');
console.log(username); // Output: JohnDoe

// Removing a specific item from sessionStorage
sessionStorage.removeItem('Password');

// Clearing all data from sessionStorage
sessionStorage.clear();


// ----------------------------------------------------------------------

// Odd Numbers Triangle

// 1
// 1 3
// 1 3 5
// 1 3 5 7
// 1 3 5 7 9

for (let i = 1; i <= 5; i++) {
  let res = "";
  for (let j = 1; j <= i; j++) {
    res += (j * 2 - 1) + " ";
  }
  console.log(res);
}

// // Iteration 1: i = 1 → j = 1 → res = "1 "
// // Iteration 2: i = 2 → j = 1,2 → res = "1 3 "
// // Iteration 3: i = 3 → j = 1,2,3 → res = "1 3 5 "
// // Iteration 4: i = 4 → j = 1,2,3,4 → res = "1 3 5 7 "
// // Iteration 5: i = 5 → j = 1,2,3,4,5 → res = "1 3 5 7 9 "

// // ----------------------------------------------------------------------





// // Reverse Star Pattern


// // * * * * *
// // * * * *
// // * * *
// // * *
// // *

for (let i = 5; i >= 1; i--) {
  let res = "";
  for (let j = 1; j <= i; j++) {
    res += "* ";
  }
  console.log(res);
}

// // Iteration 1: i = 5 → j = 1 to 5 → res = "* * * * * "
// // Iteration 2: i = 4 → j = 1 to 4 → res = "* * * * "
// // Iteration 3: i = 3 → j = 1 to 3 → res = "* * * "
// // Iteration 4: i = 2 → j = 1 to 2 → res = "* * "
// // Iteration 5: i = 1 → j = 1 → res = "* "

// // ----------------------------------------------------------------------






// // Alphabet Triangle


// // A
// // A B
// // A B C
// // A B C D
// // A B C D E

for (let i = 1; i <= 5; i++) {
  let res = "";
  for (let j = 1; j <= i; j++) {
    res += String.fromCharCode(64 + j) + " ";
  }
  console.log(res);
}

// Iteration 1: i = 1 → j = 1 → res = "A "
// Iteration 2: i = 2 → j = 1,2 → res = "A B "
// Iteration 3: i = 3 → j = 1,2,3 → res = "A B C "
// Iteration 4: i = 4 → j = 1,2,3,4 → res = "A B C D "
// Iteration 5: i = 5 → j = 1,2,3,4,5 → res = "A B C D E "