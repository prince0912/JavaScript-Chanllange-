//  How to compare two objects in JavaScript?
//1.Reference Comparison: This checks if two objects reference the same location in memory.
// 2. Property Comparison: This involves comparing the properties of the objects.

//Reference Comparison
const obj1 = { name:'Pkumar', age:32}
const obj2 = { name:'Pkumar', age:32 }
const obj3 =obj1;

console.log(obj1 === obj2) // false different object
console.log(obj1 === obj3) //  true same reference 

// === operator to compare objects, it compares whether they reference the same object in memory, not whether their properties are identical.


// Property Comparison

const obj4 = {age:32 ,name:'Pkumar' }
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // true same property differnt object
console.log(JSON.stringify(obj2) === JSON.stringify(obj4)) // true same property differnet order 

// Custom Comparison

function compareObjects(obj1, obj2){
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if(keys1.length !== keys2.length){
        return false
    }

    // Iterate through the keys and compare the values
    for(let key of keys1){
        // Check if the current key exists in obj2
        if(!obj2.hasOwnProperty(key)){
            return false
        }

       // Compare the values
        if(obj1[key] !== obj2[key]){
            return false
        }
    }

    return true;

}

console.log(compareObjects(obj1, obj2)) // true


