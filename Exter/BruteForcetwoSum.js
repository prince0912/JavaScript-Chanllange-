const BruteForcetwoSum = (Array, target)=>{
  let sum =[]
   if(Array.length < 2)
   {
     return Array
   }
   
   for(let x in Array)
   {
     for(let y in Array)
     {
       if(Array[x]+Array[y] == target)
       {
         sum.push([Array[x], Array[y]])
       }
     }
   }
  
  return sum;
} 

let array = [2, 3, 4, 3, 6, 7]
let sum = 6

console.log(twoSum(array,sum))