// Find all binary strings that can be formed from a wildcard pattern
//Given a binary pattern containing ? wildcard character at a few positions, find all possible
// combinations of binary strings that can be formed by replacing the wildcard character by either 0 or 1.

function generateBinaryStirng(pattern){
    const result = [];

    function generateHelper(currentString, index){
    if(index === pattern.length){
        result.push(currentString);
        return
    }
    
    if(pattern[index] === '?'){
        generateHelper(currentString + '0', index + 1);
        generateHelper(currentString + '1', index + 1);
    }else{
        generateHelper(currentString + pattern[index], index + 1);
    }
 }

 generateHelper('', 0)
 
 return result

  
}

const wildcardPattern = '1?11?00?1?';
const binaryStrings = generateBinaryStirng(wildcardPattern);

console.log(`Binary strings for pattern "${wildcardPattern}":`, binaryStrings);