// Write a Fibonacci sequence which adds 2 previous numbers to make the next number

// Wrtie a function that takes in a number
// Create new array with numbers 1, 1
// Write a loop which adds the numbers
// Append new number to the array
// Return the array

// If num <= 2
// return the first two numbers in sequence

// otherwise
// same logic with num -1
// plus
// same logic num -2

const fibonacci = (num) => {
  if (num <= 2) {
    return [1, 1];
  }
  let numbers = [1, 1];

  for (let i = 2; i <= num; i++) {
    numbers.push(numbers[i - 1] + numbers[i - 2]);
    return numbers;
  }
};

fibonacci(9);
