
const fibonnoci =(n)=>{
  const fib = [0,1];
  for(let i = 2; i<=n; i++){
    fib[i] = fib[i-1]+fib[i-2]
  }
  return fib
}

console.log(fibonnoci(15))