// linear Seatrch is mostly used when array is not sorted 

function linearSearch(value, arr) {
  let index = 0;
  let position = -1;
  let found = false;
  while (index < arr.length) {
    if (arr[index] === value) {
      position = index
      found = true;
break;
    } else {
      index++;
    }
  }
  // return found;
  console.log(found,index);
  return position;
  
}

arr = [1, 2, 3, 4, 5, 6, 7, 89];

let flag = linearSearch(7, arr);

if (flag === true) {
  console.log("Element is found");
} else {
  console.log("Element not found");
}

console.log("-----------------------")

let pos= linearSearch(9,arr);

if(pos >= 0 ){
  console.log("Found at index" , index);
}else{
  console.log("Element not found", pos);
}

