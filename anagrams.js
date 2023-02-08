/***
 * Write a function that takes two string
 * arguments and returns a boolean true/false
 * value if the two strings are anagrams or not
 *
 * input: 'players', 'parsley'
 * outtput: true
 *
 * input: 'Clint Eastwood', 'old west action'
 * output: true
 *
 * input: 'vacation time', 'I am not active'
 * output: true
 */

function anagrams(strOne, strTwo) {
  const breakOne = breakItDownNah(strOne);
  const breakTwo = breakItDownNah(strTwo);

  for (const char in breakOne) {
    if (breakOne[char] !== breakTwo[char]) {
      console.log("nope");
      return false;
    }
    console.log("yup");
    return true;
  }
}

anagrams("players", "parsley");

function breakItDownNah(str) {
  const breakdown = {};
  const sanitized = str.toLowerCase().replaceAll(" ", "");

  for (const char of sanitized) {
    if (breakdown[char]) {
      breakdown[char] += 1;
    } else {
      breakdown[char] = 1;
    }
  }

  return breakdown;
}
