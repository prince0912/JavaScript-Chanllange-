// Find a duplicate element in a limited range array in javaScript

function findDuplicate(arr){
    const seen = new set();

    for(let i = 0 ; i < arr.length; i++){
        if(seen.has(arr[i])){
            return arr[i] //duplicate find 
        }else{
            seen.add(arr[i]) //
        }
    }
    return -1 // no duplicate element found

}

const array = [1, 2, 3, 4, 5, 3];

console.log(findDuplicate(array))