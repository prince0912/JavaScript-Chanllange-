// Search an element in a circularly sorted array
// Given a circularly sorted integer array, search an element in it. 
//Assume there are no duplicates in the array, and the rotation is in the anti-clockwise direction.

function searchInCircularSortedArray(arr, target){
    let left = 0
    let right = arr.length - 1;

    while(left <= right){
        const mid = Math.floor((left + right)/2 );

        if(arr[mid] === target){
            return mid
        }

        if(arr[left] <= arr[mid]){
            if(target >= arr[left] && target < arr[mid]){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }else{
            if(target > arr[mid] &&  target <= arr[right]){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
    }
    return -1 
}

const array = [8, 9, 10, 2, 5, 6];
const target = 10;

const result = searchInCircularSortedArray(array, target);
console.log(`Index of ${target} in the circularly sorted array: ${result}`);
