// Find the Vowels
function findVowels(str){
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}


console.log(findVowels('Calsoft'));
console.log(findVowels('JavaScript is not easy to learn'));
