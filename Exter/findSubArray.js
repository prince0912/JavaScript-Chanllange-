
const findSubArray= (arr)=>{
 
  let SubArryOfSum =[];
  let n = arr.length;
  
  for(let i = 0;  i< n; i++)
  {
    let prefix = 0;
    for(let j =i ; j<n; n++)
    {
      if(prefix == 0)
      {
        SubArryOfSum.push([i,j])
      }
   }
    
  }
   return SubArryOfSum;
}

let arr = [ 6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7 ];

console.log(findSubArray(arr))