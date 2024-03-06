// factorial of given integer N

const FactOfN = (n) =>{
  let factorial = 1 ;
  
  for (let i = 1 ; i<=n; i++)
  {
     factorial *= i;
  }
  return factorial;
}

console.log(FactOfN(5))
console.log(FactOfN(3))
console.log(FactOfN(10))