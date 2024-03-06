// Find the maximum product of two integers in an array
// For example, consider array {-10, -3, 5, 6, -2}. The maximum product is the (-10, -3) or (5, 6) pair.

function findMaximumProduct(arr){
    if(arr.length<2){
        return arr
    }

    let largest1 = Number.MIN_SAFE_INTEGER;
    let largest2 = Number.MIN_SAFE_INTEGER;
    let smallest1 = Number.MAX_SAFE_INTEGER;
    let smallest2 = Number.MAX_SAFE_INTEGER;


    for(let num of arr){
        if(num > largest1){
            largest2 = largest1;
            largest1 = num;
        }else if (num > largest2){
            largest2 = num;
        }

        if(num < smallest1){
            smallest2 = smallest1;
            smallest1 = num;
        }else if(num < smallest2){
            smallest2 = num;
        }

    }

    // calculate the maximum product

    const maxProduct1 = largest1 * largest2;
    const maxProduct2 = smallest1 * smallest2;
    
    return Math.max(maxProduct1, maxProduct2)

}


const array = [2, 3, 1, 4, 2];
const maxPrdouct = findMaximumProduct(array);

console.log(`Maximum product of two intagers: ${maxPrdouct}`)