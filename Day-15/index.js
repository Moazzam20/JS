// Spiral Traversal of a 2D Array.

// Create a 2D array
let array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements
console.log(array2D[0][0]); // Output: 1 (first row, first column)
console.log(array2D[1][2]); // Output: 6 (second row, third column)

// Loop through the 2D array
for (let i = 0; i < array2D.length; i++) {
  for (let j = 0; j < array2D[i].length; j++) {
    console.log(`Element at [${i}][${j}]: ${array2D[i][j]}`);
  }
}

// Modify an element
array2D[2][1] = 88; // Change the value at third row, second column
console.log(array2D);


const spiralTraversal = () => {
  const arr = [
    [3, 4, 5, 6],
    [9, 8, 7, 10],
    [13, 12, 11, 14]
  ];

  let left = 0;
  let right = arr[0].length - 1;
  let top = 0;
  let bottom = arr.length - 1;

  let spiralArr = [];

  while (left <= right && top <= bottom) {
    // Left → Right
    for (let i = left; i <= right; i++) {
      spiralArr.push(arr[top][i]);
    }
    top++;

    // Top → Bottom
    for (let i = top; i <= bottom; i++) {
      spiralArr.push(arr[i][right]);
    }
    right--;

    // Right → Left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiralArr.push(arr[bottom][i]);
      }
      bottom--;
    }

    // Bottom → Top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiralArr.push(arr[i][left]);
      }
      left++;
    }
  }

  console.log("Spiral Traversal:");
  console.log(spiralArr.join(", "));
};

spiralTraversal();


// Spiral Traversal:
// 3, 4, 5, 6, 10, 14, 11, 12, 13, 9, 8, 7

//--------------------------------------------------------------------





// 2D Array Shapes

// Rectangle
console.log("\n Rectangle Pattern:");
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 6; j++) {
    row += "* ";
  }
  console.log(row);
}




// Right-angle Triangle
console.log("\n Right-angle Triangle:");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}





//  'N' Shape
console.log("\n 'N' Shape Pattern:");
const size = 5;
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (j === 0 || j === size - 1 || i === j) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}





// 'Z' Shape
console.log("\n 'Z' Shape Pattern:");
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (i === 0 || i === size - 1 || j === size - 1 - i) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}






//  'X' Shape
console.log("\n  'X' Shape Pattern:");
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (i === j || j === size - 1 - i) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}






// Hollow Square
console.log("\n Hollow Square Pattern:");
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}






// Diamond Pattern (Optional Small Size)
console.log("\n Diamond Pattern:");
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i);
  row += "* ".repeat(i);
  console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
  let row = " ".repeat(n - i);
  row += "* ".repeat(i);
  console.log(row);
}