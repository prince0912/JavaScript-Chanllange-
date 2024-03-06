// Bubual sort 

let arr = [-8, 20, 4 ,-2, 6]

function BubbleSort(arr)
{
  for(let i=0; i <arr.length; i++)
  {
   
    for(let j=0; j<(arr.length-i-1); j++)
    {
     
      if(arr[j]>arr[j+1])
      {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
  }
  return arr;
}

console.log(BubbleSort(arr))