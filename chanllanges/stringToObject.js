// Write a function which converts string input into an object

function convertsStringToObjcet(str){
    try{

        const obj =JSON.parse(str);
        return obj
    }catch(error){
        console.log(`Error parsing string to object ${error}`)
        return null
    }
}

const str = '{"name": "John", "age": 30, "city": "New York"}'
console.log(convertsStringToObjcet(str))