function bblSort(arr){
    for(var i = 0 ; i < arr.length; i++ ){
        for(var j = 0 ; j < arr.length-1-i; j++)
        {
            if(arr[j] > arr[j+1])  //{

            // [arr[j],arr[j+1]] = [arr[j+1],arr[j]]  // gives descending order 
            // }
            {
                var temp =arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr);
} 
var arr = [34,3,56,7,8];
bblSort(arr);

// 3,34,56,7,8

// 3,34,7,56,8

// 3,7,34,8 ,56
