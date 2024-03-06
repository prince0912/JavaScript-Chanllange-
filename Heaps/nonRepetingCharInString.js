// Find first `k` non-repeating characters in a string in a single traversal in javaScript
// using Hash table 

function firstKNonRepeating(str, k){
    // Create a hash table to store the frequency of each character.
    const charFreq ={};
    

    for(let i = 0; i< str.length; i++){
        if(!charFreq[str[i]]){
            charFreq[str[i]] = 0;
        }
        charFreq[str[i]]++;
        
    }

    // Create a queue to store the first `k` non-repeating characters.

    const queue = [];
    for(let i = 0; i < str.length; i++){
        if (charFreq[str[i]] === 1) {
            queue.push(str[i]);
            
          }
        if(queue.length > k){
        queue.shift();   
        }
    }
    return queue;
}

const str = "abcabcbb";
const k = 3;
console.log(firstKNonRepeating(str, k));


// using Map

function firstKNonRepeatingCharacters(str, k){
    const charCount = new Map();
    const queue = [];

    for(let i = 0; i<str.length; i++){
        const currentChar = str[i];

        charCount.set(currentChar, (charCount.get(currentChar) || 0)+1);

        while(queue.length > 0 && charCount.get(queue[0])>1){
            queue.shift();
        }

        if(charCount.get(currentChar) === 1){
            queue.push(currentChar);
        }
    }
    
    return queue.slice(0,k);
}


const inputString = "abacabad";
//const k = 3;
const result = firstKNonRepeatingCharacters(inputString, k);
console.log(result); // Output: ['b', 'c', 'd']