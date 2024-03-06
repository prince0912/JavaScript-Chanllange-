// bit Heack
//  Check if an integer is even or odd
// The expression n & 1 returns value 1 or 0 depending upon whether n is odd or even.

function isEven(num){
    return (num & 1) === 0;
}

console.log(isEven(5));
console.log(isEven(6))

//

//  Detect if two integers have opposite signs or not
// The expression output x ^ y is negative if x and y have opposite signs. 
// We know that for a positive number, the leftmost bit is 0, and for a negative number, it is 1. 
//Now for similar sign integers, the XOR operator will set the leftmost bit of output as 0, 
// and for opposite sign integers, it will set the leftmost bit as 1.

const opposite_Signs =(x, y) =>{
    if((typeof x!= "number") || (typeof y!="number")){
        return "Parameters value must be number!"
    }
    if((x ^ y) < 0){
        return true;
    }else{
        return false;
    }
}

x = 100;
y = -100;

result = opposite_Signs(x,y)
if (result === true) console.log("Signs are opposite");
else if (result === false) console.log("Signs are not opposite");
else console.log(result);


// Problem 3. Add 1 to an integer
// The expression -~x will add 1 to an integer x. We know that to get negative of a number, 
//invert its bits and add 1 to it (Remember negative numbers are stored in 2’s complement form), i.e.,

function addOne(n){
    let k = 0;
    while((n & (1 << k)) !== 0 ){
        k++
    }

    n |= (1<<k);

    n^=((1<<k) -1);

    return n;
}

console.log(addOne(5));

// Problem 4. Swap two numbers without using any third variable
//This is again one of the simplest and most commonly used bit hacks. 
//The idea is to use XOR operators to swap two numbers by their property x ^ x = 0. 
// The following C++ program demonstrates it:


function swapWithoutThirdVariableArithmetic(a, b){
    a = a + b;
    b = a - b;
    a= a - b;
    return [ a, b];
}

let num1 = 5
let num2 = 10


console.log(swapWithoutThirdVariableArithmetic(num1, num2));

// Using Bitwise XOR

function swapWithoutThirdVariableXOR(a, b){
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}

let num3 = 4;
let num4 = 8;

[num3, num4] = swapWithoutThirdVariableXOR(num3, num4)
console.log(`After swapping: num3 = ${num3}, num4 = ${num4}`);
