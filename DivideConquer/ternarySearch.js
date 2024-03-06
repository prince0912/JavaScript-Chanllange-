function ternarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        const partitionSize = Math.floor((right - left) /3);
        const mid1 = left + partitionSize;
        const mid2 = right  - partitionSize;

        if(arr[mid1] === target){
            return mid1
        }

        if(arr[mid2] === target){
            return mid2;
        }

        if(target < arr[mid1]){
            right = mid1 - 1;
        }else if(target > arr[mid2]){
            left = mid2 + 1;
        }else{
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }
    return -1;

}


const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue = 5;

console.log(ternarySearch(sortedArray, targetValue)); 