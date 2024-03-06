// Implement power function without using multiplication and division operators
// Given two positive integers, implement the power function without using multiplication and division operators.

//For example, for given two integers, x and y, pow(x, y) should return x raised to the power of y, i.e., xy.

function power(base, exponent){
    if(exponent === 0){
        return 1;
    }

    return base * power(base, exponent - 1);

}

const base = 2;
const exponent = 4;
const result = power(base, exponent);

console.log(`${base}^${exponent} is ${result}`);