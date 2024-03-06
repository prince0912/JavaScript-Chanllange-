// check is power of two or encodeURIComponent

function isPowerOF2(n){
  if(n<=0)
  {
    return false
  }
  return (n & (n-1)) ===0;
}


console.log(isPowerOF2(6))
console.log(isPowerOF2(1))
console.log(isPowerOF2(2))
console.log(isPowerOF2(12))
