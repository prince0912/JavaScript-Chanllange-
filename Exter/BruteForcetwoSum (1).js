const BruteForcetwoSum = (Array, target)=>{
  let sum =[]
  
  let prevNum = []
  
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
         if(!!sum.length)
         {
           if(!prevNum.includes(Array[x]) && !prevNum.includes(Array[y]))
           {
             prevNum.push(Array[x])
             sum.push(Array[x], Array[y])
           }
         } else{
           sum.push([Array[x], Array[y]])
           prevNum.push(Array[x])
         }
       }
     }
   }
  
  return sum;
} 

let array = [2, 3, 4, 3, 6, 7]
let sum = 6

console.log(BruteForcetwoSum(array,sum))