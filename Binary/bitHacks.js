// Problem 1. Turn off k’th bit in a number
function turnOffKthBit(n, k){
    // create a mask with only the kth bit set
    const mask = 1 << k;

    // Flip the kth bit in the number
    n &= ~mask;

    return n
}

const n = 20 
const k = 3

console.log(turnOffKthBit(20, 3))
