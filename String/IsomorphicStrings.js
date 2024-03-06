// isomorphic Strings
// Given two strings, determine whether they are isomorphic. Two strings, X and Y, 
//  are called isomorphic if all occurrences of each character in X can be replaced with 
//  another character to get Y and vice-versa.

// For example, consider strings ACAB and XCXY. They are isomorphic as we can map 'A' —> 'X', 'B' —> 'Y'
// and 'C' —> 'C'.


function isomorphicString(str1, str2){
    if(str1.length !== str2.length){
        return false
    }

    const map1 = new Map();
    const map2 = new Map();

    for(let i=0 ; i<str1.length;i++){
        const char1  =str1[i]
        const char2  = str2[i]
        if(!map1.has(char1)){
            map1.set(char1, char2)
        }else if(map1.get(char1) !== char2){
            return false;
        }
    
        if(!map2.has(char2)){
            map2.set(char2, char1)
        }else if(map2.get(char2) !== char1){
            return false
        }
    }

    return true; 

}

const str1 = "egg";
const str2 = "add";

console.log(isomorphicString(str1, str2));