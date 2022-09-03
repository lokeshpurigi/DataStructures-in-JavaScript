function insertionort(arr,n) {
  for (let i = 1; i < n; i++){
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // swaping is donee 
        // [arr[j] ,arr[j-1]] = [arr[j-1] ,arr[j]]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}
let arr = [9, 8, 7, 6, 5, 4, 1]
let n = arr.length
console.log(insertionort(arr , n));
