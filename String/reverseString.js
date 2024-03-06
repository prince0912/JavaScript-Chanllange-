// Reverse a string without any built-in method

function reverseString(str){
    let revString = "";
    for(i= str.length - 1; i>=0; i--){
        revString +=str[i];
    }
    return revString
}

console.log(reverseString('Hello world'));
console.log(reverseString('Pkumar Choure'));
console.log(reverseString('I am in Indian '));
console.log(reverseString('abababbac'));


// Reverse a sentence as well as its character using a built-in method:

function reverseStringSentence(str){
    const revSting = str.split("").reverse().join("")
    return revSting
}

console.log(reverseStringSentence('Hello world'));
console.log(reverseStringSentence('Pkumar Choure'));
console.log(reverseStringSentence('I am in Indian '));
console.log(reverseStringSentence('abababbac'));

// Reverse all the words of a sentence using a built-in method:

function reverseStringWord(str){
    const revSting = str.split(" ").reverse().join(" ")
    return revSting;
}

console.log(reverseStringWord('Hello world'));
console.log(reverseStringWord('Pkumar Choure'));
console.log(reverseStringWord('I am in Indian '));
console.log(reverseStringWord('abab abbac'));

// Reverse (In-Place String) only characters not the sentence with built-in method:

function reverseCharInSentence(str){
    const revChar = str.split(" ").reverse().join(" ").split("").reverse().join("")
    return revChar
}


console.log(reverseCharInSentence('Hello world'));
console.log(reverseCharInSentence('Pkumar Choure'));
console.log(reverseCharInSentence('I am in Indian '));
console.log(reverseCharInSentence('abab abbac'));

// write a function in JavaScript to capitalize the first letter of each word in a given sentence?

function capitalizeFirstLetter(str){
    const words = str.split(' ');

    const capitalizedWord = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const capitalizedSentence = capitalizedWord.join(' ');

    return capitalizedSentence

}

const sentence = "hello world";
console.log(capitalizeFirstLetter(sentence));