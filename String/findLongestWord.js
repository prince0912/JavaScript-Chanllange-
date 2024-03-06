// write a function in JavaScript to find the longest word in a given sentence?

function longestWord(sentence){
    return sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest,'')
}


const sentence = 'The quick brown fox jumpss over the lazy dog'
const result = longestWord(sentence);

console.log(result)

// other way 

function findlogestWord(sentence){
    let longestWord = ""
    const words = sentence.split(' ')
    for(let word of words ){
        if( word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}

const sente = "This is a sentence with some long words.";
console.log(findlogestWord(sente));