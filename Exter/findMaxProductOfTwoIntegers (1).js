const findMaxProductOfTwoIntegers=(arr)=>{
  if(arr.length<2)
  {
    return arr
  }
  
  let max1 =Math.max(arr[0], arr[1])
  let max2 =Math.min(arr[0], arr[1])
  let min1 =Math.min(arr[0], arr[1])
  let min2 =Math.min(arr[0],arr[1])
  
  for(let i =2; 1<arr.length;i++)
  {
    const current = arr[i];
    if(current > max1)
    {
      max2 = max1;
      max1 = current;
    }else if(current > max2 ){
      max2 = current
    }
    
    
    if(current < min1)
    {
      min2 = min1;
      min1 = current
    }else if (current < min2)
    {
       min2 = current
    }
  }
  
  const product1 = max1*max2;
  const product2 = min1*min2;
  

}


const arr = [2, 3, 1, 7, 10, 5];
console.log(findMaxProductOfTwoIntegers(arr))