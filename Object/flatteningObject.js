
const myObj={
    name: "Steve Rogers",
    job: "Avenger",
    id: "1945",
    country: "usa",
    movie: {
           name:"captain america first avenger",
           release:"2011"
          }
}

function flat(obj){
    let newObj ={}
    for(let x in obj){
        if(typeof obj[x]==='object' && obj[x] !==null){
            var flatObject = flat(obj[x])
            for(var y in flatObject ){
                newObj[x+'_'+y] = flatObject[y]
            }
        }else{
            newObj[x] = obj[x]
        }
    }
    return newObj
}
const flatCopyObject = flat(myObj)

console.log(myObj)
console.log(flatCopyObject)