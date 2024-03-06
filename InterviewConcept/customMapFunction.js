Array.prototype.mymap = function(callback){
    const newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}

const sample = [1, 2, 3];
const mapResult = sample.mymap((item)=>{
    return (item * 2);
});

console.log(mapResult)