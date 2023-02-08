/**
 * Write an algorithm that takes a string argument
 * and counts the number of vowels that appear in it.
 *
 * "Critical Role" => 5
 */
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let count = 0;

  for (const letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  console.log(count);
  return count;
}

countVowels("Critical Role");

/**
 * Regular expression solution

console.log(str.match(/[aeiou]/gi));
  return str.match(/[aeiou]/gi);
 */
