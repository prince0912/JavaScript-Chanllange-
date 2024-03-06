function reverseTextWithoutWordsReversal(text){
    const words = text.split(/\s+/);
    console.log(words)

    const reversedWords = words.reverse();

    const reversedText = reversedWords.join(' ');

    return reversedText;
}

const originalText = "Technical Interview Preparation";
const reversedText = reverseTextWithoutWordsReversal(originalText);

console.log("Original Text:", originalText);
console.log("Reversed Text without Words Reversal:", reversedText);


// Reverse text without reversing individual words in javaScript without using inBuild method
 
function reverseTestWithoutUsingInBuildFunction(text){
    const reverseWords = [];
    let currentWord ='';

    for(let i =0; i<text.length; i++){
        const char = text[i];

       if(char === ' '|| i === text.length-1){
        reverseWords.unshift(currentWord);
        currentWord = '';
       }else{
        currentWord += char;
       }
    }

    const reversedText = reverseWords.join(' ');
    return reversedText;

}

// Example usage:
const Text = "Hello World! JavaScript is awesome.";
const reverseText = reverseTestWithoutUsingInBuildFunction(Text);

console.log("Original Text:", Text);
console.log("Reversed Text Without Reversing Words:", reverseText);
