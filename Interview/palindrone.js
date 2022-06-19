// This is an example of writting a palidrone function, which will check if the string is spelled the same way backwards.
// Example of pseudocode

// wrtie a function takes a string
// I need to reverse the string
// I need to compare the original with the reverse string

// Edge Cases
// Will there be any cpital letters? -> no
// Any punctution? -> no
// Will these be single words or phrases? -> single word

// What does our function nee
// Needs to stsrt with an empty variable to store the reverse word
// Needs a loop, and that loop needs to loop over the word in reverse
// Append letters from the loop to the empty variable
// Neeed to compare the word with the reverse word.

const isPalindrome = (word) => {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  return word === reverseWord;
};

isPalindrome("radar");
