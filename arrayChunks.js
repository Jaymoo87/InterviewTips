/**
 * Write and algorithm that takes two arguments, an array and
 * a number.  The function must return an array
 * with subarrays (the chunks) length n containing the original
 * array elements.
 *
 *
 * e.g.
 * ([1, 2, 3, 4, 5,], 2) => [[1, 2],[3, 4], [5]]
 *
 *
 * ([1, 2, 3, 4, 5, 6, 7, 8, 9,], 3) => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 */

function arrChunk(arr, n) {
  const chunkedArr = [];

  for (const element of arr) {
    const previousChunk = chunkedArr[chunkedArr.length - 1];
    if (!previousChunk || previousChunk.length === n) {
      chunkedArr.push([element]);
    } else {
      previousChunk.push(element);
    }
  }

  console.log(chunkedArr);
  return chunkedArr;
}

function altChunk(arr, n) {
  const chunkedArr = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArr.push(arr.slice(index, index + n));
    index += n;
  }

  console.log(chunkedArr);
  return chunkedArr;
}
arrChunk([1, 2, 3, 4, 5], 2);
altChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
