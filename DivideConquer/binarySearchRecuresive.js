// Binary Search Algorithm  Recursive Implementation

function binarySearchRecursive(arr, target, left = 0, right = arr.length-1){
    if(left <= right){
        const mid = Math.floor((left + right)/2)

        if(arr[mid] === target){
            return mid
        }else if( arr[mid] < target){
            return binarySearchRecursive(arr, target, mid+1, right)
        }
        else{
            return binarySearchRecursive(arr,target,left, mid - 1);
        }
    }
    return -1
}


const nums = [2,3,5,7,9];
const target = 7

const results = binarySearchRecursive(nums, 7)
console.log(results)

const array = [1,4,5,8,9]
const target1 = 2
console.log(binarySearchRecursive(array, target1))