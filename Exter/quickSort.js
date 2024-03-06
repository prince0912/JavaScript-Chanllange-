// QuickSort

function quickSort(arr){
 if(arr.length<=1)
 {
   return arr
 }
 
 let lastElement = arr.length
// console.log(lastElement)
  
  const pivot = arr[0]
  console.log(pivot)
  const left = []
  const right = []
  
  for(let i=1; i<arr.length;i++)
  {
    if(arr[i]<pivot)
    {
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)]
  
}
let array = [8, 6, -2, 20, -5, 9]
console.log(quickSort(array))