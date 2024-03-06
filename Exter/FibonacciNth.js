//given a number n and find the nth elememet of fibonacci series

function FibonacciNth(n)
{
  if(n<=0) return 0;
  if(n <=1) return 1;
  
  let fibPrev = 0;
  let fibCurr = 1;
  
  for(let i = 2 ; i<=n; i++)
  {
    const nextFib = fibPrev +fibCurr;
    fibPrev = fibCurr;
    fibCurr = nextFib
  }
  
  return fibCurr;
  
} 

console.log(FibonacciNth(0))
console.log(FibonacciNth(1))
console.log(FibonacciNth(7))
console.log(FibonacciNth(10))