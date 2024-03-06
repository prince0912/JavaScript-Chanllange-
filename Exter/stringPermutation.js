const findPermutation =(string)=>{
  
  if(!string || typeof string !== "string")
  {
     return "Please Enter The String"
  } else if(string.length < 2)
  {
    return string;
  }
  
  let permutationArray = [];
  
  for(let i = 0; i<string.length; i++)
  {
      
      let char = string[i];
      let remaingChar=string.slice(0, i)+string.slice(i+1, string.length)
      
      
      for (let permutation of findPermutation(remaingChar))
      {
        permutationArray.push(char+permutation)
      }
      
  }
  
  return permutationArray;
  
}


console.log(findPermutation("ABC"))