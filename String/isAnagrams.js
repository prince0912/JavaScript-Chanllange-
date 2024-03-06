// Given two strings, return true if they are anagrams of one another

function isAnagrams(str1, str2){
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();

    a = a.split('').sort().join('');
    b = b.split('').sort().join('');
    return a === b;
}

const str1 = 'army';
const str2 = 'mary';

console.log(isAnagrams(str1, str2))

function areAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }

    const charMap = new Map();
    for(let char of str1){
        if(!charMap.has(char)){
            charMap.set(char, 0);
        }
        charMap.set(char, charMap.get(char)+1);
    }

    for(let char of str2){
        if(!charMap.has(char) || charMap.get(char) === 0){
            return false;
        }
        charMap.set(char, charMap.get(char) - 1);
    }
    return true;
}

const string1 = "listen";
const string2 = "silent";

console.log(areAnagram(string1, string2))