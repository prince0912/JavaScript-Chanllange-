function margeInPlace(arr1, arr2)
{
  let m = arr1.length;
  let n = arr2.length;
  
  let i = m - 1; // last index of arr1
  let j = n - 1; // last index of arr2
  let k = m + n - 1 ; // last index availabe for arr1
  
  while(i >= 0  && j >=0)
  {
    if(arr1[i] > arr2[j])
    {
      arr1[k] = arr1[j]
      i--;
    }
    else{
      arr1[k] =arr2[j];
      j--;
    }
    k--;
  }
  while(j >= 0)
  {
    arr1[k] =arr2[j];
    j--;
    k--;
  }
  return arr1;
}

const nums1 = [1, 4, 7, 8, 10 ]; // Sorted array 1
const nums2 = [2, 3, 9]; // Sorted array 2

console.log(margeInPlace(nums1, nums2))