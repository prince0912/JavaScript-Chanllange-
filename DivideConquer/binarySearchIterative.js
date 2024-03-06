// Binary Search Algorithm Iterative Implementation

function binarySearch(arr, target){
    let low = 0;
    let high = arr.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            low = mid + 1;
        }else{
            high = mid - 1
        }
    }
    return "Target value is not found";
}

const nums = [2,3,5,7,9];
const target = 7

const results = binarySearch(nums, 7)
console.log(results)

const array = [1,4,5,8,9]
const target1 = 2
console.log(binarySearch(array, target1))


