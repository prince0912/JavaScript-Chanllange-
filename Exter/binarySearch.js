// Given a sorted array of n elements and a target element 't' and find the index of 't' in the array. if 't' is not availble return -1

function BinarySearch(arr, target)
{
  let left = 0
  let right = arr.length-1;
  
  while(left<=right)
  {
    const mid = Math.floor((left+right)/2)
    
    if(arr[mid] === target)
    {
      return mid
    }
    else if(arr[mid]< target)
    {
      left = mid+1
    }else{
      right=mid-1
    }
    
  }
  return -1
}

console.log(BinarySearch([2,4,6,8,14], 6))
console.log(BinarySearch([2,4,6,8,14], 2))
console.log(BinarySearch([2,4,6,8,14], 8))
console.log(BinarySearch([2,4,6,8,14], 15))