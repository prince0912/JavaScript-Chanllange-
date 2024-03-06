// write a JavaScript function to find the missing number in an array of consecutive integers from 1 to N?

function findMissingNumber(arr){
    const result = ((arr.length + 1)*(arr.length + 2) / 2 - arr.reduce((sum,num) =>sum +num , 0 ))
    return result 
}

const array = [1, 2, 3, 5, 6, 7, 8];
console.log(findMissingNumber(array));