function reacursiveBinarySearch(arr, target)
{
  return search(arr, target, 0, arr.length-1)
}

function search(arr,target, left, right){
    if(left > right)
    {
      return -1
    }
    
    const mid =Math.floor((left+right)/2)
    
    if(target === arr[mid])
    {
      return mid
    }
    
    if(target < arr[mid])
    {
      return search(arr, target,left, mid-1)
    }else{
      return search(arr, target,mid+1, right)
    }
  
}

console.log(reacursiveBinarySearch([2,4,6,9,12], 6))
console.log(reacursiveBinarySearch([2,4,6,9,12], 9))
console.log(reacursiveBinarySearch([2,4,6,9,12], 4))
console.log(reacursiveBinarySearch([2,4,6,9,12], 2))
