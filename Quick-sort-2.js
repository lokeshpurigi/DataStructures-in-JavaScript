function quikSort(arr) {
    if (arr.length === 1) {
      return arr;
    }
  
    let pivot = arr[arr.length - 1];
    let leftarr = [];
    let rightarr = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        leftarr.push(arr[i]);
      } else {
        rightarr.push(arr[i]);
      }
    }
  
      if (leftarr.length > 0 && rightarr.length > 0) {
        return [...quikSort(leftarr), pivot, ...quikSort(rightarr)];
      } else if (leftarr.length > 0) {
        return [...quikSort(leftarr), pivot];
      } else {
        return [pivot, ...quikSort(rightarr)];
      }
    }
  
  const arr = [1, 4, 2, 8, 345, 123, 43, 3, 32, 63, 43, 5643, 92];
  
  console.log(quikSort(arr))
  