/**
 * White an algorithm that takes a string (str)
 * argument and reverses it.
 *
 * reverse -> esrever
 * hungrybox -> xobyrgnuh
 * hullaballoo -> oollaballuh
 */

function stringReverse(str) {
  let reversed = str.split("").reverse().join("");

  console.log(reversed);
  return reversed;
}

stringReverse("hungrybox");
