/**
 * Write a function isPalindrome
 * that takes a string argument and returns
 * true of false if the string (single word) is a palindrome
 *
 * kayak -> true
 * mango -> false
 * racecar -> true
 * rotator -> true
 */

function isPalindrome(str) {
  let reversed = "";

  for (const char of str) {
    reversed = char + reversed;
  }
  console.log(str === reversed);
  return str === reversed;
}
isPalindrome("mango");
