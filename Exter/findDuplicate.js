
const findDuplicate =(arr)=>{
 const n= arr.length;
 const out = [];
 const obj ={}
 for(let i =0; i<n; i++)
 {
   obj[arr[i]] = 0;
 }
 for(let i in obj)
 {
   if(i>=2)
   {
   out.push(i)
   }
 }
 return out
}



let arr = [ 6, 3, -1, 3, 4, 2, 2, 4, 6, -12, -7 ];

console.log(findDuplicate(arr))