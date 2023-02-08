/**
 * Write a function that takes and integer
 * argument and returns thj reversed integer
 * as a number data type
 *
 * input: 12345
 * output: 54321
 *
 * input: -42
 * output: -24
 */

function integerReverse(num) {
  const reversed = num.toString().split("").reverse().join("");

  console.log(parseInt(reversed) * Math.sign(num));
  return parseInt(reversed) * Math.sign(num);

  //   if (num < 0) {
  //     console.log(parseInt(reversed) * -1);
  //     return parseInt(reversed) * -1;
  //   } else {
  //     console.log(parseInt(reversed));

  //     return parseInt(reversed);
  //   }
}

integerReverse(12345);
