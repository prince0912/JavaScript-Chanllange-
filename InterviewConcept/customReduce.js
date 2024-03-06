Array.prototype.myReduce = function(callback, accumulator){
    if(this.length < 1){
        throw new Error("Array is Empty")
    }
    if(!accumulator){
        if(typeof this[0]=== "string"){
            accumulator = ''
        }
        else if(typeof this[0] === "number"){
            accumulator = 0;
        }
    }
    for(let index=0; index < this.length; index++){
        accumulator = callback(accumulator, this[index]);
    }
    return accumulator;
}

const sample = [2, 3, 8, 4, 5]
const result =  sample.myReduce((acc,curr)=>{
    return acc + curr
})

console.log(result)