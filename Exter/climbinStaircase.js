function ClimbinStaircase(n){
  
  let step = []
  
  step[0] = 1;
  step[1] = 1;
  
  for(let i=2; i<=n;i++)
  {
    step[i]= step[i-1]+step[i-2]
    
  }
  
  return step
  
}

console.log(ClimbinStaircase(5))