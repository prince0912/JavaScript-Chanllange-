//Find the Largest Number in an Array

function findMaxNumber(arr){
    let max = arr[0];
    for(let i = 0 ; i< arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max
}

const array = [2,8,7,-3,9, 4]
console.log(`Largest Number is`, findMaxNumber(array));