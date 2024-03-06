function findDuplicateElementInRange(arr, range){
    const frequencyMap = new Array(range+1).fill(0)
    const duplicates = [];

    // count the frequency of each element in array
    for(let i =0 ; i < arr.length ; i++){
        const currentElement = arr[i];

    // check if the element withing the specfied range 
    if(currentElement >= 0 && currentElement <= range ){
        frequencyMap[currentElement]++;
    }else{
        console.log(`Element ${currentElement} is oustside of reange`)
    }    
    }

// identify duplicate based on frequency
for(let i = 0 ; i<=range; i++){
    if(frequencyMap[i]>1){
        duplicates.push(i);
    }
}
 return duplicates

}

const array = [4, 3, 2, 7, 8, 2, 6, 1, 5];
const range = 8;

const DuplicateElement = findDuplicateElementInRange(array, range)

console.log(`Duplicate element ${DuplicateElement}`)

// Simplect Solution

function findDuplicateElement(arr){
    const seen = new Set();
    const duplicate = [];

    for (const elem of arr){
        if(seen.has(elem))
        {
            duplicate.push(elem)
        }else{
            seen.add(elem)
        }
    }
 return duplicate
}

const newArr = [2, 4, 3, 1, 2, 5, 4];
const duplicateElements = findDuplicateElement(newArr);

console.log("Duplicate elements:", duplicateElements);