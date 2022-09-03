function insertionSort(arr, n) {
  let i, j, key;

  for (i = 1; i < n; i++) {
    //  to mark the elements in an array
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; //  copy the element or to send the ele to space or hole
      j--; //  is to decremant the value in sorted array and to check the value to unsorted
    }
    arr[j + 1] = key;
  }
  console.log(arr);
}

let arr = [8, 44, 96, 7, 89, 2];
let n = arr.length;

insertionSort(arr, n);
