function Swap(arr, xp, yp) {
//   var temp = arr[xp];
//   arr[xp] = arr[yp];
//   arr[yp] = temp;
  [arr[xp],arr[yp]] = [arr[yp],arr[xp]] // alter nate way to snap
}
function SelectionSort(arr, n) {
  var i, j, min_idx;
  for (i = 0; i < n - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    Swap(arr, min_idx, i);
  }
  console.log(arr);
}

var arr = [65, 56, 78, 39, 11];
var n = 5;
SelectionSort(arr, n);
