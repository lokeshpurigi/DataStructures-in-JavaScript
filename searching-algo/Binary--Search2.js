function BinarySearh(arr, value) {
  let low = 0;
  let mid = 0;
  let index = 0;
  let high = arr.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == value) {
      console.log("Value found =", arr[mid]);
      return mid;
      // it increase the value of low to divide the sub-array
    } else if (value > arr[mid]) {
      low = arr[mid] + 1;
      // it decreases the value of mid to divide the sub-array
    } else if (value < arr[mid]) {
      high = arr[mid] - 1;
    }
  }
  return "Search not found";
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 89, 99];

// console.log(index);

let res = BinarySearh(arr, 89);
console.log(`At index =`, res);
