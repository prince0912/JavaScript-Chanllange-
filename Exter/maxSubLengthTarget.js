const maxSubLengthTarget =(arr, target)=>{
  let maxLen = 0;
  let sum = 0;
  const sumIndices = new Map();
  
  for(let i = 0; i<arr.length ; i++)
  {
    sum += arr[i];
    
    if(sum === target)
    {
      maxLen = i+1;

    }else if(sumIndices.has(sum-target)){
      
      maxLen = Math.max(maxLen, i - sumIndices.get(sum - target));
    } 
    
    
    if(!sumIndices.has(sum))
    {
      sumIndices.set(sum, i)
    }
  }
  
  return maxLen;
  
}

let arr = [5, 6, -5, 5, 3, 5, 3, -2, 0];
let target= 8;
console.log(maxSubLengthTarget(arr, target))