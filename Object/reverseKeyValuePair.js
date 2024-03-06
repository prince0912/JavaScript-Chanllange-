// write a JavaScript function to reverse the key-value pairs of an object?

function reverseKeyValuePair(obj){
    return Object.fromEntries(Object.entries(obj).map(([key, value])=>[value, key]))
}

const originalObject = { a: 1, b: 2, c: 3 };
console.log(reverseKeyValuePair(originalObject))
