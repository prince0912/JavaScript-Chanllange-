
function isAnagram(str1, str2){
  if(str1.length !== str2.length)
  {
    return false
  }
  
  const count1 ={}
  const count2 ={}
  
  for(let i = 0 ; i< str1.length; i++)
  {
    count1[str1[i]]=(count1[str1[i]] || 0)+1;
    count2[str2[i]]=(count2[str2[i]] || 0)+1
  }
  
  return Object.entries(count1)
  .every(([key, value]) =>count2[key]===value);
} 

console.log(isAnagram("hello", "olleh"));


// False
console.log(isAnagram("hello", "world")); 

console.log(isAnagram("listen", "silent"))

const str1 = "Listen";
const str2 = "Silent";
console.log(isAnagram(str1, str2));