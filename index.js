function isPalindrome(word) {
  // Write your algorithm here
  // Initialize empty string called wordInverted
  let wordInverted = '';

  // Start a for loop that initializes a counter variable at 1
  // The loop should stop when the variable is greater than the length of the word
  for(let counter = 1; counter<=word.length; counter++){
    wordInverted+=word[word.length-counter];
  }

  // After the for loop, check if the test word is equal to wordInverted
  // Return the boolean
  return (word==wordInverted);

}



/* 
Initialize empty string called wordInverted
Start a for loop that initializes a counter variable at 1, the loop should stop when the variable is greater than the length of the word
In the for loop assign the element at (test word [length - counter] ) into wordInverted
After the for loop, check if the test word is equal to wordInverted
Return the boolean
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
