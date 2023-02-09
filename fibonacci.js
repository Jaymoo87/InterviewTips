/**
 * Write an algorith that takes a number argument n
 * and returns the number in the Fibonacci sequence
 * at position n.
 *
 * e.g. 7 => 13
 */

function fibonacciFinder(n) {
  console.log("funciton called");
  if (n < 2) {
    return n;
  }

  return fibonacciFinder(n - 1) + fibonacciFinder(n - 2);
}

console.log(fibonacciFinder(6));
