const sortBinaryArr =(arr)=>{
  let n = arr.length;
  let pointer = -1;
  for(let i = 0 ; i < n ; i++){
    if(arr[i]<1)
    {
      pointer++;
      const temp = arr[pointer];
      arr[pointer] = arr[i];
      arr[i] = temp
    }
  }
  return arr;
}

const array = [ 1, 0, 1, 0, 1, 0, 0, 1 ]

console.log(sortBinaryArr(array))