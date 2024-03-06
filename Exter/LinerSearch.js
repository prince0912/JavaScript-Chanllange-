// Given an array of n elements and a target element 't' and find the index of 't' in the array. if 't' is not availble return -1

function LinerSearch(arr, target){
  for(let i=0; i<arr.length; i++)
  {
    if(arr[i]===target)
    {
      return i
    }
  }
  return -1
}


console.log(LinerSearch([2, 4, -7, 10, 34], 10))
console.log(LinerSearch([9, 7, -7, 12, 4], 9))
console.log(LinerSearch([12, 14, 7, 11, 3], 14))
console.log(LinerSearch([8, 4, 5, 0, 4], 9))