function binarysearch(arr, val,start, end){
    // base constion
    if(start > end){
        return
    }
    let mid = Math.floor((start + end/2));

    //compare the middle element  with value given 

    if(arr[mid] === val){
        return mid;
    }

    if(arr[mid] > val){
        binarysearch(arr,val, start,mid-1);
    }

    else{
        binarysearch(arr,val,mid+1,end)
    }
}

let arr  = [1,2,4,5,6,7,8,9]
let x   = 9
console.log(binarysearch(arr,x,arr[0],arr.length-1))


