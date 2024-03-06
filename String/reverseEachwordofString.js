// Given a string, reverse each word in the sentence

function reveseEachWordOfSentence(sentence){
    const words = sentence.split(' ');
   
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    const reverseSentence = reversedWords.join(' ');

    return reverseSentence;
}

const sentence = "Welcome to this Javascript Guide!"
console.log(reveseEachWordOfSentence(sentence))
