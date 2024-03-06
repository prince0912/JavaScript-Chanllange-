// write a JavaScript function to count the occurrences of each word in a given sentence?

function countOfOccurrences(sentence){
    return sentence.split(' ').reduce((countMap, word) =>
        ({...countMap, [word]: (countMap[word] || 0)+1}),{}
    )

}

const sentence = 'the quick brown fox jumps over the lazy dog jumps over the fence';
const result = countOfOccurrences(sentence)
console.log(result)