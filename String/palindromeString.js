// Palindrome Problem
function palidrome(str){
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');

}

const str = 'racecar'
console.log(palidrome(str))
//

function checkPalindrome(str){
    const len = str.length;
    for(let i = 0 ; i< len / 2; i++){
         // check if first and last string are same
         if(str[i] !== str[len - 1 - i]){
            return  'It is not a palindrome';
         }
    }
    return 'It is a palindrome';
}

console.log(checkPalindrome(str))