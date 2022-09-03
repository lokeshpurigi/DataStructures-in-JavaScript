function merge(leftarr, rightarr) {
  const output = [];
  let leftindex = 0;
  let rightindex = 0;

  let leftlen = leftarr.length;
  let rightlen = rightarr.length;

  while (leftindex < leftlen && rightindex < rightlen) {
    const leftEl = leftarr[leftindex];
    const rightEl = rightarr[rightindex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftindex++;
    } else {
      output.push(rightEl);
      rightindex++;
    }
  }
  return [
    /** is used to push the remaining elements in the array left ,
     * as we did went through all the elements in the array...
     */
    ...output,
    ...leftarr.slice(leftindex),
    ...rightarr.slice(rightindex),
  ];
}

// console.log(merge([0,99], [8,11]));  // need 2 sorted array to combine


// this is used to divide any an array into single elements
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const midindex = Math.floor(array.length / 2);
  const leftarr = array.slice(0, midindex);
  const rightarr = array.slice(midindex);

  return merge(mergeSort(leftarr), mergeSort(rightarr));
};

console.log(mergeSort([44,444, 29, 2,5,33,36,90,11,455 ,4]));
