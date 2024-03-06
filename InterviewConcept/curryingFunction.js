// Currying is a technique in functional programming that transforms a function with multiple 
// arguments into a series of functions, each taking a single argument. 
// These curried functions can be composed together to build more complex functions.

function currAdd(x){
    return function(y){
        return x+y
    }
}

const add = currAdd(5);
console.log(add(3))
