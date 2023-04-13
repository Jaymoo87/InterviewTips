/***
 * Steps
 * Write a function called printSteps that takes a number argument n.
 * It should print steps that are n levels high, with appropriate
 * width using the # character to build the steps outward.
 */

function printSteps(n) {
  // height of the steps
  for (let i = 1; i <= n; i++) {
    let step = "";

    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }

    console.log(step);
  }
  console.log("");
}

printSteps(10);
