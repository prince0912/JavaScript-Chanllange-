function LargestSubArrayZeroandOne(arr){
  let SumToIndex = new Map();
  let maxLen = 0;
  let currSum = 0;
  for(let i = 0 ; i <= arr.length ; i++)
  {
    if(arr[i]===0){
      currSum -=1;
    }
    else{
      currSum +=1;
    }
    
    if(currSum === 0)
    {
      maxLen = i+1;
    }
    else if(SumToIndex.has(currSum))
    {
      maxLen = Math.max(maxLen, i - SumToIndex.get(currSum));
    }
    
    
    if(!SumToIndex.has(currSum))
    {
      SumToIndex.set(currSum, i)
    }
  }
  
  return maxLen
  
}


const arr = [0, 1, 0, 1, 0, 0, 1, 1,1, 1,0];

console.log(LargestSubArrayZeroandOne(arr))