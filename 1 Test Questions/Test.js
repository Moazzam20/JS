// 1. Second highest number in an array without sorting.

function secondHighest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}
console.log(secondHighest([10, 5, 20, 8, 15]));



// 2. Character frequency counter from a string.

function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(charFrequency("apple")); // { a: 1, p: 2, l: 1, e: 1 }



// 3. Reverse only words in an array of strings

function reverseWords(arr) {
  return arr.map(word => word.split('').reverse().join(''));
}
console.log(reverseWords(["hello", "world"])); // ["olleh", "dlrow"]


// 4. Check even or odd using map

function evenOrOdd(arr) {
  return arr.map(num => num % 2 === 0 ? "even" : "odd");
}
console.log(evenOrOdd([1, 2, 3, 4])); // ["odd", "even", "odd", "even"]


// 5. Flatten a nested array (1 level deep)

function flattenOneLevel(arr) {
  return arr.flat();
}
console.log(flattenOneLevel([1, 2, [3, 4], 5])); // [1, 2, 3, 4, 5]


// 6. Print all prime numbers between 10 and 

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primesInRange(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) result.push(i);
  }
  return result;
}
console.log(primesInRange(10, 50));
// [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]


// 7. Filter names that start with vowels

function namesStartingWithVowel(names) {
  return names.filter(name => /^[aeiou]/i.test(name));
}
console.log(namesStartingWithVowel(["Alice", "Bob", "Eve", "Uma", "Charlie"])); // ["Alice", "Eve", "Uma"]


// 8. Rotate array by one to the right

function rotateRight(arr) {
  if (arr.length === 0) return arr;
  return [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)];
}
console.log(rotateRight([1, 2, 3, 4])); // [4, 1, 2, 3]


// 9. Check if all array elements are greater than 10

function allGreaterThanTen(arr) {
  return arr.every(num => num > 10);
}
console.log(allGreaterThanTen([12, 15, 22])); // true



// 10. Filter numbers divisible by 3 and 5

function divisibleBy3And5(arr) {
  return arr.filter(num => num % 3 === 0 && num % 5 === 0);
}
console.log(divisibleBy3And5([10, 15, 30, 20, 45])); // [15, 30, 45]


// 11. Fibonacci sequence up to 15 

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(15));  
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]



// 12. Count occurrences of a value in array

function countOccurrences(arr, val) {
  return arr.filter(item => item === val).length;
}
console.log(countOccurrences([1, 2, 1, 3, 1, 4], 1)); // 3


// 13. Sum of even numbers using reduce

function sumEven(arr) {
  return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}
console.log(sumEven([1, 2, 3, 4, 5, 6])); // 12


// 14. Check if string is palindrome

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam")); // true


// 15. Return grade based on marks using switch

function getGrade(marks) {
  let grade;
  switch (true) {
    case (marks >= 90): grade = 'A'; break;
    case (marks >= 80): grade = 'B'; break;
    case (marks >= 70): grade = 'C'; break;
    case (marks >= 60): grade = 'D'; break;
    default: grade = 'F';
  }
  return grade;
}
console.log(getGrade(85)); // B


// 16. Test re-declaring a variable

// Input:
let x = 10;
var o = 20; // SyntaxError: Identifier 'x' has already been declared



// 17. Remove duplicates from array without using Set

function removeDuplicates(arr) {
  const result = [];
  for (let num of arr) {
    if (!result.includes(num)) result.push(num);
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 1])); // [1, 2, 3, 4]


// 18. Slice first 3 elements of array

function firstThreeElements(arr) {
  return arr.slice(0, 3);
}
console.log(firstThreeElements([10, 20, 30, 40, 50])); // [10, 20, 30]


// 19. Find intersection of two arrays

function intersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}
console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]


// 20. Reverse array using while loop (in-place)

function reverseInPlace(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
console.log(reverseInPlace([1, 2, 3, 4])); // [4, 3, 2, 1]


// 21. Check if all elements in an array are positive (using flag)

function allPositive(arr) {
  let flag = true;
  for (let num of arr) {
    if (num < 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
console.log(allPositive([1, 4, 6, 9])); // true


// 22. Check if a string has both uppercase and lowercase letters (using two flags)

function hasUpperAndLower(str) {
  let hasUpper = false;
  let hasLower = false;

  for (let char of str) {
    if (char >= 'A' && char <= 'Z') hasUpper = true;
    if (char >= 'a' && char <= 'z') hasLower = true;
  }

  return hasUpper && hasLower;
}
console.log(hasUpperAndLower("HelloWorld")); // true


// 23. Determine if a number is prime (using flag)

function isPrime(num) {
  if (num < 2) return false;
  let flag = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}
console.log(isPrime(13)); // true



// 24. Check if an array is sorted in ascending order (using flag)

function isSortedAscending(arr) {
  let flag = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      flag = false;
      break;
    }
  }

  return flag;
}
console.log(isSortedAscending([2, 5, 8, 9])); // true


// 25. Check if a word has repeating characters

function hasRepeatingChars(word) {
  let flag = false;
  const seen = {};

  for (let char of word) {
    if (seen[char]) {
      flag = true;
      break;
    } else {
      seen[char] = true;
    }
  }

  return flag;
}
console.log(hasRepeatingChars("coding")); // false
console.log(hasRepeatingChars("hello"));  // true

