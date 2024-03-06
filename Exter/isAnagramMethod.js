
function isAnagram(str1, str2){
  if(str1.length !== str2.length)
  {
    return false
  }
  
  str1 = str1.replace(/\s/g,'').toLowerCase();
  str2 = str2.replace(/\s/g,'').toLowerCase();
  
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  
  
  return str1 === str2
 
} 

console.log(isAnagram("hello", "olleh"));


// False
console.log(isAnagram("hello", "world")); 

console.log(isAnagram("listen", "silent"))

const str1 = "Listen";
const str2 = "Silent";
console.log(isAnagram(str1, str2));