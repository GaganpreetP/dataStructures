var binarySearch = function(arr , num){

    let n = arr.length;
    let high = n - 1;
    let low = 0;
    let mid;

    while(low <= high){
        // console.log("hello !" + low + high);

        mid = Math.floor((low + high)/2);
    
        if(num == arr[mid]){ 
            return mid;
        
        }else if(num > arr[mid]){
            low = mid + 1;
    
        }else{
            high = mid - 1;
    }

    }
return -1;
}
var arr = [0 , 12 , 24 , 36 , 48 , 60 , 72 , 84 , 96 , 108 , 120 ];
var result = binarySearch(arr , 0);
console.log("Value is present at index : " + result);

