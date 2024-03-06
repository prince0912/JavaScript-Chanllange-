const isBalanced = (input) =>{
  let brackets = "[]{}()<>"
  let stack = []
  
  for(let bracket of input)
  {
    
    let bracketIndex = brackets.indexOf(brackets);
    
    if(bracketIndex % 2 === 0)
    {
      stack.push(bracketIndex + 1)
      
    }
      else{
        if(stack.pop() !== bracketIndex)
        {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
 

console.log(isBalanced('{[<()>]}'))
console.log(isBalanced('()'))



