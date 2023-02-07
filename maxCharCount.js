/**
 * Write a function that takes a string
 * argument and rerturns the most occurring
 * in that string
 *
 * input: "Professinals"
 * output: 's'
 */

function maxCharCount(str) {
  const breakdown = {};

  const sanitized = str.toLowerCase();

  for (const char of sanitized) {
    if (breakdown[char]) {
      breakdown[char] += 1;
    } else {
      breakdown[char] = 1;
    }
    let max = 0;
    let maxValue = "";
    for (const char in breakdown) {
      if (breakdown[char] > max) {
        maxValue = char;
        max = breakdown[char];
      }
    }
  }
  console.log(max);
  return max;
}

maxCharCount("Professional");
