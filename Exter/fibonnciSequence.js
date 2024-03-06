//give a n number and find the first n element in Fibonacci sequence 

function genFibSec(n){
  let FibSeq = []
  
  if(n=== 0)
  {
    return FibSeq;
  }
  else if (n===1)
  {
    FibSeq.push(0)
    return FibSeq
  }
  else if(n===2)
  {
    FibSeq.push(0,1)
    return FibSeq
  }
  else{
    FibSeq.push(0,1)
    
    for(let i = 2 ; i<n; i++){
      const nextNum = FibSeq[i-1] + FibSeq[i -2]
      FibSeq.push(nextNum)
    }
    
    return FibSeq
  }
  
}


console.log(genFibSec(15))