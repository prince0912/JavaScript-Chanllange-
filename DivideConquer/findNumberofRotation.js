//Find the number of rotations in a circularly sorted array
// Given a circularly sorted integer array, find the total number of times the array is rotated. 
//Assume there are no duplicates in the array, and the rotation is in the anti-clockwise direction.

function countRotations(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        const mid = Math.floor((left + right) / 2);
        
        if(arr[mid] > arr[right]){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    return left;
}


const rotatedArray =  [8, 9, 10, 2, 5, 6]
const rotations = countRotations(rotatedArray);

console.log(` Number of rotations: ${rotations}`)