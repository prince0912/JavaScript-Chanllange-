Array.prototype.myFilter = function(callback){
    const filterArr = [];
    for(let index = 0; index<this.length; index++){
        if(!!callback(this[index], index, this)){
            filterArr.push(this[index]);
        }
    }
    return filterArr;
}

const sample = [1, 2, 3, 4, 5]
const result =  sample.myFilter((item)=>{
    return (item > 2)
})

console.log(result)