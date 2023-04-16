/**
 * Pyramid
 * Write a function call pyramid that takes a number
 * argument, n, and prints a pyramid composed of the # character.
 */

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (k = 1; k <= i * 2 - 1; k++) {
      row += "#";
    }

    console.log(row);
  }
}

pyramid(4);
