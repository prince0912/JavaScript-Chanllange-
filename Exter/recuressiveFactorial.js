// given a integer n  and find the factorial of that  integer in javascript

function recuressiveFactorial(n)
{
  if( n===0 || n===1)
  {
    return 1
  }else{
    return  n*recuressiveFactorial(n-1)
  }
}

console.log(recuressiveFactorial(0))
console.log(recuressiveFactorial(1))
console.log(recuressiveFactorial(5))
console.log(recuressiveFactorial(11))