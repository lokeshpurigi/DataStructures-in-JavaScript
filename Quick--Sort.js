function quikSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  const leftarr = [];
  const rightarr = [];

  for (const el of arr.slice(0, arr.length - 1)) {
    el < pivot ? leftarr.push(el) : rightarr.push(el);
  }

  return [...quikSort(leftarr), pivot, ...quikSort(rightarr)];
}

const arr = [1, 4, 2, 8, 345, 123, 43, 3, 32, 63, 43, 5643, 92];

console.log(quikSort(arr));
console.log(arr);
