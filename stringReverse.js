/**
 * White an algorithm that takes a string (str)
 * argument and reverses it.
 *
 * reverse -> esrever
 * hungrybox -> xobyrgnuh
 * hullaballoo -> oollaballuh
 */

function stringReverse(str) {
  let result = "";

  for (const char of str) {
    result = char + result;
  }

  console.log(result);
  return result;
}

stringReverse("hungrybox");
