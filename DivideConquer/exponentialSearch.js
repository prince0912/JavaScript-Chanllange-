//Exponential search
//Given a sorted array of n integers and a target value, determine if the target exists in the array or not in logarithmic time.
// If the target exists in the array, return the index of it.


function exponentialSearch(arr, x){
    if(arr[0]=== x){
        return 0
    }
    let i = 1
    while( i < arr.length && arr[i] <=x ){
       i = i*2
    }

    return binarySearch(arr, i/2, Math.min(i, arr.length -1), x);
}

function binarySearch(arr, left, right, x){
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === x) return mid;
        if (arr[mid] < x) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let result = exponentialSearch(arr, x);
console.log("Element found at index " + result);