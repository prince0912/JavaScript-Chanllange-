//Can you write a function in JavaScript to find the second-largest element in an array?

function SecondLargestElement(arr){
    return [...new Set(arr)].sort((a, b)=> b - a)[1]
}

const array = [5, 2, 8, 9, 2, 4, 7];
console.log(SecondLargestElement(array))


// Without using inbuild method 

function FindSecondLargest(arr){
    if(arr.length < 2){
        return "Array should have at least two element"
    }
    let first = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > first){
            secondLargest = first;
            first = arr[i];
        }else if(arr[i] >secondLargest && arr[i] !== first ){
            secondLargest = arr[i]
        }
    }

    if (secondLargest === -Infinity) {
        return "No second largest element found";
      } else {
        return secondLargest;
      }
}

const array1 = [10, 5, 7, 3, 9, 11];
console.log("Second largest element:", FindSecondLargest(array1));
