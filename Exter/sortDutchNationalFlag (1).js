function sortDutchNationalFlag(arr)
{
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  
  while(mid <= high){
    switch (arr[mid]) {
      case  0:
        swap(arr, low++, mid++)
        break;
      case 1:
        mid++;
        break;
      case 2:
        swap(arr, mid, high--);
        break;
      default:
        // code
    }
  }
  return arr
}

function swap(arr, i, j)
{
  [arr[i],arr[j]] = [arr[j], arr[i]]
}

const arr = [2, 1, 0, 0, 2, 1];

console.log(sortDutchNationalFlag(arr))
