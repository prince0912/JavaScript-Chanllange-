// write a function in JavaScript to count the occurrences of each element in an array and return the result as an object?

function countOfOccurrences(arr){
    return arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});

}

const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
console.log(countOfOccurrences(inputArray))