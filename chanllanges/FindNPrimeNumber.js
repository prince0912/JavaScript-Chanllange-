// Program to print first n prime number:
function nPrimeNumber(num){
    let flag = 0;
 for(let i = 1; i <= num; i++) {
  for(let k = 2; k < i; k++) {
   if(i % k == 0) {
    flag = 1;
    break;
   }
  }
  if(flag === 0) {
   console.log(i)
  }
 }
}

console.log(nPrimeNumber(10))