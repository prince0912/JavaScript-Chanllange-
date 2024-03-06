// Find all permutations of a string in using Backtracking

function permutationOfString(str){
    if(str.length === 0){
        return [""];
    }

    const permutations =[];

    for(let i = 0; i < str.length; i++){

        const remainingChars =str.substring(0, i)+str.substring(i+1);
       
        for(const permutation of permutationOfString(remainingChars)){
            permutations.push(str[i] + permutation);
        }
    }
    return permutations;
}

const permutations = permutationOfString("abc");
console.log(permutations)

//////////////// Other way //////////////////////////
function permutationString(str){
    const result = [];
    function backtrack(current, remaining){
        if(remaining.length === 0){
            result.push(current);
            return;
        }
  

    for(let i = 0; i < remaining.length; i++){
        const newCurrent = current +  remaining[i];
        const newRemaining =  remaining.slice(0, i) + remaining.slice(i + 1);
        backtrack(newCurrent, newRemaining);
    }
 }
    backtrack('', str);

    return result
}

console.log(permutationString('ABC'));
